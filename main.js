const form = document.getElementById("form-num");
let primeiroValor = document.getElementById("primeiroValor");
let segundoValor = document.getElementById("segundoValor");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = 'O <b>Segundo Valor</b> é <b>Maior</b> que o <b>Primeiro Valor!</b>'

    if(segundoValor.value > primeiroValor.value){
        const containerMensagemSucesso = document.querySelector('.mensagemSucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        segundoValor.value = '';
        primeiroValor.value = '';
    }

    else{
        segundoValor.style.border = '1px solid red';
        document.querySelector('.error').style.display = 'block';
    }
})

segundoValor.addEventListener('keyup', function(e){
    console.log(e.target.value);
    if(segundoValor.value <= primeiroValor.value) {
        segundoValor.style.border = '1px solid red';
        document.querySelector('.error').style.display = 'block';
    }

    else {
        segundoValor.style = '';
        document.querySelector('.error').style.display = 'none';
    }
})