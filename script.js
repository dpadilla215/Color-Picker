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
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorBox, rgb, colorPickers);
}
function  setColorPickerEventListeners(element, colors, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen ; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red = colors.red.value;
            let blue = colors.blue.value;
            let green =colors.green.value
            setElementBGColor(element,red, green, blue );
            setDisplayValues(red, green, blue);
        });
    }
}
    function setElementBGColor(bgElement, red, green, blue){
        rgbVal = [red, green, blue].join(',');
        bgElement.style.backgroundColor = "rgb(" + rgbVal + ")";
    }
function setDisplayValues(red, green, blue) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innerText =red;
    greenVal.innerText =green;
    blueVal.innerText =blue;
}