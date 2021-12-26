const bgCardsDiv = document.querySelector('.bg-cards');
const bgCards = document.querySelectorAll('.bg-card');
const treeDiv = document.querySelector('.tree') as HTMLElement;

bgCardsDiv.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLElement;

  bgCards.forEach(el => {
    if(el.classList.contains('active')) {
    el.classList.remove('active');
    el.classList.remove(`bg${target.dataset.bg}`);
    }
  });

  if(target.classList.contains('bg-card')) {
    treeDiv.style.backgroundImage = `url("./assets/bg/${target.dataset.bg}.jpg")`;
    target.classList.add('active');
    }
});