let $close = document.querySelector('.popup__menu__closer');
$close.addEventListener('click', function () {
  document.getElementById("burger").checked = false;
})