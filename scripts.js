function showTime() {
  document.getElementById('time').innerHTML = moment().format('HH:mm');;
  document.getElementById('date').innerHTML = moment().format('MMMM Do YYYY');;
}
document.addEventListener("DOMContentLoaded", function(event) { 
  setInterval(showTime, 1000);
});