let btn = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#verConfirmSenha");

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector("#confirmSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");



    nome.addEventListener("keyup", () => {
      if (nome.value.length <= 3){
        labelNome.setAttribute("style", "color: red");
        labelNome.innerHTML = "Nome *Insira no mínimo 3 caracteres";
        nome.setAttribute("style", "color: red");
      } else {
        labelNome.setAttribute("style", "color: #FFFFFF");
        labelNome.innerHTML = "Nome";
        nome.setAttribute("style", "color: white");
        validNome = true;
      }
      })

    usuario.addEventListener("keyup", () => {
      if (usuario.value.length <= 4){
        labelUsuario.setAttribute("style", "color: red");
        labelUsuario.innerHTML = "Usuário *Insira no mínimo 5 caracteres";
        usuario.setAttribute("style", "color: red");
        } else {
        labelUsuario.setAttribute("style", "color: #FFFFFF");
        labelUsuario.innerHTML = "Usuário";
        usuario.setAttribute("style", "color: white");
        validUsuario = true;
        }
        })

    senha.addEventListener("keyup", () => {
      if (senha.value.length <= 5){
        labelSenha.setAttribute("style", "color: red");
        labelSenha.innerHTML = "Senha *Insira no mínimo 6 caracteres";
        senha.setAttribute("style", "color: red");
        } else {
        labelSenha.setAttribute("style", "color: #FFFFFF");
        labelSenha.innerHTML = "Senha";
        senha.setAttribute("style", "color: white");
        validSenha = true;
        }
        })
        
    confirmSenha.addEventListener("keyup", () => {
      if (confirmSenha.value != senha.value){
        labelConfirmSenha.setAttribute("style", "color: red");
        labelConfirmSenha.innerHTML = "Confirmar Senha *Este campo deve ser igual ao campo de senha";
        confirmSenha.setAttribute("style", "color: red")
        } else {
        labelConfirmSenha.setAttribute("style", "color: #FFFFFF");
        labelConfirmSenha.innerHTML = "Confirmar Senha";
        confirmSenha.setAttribute("style", "color: white");
        validConfirmSenha = true;
        }
        })      


        function cadastrar(){
          if (validNome && validUsuario && validSenha && validConfirmSenha){

              let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

              listaUser.push(
                {
                  nomeCad: nome.value,
                  userCad: usuario.value,
                  senhaCad: senha.value
                }
              )

              localStorage.setItem('listaUser', JSON.stringify(listaUser));  

              msgSuccess.setAttribute('style', 'display:block');
              msgSuccess.innerHTML = '<strong>Usuário cadastrado com sucesso!<strong>';
              msgError.setAttribute("style", "display:none");


             setTimeout(()=> {
              window.location.href = "signin.html"
             }, 3000)    

          } else {
             msgError.setAttribute("style", "display:block");
             msgError.innerHTML = "<strong>Preencha todos os campos corretamente antes de cadastrar<strong>";
             msgSuccess.setAttribute("style", "display:none");  
          }                
        }  
        
btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha");
  
    if (inputSenha.getAttribute("type") == "password") {
      inputSenha.setAttribute("type", "text");
    } else {
      inputSenha.setAttribute("type", "password");
    }
  });


btnConfirm.addEventListener("click", () => {
    let inputConfirmSenha = document.querySelector("#confirmSenha");
  
    if (inputConfirmSenha.getAttribute("type") == "password") {
      inputConfirmSenha.setAttribute("type", "text");
    } else {
      inputConfirmSenha.setAttribute("type", "password");
    }
  });


  