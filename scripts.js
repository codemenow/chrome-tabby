function showTime() {
  var date = new Date();
  var timeFormatted =  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.getElementById('time').innerHTML = timeFormatted;
}
document.addEventListener("DOMContentLoaded", function(event) { 
  setInterval(showTime, 1000);
});