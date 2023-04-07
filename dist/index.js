const btnArray = document.querySelectorAll('.btn');
const icoArray = document.querySelectorAll('img');

btnArray.forEach((element, index) => {
  element.addEventListener('mouseover', (event) => {
    let hoveredElement = event.target;
    hoveredElement.innerText = 'Hit The Road!';
    
    if (!icoArray[index].classList.contains('animation-1')) {
      icoArray[index].classList.toggle('animation-1');
    } else {
      icoArray[index].classList.toggle('animation-2');
    }
  });
});

btnArray.forEach((element) => {
  element.addEventListener('mouseout', (event) => {
    let hoveredElement = event.target;
    hoveredElement.innerText = 'Learn more';
  });
});
