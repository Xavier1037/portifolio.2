
var formCadastro = document.querySelector('.form-cadastro-tarefa');

const db = firebase.firestore();

formCadastro.addEventListener('submit',(e)=>{
    e.preventDefault();

    let nome = document.querySelector('input[name=nome]').value;
    let email = document.querySelector('input[name=email]').value;
    let mensagem = document.querySelector('.form-wraper w100 textarea').value;

    db.colletion('tarefas').add({
        nome:nome,
        email:email,
        mensagem:mensagem
    })


})