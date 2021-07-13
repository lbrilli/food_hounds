export function createDogs() {
    const canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");

    _createLucy();
    _createCooper();

    //create cooper
    function _createCooper() { //add in an option to 
        const cooper = new Image(30, 30);
        cooper.addEventListener('load', function () {
            ctx.drawImage(
                cooper, 30, 0, 30, 30
            );
        }, false);
        cooper.src = "./src/styles/Cooper.png";
    }

    //create lucy
    function _createLucy() {
        const lucy = new Image(30, 30);
        lucy.addEventListener('load', function () {
            ctx.drawImage(
                lucy, 0, 0, 30, 30
            );
        }, false);
        lucy.src = "./src/styles/Lucy.png";

    }
}



// some logic could be repurposed for populating several times
// for (let j = 240; j < 360;) {
//     for (let i = 0; i < 600;) {
//         ctx.beginPath();
//         ctx.rect(i, j, 30, 30);
//         ctx.stroke();
//         i += 30;
//     };
//     j += 30;
// };