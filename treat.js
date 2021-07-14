class Treat {
    constructor(pos){
        this.pos = [pos,555];
        this.drawTreat(this.pos);
        // this.moveTreat = this.moveTreat.bind(this);
    }

    drawTreat(pos) {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");

        const treat = new Image(15, 5)
        treat.addEventListener('load', function () {
            ctx.drawImage(
                treat, pos[0], pos[1], 15, 15
            );
        }, false);
        treat.src = "./src/styles/treat.png"
    }

    eraseTreat(pos) {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(pos[0], pos[1], canvas.width, canvas.height)
    }

    moveTreat() {
        this.eraseTreat(this.pos);
        this.pos[1] -= 5;
        this.drawTreat(this.pos);
    }

}

export default Treat;