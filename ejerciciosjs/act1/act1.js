// Realizar un programa que simule, mediante una función
// denominada cuenta, como el ordenador cuenta por pantalla, desde
// 0 hasta un número a determinar por el usuario. Dicho número se
// pide en la función principal y se envía a la función cuenta
// por valor, donde se irán imprimiendo.
var contador = document.getElementById("contador")
function principal(){
    var num = prompt("Ingrese un Numero")

    for (let i=0; i<=num; i++) {
        contar(i);
     }
       
     function contar(i) {
       setTimeout(function() {
        contador.innerHTML = i
       }, 1000 * i);
     }
    
    
          
    
}
   

principal()
