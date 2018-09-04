function showTime() {
  document.getElementById('time').innerHTML = moment().format('HH:mm');
  document.getElementById('date').innerHTML = moment().format('MMMM Do YYYY');
}
function getRandomImageURL() {
  var imageNameList = ['1.jpg', '2.jpg', '3.jpg'];
  var randomNum = Math.floor(Math.random() * (imageNameList.length));
  return `url('images/${imageNameList[randomNum]}')`;
}
function changeBackground(){
  var bodyEl = document.getElementById('app');
  // bodyEl.classList.add('animated', 'slideInRight');
  document.body.style.backgroundImage = getRandomImageURL();
  // setTimeout(function() {
  //   bodyEl.classList.remove('animated','slideInRight');
  // }, 1000);
}
document.addEventListener("DOMContentLoaded", function(event) {
  changeBackground();
  showTime();
  setInterval(showTime, 1000);
});
document.addEventListener('dblclick', function() {
  changeBackground();
});