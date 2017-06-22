function showTime() {
  document.getElementById('time').innerHTML = moment().format('HH:mm');;
  document.getElementById('date').innerHTML = moment().format('MMMM Do YYYY');;
}
function getRandomIntInclusive() {
  var totalImages = 6;
  return Math.floor(Math.random() * (totalImages)) + 1;
}
document.addEventListener("DOMContentLoaded", function(event) { 
  setInterval(showTime, 1000);
});
document.addEventListener('dblclick', function() {
    document.body.style.backgroundImage = "url('images/"+ getRandomIntInclusive() + ".jpg')";
});