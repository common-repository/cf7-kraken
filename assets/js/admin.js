(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CF7_Kraken_Admin =
/*#__PURE__*/
function () {
  function CF7_Kraken_Admin() {
    _classCallCheck(this, CF7_Kraken_Admin);

    this.registerMetaboxes();
  }

  _createClass(CF7_Kraken_Admin, [{
    key: "registerMetaboxes",
    value: function registerMetaboxes() {
      Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./metaboxes/form'));
      }).then(function (module) {
        new module["default"](jQuery);
      });
      Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./metaboxes/mailchimp'));
      }).then(function (module) {
        new module["default"](jQuery);
      });
      Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./metaboxes/webhook'));
      }).then(function (module) {
        new module["default"](jQuery);
      });
    }
  }]);

  return CF7_Kraken_Admin;
}();

new CF7_Kraken_Admin();

},{"./metaboxes/form":3,"./metaboxes/mailchimp":4,"./metaboxes/webhook":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base_Metabox =
/*#__PURE__*/
function () {
  function Base_Metabox($, $metabox) {
    _classCallCheck(this, Base_Metabox);

    this.$ = $;
    this.el = {
      $metabox: $metabox,
      $errors: $metabox.find('.cf7k-metabox-errors')
    };
    this.data = {
      errors: {}
    };
    this.el.$metabox.on('insertError', this.insertError.bind(this));
    this.el.$metabox.on('removeError', this.removeError.bind(this));
  }

  _createClass(Base_Metabox, [{
    key: "insertError",
    value: function insertError(event, error) {
      if (!error) {
        this.renderError();
        return;
      }

      this.data.errors[error.id] = error.text;
      this.renderError();
    }
  }, {
    key: "removeError",
    value: function removeError(event, error) {
      if (!error) {
        this.renderError();
        return;
      }

      delete this.data.errors[error.id];
      this.renderError();
    }
  }, {
    key: "renderError",
    value: function renderError() {
      if (this.data.errors && Object.keys(this.data.errors).length === 0) {
        this.el.$errors.addClass('hidden');
        return;
      }

      this.el.$errors.find('ul').html('');

      for (var error in this.data.errors) {
        this.el.$errors.find('ul').append("<li>".concat(this.data.errors[error], "</li>"));
      }

      this.el.$errors.removeClass('hidden');
    }
  }]);

  return Base_Metabox;
}();

exports["default"] = Base_Metabox;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Form_Metabox =
/*#__PURE__*/
function (_Base_Metabox) {
  _inherits(Form_Metabox, _Base_Metabox);

  function Form_Metabox($) {
    var _this;

    _classCallCheck(this, Form_Metabox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form_Metabox).call(this, $, $('#cf7k_general_settings_metabox')));
    _this.$cf7Id = _this.$('select[name="cf7_id"]');
    _this.$metabox = _this.$('.cf7k-cpt-metabox');
    _this.integrations = ['slack', 'mailchimp', 'webhook'];

    _this.initIntegrations();

    _this.bindEvents();

    return _this;
  }

  _createClass(Form_Metabox, [{
    key: "bindEvents",
    value: function bindEvents() {
      var self = this;
      this.$('.cf7k-color-picker-field').wpColorPicker();
      this.$('.js-cf7k-integrations').change(function () {
        var selectedIntegrations = self.$(this).val();

        if (!selectedIntegrations) {
          selectedIntegrations = [];
        }

        self.integrationsVisibility(selectedIntegrations);
      });
      this.$('.js-cf7k-integrations').on('select2:select', function (e) {
        var data = e.params.data;
        setTimeout(function () {
          document.getElementById('cf7k_' + data.id + '_integration_metabox').scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
        }, 500);
      });
    }
  }, {
    key: "initIntegrations",
    value: function initIntegrations() {
      var self = this;
      var $integrations = this.$('.js-cf7k-integrations');
      $integrations.select2({
        placeholder: 'Select Integration'
      });

      if (this.$cf7Id.length > 0) {
        this.$metabox.find('.integrations-row').removeClass('hidden');
        this.integrationsVisibility($integrations.val() || []);
      }
    }
  }, {
    key: "integrationsVisibility",
    value: function integrationsVisibility(selectedIntegrations) {
      for (var i = 0; i < this.integrations.length; i++) {
        var integration = this.integrations[i];

        if (selectedIntegrations.indexOf(integration) >= 0) {
          this.$('#cf7k_' + integration + '_integration_metabox').show();
        } else {
          this.$('#cf7k_' + integration + '_integration_metabox').hide();
        }
      }
    }
  }]);

  return Form_Metabox;
}(_base["default"]);

exports["default"] = Form_Metabox;

},{"./base":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Mailchimp_Metabox =
/*#__PURE__*/
function (_Base_Metabox) {
  _inherits(Mailchimp_Metabox, _Base_Metabox);

  function Mailchimp_Metabox($) {
    var _this;

    _classCallCheck(this, Mailchimp_Metabox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mailchimp_Metabox).call(this, $, $('#cf7k_mailchimp_integration_metabox')));

    _this.setElements();

    _this.setData();

    _this.bindEvents();

    _this.run();

    return _this;
  }

  _createClass(Mailchimp_Metabox, [{
    key: "setData",
    value: function setData() {
      this.data = this.$.extend(true, this.data, {
        i18n: window.cf7k_admin,
        apiKey: '',
        formFields: [],
        mergeFields: [],
        fieldMapping: [],
        mergeFieldsLoaded: false,
        formFieldsLoaded: false
      });

      if (this.el.$apiKey.length > 0) {
        this.data.apiKey = this.el.$apiKey.val().trim();
      }
    }
  }, {
    key: "setElements",
    value: function setElements() {
      this.el = this.$.extend(this.el, {
        $apiKey: this.el.$metabox.find('input[name="mailchimp[api_key]"]'),
        $audience: this.el.$metabox.find('select[name="mailchimp[audience]"]'),
        $groups: this.el.$metabox.find('select[name="mailchimp[groups][]"]'),
        $doubleOptin: this.el.$metabox.find('input[name="mailchimp[double_optin]"]'),
        $fieldMapping: this.el.$metabox.find('input[name="mailchimp[field_mapping]"]'),
        $addFieldMap: this.el.$metabox.find('.cf7k-cpt-metabox-mailchimp-field-mapping-add button'),
        $cf7Id: this.$('select[name="cf7_id"]')
      });
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.el.$apiKey.blur(function (e) {
        return _this2.onApiKeyChange(e);
      });
      this.el.$apiKey.keyup(function (e) {
        return _this2.onApiKeyChange(e);
      });
      this.el.$audience.change(function (e) {
        return _this2.onAudienceChange(e);
      });
      this.el.$cf7Id.change(function (e) {
        return _this2.createFieldMapping();
      });
      this.el.$addFieldMap.click(function (e) {
        return _this2.addFieldMap();
      });
      this.el.$metabox.on('change', '.cf7k-cpt-metabox-mailchimp-field-mapping-form-field', function (e) {
        return _this2.onFieldMapChange(e, 'form_field');
      });
      this.el.$metabox.on('change', '.cf7k-cpt-metabox-mailchimp-field-mapping-merge-field', function (e) {
        return _this2.onFieldMapChange(e, 'merge_field');
      });
      this.el.$metabox.on('click', '.cf7k-cpt-metabox-mailchimp-field-mapping-row-delete i', function (e) {
        return _this2.deleteFieldMap(e);
      });
    }
  }, {
    key: "run",
    value: function run() {
      if (!this.data.apiKey) {
        return;
      }

      this.getAudience();
    }
  }, {
    key: "onApiKeyChange",
    value: function onApiKeyChange(event) {
      var key = event.target.value;

      if (!key || !key.trim() || key === this.data.apiKey) {
        return;
      }

      this.data.apiKey = key;
      this.resetAudience();
      this.getAudience();
    }
  }, {
    key: "onAudienceChange",
    value: function onAudienceChange(event) {
      this.resetAudienceGroups();
      this.resetDoubleOptin();
      this.resetFieldMapping();

      if (!event.target.value) {
        return;
      }

      this.getAudienceGroups();
      this.getAudienceFields();
      this.getFormFields();
      this.el.$metabox.find('.cf7k-cpt-metabox-mailchimp-field-mapping-row').removeClass('hidden');
      this.el.$doubleOptin.closest('tr').removeClass('hidden');
    }
  }, {
    key: "getAudience",
    value: function getAudience() {
      var _this3 = this;

      this.el.$audience.closest('tr').removeClass('hidden');
      this.el.$audience.siblings('i').removeClass('hidden');
      window.wp.ajax.post('cf7k_mailchimp_get_audience', {
        api_key: this.data.apiKey,
        _ajax_nonce: this.data.i18n.mailchimp.get_audience_nonce
      }).done(function (response) {
        _this3.insertAudience(response.lists);
      });
    }
  }, {
    key: "getAudienceGroups",
    value: function getAudienceGroups() {
      var _this4 = this;

      this.el.$groups.select2({
        placeholder: 'Select Group'
      });
      this.el.$groups.closest('tr').find('.cf7k-spin').removeClass('hidden');
      this.el.$groups.closest('tr').removeClass('hidden');
      window.wp.ajax.post('cf7k_mailchimp_get_audience_groups', {
        api_key: this.data.apiKey,
        list_id: this.el.$audience.val(),
        _ajax_nonce: this.data.i18n.mailchimp.get_audience_groups_nonce
      }).done(function (response) {
        _this4.insertAudienceGroups(response);
      });
    }
  }, {
    key: "getAudienceFields",
    value: function getAudienceFields() {
      var _this5 = this;

      window.wp.ajax.post('cf7k_mailchimp_get_audience_fields', {
        api_key: this.data.apiKey,
        list_id: this.el.$audience.val(),
        _ajax_nonce: this.data.i18n.mailchimp.get_audience_fields_nonce
      }).done(function (response) {
        _this5.data.mergeFieldsLoaded = true;
        _this5.data.mergeFields = response || [];

        _this5.initFieldMapping();
      });
    }
  }, {
    key: "getFormFields",
    value: function getFormFields() {
      var _this6 = this;

      var id = this.el.$cf7Id.val();

      if (!id) {
        return;
      }

      window.wp.ajax.post('cf7k_get_cf7_fields', {
        id: id
      }).done(function (response) {
        _this6.data.formFieldsLoaded = true;
        _this6.data.formFields = response || [];

        _this6.initFieldMapping();
      });
    }
  }, {
    key: "resetAudience",
    value: function resetAudience() {
      this.el.$audience.html('<option value="">- None -</option');
      this.el.$audience.data('value', '');
      this.resetAudienceGroups();
      this.resetDoubleOptin();
      this.resetFieldMapping();
    }
  }, {
    key: "resetAudienceGroups",
    value: function resetAudienceGroups() {
      this.el.$metabox.find('.cf7k-cpt-metabox-mailchimp-groups-row').addClass('hidden');
      this.el.$groups.html('<option value="">- None -</option');
      this.el.$groups.data('value', '');
    }
  }, {
    key: "resetDoubleOptin",
    value: function resetDoubleOptin() {
      this.el.$metabox.find('.cf7k-cpt-metabox-mailchimp-double-optin-row').addClass('hidden');
      this.el.$doubleOptin.prop('checked', false);
    }
  }, {
    key: "resetFieldMapping",
    value: function resetFieldMapping() {
      this.mergeFields = [];
      this.formFields = [];
      this.data.mergeFieldsLoaded = false;
      this.data.formFieldsLoaded = false;
      this.data.fieldMapping = [];
      this.el.$fieldMapping.val('[]');
      this.el.$metabox.find('.cf7k-cpt-metabox-mailchimp-field-mapping-row').addClass('hidden');
      this.$('.cf7k-cpt-metabox-mailchimp-field-mapping').html('');
    }
  }, {
    key: "insertAudience",
    value: function insertAudience(lists) {
      var options = '';
      var value = this.el.$audience.data('value');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var list = _step.value;
          options += "<option value=\"".concat(list.id, "\" ").concat(value === list.id ? 'selected' : '', "> ").concat(list.name, "</option>");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.el.$audience.append(options);
      this.el.$audience.siblings('i').addClass('hidden');

      if (!value) {
        return;
      }

      this.el.$metabox.find('.cf7k-cpt-metabox-mailchimp-groups-row').removeClass('hidden');
      this.el.$metabox.find('.cf7k-cpt-metabox-mailchimp-double-optin-row').removeClass('hidden');
      this.el.$metabox.find('.cf7k-cpt-metabox-mailchimp-field-mapping-row').removeClass('hidden');
      this.getAudienceGroups();
      this.getAudienceFields();
      this.getFormFields();
    }
  }, {
    key: "insertAudienceGroups",
    value: function insertAudienceGroups(groups) {
      var options = '';
      var value = this.el.$groups.data('value') || [];

      for (var id in groups) {
        options += "<option value=\"".concat(id, "\" ").concat(value.indexOf(id) >= 0 ? 'selected' : '', "> ").concat(groups[id], "</option>");
      }

      this.el.$groups.html(options);
      this.el.$groups.closest('tr').find('.cf7k-spin').addClass('hidden');
      this.el.$groups.select2({
        placeholder: 'Select Group'
      });
    }
  }, {
    key: "insertAudienceFields",
    value: function insertAudienceFields(id) {
      var prefix = "cf7k-cpt-metabox-mailchimp-field-mapping";
      var options = '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.data.mergeFields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var field = _step2.value;
          options += "<option value=\"".concat(field.remote_tag, "\"> ").concat(field.remote_tag, "</option>");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.$(".".concat(prefix, " > div[data-id=\"").concat(id, "\"]")).find(".".concat(prefix, "-merge-field select")).append(options);
    }
  }, {
    key: "insertFormFields",
    value: function insertFormFields(id) {
      var prefix = "cf7k-cpt-metabox-mailchimp-field-mapping";
      var options = '';
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.data.formFields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var field = _step3.value;
          options += "<option value=\"".concat(field.name, "\"> ").concat(field.name, "</option>");
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.$(".".concat(prefix, " > div[data-id=\"").concat(id, "\"]")).find(".".concat(prefix, "-form-field select")).append(options);
    }
  }, {
    key: "addFieldMap",
    value: function addFieldMap(fieldMap) {
      var prefix = "cf7k-cpt-metabox-mailchimp-field-mapping";
      var $mapping = this.$('.' + prefix);
      var id = -1;

      if (!fieldMap) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.data.fieldMapping[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _fieldMap = _step4.value;

            if (id < _fieldMap.id) {
              id = _fieldMap.id;
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        id += 1;
      } else {
        id = fieldMap.id;
      }

      var tpl = "\n      <div class=\"".concat(prefix, "-row\" data-id=\"").concat(id, "\">\n        <div class=\"").concat(prefix, "-form-field\"><select><option value=\"\">- None -</option></select></div>\n        <div class=\"").concat(prefix, "-merge-field\"><select><option value=\"\">- None -</option></select></div>\n        <div class=\"").concat(prefix, "-row-delete\"><i class=\"dashicons dashicons-trash\"></i></div>\n      </div>");
      $mapping.append(tpl);
      this.insertFormFields(id);
      this.insertAudienceFields(id);
      this.data.fieldMapping.push(fieldMap || {
        id: id,
        merge_field: '',
        form_field: ''
      });
      this.el.$fieldMapping.val(JSON.stringify(this.data.fieldMapping));
      this.validateFieldMapping();
    }
  }, {
    key: "deleteFieldMap",
    value: function deleteFieldMap(e) {
      var $row = this.$(e.target).closest('.cf7k-cpt-metabox-mailchimp-field-mapping-row');
      var id = $row.data('id');
      this.data.fieldMapping = _.without(this.data.fieldMapping, _.findWhere(this.data.fieldMapping, {
        id: id
      }));
      $row.remove();

      if (this.data.fieldMapping.length === 0) {
        this.el.$metabox.trigger('insertError', {
          id: 'fieldMapping',
          text: this.data.i18n.mailchimp.email_field_mapping
        });
      }

      this.el.$fieldMapping.val(JSON.stringify(this.data.fieldMapping));
      this.validateFieldMapping();
    }
  }, {
    key: "onFieldMapChange",
    value: function onFieldMapChange(e, field) {
      var id = this.$(e.target).closest('.cf7k-cpt-metabox-mailchimp-field-mapping-row').data('id');

      var fieldMap = _.find(this.data.fieldMapping, {
        id: id
      });

      fieldMap[field] = e.target.value;
      this.el.$fieldMapping.val(JSON.stringify(this.data.fieldMapping));
      this.validateFieldMapping();
    }
  }, {
    key: "initFieldMapping",
    value: function initFieldMapping() {
      if (!this.data.formFieldsLoaded || !this.data.mergeFieldsLoaded) {
        return;
      }

      this.$('.cf7k-cpt-metabox-mailchimp-field-mapping-row i.cf7k-spin').addClass('hidden').siblings('*').removeClass('hidden');
      var prefix = 'cf7k-cpt-metabox-mailchimp-field-mapping';
      var fieldMapping = JSON.parse(this.el.$fieldMapping.val() || '[]');
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = fieldMapping[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var fieldMap = _step5.value;
          this.addFieldMap(fieldMap);
          this.$(".".concat(prefix, " > div[data-id=\"").concat(fieldMap.id, "\"]")).find(".".concat(prefix, "-merge-field select")).val(fieldMap.merge_field);
          this.$(".".concat(prefix, " > div[data-id=\"").concat(fieldMap.id, "\"]")).find(".".concat(prefix, "-form-field select")).val(fieldMap.form_field);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      this.validateFieldMapping();
    }
  }, {
    key: "validateFieldMapping",
    value: function validateFieldMapping() {
      var hasEmailMapping = !(this.data.fieldMapping.length === 0);
      hasEmailMapping = hasEmailMapping && _.findWhere(this.data.fieldMapping, {
        merge_field: 'EMAIL'
      });

      if (hasEmailMapping) {
        this.el.$metabox.trigger('removeError', {
          id: 'fieldMapping'
        });
        return;
      }

      this.el.$metabox.trigger('insertError', {
        id: 'fieldMapping',
        text: this.data.i18n.mailchimp.email_field_mapping
      });
    }
  }]);

  return Mailchimp_Metabox;
}(_base["default"]);

exports["default"] = Mailchimp_Metabox;

},{"./base":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Webhook_Metabox =
/*#__PURE__*/
function (_Base_Metabox) {
  _inherits(Webhook_Metabox, _Base_Metabox);

  function Webhook_Metabox($) {
    var _this;

    _classCallCheck(this, Webhook_Metabox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Webhook_Metabox).call(this, $, $('#cf7k_webhook_integration_metabox')));

    _this.setElements();

    _this.setData();

    _this.bindEvents();

    _this.run();

    return _this;
  }

  _createClass(Webhook_Metabox, [{
    key: "setData",
    value: function setData() {
      this.data = this.$.extend(true, this.data, {
        i18n: window.cf7k_admin,
        formFields: [],
        mergeFields: [],
        fieldMapping: [],
        formFieldsLoaded: false
      });
    }
  }, {
    key: "setElements",
    value: function setElements() {
      this.el = this.$.extend(this.el, {
        $fieldMapping: this.el.$metabox.find('input[name="webhook[field_mapping]"]'),
        $addFieldMap: this.el.$metabox.find('.cf7k-cpt-metabox-webhook-field-mapping-add button'),
        $cf7Id: this.$('select[name="cf7_id"]')
      });
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.el.$cf7Id.change(function (e) {
        return _this2.createFieldMapping();
      });
      this.el.$addFieldMap.click(function (e) {
        return _this2.addFieldMap();
      });
      this.el.$metabox.on('change', '.cf7k-cpt-metabox-webhook-field-mapping-form-field', function (e) {
        return _this2.onFieldMapChange(e, 'form_field');
      });
      this.el.$metabox.on('change', '.cf7k-cpt-metabox-webhook-field-mapping-merge-field', function (e) {
        return _this2.onFieldMapChange(e, 'merge_field');
      });
      this.el.$metabox.on('click', '.cf7k-cpt-metabox-webhook-field-mapping-row-delete i', function (e) {
        return _this2.deleteFieldMap(e);
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.getFormFields();
    }
  }, {
    key: "getFormFields",
    value: function getFormFields() {
      var _this3 = this;

      var id = this.el.$cf7Id.val();

      if (!id) {
        return;
      }

      window.wp.ajax.post('cf7k_get_cf7_fields', {
        id: id
      }).done(function (response) {
        _this3.data.formFieldsLoaded = true;
        _this3.data.formFields = response || [];

        _this3.initFieldMapping();

        _this3.el.$metabox.find('.cf7k-cpt-metabox-webhook-field-mapping-row').removeClass('hidden');
      });
    }
  }, {
    key: "resetFieldMapping",
    value: function resetFieldMapping() {
      this.mergeFields = [];
      this.formFields = [];
      this.data.mergeFieldsLoaded = false;
      this.data.formFieldsLoaded = false;
      this.data.fieldMapping = [];
      this.el.$fieldMapping.val('[]');
      this.el.$metabox.find('.cf7k-cpt-metabox-webhook-field-mapping-row').addClass('hidden');
      this.$('.cf7k-cpt-metabox-webhook-field-mapping').html('');
    }
  }, {
    key: "insertFormFields",
    value: function insertFormFields(id) {
      var prefix = "cf7k-cpt-metabox-webhook-field-mapping";
      var options = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.data.formFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;
          options += "<option value=\"".concat(field.name, "\"> ").concat(field.name, "</option>");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$(".".concat(prefix, " > div[data-id=\"").concat(id, "\"]")).find(".".concat(prefix, "-form-field select")).append(options);
    }
  }, {
    key: "addFieldMap",
    value: function addFieldMap(fieldMap) {
      var prefix = "cf7k-cpt-metabox-webhook-field-mapping";
      var $mapping = this.$('.' + prefix);
      var id = -1;

      if (!fieldMap) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.data.fieldMapping[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _fieldMap = _step2.value;

            if (id < _fieldMap.id) {
              id = _fieldMap.id;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        id += 1;
      } else {
        id = fieldMap.id;
      }

      var tpl = "\n      <div class=\"".concat(prefix, "-row\" data-id=\"").concat(id, "\">\n        <div class=\"").concat(prefix, "-form-field\"><select><option value=\"\">- None -</option></select></div>\n        <div class=\"").concat(prefix, "-merge-field\"><input value=\"\"></div>\n        <div class=\"").concat(prefix, "-row-delete\"><i class=\"dashicons dashicons-trash\"></i></div>\n      </div>");
      $mapping.append(tpl);
      this.insertFormFields(id);
      this.data.fieldMapping.push(fieldMap || {
        id: id,
        merge_field: '',
        form_field: ''
      });
      this.el.$fieldMapping.val(JSON.stringify(this.data.fieldMapping));
    }
  }, {
    key: "deleteFieldMap",
    value: function deleteFieldMap(e) {
      var $row = this.$(e.target).closest('.cf7k-cpt-metabox-webhook-field-mapping-row');
      var id = $row.data('id');
      this.data.fieldMapping = _.without(this.data.fieldMapping, _.findWhere(this.data.fieldMapping, {
        id: id
      }));
      $row.remove();
      this.el.$fieldMapping.val(JSON.stringify(this.data.fieldMapping));
    }
  }, {
    key: "onFieldMapChange",
    value: function onFieldMapChange(e, field) {
      var id = this.$(e.target).closest('.cf7k-cpt-metabox-webhook-field-mapping-row').data('id');

      var fieldMap = _.find(this.data.fieldMapping, {
        id: id
      });

      fieldMap[field] = e.target.value;
      this.el.$fieldMapping.val(JSON.stringify(this.data.fieldMapping));
    }
  }, {
    key: "initFieldMapping",
    value: function initFieldMapping() {
      if (!this.data.formFieldsLoaded) {
        return;
      }

      this.$('.cf7k-cpt-metabox-webhook-field-mapping-row i.cf7k-spin').addClass('hidden').siblings('*').removeClass('hidden');
      var prefix = 'cf7k-cpt-metabox-webhook-field-mapping';
      var fieldMapping = JSON.parse(this.el.$fieldMapping.val() || '[]');
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = fieldMapping[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var fieldMap = _step3.value;
          this.addFieldMap(fieldMap);
          this.$(".".concat(prefix, " > div[data-id=\"").concat(fieldMap.id, "\"]")).find(".".concat(prefix, "-merge-field input")).val(fieldMap.merge_field);
          this.$(".".concat(prefix, " > div[data-id=\"").concat(fieldMap.id, "\"]")).find(".".concat(prefix, "-form-field select")).val(fieldMap.form_field);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }]);

  return Webhook_Metabox;
}(_base["default"]);

exports["default"] = Webhook_Metabox;

},{"./base":2}]},{},[1]);
