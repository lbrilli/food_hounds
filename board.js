import Lucy from "./lucy";
import Cooper from "./cooper";
import Cannon from "./cannon";

class Board {
    constructor() {
        let coopers = this.setCooper();
        let lucys = this.setLucy();
        this.cannon = new Cannon;
    }

    setCooper() {
        for (let i = 30; i < 600;){
            for (let j = 270; j < 360;){
                new Cooper([i,j]);
                j += 30;
            };
            i += 60;
        };
    };

    setLucy() {
        for (let i = 0; i < 600;) {
            for (let j = 270; j < 360;) {
                new Lucy([i, j]);
                j += 30;
            };
            i += 60;
        };
    };

}

export default Board;