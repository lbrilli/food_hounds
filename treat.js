import Board from "./board";

class Treat {
    constructor(pos, y = 555){
        this.pos = [pos,y];
        this.drawTreat(this.pos);
        // this.moveTreat = this.moveTreat.bind(this);
    }

    drawTreat(pos) {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");

        const treat = new Image(15, 15)
        treat.addEventListener('load', function () {
            ctx.drawImage(
                treat, pos[0], pos[1], 15, 15
            );
        }, false);
        treat.src = "./src/styles/treat.png"
    }


    moveTreat() {
        this.eraseTreat(this.pos);
        this.pos[1] -= 15;
        this.drawTreat(this.pos);
    }

    eraseTreat(pos) {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(pos[0],pos[1],15,15)
    }

}

export default Treat;