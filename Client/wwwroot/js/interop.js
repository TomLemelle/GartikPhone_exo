let canvas = null;

function createPaintableCanvas(element) {
    canvas = new fabric.Canvas(element);
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 2;
    canvas.freeDrawingBrush.color = "#ff0000";
    console.log(canvas);
}

function setBrushSizeTwo() {
    document.getElementById('js-edit-two').addEventListener('click', () => {
        canvas.freeDrawingBrush.width = 2;
    })
}

function setBrushSizeFive() {
    document.getElementById('js-edit-five').addEventListener('click', () => {
        canvas.freeDrawingBrush.width = 5;
    })
}

function setBrushSizeTen() {
    document.getElementById('js-edit-ten').addEventListener('click', () => {
        canvas.freeDrawingBrush.width = 10;
    })
}

function setBrushColorRed() {
    document.getElementById('js-edit-red').addEventListener('click', () => {
        canvas.freeDrawingBrush.color = "#C82333";
    })
}

function setBrushColorBlue() {
    document.getElementById('js-edit-blue').addEventListener('click', () => {
        canvas.freeDrawingBrush.color = "#0069D9";
    })
}

function setBrushColorGreen() {
    document.getElementById('js-edit-green').addEventListener('click', () => {
        canvas.freeDrawingBrush.color = "#218838";
    })
}

function setBrushColorBlack() {
    document.getElementById('js-edit-black').addEventListener('click', () => {
        canvas.freeDrawingBrush.color = "#23272B";
    })
}

function setBrushColorYellow() {
    document.getElementById('js-edit-yellow').addEventListener('click', () => {
        canvas.freeDrawingBrush.color = "#E0A800";
    })
}

function setBrushColorGrey() {
    document.getElementById('js-edit-grey').addEventListener('click', () => {
        canvas.freeDrawingBrush.color = "#6C757D";
    })
}