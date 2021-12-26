import { data, Toy } from "./data";
import { selectedToys } from "./marked";

const selectedToysDiv = document.querySelector('.selected-toys');

function makeImgToy (num: string, id: string): HTMLElement {
  const imgToy = document.createElement('img');
  imgToy.classList.add('selected-toy-img');
  imgToy.src=`/assets/toys/${num}.png`;
  imgToy.id = num + "-" + id;
  return imgToy;
}

function makeSlot (card: Toy): HTMLElement {
  const slot = document.createElement('div');  
  const toysAmount = document.createElement('p');
  slot.classList.add('selected-toy');
  toysAmount.classList.add('selected-toys-amoumt');
  toysAmount.innerText = card.count;
  slot.append(toysAmount);
  for (let i=1; i < Number(card.count); i++) {
    slot.append( makeImgToy(card.num, i.toString()) );
  }
  return slot;
}

export function makeSlots (): void {
  selectedToysDiv.innerHTML = '';
  if (selectedToys.size === 0){
    for (let i=0; i <= 19; i++) {
      let slot = makeSlot(data[i]);
      selectedToysDiv.append(slot);
    }
  } else {
    for (let i=0; i<data.length; i++) {
      if (selectedToys.has(data[i].num)) {
        let slot = makeSlot(data[i]);
        selectedToysDiv.append(slot);
      }
    }
  }
}

//makeSlots();