function formatDigits(num) {
  if(num <= 9){
    num = '0' + num;
  }
  return num;
}
function showTime() {
  var date = new Date();
  var timeFormatted =  formatDigits(date.getHours())+ ":" + formatDigits(date.getMinutes()) + ":" + formatDigits(date.getSeconds());
  document.getElementById('time').innerHTML = timeFormatted;
}
document.addEventListener("DOMContentLoaded", function(event) { 
  setInterval(showTime, 1000);
});