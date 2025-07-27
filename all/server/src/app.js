import axios from "axios";



const animalInput = document.querySelector('[name="animal"]');
const tailInput = document.querySelector('[name="tail"]');
const buttonSend = document.querySelector('[data-action="send"]');
const responseEl= document.querySelector('[data-response]');

console.log(responseEl);

buttonSend.addEventListener('click', () => {
    const animal = animalInput.value;
    const tail = tailInput.value;
    const url = 'http://localhost/animal'

    axios.post(url, { animal, tail })
    .then(res => {
        console.log(res.data)
        responseEl.innerText = res.data.message;
    })

});