import * as noUiSlider from 'nouislider';
import { target, API } from "nouislider"; 
import 'nouislider/dist/nouislider.css';
//import { filterCards } from './filters';
export var slider = <target>document.getElementById('slider') as noUiSlider.target;
export var sliderAmount = <target>document.getElementById('slider-amount') as noUiSlider.target;

export const yearOutputLeft = document.getElementById('year__output_left') as HTMLInputElement;
export const yearOutputRight = document.getElementById('year__output_right') as HTMLInputElement;
let sliderArr = [yearOutputLeft, yearOutputRight];
export let yearArr: number[] = [];

noUiSlider.create(slider, {
    start: [1940, 2020],
    connect: true,
    range: {
        'min': 1940,
        'max': 2020
    }
});
(slider.noUiSlider as noUiSlider.API).on('update', function (values:number[], handle:number) {
    yearArr[handle] = Math.round(values[handle]);
    sliderArr[handle].innerHTML = Math.round(values[handle]).toString();
   // filterCards();
});


export const amountOutputLeft = document.getElementById('amount__output_left') as HTMLInputElement;
export const amountOutputRight = document.getElementById('amount__output_right') as HTMLInputElement;
let sliderArrAmount = [amountOutputLeft, amountOutputRight];
export let amountArr: number[] = [];

noUiSlider.create(sliderAmount, {
    start: [1, 12],
    connect: true,
    range: {
        'min': 1,
        'max': 12
    }
});
(sliderAmount.noUiSlider as noUiSlider.API).on('update', function (values:number[], handle:number) {
    amountArr[handle] = Math.round(values[handle]);
    sliderArrAmount[handle].innerHTML = Math.round(values[handle]).toString();
   // filterCards();
});

