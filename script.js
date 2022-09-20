let app = new PIXI.Application({ width: 1280, height: 720 })
document.body.appendChild(app.view)

let sprite = PIXI.Sprite.from('placeholder0.png')
sprite.anchor.set(0.5)
sprite.x = 640
sprite.y = 360
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
    sprite.x = 640
    sprite.y = 360
    app.stage.addChild(sprite)
})