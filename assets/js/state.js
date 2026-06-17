(function () {
  'use strict';

  window.ChefScrapbook = window.ChefScrapbook || {};

  var STORAGE_KEY = 'chef-scrapbook-v1';

  function _getValidSlugs() {
    var CS = window.ChefScrapbook;
    if (!CS.data || !Array.isArray(CS.data.recipes)) return {};
    var map = {};
    for (var i = 0; i < CS.data.recipes.length; i++) {
      map[CS.data.recipes[i].slug] = true;
    }
    return map;
  }

  function _sanitizeMenuPlan(plan) {
    if (!plan || typeof plan !== 'object') return {};
    var valid = _getValidSlugs();
    var clean = {};
    var keys = Object.keys(plan);
    for (var i = 0; i < keys.length; i++) {
      var val = plan[keys[i]];
      if (val && typeof val === 'string' && valid[val]) {
        clean[keys[i]] = val;
      }
      /* null, undefined, texto libre, slug inexistente → se descarta */
    }
    return clean;
  }

  var _defaultState = {
    favorites:    [],
    menuPlan:     {},
    shoppingList: [],
    prepTasks:    [],
    preferences:  { lastView: 'inicio' }
  };

  function _clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function _load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return _clone(_defaultState);
      var s = JSON.parse(raw);
      return {
        favorites:    Array.isArray(s.favorites)    ? s.favorites    : [],
        menuPlan:     _sanitizeMenuPlan((s.menuPlan && typeof s.menuPlan === 'object') ? s.menuPlan : {}),
        shoppingList: Array.isArray(s.shoppingList) ? s.shoppingList : [],
        prepTasks:    Array.isArray(s.prepTasks)    ? s.prepTasks    : [],
        preferences:  (s.preferences && typeof s.preferences === 'object') ? s.preferences : { lastView: 'inicio' }
      };
    } catch (e) {
      return _clone(_defaultState);
    }
  }

  function _save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* cuota excedida o modo privado */ }
  }

  var _state = _load();
  var _subscribers = [];

  function _notify(key) {
    for (var i = 0; i < _subscribers.length; i++) {
      try { _subscribers[i](key, _state); } catch (e) {}
    }
  }

  window.ChefScrapbook.State = {

    get: function (key) {
      return key ? _state[key] : _state;
    },

    subscribe: function (fn) {
      _subscribers.push(fn);
    },

    /* ── Favoritos ── */

    isFavorite: function (id) {
      return _state.favorites.indexOf(id) !== -1;
    },

    toggleFavorite: function (id) {
      var idx = _state.favorites.indexOf(id);
      if (idx === -1) {
        _state.favorites.push(id);
      } else {
        _state.favorites.splice(idx, 1);
      }
      _save(_state);
      _notify('favorites');
      return idx === -1; // true = agregado
    },

    /* ── Plan de menú ── */

    getMenuSlot: function (key) {
      return _state.menuPlan[key] || null;
    },

    setMenuSlot: function (key, slug) {
      var valid = _getValidSlugs();
      if (slug && typeof slug === 'string' && valid[slug]) {
        _state.menuPlan[key] = slug;
      } else {
        delete _state.menuPlan[key];
      }
      _save(_state);
      _notify('menuPlan');
    },

    clearMenuSlot: function (key) {
      delete _state.menuPlan[key];
      _save(_state);
      _notify('menuPlan');
    },

    getMenuPlan: function () {
      return _state.menuPlan;
    },

    getMenuShoppingItems: function () {
      var CS = window.ChefScrapbook;
      if (!CS.data) return [];
      var counts = {};
      var keys = Object.keys(_state.menuPlan);
      for (var i = 0; i < keys.length; i++) {
        var slug = _state.menuPlan[keys[i]];
        if (slug) counts[slug] = (counts[slug] || 0) + 1;
      }
      var items = [];
      var slugs = Object.keys(counts);
      for (var j = 0; j < slugs.length; j++) {
        var recipe = CS.data.getBySlug(slugs[j]);
        if (!recipe || !Array.isArray(recipe.shoppingItems)) continue;
        var n = counts[slugs[j]];
        for (var k = 0; k < recipe.shoppingItems.length; k++) {
          var si = recipe.shoppingItems[k];
          var label = si.item + ' — ' + (si.qty * n) + ' ' + si.unit;
          if (n > 1) label += ' (\xd7' + n + ' prep.)';
          items.push({ label: label, category: si.category });
        }
      }
      return items;
    },

    /* ── Lista de compras ── */

    getShoppingList: function () {
      return _state.shoppingList.slice();
    },

    addShoppingItem: function (label) {
      var clean = String(label).trim().slice(0, 100);
      if (!clean) return;
      _state.shoppingList.push({ id: Date.now(), label: clean, checked: false });
      _save(_state);
      _notify('shoppingList');
    },

    toggleShoppingItem: function (id) {
      for (var i = 0; i < _state.shoppingList.length; i++) {
        if (_state.shoppingList[i].id === id) {
          _state.shoppingList[i].checked = !_state.shoppingList[i].checked;
          break;
        }
      }
      _save(_state);
      _notify('shoppingList');
    },

    removeShoppingItem: function (id) {
      _state.shoppingList = _state.shoppingList.filter(function (x) { return x.id !== id; });
      _save(_state);
      _notify('shoppingList');
    },

    clearShoppingList: function () {
      _state.shoppingList = [];
      _save(_state);
      _notify('shoppingList');
    },

    /* ── Tareas de cocina ── */

    getPrepTasks: function () {
      return _state.prepTasks.slice();
    },

    addPrepTask: function (label) {
      var clean = String(label).trim().slice(0, 100);
      if (!clean) return;
      _state.prepTasks.push({ id: Date.now(), label: clean, checked: false });
      _save(_state);
      _notify('prepTasks');
    },

    togglePrepTask: function (id) {
      for (var i = 0; i < _state.prepTasks.length; i++) {
        if (_state.prepTasks[i].id === id) {
          _state.prepTasks[i].checked = !_state.prepTasks[i].checked;
          break;
        }
      }
      _save(_state);
      _notify('prepTasks');
    },

    removePrepTask: function (id) {
      _state.prepTasks = _state.prepTasks.filter(function (x) { return x.id !== id; });
      _save(_state);
      _notify('prepTasks');
    },

    /* ── Preferencias ── */

    setPreference: function (key, value) {
      _state.preferences[key] = value;
      _save(_state);
    },

    getPreference: function (key) {
      return _state.preferences[key];
    }
  };

})();
