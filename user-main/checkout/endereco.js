document.getElementById('calc-freight').addEventListener('click', function () {
    const cep = document.getElementById('cep').value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP inválido!');
            } else {
                document.getElementById('address').value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
            }
        })
        .catch(error => {
            alert('Erro ao buscar o CEP!');
        });
});
