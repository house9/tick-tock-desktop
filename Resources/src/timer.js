APP.timerConstructor = function (spec) {
  var that = {};

  that.getId = function () {
    return spec.id;
  };
  
  that.initialize = function () {
    that.wireUpCounter();
  };

  that.wireUpCounter = function () {
    $("#" + spec.id).countdown({until: 0});
  };
  
  that.clockStopped = function () {
    APP.console.append(APP.console.getDate() + APP.messages.timerEnd);
    alert(APP.messages.timerComplete);    
  };
    
  that.clockWatch = function (periods) {
    if (periods[5] === 0 && periods[6] === 30) {
      APP.console.append(APP.messages.thirtySecondsLeft, "yellow");
    }
    else if (periods[5] === 0 && periods[6] === 20) {
      APP.console.append(APP.messages.twentySecondsLeft, "orange");     
    }
    else if (periods[5] === 0 && periods[6] === 10) {
      APP.console.append(APP.messages.tenSecondsLeft, "red");  
    }    
      
  };
  
  that.getCountDownOptions = function (value) {
    console.debug(value);
    console.debug(spec.default_until_value_id);
    console.debug($("#" + spec.default_until_value_id).val());
    
    var undef;
    var n = (value === undef) ? $("#" + spec.default_until_value_id).val() : value;
    return {
      until: +n, 
      onExpiry: that.clockStopped,
      onTick: that.clockWatch
    };
  }

  return that;
};

