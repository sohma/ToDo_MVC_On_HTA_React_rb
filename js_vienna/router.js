/* Generated by Opal 0.8.1 */
(function(Opal) {
  Opal.dynamic_require_severity = "error";
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $gvars = Opal.gvars, $range = Opal.range, $hash2 = Opal.hash2;

  Opal.add_stubs(['$require', '$attr_reader', '$location', '$addEventListener', '$lambda', '$update', '$instance_eval', '$to_proc', '$new', '$<<', '$empty?', '$hash', '$sub', '$match', '$find', '$hash=', '$escape', '$gsub', '$[]', '$each_with_index', '$[]=', '$call']);
  self.$require("native");
  return (function($base) {
    var self = $module($base, 'Vienna');

    var def = self.$$proto, $scope = self.$$scope;

    (function($base, $super) {
      function $Router(){};
      var self = $Router = $klass($base, $super, 'Router', $Router);

      var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_3;

      def.routes = def.location = def.path = nil;
      self.$attr_reader("path", "routes");

      def.$initialize = TMP_1 = function() {
        var $a, $b, TMP_2, $c, self = this, $iter = TMP_1.$$p, block = $iter || nil;
        if ($gvars.global == null) $gvars.global = nil;

        TMP_1.$$p = null;
        self.routes = [];
        self.location = $gvars.global.$location();
        $gvars.global.$addEventListener("hashchange", ($a = ($b = self).$lambda, $a.$$p = (TMP_2 = function(){var self = TMP_2.$$s || this;

        return self.$update()}, TMP_2.$$s = self, TMP_2), $a).call($b), false);
        if (block !== false && block !== nil) {
          return ($a = ($c = self).$instance_eval, $a.$$p = block.$to_proc(), $a).call($c)
          } else {
          return nil
        };
      };

      def.$route = TMP_3 = function(path) {
        var $a, $b, self = this, $iter = TMP_3.$$p, handler = $iter || nil, route = nil;

        TMP_3.$$p = null;
        route = ($a = ($b = $scope.get('Route')).$new, $a.$$p = handler.$to_proc(), $a).call($b, path);
        self.routes['$<<'](route);
        return route;
      };

      def.$update = function() {
        var $a, self = this;

        self.path = (function() {if ((($a = self.location.$hash()['$empty?']()) !== nil && (!$a.$$is_boolean || $a == true))) {
          return "/"
          } else {
          return self.location.$hash().$sub(/^#*/, "")
        }; return nil; })();
        return self.$match(self.path);
      };

      def.$match = function(path) {
        var $a, $b, TMP_4, self = this;

        return ($a = ($b = self.routes).$find, $a.$$p = (TMP_4 = function(r){var self = TMP_4.$$s || this;
if (r == null) r = nil;
        return r.$match(path)}, TMP_4.$$s = self, TMP_4), $a).call($b);
      };

      def.$navigate = function(path) {
        var $a, $b, self = this;

        return (($a = ["#" + (path)]), $b = self.location, $b['$hash='].apply($b, $a), $a[$a.length-1]);
      };

      return (function($base, $super) {
        function $Route(){};
        var self = $Route = $klass($base, $super, 'Route', $Route);

        var def = self.$$proto, $scope = self.$$scope, TMP_5;

        def.regexp = def.named = def.handler = nil;
        Opal.cdecl($scope, 'NAMED', /:(\w+)/);

        Opal.cdecl($scope, 'SPLAT', /\\\*(\w+)/);

        Opal.cdecl($scope, 'OPTIONAL', /\\\((.*?)\\\)/);

        self.$attr_reader("regexp", "named");

        def.$initialize = TMP_5 = function(pattern) {
          var $a, $b, TMP_6, $c, TMP_7, self = this, $iter = TMP_5.$$p, handler = $iter || nil;

          TMP_5.$$p = null;
          $a = [[], handler], self.named = $a[0], self.handler = $a[1];
          pattern = $scope.get('Regexp').$escape(pattern);
          pattern = pattern.$gsub($scope.get('OPTIONAL'), "(?:$1)?");
          ($a = ($b = pattern).$gsub, $a.$$p = (TMP_6 = function(m){var self = TMP_6.$$s || this;
            if (self.named == null) self.named = nil;
if (m == null) m = nil;
          return self.named['$<<'](m['$[]']($range(1, -1, false)))}, TMP_6.$$s = self, TMP_6), $a).call($b, $scope.get('NAMED'));
          ($a = ($c = pattern).$gsub, $a.$$p = (TMP_7 = function(m){var self = TMP_7.$$s || this;
            if (self.named == null) self.named = nil;
if (m == null) m = nil;
          return self.named['$<<'](m['$[]']($range(2, -1, false)))}, TMP_7.$$s = self, TMP_7), $a).call($c, $scope.get('SPLAT'));
          pattern = pattern.$gsub($scope.get('NAMED'), "([^\\/]*)");
          pattern = pattern.$gsub($scope.get('SPLAT'), "(.*?)");
          return self.regexp = $scope.get('Regexp').$new("^" + (pattern) + "$");
        };

        return (def.$match = function(path) {
          var $a, $b, TMP_8, self = this, match = nil, params = nil;

          if ((($a = match = self.regexp.$match(path)) !== nil && (!$a.$$is_boolean || $a == true))) {
            params = $hash2([], {});
            ($a = ($b = self.named).$each_with_index, $a.$$p = (TMP_8 = function(name, i){var self = TMP_8.$$s || this;
if (name == null) name = nil;if (i == null) i = nil;
            return params['$[]='](name, match['$[]']($rb_plus(i, 1)))}, TMP_8.$$s = self, TMP_8), $a).call($b);
            if ((($a = self.handler) !== nil && (!$a.$$is_boolean || $a == true))) {
              self.handler.$call(params)};
            return true;};
          return false;
        }, nil) && 'match';
      })(self, null);
    })(self, null)
  })(self);
})(Opal);
