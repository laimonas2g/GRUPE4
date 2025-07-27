import axios from 'axios';

console.log('Cookies');


const loginForm = document.querySelector('[data-login]');
const logoutForm = document.querySelector('[data-logout]');

if (logoutForm) {
    const logoutButton = logoutForm.querySelector('button');
 
    logoutButton.addEventListener('click', _ => {
        axios.post(
            'http://localhost:3000/logout',
            {},
            { withCredentials: true }
        )
        .then(res => {
            window.location.href = 'http://localhost:3000';
        });
    });
}
 

if (loginForm) {

    const emailInput = loginForm.querySelector('[name="email"]');
    const pswInput = loginForm.querySelector('[name="password"]');
    const loginButton = loginForm.querySelector('button');
    const responseDiv = document.querySelector('[data-response]');

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
            if (!res.data.success) {
                responseDiv.innerText = res.data.message;
            } else {
                responseDiv.innerText = res.data.message;
                setTimeout(_ => {
                    window.location.href = 'http://localhost:3000';
                }, 1000);
            }
        })
    });


}