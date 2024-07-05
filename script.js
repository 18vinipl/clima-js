let url_base = 'https://api.openweathermap.org/data/2.5/weather'
let api_Key ='4dfaceccc192f8cf74f2516a13f99c08'
let city = 'paris'
let diferenciakelvin = 273.15

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
/*  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`)
    .then(response => response.json())
    .then(response => console.log(response)) 
 */



    document.getElementById('botonBusqueda').addEventListener('click', () => {
        const ciudad =document.getElementById('ciudadEntrada').value
        if (ciudad){
            fetchDatosClima(ciudad)
        }
    })
    
    
    function fetchDatosClima(ciudad){
        fetch(`${url_base}?q=${ciudad}&appid=${api_Key}`)
        .then(data => data.json())  
        .then(data => mostrarDatosClima(data))      
    }
    
    function mostrarDatosClima(data){
        //console.log(data)
        const divdatosClima = document.getElementById('datosClima')
        divdatosClima.innerHTML = ''

        // cargamos los valores del api
        const valorCiudad = data.name
        const valortemp = data.main.temp
        const valoricon = data.weather[0].icon

        //creamos items para la pagina html
        const tituloCiudad = document.createElement('h2')
        tituloCiudad.textContent=valorCiudad
        const parrTemp = document.createElement('p')
        parrTemp.textContent =`Temperatura ${Math.floor(data.main.temp-diferenciakelvin)}     C`
        const parrDes =document.createElement('p')
        parrDes.textContent = data.weather[0].description
        const imgIcon =document.createElement('img')
        imgIcon.src=`https://openweathermap.org/img/wn/${valoricon}@2x.png`


        //asignamos vakores a los welemntios de la pagina
        divdatosClima.appendChild(tituloCiudad) 
        divdatosClima.appendChild(parrTemp)
        divdatosClima.appendChild(parrDes)
        divdatosClima.appendChild(imgIcon)
       
    }

