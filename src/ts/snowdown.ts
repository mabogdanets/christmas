const snowBlock = document.querySelector('.snow-block');
const snowBtn = document.querySelector('.snow');
var  t: NodeJS.Timer ;
//setInterval(letSnow, 50);

function letSnow() {
  const snowItem = document.createElement('li');
  snowItem.innerText = '❅';
  snowItem.classList.add('snow-item');
  snowItem.style.left = Math.random() * window.innerWidth + 'px';
	snowItem.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	snowItem.style.opacity = Math.random().toString();
	snowItem.style.fontSize = Math.random() * 10 + 10 + 'px';
	
	snowBlock.appendChild(snowItem);
	
	setTimeout(() => {
		snowItem.remove();
	}, 5000)
}

snowBtn.addEventListener('click', () => {
  if (!snowBtn.classList.contains('active')){
    t =  setInterval(letSnow, 50);
    snowBtn.classList.add('active');
  } else {
    snowBtn.classList.remove('active');
    snowBlock.innerHTML = "";
    clearInterval(t);
    console.log('dci');
  }

});