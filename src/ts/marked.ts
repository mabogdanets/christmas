import { data, Toy } from "./data";
import { toysDiv } from "./toys";
const markedCountSpan = document.querySelector('.marked-div__count');
let toy = document.querySelectorAll('.toy');
let markedNumber: number = 0;

document.querySelectorAll('.toy').forEach(el => {
  el.addEventListener('click', function() {
    if (!el.classList.contains('marked')) {
      markedNumber += 1;
      el.classList.add('marked');
      markedCountSpan.textContent = markedNumber.toString();
    } else {
      el.classList.remove('marked');
      markedNumber -= 1;
      markedCountSpan.textContent = markedNumber.toString();
    }

  });
});
