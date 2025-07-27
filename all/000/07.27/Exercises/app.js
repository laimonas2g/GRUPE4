
const divs = document.getElementsByTagName('div');

const divs2 = document.getElementsByTagName('div');
const firstDiv2 = divs2[2].innerHTML = `<span>Keiciam i span</span>`;

for (let div of divs) {
  div.style.color = 'red';
}
const divArray = Array.from(divs);
divArray.forEach(div => div.style.background = 'yellow');

const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.textContent = 'Updated!';
});

if (divs.length === 0) {
  console.log('No divs found!');
}











