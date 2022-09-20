let app = new PIXI.Application({ width: 640, height: 360 })
document.body.appendChild(app.view)

let sprite = PIXI.Sprite.from('placeholder0.png')
app.stage.addChild(sprite)

window.addEventListener("keydown", (e) => {
    // there's probably a better way to do this
    if (e.key === "ArrowRight" || e.key === "d") {
        app.stage.removeChild(sprite)
        sprite = PIXI.Sprite.from('placeholder3.png')
    } else if (e.key === "ArrowDown" || e.key === "s") {
        app.stage.removeChild(sprite)
        sprite = PIXI.Sprite.from('placeholder2.png')
    } else if (e.key === "ArrowLeft" || e.key === "a") {
        app.stage.removeChild(sprite)
        sprite = PIXI.Sprite.from('placeholder1.png')
    } else if (e.key === "ArrowUp" || e.key === "w") {
        app.stage.removeChild(sprite)
        sprite = PIXI.Sprite.from('placeholder0.png')
    }
    app.stage.addChild(sprite)
})

let elapsed = 0.0
app.ticker.add((delta) => {
  elapsed += delta
  sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0
})