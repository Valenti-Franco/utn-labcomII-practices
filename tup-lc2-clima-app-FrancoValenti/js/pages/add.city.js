
var rojo = document.getElementById("rojo")
var amarillo = document.getElementById("amarillo")
var verde = document.getElementById("verde")


function addcity(){
    amarillo.classList.add("display")
    verde.classList.add("display")
    rojo.classList.add("display")
    var city = document.getElementById("newcity")
    loader.classList.toggle("display")
    setTimeout(() => {
        
        addNewCityToLocalStorage(city.value)
    }, 1000);
    

   }

