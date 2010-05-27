var tickTock = {
  // ****************************************
  initialize: function () {
    that = this;
    this.wireUpCounter(that);
    this.wireUpStartButton(that);
    this.wireUpPredefined(that);
  },

  // ****************************************  
  wireUpCounter: function (that) {
    $("#timer").countdown({until: 0});                      
  },
  
  // ****************************************  
  wireUpStartButton: function (that) {
    $("#start-button").click(function () {
      that.onStartButtonClick(that);
    });    
  },

  // ****************************************  
  wireUpPredefined: function (that) {
    $("#pre-def-01").click(function () {
      $("#timer").countdown('change', that.getCountDownOptions(30));   
    });    
    
    $("#pre-def-02").click(function () {
      $("#timer").countdown('change', that.getCountDownOptions(5));   
    });        
  },


  // ****************************************  
  onStartButtonClick: function (that) {
    if ($("#input-minutes").val() == "") {
      alert("Number of minutes is required");
      return false;
    }
          
    $("#timer").countdown('change', that.getCountDownOptions());                  
  },
  
  // ****************************************  
  getCountDownOptions: function (value) {
    var undef;
    var n = (value === undef) ? $("#input-minutes").val() : value;
    return {
      until: +n, 
      onExpiry: that.clockStopped,
      onTick: that.clockWatch
    };
  },

  // ****************************************
  clockStopped: function () {
    alert("DONE");    
  },
  
  clockWatch: function (periods) {        
    if(periods[5] === 0 && periods[6] === 30) {
      console.warn("Only 30 seconds left!!!");
    }
  }    

};