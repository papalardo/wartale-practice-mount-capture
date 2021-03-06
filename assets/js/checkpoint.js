function Checkpoint(config = {}) {
    this.offset,
    this.width,
    this.bar,
    this.config = config
    
    this.reset = function() {
        this.offset = 0,
        this.width = this.config.width || 20;
        this.bar = this.config.bar
    }

    this.reset()

    this.getRandomPosition = function() {
        let marginMax = 20
        this.offset = Math.min(this.bar.width - this.width, Math.floor(Math.random() * this.bar.width + marginMax) - marginMax)
    }

    this.checkWin = function(value) {
        return value >= this.offset && value <= this.offset + this.width
    }

    this.setWidth = function(value) {
        this.width = value
    }

    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.rect(10 + this.offset, 0, this.width, this.bar.height);
        ctx.fillStyle = "cyan";
        ctx.fill()
        ctx.strokeStyle = "cyan";
        ctx.stroke();
    }
}