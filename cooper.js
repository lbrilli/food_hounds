class Cooper {
    constructor(pos) {
        this.pos = pos
        this.drawCooper(this.pos)
    }

    drawCooper(pos){
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");

        const cooper = new Image(30, 30);
        cooper.addEventListener('load', function () {
            ctx.drawImage(
                cooper, pos[0], pos[1], 30, 30
            );
        }, false);
        cooper.src = "./src/styles/Cooper.png";
    }
}

export default Cooper;