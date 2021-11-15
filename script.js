function weathercall()
{
    var weatherHtml = '';
    var cityName = document.getElementById('info').value;
    const weatherContainer = document.getElementById('show');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=2b4294759aab881a26f7f3064a824b6f`)
        .then(res => res.json())
        .then(data => {
            if(data && data.main && data.name && data.sys && data.wind) {
              weatherHtml = `<div class="city">
                              <span class="city">${ data.name }</span>&nbsp;<span class="country">${ data.sys.country }</span>
                            </div>
                            <div  class="temp">
                              <span>${ data.main.temp }&nbsp;</span><span>&#8451;</span>
                            </div>
                            <div class="humidity">Humidity: ${ data.main.humidity }</div>
                            <div class="mintemp">
                              <span class="minTemp">Min Temp: ${ data.main.temp_min }</span>
                              <span class="maxTemp">Max Temp: ${ data.main.temp_max }</span>
                            </div>`
                            
            } else {
              weatherContainer.innerHTML = `<div>City Not Found!!</div>`
            }
            weatherContainer.classList.remove('hide');
            weatherContainer.innerHTML = weatherHtml;
            }).catch(err => {
            console.error(err);
          });
          cityName.value='';
}