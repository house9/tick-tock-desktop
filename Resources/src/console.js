APP.console = {  
  append: function (message, color) {
    if (color !== APP.undef) {
      $("#console").prepend("<span style='color: " + color + "'>" + message + "</span><br />");                        
    }
    else {
      $("#console").prepend(message + "<br />");            
    }
  },
  
  appendTimestamp: function () {
    $("#console").prepend(APP.console.getDate() + "<br />");
  },
  
  appendLine: function () {
    $("#console").prepend("====================================== <br />");
  },  
  
  getDate: function () {
    var now = new Date();           
    return now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  },
  
  link: function (url) {
    return "<a href='" + url + "' target='_blank'>" + url + "</a>";
  }
};