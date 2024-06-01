let isError = false;

function insert(num) {
    const resultado = document.getElementById('resultado');

    if (isError) {
        resultado.innerHTML = '';
        isError = false;
    }

    const ultimoChar = resultado.innerHTML.slice(-1);

    if (isNaN(num) && isNaN(ultimoChar)) {
        // Se o último caractere e o caractere atual são operadores, substitui o último operador pelo novo
        resultado.innerHTML = resultado.innerHTML.slice(0, -1) + num;
    } else {
        // Adiciona o número ou operador normalmente
        resultado.innerHTML += num;
    }
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
    isError = false;
}

function backSpace() {
    const resultado = document.getElementById('resultado').innerHTML;

    if (isError) {
        document.getElementById('resultado').innerHTML = '';
        isError = false;
    } else {
        document.getElementById('resultado').innerHTML = resultado.slice(0, -1);
    }
}

function calcular() {
    const resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        try {
            const conta = eval(resultado);
            document.getElementById('resultado').innerHTML = conta;
        } catch (error) {
            document.getElementById('resultado').innerHTML = 'Erro, insira uma operação válida.';
            isError = true;
        }
    } else {
        document.getElementById('resultado').innerHTML = '0';
    }
}
