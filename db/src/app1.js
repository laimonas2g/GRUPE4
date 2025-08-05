import axios from 'axios';


const listTemplate = document.querySelector('[data-client-item-template]');
const listEl = document.querySelector('[data-client-list]');
const listElLeft = document.querySelector('[data-client-list-left]');
const listElRight = document.querySelector('[data-client-list-right]');

const getList = _ => {
    axios.get('http://localhost:3000/all-clients')
        .then(res => renderClientList(res.data, listEl));
}

const getListLeft = _ => {
    axios.get('http://localhost:3000/all-clients-left')
        .then(res => renderClientList(res.data, listElLeft));
}

const getListRight = _ => {
    axios.get('http://localhost:3000/all-clients-right')
        .then(res => renderClientList(res.data, listElRight));
}

const renderClientList = (clients, el) => {
    el.innerHTML = '';
    clients.forEach(client => {
        const item = listTemplate.content.cloneNode(true);
        item.querySelector('.client-id').textContent = client.id;
        item.querySelector('.client-name').textContent = client.name;
        item.querySelector('.phone-id').textContent = client.pid;
        item.querySelector('.client-phone').textContent = client.number;
        item.querySelector('.client-cid').textContent = client.client_id;
        el.appendChild(item);
    });
}

getList();
getListLeft();
getListRight();