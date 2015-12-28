/* Generated by Opal 0.8.1 */
(function(Opal) {
  Opal.dynamic_require_severity = "error";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $hash2 = Opal.hash2;

  Opal.add_stubs(['$record_url', '$as_json', '$post', '$ok?', '$load', '$new', '$body', '$trigger', '$class', '$did_create', '$all', '$trigger_events', '$call', '$put', '$load_json', '$did_update', '$delete', '$did_destroy', '$fetch', '$merge', '$get', '$map', '$respond_to?', '$to_url', '$url', '$id', '$raise']);
  (function($base) {
    var self = $module($base, 'Vienna');

    var def = self.$$proto, $scope = self.$$scope;

    (function($base, $super) {
      function $Model(){};
      var self = $Model = $klass($base, $super, 'Model', $Model);

      var def = self.$$proto, $scope = self.$$scope;

      return (Opal.defs(self, '$url', function(url) {
        var self = this;
        if (self.url == null) self.url = nil;

        if (url == null) {
          url = nil
        }
        if (url !== false && url !== nil) {
          return self.url = url
          } else {
          return self.url
        };
      }), nil) && 'url'
    })(self, null)
  })(self);
  return (function($base) {
    var self = $module($base, 'Vienna');

    var def = self.$$proto, $scope = self.$$scope;

    (function($base, $super) {
      function $RESTAdapter(){};
      var self = $RESTAdapter = $klass($base, $super, 'RESTAdapter', $RESTAdapter);

      var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_3, TMP_5, TMP_7;

      def.$create_record = TMP_1 = function(record) {
        var $a, $b, TMP_2, self = this, $iter = TMP_1.$$p, block = $iter || nil, url = nil, options = nil;

        TMP_1.$$p = null;
        url = self.$record_url(record);
        options = $hash2(["dataType", "payload"], {"dataType": "json", "payload": record.$as_json()});
        ($a = ($b = $scope.get('HTTP')).$post, $a.$$p = (TMP_2 = function(response){var self = TMP_2.$$s || this, $a;
if (response == null) response = nil;
        if ((($a = response['$ok?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
            record.$load($scope.get('Hash').$new(response.$body()));
            record.$class().$trigger("ajax_success", response);
            record.$did_create();
            return record.$class().$trigger("change", record.$class().$all());
            } else {
            return record.$trigger_events("ajax_error", response)
          }}, TMP_2.$$s = self, TMP_2), $a).call($b, url, options);
        if (block !== false && block !== nil) {
          return block.$call(record)
          } else {
          return nil
        };
      };

      def.$update_record = TMP_3 = function(record) {
        var $a, $b, TMP_4, self = this, $iter = TMP_3.$$p, block = $iter || nil, url = nil, options = nil;

        TMP_3.$$p = null;
        url = self.$record_url(record);
        options = $hash2(["dataType", "payload"], {"dataType": "json", "payload": record.$as_json()});
        ($a = ($b = $scope.get('HTTP')).$put, $a.$$p = (TMP_4 = function(response){var self = TMP_4.$$s || this, $a;
if (response == null) response = nil;
        if ((($a = response['$ok?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
            record.$class().$load_json(response.$body());
            record.$class().$trigger("ajax_success", response);
            record.$did_update();
            return record.$class().$trigger("change", record.$class().$all());
            } else {
            return record.$trigger_events("ajax_error", response)
          }}, TMP_4.$$s = self, TMP_4), $a).call($b, url, options);
        if (block !== false && block !== nil) {
          return block.$call(record)
          } else {
          return nil
        };
      };

      def.$delete_record = TMP_5 = function(record) {
        var $a, $b, TMP_6, self = this, $iter = TMP_5.$$p, block = $iter || nil, options = nil, url = nil;

        TMP_5.$$p = null;
        options = $hash2(["dataType"], {"dataType": "json"});
        url = self.$record_url(record);
        ($a = ($b = $scope.get('HTTP')).$delete, $a.$$p = (TMP_6 = function(response){var self = TMP_6.$$s || this, $a;
if (response == null) response = nil;
        if ((($a = response['$ok?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
            record.$did_destroy();
            record.$class().$trigger("ajax_success", response);
            return record.$class().$trigger("change", record.$class().$all());
            } else {
            return record.$class().$trigger("ajax_error", response)
          }}, TMP_6.$$s = self, TMP_6), $a).call($b, url, options);
        if (block !== false && block !== nil) {
          return block.$call(record)
          } else {
          return nil
        };
      };

      def.$find = function(record, id) {
        var self = this;

        return nil;
      };

      def.$fetch = TMP_7 = function(model, options) {
        var $a, $b, TMP_8, self = this, $iter = TMP_7.$$p, block = $iter || nil, id = nil, params = nil, url = nil;

        if (options == null) {
          options = $hash2([], {})
        }
        TMP_7.$$p = null;
        id = options.$fetch("id", nil);
        params = options.$fetch("params", nil);
        url = (function() {if (id !== false && id !== nil) {
          return "" + (self.$record_url(model)) + "/" + (id)
          } else {
          return self.$record_url(model)
        }; return nil; })();
        options = $hash2(["dataType", "data"], {"dataType": "json", "data": params}).$merge(options);
        ($a = ($b = $scope.get('HTTP')).$get, $a.$$p = (TMP_8 = function(response){var self = TMP_8.$$s || this, $a, $b, TMP_9;
if (response == null) response = nil;
        if ((($a = response['$ok?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
            ($a = ($b = response.$body()).$map, $a.$$p = (TMP_9 = function(json){var self = TMP_9.$$s || this;
if (json == null) json = nil;
            return model.$load_json(json)}, TMP_9.$$s = self, TMP_9), $a).call($b);
            model.$trigger("ajax_success", response);
            return model.$trigger("refresh", model.$all());
            } else {
            return model.$trigger("ajax_error", response)
          }}, TMP_8.$$s = self, TMP_8), $a).call($b, url, options);
        if (block !== false && block !== nil) {
          return block.$call(model.$all())
          } else {
          return nil
        };
      };

      return (def.$record_url = function(record) {
        var $a, self = this, klass_url = nil;

        if ((($a = record['$respond_to?']("to_url")) !== nil && (!$a.$$is_boolean || $a == true))) {
          return record.$to_url()};
        if ((($a = record['$respond_to?']("url")) !== nil && (!$a.$$is_boolean || $a == true))) {
          return record.$url()};
        if ((($a = klass_url = record.$class().$url()) !== nil && (!$a.$$is_boolean || $a == true))) {
          return "" + (klass_url) + "/" + (record.$id())};
        return self.$raise("Model does not define REST url: " + (record));
      }, nil) && 'record_url';
    })(self, $scope.get('Adapter'))
  })(self);
})(Opal);
