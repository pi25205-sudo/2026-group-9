
let player;
let playerImg;
let originalDraw;

function resetPlayer() {
  player = { x: WORLD_W / 2, y: WORLD_H / 2, size: 30, hp: 20 };
}
function loadPlayerImage() {
  playerImg = loadImage("docs/asset/role/d339f22abea3fe7a6bec1aa078959368.jpg");
}

// 新的绘制函数，替换原来的 draw
function patchedDraw() {

  if (originalDraw) originalDraw();
  

  if (playerImg && playerImg.width) {
    image(playerImg, player.x - player.size/2, player.y - player.size/2, player.size, player.size);
  } else {
 
    fill(0, 255, 0);
    circle(player.x, player.y, player.size);
  }
}

function hijackDraw() {
  if (window.draw && !originalDraw) {
    originalDraw = window.draw;
    window.draw = patchedDraw;
  }
}

loadPlayerImage();

if (window.setup) {
 
  let originalSetup = window.setup;
  window.setup = function() {
    if (originalSetup) originalSetup();
    hijackDraw();
  };
} else {
  setTimeout(hijackDraw, 100);
}