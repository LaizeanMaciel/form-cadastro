const mainContainer = document.querySelector('.container')
const loginContainer = document.querySelector('.container-login')
const loginBtn = document.querySelector('.login')
const registerBtn = document.querySelector('.register')
const error = document.querySelector('.icon-error')

loginBtn.addEventListener("click", () => {
    loginContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

registerBtn.addEventListener("click", () => {
    loginContainer.classList.add("hidden")
    mainContainer.style.display = ""
})

//--------------------Validações------------------//

const form = document.querySelector('#form-data')
const inputName = document.querySelector('#firstname')
const inputLastName = document.querySelector('#lastname')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const inputTel = document.querySelector('#tel')
const inputConfirmPass = document.querySelector('#confirmpass')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
    if (inputName.value === '') {
        form.classList.add('error-name')
    } else {
        form.classList.remove('error-name')
    }

    //Verifica se o sobrenome está vazio
    if (inputLastName.value === '') {
        form.classList.add('error-lastname')
    } else {
        form.classList.remove('error-lastname')
    }

    //Verifica se o email está vazio

    if (inputEmail.value == '' || !validateEmail(inputEmail.value)) {
        form.classList.add('error-email')
    } else {
        form.classList.remove('error-email')
    }

    //Verifica se a senha está vazia
    if (!validatePassword(inputPassword.value, 8)) {
        form.classList.add('error-pass')
    } else {
        form.classList.remove('error-pass')
    }

    //Verifica se o telefone está vazio
    if (inputTel.value == '') {
        form.classList.add('error-tel')
    } else {
        form.classList.remove('error-tel')
    }

    //Verifica se as duas senhas são iguais
    if (inputConfirmPass.value < inputPassword.value) {
        form.classList.add('error-confirmpass')
        form.classList.add('error-msg')
    } else {
        form.classList.remove('error-confirmpass')
        form.classList.remove('error-msg')
    }

    //Verifica se a confirmação de senha está vazia
    if (inputConfirmPass.value == '') {
        form.classList.add('error-confirmpass')
    } else {
        form.classList.remove('error-confirmpass')
    }

    
    //form.submit();
})


//Validação de email
function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

//Validação de telefone
function validatePhoneNumber(phoneNumber) {
    var te = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/;
    return te.test(String(phoneNumber).toLowerCase());
}


//Validação de senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        //Senha válida
        return true
    }
    //Senha inválida
    return false
}

inputTel.addEventListener("input", () => {
    //Remover caracteres não numéricos
    var limparValor = inputTel.value.replace(/\D/g, "").substring(0, 11)

    inputTel.value = limparValor;

    //Dividir a string em um array de caracteres individuais
    var numerosArray = limparValor.split("")

    //Cria uma variavel para receber o número formatado
    var numeroFormatado = ""

    //Acessa o IF quando a quantidade de números for maior que 0
    if (numerosArray.length > 0) {
        //Formatar o DD e concatenaro valor
        //slice - extrai uma parte do array
        //join - unir os elementos do array em uma unica string
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`
    }

    //Acessa o IF quando a quantidade de números é maior que  dois
    if (numerosArray.length > 2) {
        //Formatar o numero e concatenaro valor
        //slice - extrai uma parte do array
        //join - unir os elementos do array em uma unica string
        numeroFormatado += `${numerosArray.slice(2,7).join("")}`
    }

    //Acessa o IF quando a quantidade de números é maior que  sete
    if (numerosArray.length > 7) {
        //Formatar o numero e concatenar valor
        //slice - extrai uma parte do array
        //join - unir os elementos do array em uma unica string
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`
    }

    //Envia para o campo o número formatado
    inputTel.value = numeroFormatado
})

function validateForm () {
    const radios = document.getElementsByName('gender');
    let formIsValid = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            formIsValid = true;
            break;
        }
    }

    if (!formIsValid) {
        form.classList.add('error-gender')
    } else {
        form.classList.remove('error-gender')
    }
}

//event.preventDefault(); // Impede o envio do formulário


/*function validateForm(event) {
    const radios = document.getElementsByName('gender');
    let formIsValid = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            formIsValid = true;
            break;
        }
    }

    if (!formIsValid) {
        alert('Por favor, selecione uma opção de gênero.');
        event.preventDefault(); // Impede o envio do formulário
    }
}*/