import { data, Toy } from "./data";
import { amountArr } from "./sliders";
import { toysDiv } from "./toys";

const favoriteCheckbox = document.getElementById('favorite') as HTMLInputElement;
const filtrProperty = document.querySelector('.filter__property');
const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;

const valueFilters = {
  shape: new Set(),
  color: new Set(),
  size: new Set(),
  year: [amountArr[0], amountArr[1]],
}
type ValueFilters = typeof valueFilters;

let favoriteFilter: boolean = false;
let sortIncr: boolean = true;

function filterCards(): void {
  for (let toy of data) {
    if (
      (valueFilters.shape.has(toy.shape) || valueFilters.shape.size === 0) &&
      (valueFilters.color.has(toy.color) || valueFilters.color.size === 0) &&
      (valueFilters.size.has(toy.size) || valueFilters.size.size === 0) &&
      (!favoriteFilter || toy.favorite)
    ) {
      toy.toyCard.classList.remove('toy_disabled');
    } else {
      toy.toyCard.classList.add('toy_disabled');
    }
  }
}

function sortCards(): void {
  const [field, direction] = sortSelect.value.split('_') as [keyof Toy, string];
  sortIncr = direction === 'incr';

  data.sort((a, b) => {
    if (a[field] < b[field]) {
      return sortIncr ? -1 : 1;
    }
    return sortIncr ? 1 : -1;
  });
  toysDiv.innerHTML = '';

  for (let toy of data) {
    toysDiv.append(toy.toyCard);
  }
}

sortCards();


filtrProperty.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains('filter__button')) {
    let filter = target.dataset.filter as keyof ValueFilters; 
    let value: string = target.dataset.value;

    if (target.classList.contains('active')) {
      target.classList.remove('active');
      valueFilters[filter].delete(value);
    } else {
      target.classList.add('active');
      valueFilters[filter].add(value);
    }
    filterCards();
  }
});

favoriteCheckbox.addEventListener('change', () => {
  favoriteFilter = favoriteCheckbox.checked;
  filterCards();
});


sortSelect.addEventListener('change', () => {
  sortCards();
});
