import { SingleEntryPlugin } from "webpack";
import {data, Toy} from "./data";

const toys = document.querySelector('.toys');

function toyInfo(text: string): HTMLElement {
  const span = document.createElement('span');  
  span.classList.add('toy__info');
  span.textContent = text.toString();
  return span;
}

function makeCards (toysArr: Toy[]): void {
  for(let i=0; i<toysArr.length; i++) {
    if (i % 5 === 0) {
      setTimeout(()=>{}, 0);
    }
    const toy = document.createElement('div');
    const h3 = document.createElement('h3'); 
    const img = document.createElement('img');
    const desc = document.createElement('div');
    const count = document.createElement('p'); 
    const year = document.createElement('p');
    const form =  document.createElement('p');
    const color = document.createElement('p');
    const size = document.createElement('p');
    const favorite = document.createElement('p');
    const bookmark = document.createElement('div');
  
    toy.classList.add('toy');
    toys.append(toy);
  
    h3.classList.add('toy__name');
    h3.textContent = toysArr[i].name;
    toy.append(h3);
  
    img.classList.add('toy__img');
    img.src=`/assets/toys/${toysArr[i].num}.png`;
    toy.append(img);
  
    desc.classList.add('toy__description');
    toy.append(desc);
  
    count.classList.add('toy__count');
    count.textContent = `Количество: `;
    count.append(toyInfo(toysArr[i].count));
    desc.append(count);
    
    year.classList.add('toy__year');
    year.textContent = `Год покупки: `;
    year.append(toyInfo(toysArr[i].year));
    desc.append(year);
  
    form.classList.add('toy__form');
    form.textContent = `Форма: `;
    form.append(toyInfo(toysArr[i].shape));
    desc.append(form);
  
    color.classList.add('toy__color');
    color.textContent = `Цвет: `;
    color.append(toyInfo(toysArr[i].color));
    desc.append(color);
  
    size.classList.add('toy__size');
    size.textContent = `Размер: `;
    size.append(toyInfo(toysArr[i].size));
    desc.append(size);
    
    favorite.classList.add('toy__favorite');
    favorite.textContent = `Любимая: `;
    favorite.append(toyInfo((toysArr[i].favorite) ? "да": "нет"));
    desc.append(favorite);
  
    bookmark.classList.add('toy__bookmark');
    toy.append(bookmark);
  }
}

makeCards(data);


