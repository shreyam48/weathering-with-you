// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "4fdf8a513a59a593f6d90049c914d821",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const itemInput = document.querySelector('#input-box')
const btn = document.querySelector('#btn')
function check(){
    console.log(itemInput.value);
    getWeatherReport(itemInput.value); 
}
btn.addEventListener('click',()=>check());
itemInput.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        check();
    }
})

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let city2 = document.getElementById("city-2");
    city2.innerText = `${weather.name}, ${weather.sys.country}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    let time = document.getElementById('time');
    time.innerText = todayDate.getHours() + " : " + todayDate.getMinutes();

    let minTemp = document.getElementById('min');
    minTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C`;

    let maxTemp = document.getElementById('max');
    maxTemp.innerHTML = `${Math.floor(weather.main.temp_max)}&deg;C`;
    
    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let pressure = document.getElementById('pressure');
    pressure.innerText = `${weather.main.pressure} hPa`;

    let humidity = document.getElementById('humidity');
    humidity.innerText = `${weather.main.humidity}%`;

    let visibility = document.getElementById('visibility');
    visibility.innerText = `${(weather.visibility/1000).toFixed(1)} km`;

    let img = document.querySelector('section')
    if(weatherType.textContent == 'Clear') {
        img.style.backgroundImage = "url(https://images.unsplash.com/photo-1599739336568-b42af4996938?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80)";
        
    } else if(weatherType.textContent == 'Clouds') {

        img.style.backgroundImage = "url(https://images.unsplash.com/photo-1521396798743-13e3a7284c95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)";
        
    }  else if(weatherType.textContent == 'Overcast') {

        img.style.backgroundImage = "url(https://images.unsplash.com/photo-1479688895406-3f032f15f0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)";
        
    } else if(weatherType.textContent == 'Mist') {

        img.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/%D0%97%D0%B0_%D1%81%D0%B5%D0%BB%D0%BE%D0%BC_2.jpg/1200px-%D0%97%D0%B0_%D1%81%D0%B5%D0%BB%D0%BE%D0%BC_2.jpg)";
        
    } else if(weatherType.textContent == 'Haze') {

        img.style.backgroundImage = "url(https://images.unsplash.com/photo-1569142916960-885f868d6123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=793&q=80)";
        
    } else if(weatherType.textContent == 'Rain' ) {
        
        img.style.backgroundImage = "url(https://images.unsplash.com/photo-1542343627853-a96169db71f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)";
        
    }else if(weatherType.textContent == 'Drizzle') {
        
        img.style.backgroundImage = "url(https://www.wallpapertip.com/wmimgs/44-443115_weather-drizzling-drizzle.jpg)";
        
    } else if(weatherType.textContent == 'Snow') {
        
        img.style.backgroundImage = "url(https://images.indianexpress.com/2020/08/snow-aus_1200_twt.jpg)";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        img.style.backgroundImage = "url(https://images.unsplash.com/photo-1597907412477-dad8c83d3e86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)";
        
    } 
    
}

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${day}, ${date} ${month} '${year}`;
}