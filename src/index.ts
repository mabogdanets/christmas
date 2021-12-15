import './style.scss';
import './ts/toys';
/* это работа с файлами которые могут изменяться
const img = require('./assets/bg.jpg');
document.body.innerHTML = `
 <img src="${img} " alt="test">
`;*/
const startPage = document.querySelector('.start-page');
const toysPage = document.querySelector('.toys-page');
const treePage = document.querySelector('.tree-page');

const startPageBtn = document.querySelector('.start-page-btn');
const startBtn =  document.querySelector('.start-btn');
const toysPageBtn = document.querySelector('.toys-page-btn');
const treePageBtn = document.querySelector('.tree-page-btn');

function gotoToys(){
  if(toysPage.classList.contains('hide')) {
    toysPage.classList.remove('hide');
    if(!startPage.classList.contains('hide')) { startPage.classList.add('hide'); };
    if(!treePage.classList.contains('hide')) { treePage.classList.add('hide'); };
  }
}

startPageBtn.addEventListener('click', () => {
  if(startPage.classList.contains('hide')) {
    startPage.classList.remove('hide');
    if(!toysPage.classList.contains('hide')) { toysPage.classList.add('hide'); };
    if(!treePage.classList.contains('hide')) { treePage.classList.add('hide'); };
  }
});

startBtn.addEventListener('click', () => { gotoToys();} );
toysPageBtn.addEventListener('click',() => { gotoToys();} );

treePageBtn.addEventListener('click', () => {
  if(treePage.classList.contains('hide')) {
    treePage.classList.remove('hide');
    if(!toysPage.classList.contains('hide')) { toysPage.classList.add('hide'); };
    if(!startPage.classList.contains('hide')) { startPage.classList.add('hide'); };
  }
});

startPageBtn.addEventListener('click', () => {
  if(startPage.classList.contains('hide')) {
    startPage.classList.remove('hide');
    if(!toysPage.classList.contains('hide')) { toysPage.classList.add('hide'); };
    if(!treePage.classList.contains('hide')) { treePage.classList.add('hide'); };
  }
});