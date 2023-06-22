const form = document.getElementById("form-deposito"); /*selecionando o formulário*/ 
const nomeBeneficiario = document.getElementById("nome-beneficiario");/*criando uma variável*/
let formEValido = false;/*adicionando uma validação para o formulário*/

function validaNome(nomeCompleto) { /*criando a função para a validação do nome*/
    const nomeComoArray = nomeCompleto.split(" "); /*criando a variável e usando o split para separar e contar as palavras parar comparar com a validação*/
    return nomeComoArray.length >=2;/*retornando o valor(número de palavras)*/
}

form.addEventListener("submit", function(e) { /*adiciona ouvintes para eventos dos nossos elementos*/
    e.preventDefault(); /*Cancela a função padrão do submit*/

    const numeroContaBeneficiario = document.getElementById("numero-conta");/*criando uma variável*/
    const valorDeposito = document.getElementById('valor-deposito');/*criando uma variável*/
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - Conta: <b>${numeroContaBeneficiario .value}</b> `; /*criando uma mensagem de afirmação do procedimento*/

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {/*adicionando uma condição para caso o nome não for válido*/
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;/*mensagem de sucesso*/
        
        nomeBeneficiario.value = " ";
        numeroContaBeneficiario.value = " ";
        valorDeposito.value = " ";
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector(".error-message").style.display = 'block';/*alerta de negação*/
    }

})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {/*adicionando uma condição para caso o nome não for válido*/
        nomeBeneficiario.classList.add('error');
        document.querySelector(".error-message").style.display = 'block';/*alerta de negação*/
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector(".error-message").style.display = 'none';
    }
});