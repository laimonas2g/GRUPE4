function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const numbers = [];
for (let i = 0; i < 44; i++) {
  numbers.push(rand(14, 44));
}

const coloredNumbers = numbers.map(num => {
  const color = num % 4 === 0 ? 'red' : 'blue';
  return `<span style="color:${color}">${num}</span>`;
});

document.body.innerHTML = coloredNumbers.join(' ');







