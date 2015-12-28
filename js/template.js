/* Generated by Opal 0.8.0 */
Opal.modules["template"] = function(Opal) {
  Opal.dynamic_require_severity = "warning";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $hash2 = Opal.hash2;

  Opal.add_stubs(['$[]', '$[]=', '$keys', '$attr_reader', '$instance_exec', '$to_proc', '$new', '$<<', '$join']);
  return (function($base, $super) {
    function $Template(){};
    var self = $Template = $klass($base, $super, 'Template', $Template);

    var def = self.$$proto, $scope = self.$$scope, TMP_1;

    def.name = def.body = nil;
    self._cache = $hash2([], {});

    Opal.defs(self, '$[]', function(name) {
      var $a, self = this;
      if (self._cache == null) self._cache = nil;

      return ((($a = self._cache['$[]'](name)) !== false && $a !== nil) ? $a : self._cache['$[]']("templates/" + (name)));
    });

    Opal.defs(self, '$[]=', function(name, instance) {
      var self = this;
      if (self._cache == null) self._cache = nil;

      return self._cache['$[]='](name, instance);
    });

    Opal.defs(self, '$paths', function() {
      var self = this;
      if (self._cache == null) self._cache = nil;

      return self._cache.$keys();
    });

    self.$attr_reader("body");

    def.$initialize = TMP_1 = function(name) {
      var $a, self = this, $iter = TMP_1.$$p, body = $iter || nil;

      TMP_1.$$p = null;
      $a = [name, body], self.name = $a[0], self.body = $a[1];
      return $scope.get('Template')['$[]='](name, self);
    };

    def.$inspect = function() {
      var self = this;

      return "#<Template: '" + (self.name) + "'>";
    };

    def.$render = function(ctx) {
      var $a, $b, self = this;

      if (ctx == null) {
        ctx = self
      }
      return ($a = ($b = ctx).$instance_exec, $a.$$p = self.body.$to_proc(), $a).call($b, $scope.get('OutputBuffer').$new());
    };

    return (function($base, $super) {
      function $OutputBuffer(){};
      var self = $OutputBuffer = $klass($base, $super, 'OutputBuffer', $OutputBuffer);

      var def = self.$$proto, $scope = self.$$scope;

      def.buffer = nil;
      def.$initialize = function() {
        var self = this;

        return self.buffer = [];
      };

      def.$append = function(str) {
        var self = this;

        return self.buffer['$<<'](str);
      };

      Opal.defn(self, '$append=', def.$append);

      return (def.$join = function() {
        var self = this;

        return self.buffer.$join();
      }, nil) && 'join';
    })(self, null);
  })(self, null)
};
