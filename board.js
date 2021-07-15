import Lucy from "./lucy";
import Cooper from "./cooper";
import Cannon from "./cannon";
import Treat from "./treat";

class Board {
    constructor() {
        this.dogs = [];
        let coopers = this.setCooper();
        let lucys = this.setLucy();
        this.cannon = new Cannon();
    }

    setCooper() {
        for (let i = 30; i < 600;){
            for (let j = 270; j < 360;){
                this.dogs.push(new Cooper([i,j]));
                debugger
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

    collisonDetected() {
        // if (treat.pos === )
    }

}

export default Board;