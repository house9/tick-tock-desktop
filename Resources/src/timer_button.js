APP.timerButtonConstructor = function (spec) {
  var that = {};

  that.getId = function () {
    return spec.id;
  };
  
  that.getCalculatedTime = function () {
    return that.getSpecTime() * 60;
  };
  
  that.getSpecTime = function () {
    return spec.time;
  };

  that.getSpecTimeForDisplay = function () {
    return spec.time;
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
    $("#" + spec.id).click(function () {
      that.countDownChange();
      APP.console.append(APP.console.getDate() + APP.messages.beginTimerFor + that.getSpecTimeForDisplay() + " minutes");
    });
  };
  
  that.countDownChange = function () {
    $("#" + spec.timer.getId()).countdown('change', spec.timer.getCountDownOptions(that.getCalculatedTime()));    
  };

  return that;
};

