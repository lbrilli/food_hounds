class Lucy {
    constructor(pos) {
        this.pos = pos
        this.drawLucy(this.pos)
    }

    drawLucy(pos) {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");

        const lucy = new Image(30, 30);
        lucy.addEventListener('load', function () {
            ctx.drawImage(
                lucy, pos[0], pos[1], 30, 30
            );
        }, false);
        lucy.src = "./src/styles/Lucy.png";
    }
}

export default Lucy;