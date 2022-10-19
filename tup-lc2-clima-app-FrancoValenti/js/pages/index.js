
var card = document.getElementById("card")
var ciudad = document.getElementById("ciudades-selec")
    var div = document.getElementById('card');

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,1*1000);
    });
}
async function consultar(){
    
    if (ciudad.value=="Seleccionar Ciudad"){
        console.log("Seleccione una ciudad")
    }else{

    
    while (div.firstChild) {
    div.removeChild(div.firstChild);
    }
    loader.classList.toggle("display")
    await delay(5);
    
    
    const resutaldo =await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ciudad.value+'&appid=8f84d79662ae1b46c524e327ec4d614a&units=metric&lang=es')
    const datoscity = await resutaldo.json();
    var h3 = document.createElement("h3");
    var temp  = document.createElement("p");
    var img = document.createElement("img");
    var feels_like  = document.createElement("p");
    var humidity  = document.createElement("p");
    var speed  = document.createElement("p");
    var description  = document.createElement("p");
    h3.textContent=""+datoscity.name+"";
    img.src = "http://openweathermap.org/img/wn/"+datoscity.weather[0].icon+"@2x.png"
    temp.textContent="Temperatura: "+datoscity.main.temp+"";
    feels_like.textContent="Sensación térmica: "+datoscity.main.feels_like+"";
    humidity.textContent="Humedad: "+datoscity.main.humidity+"";
    speed.textContent="Velocidad del viento: "+datoscity.wind.speed+"";
    description.textContent="Tiempo : "+datoscity.weather[0].description+"";

    loader.classList.toggle("display")
    card.appendChild(h3)
    card.appendChild(img)
    card.appendChild(temp)
    card.appendChild(feels_like)
    card.appendChild(humidity)
    card.appendChild(speed)
    card.appendChild(description)
}

}

function añadiroption(){
    let cities = localStorage.getItem("CITIES");
    cities = JSON.parse(cities);
    
    var ciudadesSelec = document.getElementById("ciudades-selec");

    for (let i = 0; i < cities.length; i++) {
        
        var option = document.createElement("option");
        var ciudad = cities[i];
        
        option.text = ciudad;
        ciudadesSelec.add(option);
        
    }
    
   
    }