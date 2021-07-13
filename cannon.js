class Cannon {
    constructor() {
        this.pos = 285;
        this.drawCannon(this.pos);
        this.moveCannon = this.moveCannon.bind(this);
        window.addEventListener("keydown", this.moveCannon, false)
    }

    drawCannon(pos) {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");

        const cannon = new Image(30, 30);
        cannon.addEventListener('load', function () {
            ctx.drawImage(
                cannon, (pos), 570, 30, 30
            );
        }, false);
        cannon.src = "./src/styles/cannon.png";
    }

    moveCannon(e) {
        if (e.key === "ArrowLeft") {
            this.pos -= 30;
            if (this.pos < 0) {
                this.pos = this.pos % 600
            }
        } else if (e.key === "ArrowRight") {
            this.pos += 30;
        }
        this.eraseCannon();
        this.drawCannon(this.pos);
    }

    eraseCannon() {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0,570,canvas.width, canvas.height)
    }
}

export default Cannon;