// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "darkblue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// RIGHT BUILDING
// DRAW RIGHT BUILDING WINDOWS
ctx.fillStyle = "white";
ctx.fillRect(180, 120, 14, 500);
ctx.fillRect(200, 120, 14, 500);
ctx.fillRect(220, 120, 14, 500);
ctx.fillRect(240, 120, 14, 500);
ctx.fillRect(260, 120, 14, 500);

// LEFT BUILDING
// DRAW LEFT BUILDING WINDOWS
ctx.fillStyle = "white";
ctx.fillRect(20, 400, 110, 20);
ctx.fillRect(20, 440, 110, 20);
ctx.fillRect(20, 480, 110, 20);
ctx.fillRect(20, 520, 110, 20);
ctx.fillRect(20, 560, 110, 20);
ctx.fillRect(20, 600, 110, 20);

// DRAW LEFT BUILDING TOP WINDOWS
// FIRST ROW
ctx.fillStyle = "white";
ctx.fillRect(42, 204, 13, 13);
ctx.fillRect(62, 204, 13, 13);
ctx.fillRect(82, 204, 13, 13);
ctx.fillRect(102, 204, 13, 13);
// SECOND ROW
ctx.fillRect(42, 224, 13, 13);
ctx.fillRect(62, 224, 13, 13);
ctx.fillRect(82, 224, 13, 13);
ctx.fillRect(102, 224, 13, 13);
// THIRD ROW
ctx.fillRect(42, 244, 13, 13);
ctx.fillRect(62, 244, 13, 13);
ctx.fillRect(82, 244, 13, 13);
ctx.fillRect(102, 244, 13, 13);
// FOURTH ROW
ctx.fillRect(42, 264, 13, 13);
ctx.fillRect(62, 264, 13, 13);
ctx.fillRect(82, 264, 13, 12);
ctx.fillRect(102, 264, 13, 12);
// FIFTH ROW
ctx.fillRect(42, 284, 13, 13);
ctx.fillRect(62, 284, 13, 13);
ctx.fillRect(82, 284, 13, 13);
ctx.fillRect(102, 284, 13, 13);
// SIXTH ROW
ctx.fillRect(42, 304, 13, 13);
ctx.fillRect(62, 304, 13, 13);
ctx.fillRect(82, 304, 13, 13);
ctx.fillRect(102, 304, 13, 13);
