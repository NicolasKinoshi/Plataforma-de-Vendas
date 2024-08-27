document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;


        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            if (username === storedUser.username && password === storedUser.password) {
                alert('Login bem-sucedido!');

                window.location.href = '../../index.html';
            } else {
                alert('Usuário ou senha incorretos.');
            }
        } else {
            alert('Nenhum usuário cadastrado.');
        }
    });
});
