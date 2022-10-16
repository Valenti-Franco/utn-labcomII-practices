var loader = document.getElementById("loader")
function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if(cities) {
       
    cities = JSON.parse(cities);
   
    city=cities
    } else {
     
    cities = [];
    }
    
    return cities;
    
   }
   async function addNewCityToLocalStorage(newCity) {
    
        
 
    
   
    let cities = getCitiesFromLocalStorage();
    citylower = newCity.toLowerCase()

        if (cities.includes(citylower)){
            loader.classList.add("display")
            rojo.classList.add("display")
            verde.classList.add("display")
            amarillo.classList.remove("display")
            console.log("Error, la ciudad ya esta agregada")
        }
        else{
            
            try{

                const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+newCity+'&appid=8f84d79662ae1b46c524e327ec4d614a&units=metric&lang=es')
                console.log(res)
                if(res.status==200){
                    loader.classList.add("display")
                    amarillo.classList.add("display")
                    rojo.classList.add("display")
                    verde.classList.remove("display")
                    const datos = await res.json();
                    console.log(datos)
                }else{
                    loader.classList.add("display")
                    amarillo.classList.add("display")
                    verde.classList.add("display")
                    rojo.classList.remove("display")
                    return console.log("Error: La ciudad ingresadad no se encuentra en la API o se produjo un error al consultar")
                }
                


            }
            catch(error){
                return alert("error")
            }
            
                // .then(response => response.json())
                // .then(data => console.log(data))
          
            cities.push(citylower);
            localStorage.setItem("CITIES", JSON.stringify(cities));
        }
        
       
   }

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
    
        
        
    