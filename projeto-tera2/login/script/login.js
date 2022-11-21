const form = document.getElementById('form');
const campos = document.querySelectorAll('.input');
const spans = document.querySelectorAll('.span');

const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function setError(index) {
  /* alert(index)---> este alert é só para testar se ao puxar o index ele aparecer o núero zero*/
  campos[index].style.border = '2px solid #B61F0E';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function login() {
  if (emailRegex.test(campos[0].value)) {
    /*console.log('VALIDADO')*/
    removeError(0);
  } else {
    /*console.log('NÃO VALIDADO')*/
    setError(0);
  }
}

function passwordValidate() {
  if (campos[1].value.length < 8) {
    setError(1);
  } else {
    removeError(1);
  }
}
