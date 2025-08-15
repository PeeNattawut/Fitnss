// ทำให้รูปดัมเบลเด้งไปมา
const dumbbell = document.querySelector('.bounce');

let direction = 1;
let position = 0;

function bounceAnimation() {
  position += direction * 2;
  if (position > 20 || position < -20) {
    direction *= -1;
  }
  dumbbell.style.transform = `translateY(${position}px)`;
  requestAnimationFrame(bounceAnimation);
}

bounceAnimation();
