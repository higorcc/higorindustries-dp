if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = './Assets/html/signin.html';
} 

let msgBoasVindas = document.querySelector('#boas-vindas')
let userLogado = JSON.parse(localStorage.getItem('userLogado')) ;
let nomeUsuario = userLogado['nome'];

msgBoasVindas.innerHTML = "Olá, " + nomeUsuario[0].toUpperCase() + nomeUsuario.substring(1);


function sair(){
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    
    setTimeout(()=> {
        window.location.href = "./Assets/html/signin.html"
       }, 1000) 
}

