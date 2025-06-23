console.log('K2');

fetch('https://in3.dev/inv/')
  .then(r => r.json())
  .then(res => {
    // console.log(res);
    console.log(res);
    parse(res)
  });

const parse = data => {
  // numeris
  const invNumber = document.querySelector('[data-number]');
  invNumber.innerText = data.number;
}

data.items.forEach(p => {
  console.log(p);
  // delione. kaip patogiau su kuo nori
  const liTemplate = document.querySelector('[data-item-template]');


});
































