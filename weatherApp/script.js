const getWeatherBtn = document.getElementById('get-weather-btn')
const citySelect = document.getElementById('city-select')

const cityLocation = document.getElementById('location')
const weatherIcon = document.getElementById('weather-icon')
const wheatherMain = document.getElementById('weather-main')
const mainTemperature = document.getElementById('main-temperature')
const feelsLike = document.getElementById('feels-like')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('wind')
const windGust = document.getElementById('wind-gust')



async function getWeather(city){
    try {
        const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
        const data = await response.json()
        return data 
        
    } catch(error) {
        console.error(`Something went wrong: ${error}`)
        return null
    }
}

async function showWeather(city){
    const data = await getWeather(city)
    
    if(!data){
        alert(`Something went wrong, please try again later`)
        return
    }
    cityLocation.textContent = data.name ?? "N/A"

    weatherIcon.src = data.weather[0]?.icon ?? ""
    wheatherMain.textContent = data.weather[0]?.main ?? "N/A"

    mainTemperature.textContent = data.main?.temp ?? "N/A"
    feelsLike.textContent = data.main?.feels_like ?? "N/A"
    humidity.textContent = data.main?.humidity ?? "N/A"

    windSpeed.textContent = data.wind?.speed ?? "N/A"
    windGust.textContent = data.wind?.gust ?? "N/A"

}

getWeatherBtn.addEventListener('click',()=>{
    if (!citySelect.value){
        return
    }
    showWeather(citySelect.value)
})
