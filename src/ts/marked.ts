import { data, Toy } from "./data";
import { toysDiv } from "./toys";
const markedCountSpan = document.querySelector('.marked-div__count');
let toy = document.querySelectorAll('.toy');
let markedNumber: number = 0;
export let selectedToys: Set<string> = new Set;

document.querySelectorAll('.toy').forEach(el => {
  el.addEventListener('click', function() {
    if (!el.classList.contains('marked')) {
      if (markedNumber >= 20) {
        alert("Извините, все слоты заполнены");
      } else {
        markedNumber += 1;
        el.classList.add('marked');
        selectedToys.add(el.getAttribute('num'));
        markedCountSpan.textContent = markedNumber.toString();
      }
    } else {
      el.classList.remove('marked');
      selectedToys.delete(el.getAttribute('num'));
      markedNumber -= 1;
      markedCountSpan.textContent = markedNumber.toString();
    }      
  });
});
