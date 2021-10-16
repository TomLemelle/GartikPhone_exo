﻿let canvas = null;

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