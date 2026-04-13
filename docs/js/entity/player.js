
let playerImg;
let playerImgLoaded = false;

function resetPlayer() {
    player = {x: WORLD_W / 2, y: WORLD_H / 2, size: 30, hp: 20};
}

// 加载玩家图片
function loadPlayerImage() {
    playerImg = loadImage(
        "asset/role/d339f22abea3fe7a6bec1aa078959368.jpg",
        () => {
            playerImgLoaded = true;
        },
        (err) => {
            console.error("图片加载失败:", err);
        }
    );
}

// 在 preload 中调用加载
if (typeof preload === 'function') {
    const originalPreload = preload;
    preload = function() {
        loadPlayerImage();
        if (originalPreload) originalPreload();
    };
}

// 绘制玩家（替换原来的圆形绘制）
function drawPlayer() {
    if (!player) return;
    
    if (playerImgLoaded && playerImg && playerImg.width > 0) {
        imageMode(CENTER);
        image(playerImg, player.x, player.y, player.size, player.size);
    } else {
        fill(100, 200, 150);
        circle(player.x, player.y, player.size);
    }
}

// 劫持 draw 函数来绘制玩家图片
if (typeof draw === 'function') {
    const originalDraw = draw;
    draw = function() {
        originalDraw();
        drawPlayer();
    };
} else {
    // 如果 draw 还不存在，等待它
    const checkDraw = setInterval(() => {
        if (typeof draw === 'function') {
            clearInterval(checkDraw);
            const originalDraw = draw;
            draw = function() {
                originalDraw();
                drawPlayer();
            };
        }
    }, 100);
}