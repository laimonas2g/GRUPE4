import axios from 'axios';


const listTemplate = document.querySelector('[data-tree-item-template]');
const listEl = document.querySelector('[data-tree-list]');

const plantForm = document.querySelector('[data-plant-form]');
const plantButton = plantForm.querySelector('button');

const cutForm = document.querySelector('[data-cut-form]');
const cutButton = cutForm.querySelector('button');


plantButton.addEventListener('click', _ => plantTree());
cutButton.addEventListener('click', _ => cutTree());


const getList = _ => {
    axios.get('http://localhost:3000/all-trees')
        .then(res => renderTree(res.data));
}

const cutTree = _ => {
    const idEl = cutForm.querySelector('[type="text"]');
    const id = idEl.value;

    axios.delete('http://localhost:3000/tree/' + id)
        .then(_ => {
            getList();
            idEl.value = '';
        });

}


const plantTree = _ => {
    const nameEl = plantForm.querySelector('[type="text"]');
    const typeEl = plantForm.querySelector('select');
    const heightEl = plantForm.querySelector('[type="number"]');
    axios.post('http://localhost:3000/tree', {
        name: nameEl.value,
        type: typeEl.value,
        height: parseFloat(heightEl.value)
    })
        .then(_ => {
            getList();
            nameEl.value = '';
            typeEl.value = '';
            heightEl.value = '';
        });
}


const renderTree = trees => {
    listEl.innerHTML = '';
    trees.forEach(tree => {
        const clone = listTemplate.content.cloneNode(true);
        const id = clone.querySelector('.tree-id');
        const name = clone.querySelector('.tree-name');
        const type = clone.querySelector('.tree-type');
        const height = clone.querySelector('.tree-height');
        id.innerText = tree.id;
        name.innerText = tree.name;
        type.innerText = tree.type;
        height.innerText = tree.height;
        listEl.appendChild(clone);
    });
}





getList();