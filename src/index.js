import { createDogs } from "../dog";
import Cannon from "../cannon";

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("board")
    const ctx = canvas.getContext("2d");

    createDogs();
    const cannon = new Cannon;
    

})


// window.addEventListener("keydown", moveObject, false)
// //listen for key press and invoke moveObject method
// const cannon = createCannon(xMove);
// let xMove = 0;
// function moveObject(object) {
//     if (object.keyCode === 37) {
//         return xMove -= 2;
//     } else if (object.keyCode === 39) {
//         return xMove += 2;
//     }
// }

// moveObject(cannon);

// window.addEventListener("keydown", moveObject, false)
// //listen for key press and invoke moveObject method

// let xMove = 0;
// function moveObject(object) {
//     if (object.keyCode === 37) {
//         return xMove -= 2;
//     } else if (object.keyCode === 39) {
//         return xMove += 2;
//     }
// }

// const cannon = createCannon();