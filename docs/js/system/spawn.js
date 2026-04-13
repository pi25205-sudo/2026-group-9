function spawnEnemies() {
    let config = WAVE_CONFIG[currentLevel];
    if (!config) return;

    if (frameCount % config.spawnRate === 0) {
        let spawnPos = getSpawnPosition();
        let enemyType = pickEnemyType(config.enemyWeights);
        let newEnemy = createEnemy(enemyType, spawnPos.x, spawnPos.y);

        enemies.push(newEnemy);
    }
}

function getSpawnPosition() {
    let angle, spawnX, spawnY;
    let isValidSpawn = false;
    let maxAttempts = 10;

    while (!isValidSpawn && maxAttempts > 0) {
        angle = random(TWO_PI);
        spawnX = player.x + cos(angle) * SPAWN_DISTANCE;
        spawnY = player.y + sin(angle) * SPAWN_DISTANCE;

        if (spawnX >= 0 && spawnX <= WORLD_W - MARGIN_DISTANCE &&
            spawnY >= 0 && spawnY <= WORLD_H - MARGIN_DISTANCE) {
            isValidSpawn = true;
        }
        maxAttempts--;
    }

    return {
        x: constrain(spawnX, 0, WORLD_W - MARGIN_DISTANCE),
        y: constrain(spawnY, 0, WORLD_H - MARGIN_DISTANCE)
    };
}

function pickEnemyType(enemyWeights) {
    let roll = random(100);
    let curr = 0;

    for (let item of enemyWeights) {
        curr += item.weight;
        if (roll <= curr) {
            return item.type;
        }
    }

    return enemyWeights[0].type;
}

function spawnDeathParticles(x, y, color) {
    // 粒子数量
    let count = 10;
    for (let i = 0; i < count; i++) {
        let angle = random(TWO_PI);
        let speed = random(3, 6);

        particles.push({
            x: x,
            y: y,
            spdX: cos(angle) * speed,
            spdY: sin(angle) * speed,
            life: 300,
            color: color,
            size: random(3, 6)
        });
    }
}
