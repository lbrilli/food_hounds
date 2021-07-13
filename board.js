import {createDogs} from "./dog.js";

class Board {
    constructor() {
        this.setDogs();
    }

    setDogs() {
        for (i = 0; i < 20; i++) {
            createDogs();
        };
    };

}
export default Board;