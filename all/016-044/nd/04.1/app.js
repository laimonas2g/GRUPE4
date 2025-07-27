console.log('K2');

fetch('https://in3.dev/inv/')
    .then(r => r.json())
    .then(res => {
        console.log(res);
        parse(res);
});


const parse = data => {
    // numeris
    const invNumber = document.querySelector('[data-number]');
    invNumber.innerText = data.number;

    const itemsList = document.querySelector('[data-items]');
    data.items.forEach(p => {
        console.log(p);
        // dėlionė. kaip patogiau su kuo nori
        const liTemplate = document.querySelector('[data-item-template]');
        const li = liTemplate.content.cloneNode(true);
        li.querySelector('[data-item-title]').textContent = p.description;
        li.querySelector('[data-item-price]').textContent = p.price;
        itemsList.appendChild(li);
    });

}





























