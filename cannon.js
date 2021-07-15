import Treat from "./treat";

class Cannon {
    constructor() {
        this.pos = 285;
        this.drawCannon(this.pos);
        this.eventHandler = this.eventHandler.bind(this);
        window.addEventListener("keydown", this.eventHandler, false)
    }

    eventHandler(e) {
        if (e.key === " ") {
            this.fireCannon();
        } else {
            this.moveCannon(e);
        }
    }

    drawCannon(pos) {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");

        const cannon = new Image(15, 30);
        cannon.addEventListener('load', function () {
            ctx.drawImage(
                cannon, pos, 570, 15, 30
            );
        }, false);
        cannon.src = "./src/styles/cannon.png";
    }

    moveCannon(e) {
        if (e.key === "ArrowLeft") {
            this.pos -= 15;
        } else if (e.key === "ArrowRight") {
            this.pos += 15;
        }

        if (this.pos > 600) {
            this.pos = 0;
        } else if (this.pos < 0) {
            this.pos += 600
        }

        this.eraseCannon();
        this.drawCannon(this.pos);
    }

    eraseCannon() {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0,570,canvas.width, canvas.height)
    }

    fireCannon() {
        const treat = new Treat(this.pos);
        const move = setInterval( ()=> {
            treat.moveTreat()}, 50);
    }

}

export default Cannon;