import './style.scss';
import './ts/toys';
import './ts/data';
import './ts/filters';
import './ts/sliders';
import './ts/marked';
import './ts/search';
import './ts/tree-toys-settings';
import { makeSlots } from './ts/tree-toys-settings';
import './ts/choose-tree';
import './ts/choose-bg';
import './ts/snowdown';
import './ts/tree';

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

window.addEventListener('load', makeSlots);

function gotoToys(){
  if(toysPage.classList.contains('hide')) {
    toysPage.classList.remove('hide');
    if(!startPage.classList.contains('hide')) {
       startPage.classList.add('hide'); 
       startPageBtn.classList.remove('active');
      };
    if(!treePage.classList.contains('hide')) { 
      treePage.classList.add('hide'); 
      treePageBtn.classList.remove('active');
    };
    toysPageBtn.classList.add('active');
  }
}

startPageBtn.addEventListener('click', () => {
  if(startPage.classList.contains('hide')) {
    startPage.classList.remove('hide');
    startPageBtn.classList.add('active');

    if(!toysPage.classList.contains('hide')) { 
      toysPage.classList.add('hide'); 
      toysPageBtn.classList.remove('active');
    };    
    if(!treePage.classList.contains('hide')) { 
      treePage.classList.add('hide'); 
      treePageBtn.classList.remove('active');
    };
  }
});

startBtn.addEventListener('click', () => { gotoToys();} );
toysPageBtn.addEventListener('click',() => { gotoToys();} );

treePageBtn.addEventListener('click', () => {
  if(treePage.classList.contains('hide')) {
    treePage.classList.remove('hide');
    treePageBtn.classList.add('active');
    makeSlots();
    if(!toysPage.classList.contains('hide')) { 
      toysPage.classList.add('hide'); 
      toysPageBtn.classList.remove('active');
    };
    if(!startPage.classList.contains('hide')) { 
      startPage.classList.add('hide'); 
      startPageBtn.classList.remove('active');
    };
  }
});

startPageBtn.addEventListener('click', () => {
  if(startPage.classList.contains('hide')) {
    startPage.classList.remove('hide');
    if(!toysPage.classList.contains('hide')) { toysPage.classList.add('hide'); };
    if(!treePage.classList.contains('hide')) { treePage.classList.add('hide'); };
  }
});