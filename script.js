/* Api Key = '18850c68ffb687b2f5390ec5de9ed7ed' */


const loadTemp = search => {
    const apiKey = '18850c68ffb687b2f5390ec5de9ed7ed'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => displayTemp(data))
        .catch(error => console.log(error))
}

const displayTemp = data => {
    const showTemp = document.getElementById('show-temp')
    showTemp.innerHTML = data.main.temp

    const cityName = document.getElementById('city-name')
    cityName.innerHTML = data.name

    const condition = document.getElementById('condition')
    condition.innerHTML = data.weather[0].main
}



const searchButton = () => {
    const searchInputCity = document.getElementById('search-input-city').value
    loadTemp(searchInputCity)
}