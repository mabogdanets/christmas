import { data, Toy } from "./data";
import { toysDiv } from "./toys";

const searchInput = document.getElementById('search__input') as HTMLInputElement;;
const searchCancel = document.querySelector('.search__cancel') as HTMLElement;

let searchValue: string;
searchInput.focus();

const searchNotFound = document.createElement('h3');
searchNotFound.classList.add('font-base');
searchNotFound.textContent = "Извините, совпадений не обнаружено";

function searchCards(): void {
  toysDiv.innerHTML = '';
  for (let toy of data) {
    let toyLowerCase = toy.name.toLowerCase();
    if (toyLowerCase.includes(searchValue.toLowerCase())) {
      toysDiv.append(toy.toyCard);
    } 
  }
  if (toysDiv.innerHTML === '') {
    toysDiv.append(searchNotFound);
  } 
}

searchInput.addEventListener('input', () => {
  searchInput.classList.add('cancel');
  searchCancel.classList.add('show');
  searchValue = searchInput.value;
  //console.log(searchValue);
  searchCards();
});

searchCancel.addEventListener('click', ()=> {
  searchInput.value = "";
  searchValue = searchInput.value;
  searchInput.classList.remove('cancel');
  searchCancel.classList.remove('show');
  searchInput.focus();
  searchCards();
});

