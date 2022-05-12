const treeCards = document.querySelector('.tree-cards');
const treeCard = document.querySelectorAll('.tree-card') ;
export const treeImg = document.querySelector('.tree-img') as HTMLImageElement;

treeCards.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLElement;

  treeCard.forEach(el => {
    if(el.classList.contains('active')) {
    el.classList.remove('active');
    }
  });
 
  if(target.classList.contains('tree-card')) {
  target.classList.add('active');
    treeImg.src = `./assets/tree/${target.dataset.tree}.png`;
  }
});

