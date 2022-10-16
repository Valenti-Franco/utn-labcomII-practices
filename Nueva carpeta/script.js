var tipoUsuario = document.getElementById("tipo-usuario")

function select(){
    if (tipoUsuario.options[tipoUsuario.selectedIndex].value == "Residencial"){
        alert("Elegiste resicensial")
    }
}