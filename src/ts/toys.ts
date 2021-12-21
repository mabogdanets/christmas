import { SingleEntryPlugin } from "webpack";
import {data, Toy} from "./data";

export const toysDiv = document.querySelector('.toys');

function toyInfo(text: string): HTMLElement {
  const span = document.createElement('span');  
  span.classList.add('toy__info');
  span.textContent = text.toString();
  return span;
}

function makeCard (card: Toy): HTMLElement {
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

  h3.classList.add('toy__name');
  h3.textContent = card.name;
  toy.append(h3);

  img.classList.add('toy__img');
  img.src=`/assets/toys/${card.num}.png`;
  toy.append(img);

  desc.classList.add('toy__description');
  toy.append(desc);

  count.classList.add('toy__count');
  count.textContent = `Количество: `;
  count.append(toyInfo(card.count));
  desc.append(count);
  
  year.classList.add('toy__year');
  year.textContent = `Год покупки: `;
  year.append(toyInfo(card.year));
  desc.append(year);

  form.classList.add('toy__form');
  form.textContent = `Форма: `;
  form.append(toyInfo(card.shape));
  desc.append(form);

  color.classList.add('toy__color');
  color.textContent = `Цвет: `;
  color.append(toyInfo(card.color));
  desc.append(color);

  size.classList.add('toy__size');
  size.textContent = `Размер: `;
  size.append(toyInfo(card.size));
  desc.append(size);
  
  favorite.classList.add('toy__favorite');
  favorite.textContent = `Любимая: `;
  favorite.append(toyInfo((card.favorite) ? "да": "нет"));
  desc.append(favorite);

  bookmark.classList.add('toy__bookmark');
  toy.append(bookmark);

  return toy;
}

function makeCards (data: Toy[]): void{
  for(let i=0; i<data.length; i++) {
    if (i % 5 === 0) {
      setTimeout(()=>{}, 0);
    }
    let toy = makeCard(data[i]);
    data[i].toyCard = toy;
    toysDiv.append(toy);
  }
}
makeCards(data);




