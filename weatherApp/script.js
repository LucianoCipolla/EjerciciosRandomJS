async function getWeather(city){
    try {
        const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
        const data = await response.json() 
    
    } catch(error) {
        alert(`Something went wrong, please try again later`)
    }
}