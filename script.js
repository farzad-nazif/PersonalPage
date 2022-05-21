document.getElementById('btn').addEventListener('click', (event) => {
  let element_headings = document.getElementById('headings');
  element_headings.style.color = '#ff0000';

});
var favfruits;


favfruits = ['banana', 'apple', 'orange'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!favfruits.length) {
    let new_li = document.createElement('li');
    new_li.innerText = favfruits.shift();

    event.target.appendChild(new_li);
  }

});