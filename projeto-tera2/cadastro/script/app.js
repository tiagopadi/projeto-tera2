const form = document.getElementById('form');

const campos = document.getElementsByClassName('input');
const spans = document.getElementsByClassName('span');

const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function setError(index) {
  campos[index].style.border = '2px solid #b61f0e';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (campos[0].value.length < 10) {
    setError(0);
  } else {
    removeError(0);
  }
}

function date() {
  if (campos[1].value.length < 8) {
    setError(1);
  } else {
    removeError(1);
  }
}

function cpf() {
  if (campos[2].value.length < 11) {
    setError(2);
  } else {
    removeError(2);
  }
}

/* construir função da API Validação CEP */

/*function number() */

function emailValidate() {
  if (!emailRegex.test(campos[3].value)) {
    setError(3);
  } else {
    removeError(3);
  }
}

function password() {
  if (campos[4].value.length < 8) {
    setError(4);
  } else {
    removeError(4);
  }
}

function realPassword() {
  if (campos[4].value === campos[5].value && campos[5].value.lenght >= 8) {
    removeError(5);
  } else {
    setError(5);
  }
}

function alarm() {
  alert('Faltam informações!');
}

const cep = document.querySelector('#cep');

const options = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
};

const showData = result => {
  for (const campo in result) {
    if (document.querySelector('#' + campo)) {
      document.querySelector('#' + campo).value = result[campo];
    }
  }
};

cep.addEventListener('blur', e => {
  let search = cep.value.replace('-', '');
  console.log(search);

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
      response.json().then(data => {
        console.log(data);
        showData(data);
      });
    })
    .catch(e => {
      console.log('ERRO: ' + e);
    });
});
