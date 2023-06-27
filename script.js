const audioButton = document.querySelector('.playbutton');
const audioPlayer = document.querySelector('audio');
const estrofes = document.querySelectorAll('.estrofe');
const ground = document.querySelector('.ground');
const heads = document.querySelectorAll('.head');
const heart = document.querySelector('.heart');
const minihearts = document.querySelector('.minihearts');
const sky = document.querySelector('.sky');
const stars = document.querySelectorAll('.star');
const us = document.querySelector('.us');

audioButton.addEventListener('click', (e) => {
  audioPlayer.src = './src/sound.mp3';

  audioPlayer.load();
  audioPlayer.play();
  
  ground.classList.add('animate');
  heart.classList.add('animate');
  minihearts.classList.add('animate');
  sky.classList.add('animate');
  us.classList.add('animate');
  
  heads.forEach(head => {
    head.classList.add('animate');
  })

  estrofes.forEach(estrofe => {
    estrofe.classList.add('animate');
  });
  
  stars.forEach(li => {
    li.classList.add('animate');
  });
});

// switch button position
function switchButton() {
  var audio = new Audio('./src/duck.mp3');
  audio.play();
  var leftNo = $('#no').css("left");
  var topNO = $('#no').css("top");
  var leftY = $('#yes').css("left");
  var topY = $('#yes').css("top");
  $('#no').css("left", leftY);
  $('#no').css("top", topY);
  $('#yes').css("left", leftNo);
  $('#yes').css("top", topNO);
  console.log('kk');
}
// move random button póition
function moveButton() {
  var audio = new Audio('./src/Swish1.mp3');
  audio.play();
  var x = Math.random() * 500;
  var y = Math.random() * 500;
  var left = x + 'px';
  var top = y + 'px';
  $('#no').css("left", left);
  $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
  if (n < 1)
      switchButton();
  if (n > 1)
      moveButton();
  n++;
});