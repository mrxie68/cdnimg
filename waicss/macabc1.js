const svg = document.getElementById('mytop-svg');
const container = document.getElementById('my-container');
let clicked = false;

svg.addEventListener('click', () => {
  if (!clicked) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' }); // 跳到容器前面
    clicked = true;
  } else {
    container.scrollIntoView({ behavior: 'smooth', block: 'end' }); // 跳到容器后面
    clicked = false;
  }
});
const container = document.getElementById('my-container');
console.log(container);
