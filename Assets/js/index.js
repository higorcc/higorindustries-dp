if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = './Assets/html/signin.html';
} 


let userLogado = JSON.parse(localStorage.getItem('userLogado')) ;

function sair(){
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    
    setTimeout(()=> {
        window.location.href = "./Assets/html/signin.html"
       }, 1000) 
}

