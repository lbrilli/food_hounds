import Board from "./board"
import Lucy from "./lucy.js"
import Cooper from "./cooper.js"
class Dog {
    constructor(){
        this.dogs = Board.dogs;
    }

    moveDog() {
        //somehow select all dog objects and move them...
    }

    eraseDog(pos) {
        const canvas = document.getElementById("board");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(pos[0],pos[1],30,30); //finish statement to erase
    }
}

export default Dog;