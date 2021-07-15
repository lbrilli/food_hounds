import Lucy from "./lucy";
import Cooper from "./cooper";
import Cannon from "./cannon";
import Dog from "./dog";

class Board {
    constructor() {
        this.dogs = [];
        let coopers = this.setCooper();
        let lucys = this.setLucy();
        this.board = this;
        this.cannon = new Cannon(this.board);
    }

    setCooper() {
        for (let i = 30; i < 600;){
            for (let j = 270; j < 360;){
                this.dogs.push(new Cooper([i,j]));
                j += 30;
            };
            i += 60;
        };
    };

    setLucy() {
        for (let i = 0; i < 600;) {
            for (let j = 270; j < 360;) {
                this.dogs.push(new Lucy([i, j]));
                j += 30;
            };
            i += 60;
        };
    };



    collisionDetected(treat) {
        let boolean = false;
        this.dogs.forEach(dog => {
            //if treat.pos is greater than x and less than x+30 AND greater than y and less than y +30
            if ((treat.pos[0] >= dog.pos[0] && treat.pos[0] <= dog.pos[0] + 30) && (treat.pos[1] >= dog.pos[1] && treat.pos[1] <= dog.pos[1]+30)) {
            // if (JSON.stringify(dog.pos) === JSON.stringify(treat.pos)) {
               boolean = true;
           }
        });
        return boolean;
    }

}

export default Board;