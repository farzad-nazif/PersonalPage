document.getElementById('btn').addEventListener('click', (event) => {
  let element_headings = document.getElementById('headings');
  element_headings.style.color = '#ff0000';

});
document.getElementById('changeimg').addEventListener('click', (event) => {
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", 'https://i.ibb.co/9y2jS5X/windows-3f04-FMm-Jqk-unsplash.jpg');

});