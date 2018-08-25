function showTime() {
  document.getElementById('time').innerHTML = moment().format('HH:mm');;
  document.getElementById('date').innerHTML = moment().format('MMMM Do YYYY');;
}
function getRandomImageURL() {
  var imageNameList = ['1.PNG','10.PNG','11.jpg','12.PNG','13.PNG','14.PNG','15.PNG','16.PNG','17.PNG','18.PNG','19.PNG','2.jpg','20.PNG','21.PNG','22.PNG','23.PNG','24.PNG','25.PNG','26.PNG','27.PNG','28.PNG','29.PNG','3.PNG','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg','39.jpg','4.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg','45.jpg','5.PNG','6.jpg','8.jpg','9.jpg'];
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
  //setInterval(showTime, 1000);
});
document.addEventListener('dblclick', function() {
  changeBackground();
});