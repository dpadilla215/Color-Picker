window.onload =function () {
    initColorPicker();
};

function initColorPicker(){
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        blue: document.getElementById("blue"),
        green: document.getElementById("green")
    };
    setColorPickerEventListerners(colorBox, rgb);
}

function  setColorPickerEventListerners(colorBox, rgb) {
    rgb.red.addEventListener('change', () => {
        console.log("Red Value: ", rgb.red.value);
    });
    rgb.blue.addEventListener('change', () => {
        console.log("Blue Value: ", rgb.blue.value);
    });
    rgb.green.addEventListener('change', () => {
        console.log("Green Value: ", rgb.green.value);
    });
}