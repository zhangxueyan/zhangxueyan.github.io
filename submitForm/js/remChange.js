     // 1 根据不同的设备宽度在根元素上设置不同的字体大小。1rem=100px
      (function(win) {
      var doc = win.document;
      var docEl = doc.documentElement;
      var tid;

      function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width > 640) { // 最大宽度
          width = 640;
        }
        var rem = width /6.4; 
        docEl.style.fontSize = rem + 'px';
      }
      win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }, false);
      win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
          clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
        }
      }, false);

      refreshRem();

    })(window);