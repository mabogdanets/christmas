import * as noUiSlider from 'nouislider';
import { target, API } from "nouislider"; 
import 'nouislider/dist/nouislider.css';

var slider = <target>document.getElementById('slider');
const amountOutputLeft = document.getElementById('amount__output_left') as HTMLInputElement;
const amountOutputRight = document.getElementById('amount__output_right') as HTMLInputElement;

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

/*
// Append the option elements
for (var i = -20; i <= 40; i++) {

    var option = document.createElement("option") as HTMLOptionElement;
    option.text = i.toString();
    option.value = i.toString();

    slider.appendChild(option);
}*/

/*
var inputNumber = document.getElementById('input-number');

slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
        amountOutputRight.value = value.toString();
    } else {
        amountOutputLeft.value = Math.round(Number(value)).toString();
    }
});

amountOutputLeft.addEventListener('change', function () {
    slider.noUiSlider.set([this.value, null]);
});

amountOutputRight.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
});


export default slider;*/