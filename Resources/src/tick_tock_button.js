// TODO: rename timer button?
APP.buttonConstructor = function (spec) {
  var that = {};

  that.getId = function () {
    return spec.id;
  };
  
  that.initialize = function () {
    that.wireUpMouseOverEvent();
    that.wireUpPredefined();
  };

  that.wireUpMouseOverEvent = function () {
    $("#" + spec.id).hover(
      function () { 
        $(this).css('cursor', 'pointer');
      },
      function () { 
        $(this).css('cursor', 'auto');
      }
    );    
  };
  
  that.wireUpPredefined = function () {
    var x; // undef
    if (spec.time !== x) {
      $("#" + spec.id).click(function () {
        that.countDownChange();
      });
    }
  };
  
  that.countDownChange = function () {
    $("#" + spec.timer.getId()).countdown('change', spec.timer.getCountDownOptions(spec.time));    
  };


  return that;
};

