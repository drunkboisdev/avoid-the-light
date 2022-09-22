let app = new PIXI.Application({ width: 1280, height: 720 })
document.body.appendChild(app.view)

const bg = new PIXI.Container()
app.stage.addChild(bg)

for (let i = 0; i < 64; i++) {
    for (let j = 0; j < 36; j++) {
        const bgTile = new PIXI.Sprite.from('placeholder4.png');
        bgTile.x = i * 20;
        bgTile.y = j * 20;
        bg.addChild(bgTile);
    }
}

let sprite = PIXI.Sprite.from('placeholder0.png')
sprite.anchor.set(0.5)
sprite.x = 640
sprite.y = 360
app.stage.addChild(sprite)

window.addEventListener("keydown", (e) => {
    let time = 0
    // there's probably a better way to do this
    if (e.key === "ArrowRight" || e.key === "d") {
        app.stage.removeChild(sprite)
        sprite = PIXI.Sprite.from('placeholder3.png')
        app.ticker.add(delta => {
            bg.x -= 1
            time += delta
            if (time > 19) {
                ticker.remove(delta)
                time = 0
            }
        })
        bg.x -= 20
    } else if (e.key === "ArrowUp" || e.key === "w") {
        app.stage.removeChild(sprite)
        sprite = PIXI.Sprite.from('placeholder2.png')
        bg.y -= 20
    } else if (e.key === "ArrowLeft" || e.key === "a") {
        app.stage.removeChild(sprite)
        sprite = PIXI.Sprite.from('placeholder1.png')
        bg.x += 20
    } else if (e.key === "ArrowDown" || e.key === "s") {
        app.stage.removeChild(sprite)
        sprite = PIXI.Sprite.from('placeholder0.png')
        bg.y += 20
    }
    sprite.anchor.set(0.5)
    sprite.x = 640
    sprite.y = 360
    app.stage.addChild(sprite)
})