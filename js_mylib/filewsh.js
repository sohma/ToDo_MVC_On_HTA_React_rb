/* Generated by Opal 0.8.1 */
(function(Opal) {
  Opal.dynamic_require_severity = "error";
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$each', '$to_s']);
  Opal.Object.$$proto.$puts = function(ary) {
    var $a, $b, TMP_1, self = this, tmp = nil;

    ary = $slice.call(arguments, 0);
    tmp = "";
    ($a = ($b = ary).$each, $a.$$p = (TMP_1 = function(a){var self = TMP_1.$$s || this;
if (a == null) a = nil;
    return tmp = $rb_plus(tmp, a.$to_s())}, TMP_1.$$s = self, TMP_1), $a).call($b);
    return WScript.Echo(tmp);
  };
  return (Opal.Object.$$proto.$print = function(ary) {
    var $a, $b, TMP_2, self = this, tmp = nil;

    ary = $slice.call(arguments, 0);
    tmp = "";
    ($a = ($b = ary).$each, $a.$$p = (TMP_2 = function(a){var self = TMP_2.$$s || this;
if (a == null) a = nil;
    return tmp = $rb_plus(tmp, a.$to_s())}, TMP_2.$$s = self, TMP_2), $a).call($b);
    return WScript.Echo(tmp);
  }, nil) && 'print';
})(Opal);
/* Generated by Opal 0.8.1 */
(function(Opal) {
  Opal.dynamic_require_severity = "error";
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $range = Opal.range;

  Opal.add_stubs(['$call', '$lambda', '$buildFileObject', '$extend', '$join', '$compact', '$split', '$==', '$first', '$[]=', '$home', '$each', '$pop', '$<<', '$[]', '$puts', '$gsub', '$new', '$close', '$directory?', '$glob_files', '$glob_dirs']);
  (function($base) {
    var self = $module($base, 'FileTest');

    var def = self.$$proto, $scope = self.$$scope;

    Opal.cdecl($scope, 'Separator', Opal.cdecl($scope, 'SEPARATOR', "/"));

    Opal.cdecl($scope, 'ALT_SEPARATOR', nil);

    Opal.cdecl($scope, 'PATH_SEPARATOR', ":");

    Opal.defn(self, '$buildFileObject', function() {
      var self = this;

      return new ActiveXObject("Scripting.FileSystemObject");
    });

    Opal.defn(self, '$folder?', function(file) {
      var $a, $b, TMP_1, self = this, rs = nil;

      rs = false;
      ($a = ($b = self).$lambda, $a.$$p = (TMP_1 = function(){var self = TMP_1.$$s || this;

      
        rs = self.$buildFileObject().FolderExists(file)
      ;}, TMP_1.$$s = self, TMP_1), $a).call($b).$call();
      return rs;
    });

    Opal.defn(self, '$directory?', def['$folder?']);

    Opal.defn(self, '$exist?', function(file_path) {
      var $a, $b, TMP_2, self = this, rs = nil;

      rs = false;
      ($a = ($b = self).$lambda, $a.$$p = (TMP_2 = function(){var self = TMP_2.$$s || this;

      
      rs = self.$buildFileObject().FileExists(file_path);
    ;}, TMP_2.$$s = self, TMP_2), $a).call($b).$call();
      return rs;
    });

    Opal.defn(self, '$exists?', def['$exist?']);
  })(self);
  (function($base, $super) {
    function $FileWsh(){};
    var self = $FileWsh = $klass($base, $super, 'FileWsh', $FileWsh);

    var def = self.$$proto, $scope = self.$$scope;

    def.fd = def.AD_TYPE_TEXT = def.AD_MODE_READ_WRITE = def.mode = def.file_name = def.AD_READ_ALL = def.AD_WRITE_LINE = def.AD_SAVE_CREATE_OVER_WRITE = nil;
    self.$extend($scope.get('FileTest'));

    (function(self) {
      var $scope = self.$$scope, def = self.$$proto, TMP_4;

      self.$$proto.$expand_path = function(path, basedir) {
        var $a, $b, TMP_3, self = this, parts = nil, new_parts = nil;

        if (basedir == null) {
          basedir = nil
        }
        path = [basedir, path].$compact().$join($scope.get('SEPARATOR'));
        parts = path.$split($scope.get('SEPARATOR'));
        new_parts = [];
        if (parts.$first()['$==']("~")) {
          parts['$[]='](0, $scope.get('Dir').$home())};
        ($a = ($b = parts).$each, $a.$$p = (TMP_3 = function(part){var self = TMP_3.$$s || this;
if (part == null) part = nil;
        if (part['$==']("..")) {
            return new_parts.$pop()
            } else {
            return new_parts['$<<'](part)
          }}, TMP_3.$$s = self, TMP_3), $a).call($b);
        return new_parts.$join($scope.get('SEPARATOR'));
      };
      self.$$proto.$dirname = function(path) {
        var self = this;

        return path.$split($scope.get('SEPARATOR'))['$[]']($range(0, -2, false));
      };
      self.$$proto.$basename = function(path) {
        var self = this;

        self.$puts("call basename");
        return path.$split($scope.get('SEPARATOR'))['$[]'](-1);
      };
      self.$$proto.$join = function(paths) {
        var self = this;

        paths = $slice.call(arguments, 0);
        return paths.$join($scope.get('SEPARATOR')).$gsub((new RegExp("" + $scope.get('SEPARATOR') + "+")), $scope.get('SEPARATOR'));
      };
      self.$$proto.$split = function(path) {
        var self = this;

        return path.$split($scope.get('SEPARATOR'));
      };
      return (self.$$proto.$open = TMP_4 = function(file_name, mode) {
        var $a, self = this, $iter = TMP_4.$$p, $yield = $iter || nil, file = nil;

        TMP_4.$$p = null;
        file = $scope.get('FileWsh').$new(file_name, mode);
        if (($yield !== nil)) {
          try {
          return $a = Opal.yield1($yield, file), $a === $breaker ? $a : $a
          } finally {
          file.$close()
          }
          } else {
          return file
        };
      }, nil) && 'open';
    })(self.$singleton_class());

    def.$initialize = function(file_name, mode) {
      var self = this;

      self.file_name = file_name;
      self.mode = mode;
      self.AD_TYPE_BINARY = 1;
      self.AD_TYPE_TEXT = 2;
      self.AD_READ_ALL = -1;
      self.AD_READ_LINE = -2;
      self.AD_WRITE_CHAR = 0;
      self.AD_WRITE_LINE = 1;
      self.AD_SAVE_CREATE_NOT_EXIST = 1;
      self.AD_SAVE_CREATE_OVER_WRITE = 2;
      self.AD_MODE_READ_WRITE = 3;
      
      self.fd = new ActiveXObject("ADODB.Stream");
      self.fd.Type = self.AD_TYPE_TEXT;
      self.fd.charset = "UTF-8";
      self.fd.Mode = self.AD_MODE_READ_WRITE;
      self.fd.Open();
    ;
      if (self.mode['$==']("a")) {
        
        self.fd.LoadFromFile(self.file_name);
        self.fd.ReadText( self.AD_READ_ALL );
      ;
        } else {
        return nil
      };
    };

    def.$read = function() {
      var self = this, lines = nil;

      lines = "";
      
      self.fd.LoadFromFile(self.file_name);
      lines = self.fd.ReadText( self.AD_READ_ALL );
    ;
      return lines;
    };

    def.$write = function(text) {
      var self = this;

      
      self.fd.WriteText(text, self.AD_WRITE_LINE);
    ;
    };

    return (def.$close = function() {
      var $a, $b, self = this;

      if ((($a = ((($b = self.mode['$==']("w")) !== false && $b !== nil) ? $b : self.mode['$==']("a"))) !== nil && (!$a.$$is_boolean || $a == true))) {
        
        self.fd.SaveToFile( self.file_name, self.AD_SAVE_CREATE_OVER_WRITE );
        self.fd.Close();
      ;
        } else {
        return self.fd.Close();
      };
    }, nil) && 'close';
  })(self, $scope.get('IO'));
  (function($base, $super) {
    function $DirWsh(){};
    var self = $DirWsh = $klass($base, $super, 'DirWsh', $DirWsh);

    var def = self.$$proto, $scope = self.$$scope;

    self.$extend($scope.get('FileTest'));

    return (function(self) {
      var $scope = self.$$scope, def = self.$$proto;

      self.$$proto['$exist?'] = function(dir_path) {
        var self = this;

        return self['$directory?'](dir_path);
      };
      self.$$proto['$exists?'] = self.$$proto['$exist?'];
      self.$$proto.$glob_files = function(dir_path) {
        var $a, $b, TMP_5, self = this, files = nil;

        files = [];
        ($a = ($b = self).$lambda, $a.$$p = (TMP_5 = function(){var self = TMP_5.$$s || this;

        
          var fs = new ActiveXObject("Scripting.FileSystemObject");
          var folder = fs.GetFolder(dir_path);
          var em = new Enumerator(folder.Files);
          for (em.moveFirst(); !em.atEnd(); em.moveNext() )
            files['$<<'](em.item().Name);
          fs = null;
        }, TMP_5.$$s = self, TMP_5), $a).call($b).$call();
        return files;
      };
      self.$$proto.$glob_dirs = function(dir_path) {
        var $a, $b, TMP_6, self = this, dirs = nil;

        dirs = [];
        ($a = ($b = self).$lambda, $a.$$p = (TMP_6 = function(){var self = TMP_6.$$s || this;

        
          var fs = new ActiveXObject("Scripting.FileSystemObject");
          var folder = fs.GetFolder(dir_path);
          var em = new Enumerator( folder.SubFolders );
          for ( em.moveFirst(); !em.atEnd(); em.moveNext() )
            dirs['$<<'](em.item().Name);
          fs = null;
        }, TMP_6.$$s = self, TMP_6), $a).call($b).$call();
        return dirs;
      };
      return (self.$$proto.$glob = function(dir_path) {
        var self = this, files = nil, dirs = nil;

        files = self.$glob_files(dir_path);
        dirs = self.$glob_dirs(dir_path);
        return $rb_plus(files, dirs);
      }, nil) && 'glob';
    })(self.$singleton_class());
  })(self, $scope.get('IO'));
  return (function($base, $super) {
    function $FileUtilWsh(){};
    var self = $FileUtilWsh = $klass($base, $super, 'FileUtilWsh', $FileUtilWsh);

    var def = self.$$proto, $scope = self.$$scope;

    self.$extend($scope.get('FileTest'));

    return (function(self) {
      var $scope = self.$$scope, def = self.$$proto;

      self.$$proto.$mv_dir_name = function(src_name, dest_name) {
        var $a, $b, TMP_7, self = this;

        ($a = ($b = self).$lambda, $a.$$p = (TMP_7 = function(){var self = TMP_7.$$s || this;

        
        self.$buildFileObject().GetFolder(src_name).Name = dest_name
      ;}, TMP_7.$$s = self, TMP_7), $a).call($b).$call();
        return dest_name;
      };
      self.$$proto.$mv_dir = function(src_dir, dest_dir) {
        var $a, $b, TMP_8, self = this;

        ($a = ($b = self).$lambda, $a.$$p = (TMP_8 = function(){var self = TMP_8.$$s || this;

        
        self.$buildFileObject().MoveFolder(src_dir, dest_dir)
      ;}, TMP_8.$$s = self, TMP_8), $a).call($b).$call();
        return dest_dir;
      };
      self.$$proto.$cp_r = function(src_dir, dest_dir) {
        var $a, $b, TMP_9, self = this;

        ($a = ($b = self).$lambda, $a.$$p = (TMP_9 = function(){var self = TMP_9.$$s || this;

        
        self.$buildFileObject().CopyFolder(src_dir, dest_dir)
      ;}, TMP_9.$$s = self, TMP_9), $a).call($b).$call();
        return dest_dir;
      };
      self.$$proto.$mkdir = function(dir_path) {
        var $a, $b, TMP_10, self = this;

        ($a = ($b = self).$lambda, $a.$$p = (TMP_10 = function(){var self = TMP_10.$$s || this;

        
        self.$buildFileObject().CreateFolder(dir_path)
      ;}, TMP_10.$$s = self, TMP_10), $a).call($b).$call();
        return dir_path;
      };
      return (self.$$proto.$rmdir = function(dir_path) {
        var $a, $b, TMP_11, self = this;

        ($a = ($b = self).$lambda, $a.$$p = (TMP_11 = function(){var self = TMP_11.$$s || this;

        
          self.$buildFileObject().DeleteFolder(dir_path)
      ;}, TMP_11.$$s = self, TMP_11), $a).call($b).$call();
        return dir_path;
      }, nil) && 'rmdir';
    })(self.$singleton_class());
  })(self, $scope.get('IO'));
})(Opal);
