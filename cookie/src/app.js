import axios from 'axios';

console.log('Cookies');


const loginForm = document.querySelector('[data-login]');


if (loginForm) {

    const emailInput = loginForm.querySelector('[name="email"]');
    const pswInput = loginForm.querySelector('[name="password"]');
    const loginButton = loginForm.querySelector('button');

    loginButton.addEventListener('click', _ => {
        axios.post(
            'http://localhost:3000/login',
            {
                email: emailInput.value,
                psw: pswInput.value
            },
            { withCredentials: true }
        )
        .then(res => {
            console.log(res.data)
        })
    });


}