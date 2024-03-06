
const contraseña = document.getElementById("password");
const usuario = document.getElementById("username");
const btn = document.getElementById("btn");

function loginluz(event){
event.preventDefault();
if(usuario.value === "Agostina" && contraseña.value === "1234")
{

window.location = "luz.html"

}
else if (usuario.value === "Administrador" && contraseña.value === "1234")
{
    window.location = "administrador.html"
}
else {
  alert( "datos incorrectos")


}
}

btn.addEventListener('click',loginluz)




