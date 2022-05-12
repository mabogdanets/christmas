import { data, Toy } from "./data";
import {selectedToysDiv} from './tree-toys-settings';
import {treeImg} from './choose-tree';
const treeArea = document.getElementById('area') ;

function allowDrop(ev: Event) {
  ev.preventDefault();
}

function drag(ev: DragEvent) {
  const target = ev.target as HTMLElement;
  ev.dataTransfer.setData("text", target.id);
}

function drop(ev: DragEvent) {
  const target = ev.target as HTMLElement;
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  target.appendChild(document.getElementById(data));
}

selectedToysDiv.addEventListener('dragstart', (event: DragEvent) => {
  console.log('df');
  const target = event.target as HTMLElement;
  if (target.classList.contains('selected-toy-img')) {
    console.log('df1');
    drag(event);
  }
});

treeArea.addEventListener('drop', (event: DragEvent) => {
  console.log('2');
  drop(event);
});

treeArea.addEventListener('dragOver', (event: DragEvent) => {
  allowDrop(event);
  console.log('3');
});