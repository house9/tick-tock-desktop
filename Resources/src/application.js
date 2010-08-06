APP.run = function () {
  APP.showLogo();

  // *******************************************
  var timer = APP.timerConstructor({id: "timer"});
  timer.initialize({default_until_value_id: "input-min"});

  // *******************************************
  var pomodoroButton = APP.timerButtonConstructor({
    id: "start-pomodoro-button",
    time: 25, 
    timer: timer
  });
  pomodoroButton.initialize();

  // *******************************************
  var breakButton = APP.timerButtonConstructor({
    id: "start-break-button",
    time: 5,
    timer: timer
  });
  breakButton.initialize();

  // *******************************************
  var regularStartButtonConstructor = function (spec) {
    var that = APP.timerButtonConstructor(spec);

    // override 'base' method
    that.getSpecTime = function () {
      if ($("#minutes").val() === "") {
        alert(APP.messages.noMinutesSelected);
        return -1;
      }
      // else
      return $("#minutes").val();
    };

    return that;
  };

  regularStartButton = regularStartButtonConstructor({
      id: "start-button",
      timer: timer,
  });
  regularStartButton.initialize();
};

// ******************************************
APP.showLogo = function () {
  // Titanium object does not exist when testing in browser
  // as we are outside of the Titanium runtime
  // if doing testing in browser maybe comment this out
  var version = null;  
  if (APP.undef === window.Titanium) {
    version = "unknown";
  }
  else {
    version = Titanium.App.getVersion();          
  }  
  
  APP.console.appendLine();             
  APP.console.append("Built on Appcelerator's Titanium platform " + APP.console.link("http://www.appcelerator.com/"));
  APP.console.append("Sounds from Partners in Rhyme, " + APP.console.link("http://www.partnersinrhyme.com/pir/PIRsfx.shtml"));
  APP.console.append("jQuery plugin: Countdown by Keith Wood, " + APP.console.link("http://keith-wood.name/countdown.html"));
  APP.console.append("jQuery " + APP.console.link("http://jquery.com/"));
  APP.console.append("Using icon set 'Flavour' series by Oliver (@mywayhome) via " + APP.console.link("http://www.smashingmagazine.com/"));
  APP.console.appendLine();         
  APP.console.append("Credits");
  APP.console.append("");
  APP.console.append("Learn more about Pomodoro Technique at " + APP.console.link("http://www.pomodorotechnique.com/"));
  APP.console.append("Tick Tock Desktop Version: " + version);
  
};