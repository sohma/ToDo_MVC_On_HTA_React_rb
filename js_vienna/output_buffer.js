/* Generated by Opal 0.8.1 */
(function(Opal) {
  Opal.dynamic_require_severity = "error";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass;

  Opal.add_stubs(['$require', '$join']);
  self.$require("template");
  return (function($base) {
    var self = $module($base, 'Vienna');

    var def = self.$$proto, $scope = self.$$scope;

    (function($base, $super) {
      function $OutputBuffer(){};
      var self = $OutputBuffer = $klass($base, $super, 'OutputBuffer', $OutputBuffer);

      var def = self.$$proto, $scope = self.$$scope, TMP_1;

      def.buffer = nil;
      return (def.$capture = TMP_1 = function(args) {
        var self = this, $iter = TMP_1.$$p, block = $iter || nil, old = nil, tmp = nil;

        args = $slice.call(arguments, 0);
        TMP_1.$$p = null;
        old = self.buffer;
        tmp = self.buffer = [];
        if ((block !== nil)) {
          if (Opal.yieldX(block, [].concat(args)) === $breaker) return $breaker.$v};
        self.buffer = old;
        return tmp.$join();
      }, nil) && 'capture'
    })(self, (($scope.get('Template')).$$scope.get('OutputBuffer')))
  })(self);
})(Opal);
