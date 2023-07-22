let str;
let str2;
let city;
let a,b,c;
let l;
let cardCity;
let cards=document.querySelectorAll('.city-card');
let cardArray= Array.from(cards);

cardArray.forEach(card=>{
  card.addEventListener('click',()=>{
    // console.log(card.lastElementChild.innerHTML);
    cardCity=card.lastElementChild.innerHTML;
    if(cardCity==='Delhi'){
      cardCity='delhi,india';
    }
    cardClick(cardCity);

  })
})

function cardClick(cityName){
  currentWeather(cityName);
  forecast(cityName);
}




async function currentWeather(city) {
  city = city.toLocaleUpperCase();
  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43e1c58fcemsh507f538895f1b6dp18b6f5jsn06b2e249582e',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    str = JSON.parse(result);
    // console.log(str);
    // console.log(typeof result);
  } catch (error) {
    alert('Enter a city name');
    console.error(error);
  }

  document.getElementById('city-name').innerHTML = str['location']['name'];
  document.getElementById('city-temp').innerHTML = Math.round(parseFloat(str['current']['temp_c'])) + '°C';
  document.getElementById('feels-like').innerHTML = innerHTML = '  ' + Math.round(parseFloat(str['current']['feelslike_c'])) + '°C';
  document.getElementById('text').innerHTML = str['current']['condition']['text'];
  document.getElementById('region').innerHTML = str['location']['region'] + ', ';
  document.getElementById('country').innerHTML = str['location']['country'];
  document.getElementById('wind-speed').innerHTML = str['current']['wind_kph'] + ' km/h';
  document.getElementById('humidity').innerHTML = str['current']['humidity'] + '%';

  let w = str['current']['condition']['text'];

  if (w == 'Sunny') {
    document.getElementById('main-img').src = 'sunny.png';
  }
  if (w == 'Clear') {
    document.getElementById('main-img').src = 'clear.png';
  }
  if (w == 'Partly cloudy') {
    document.getElementById('main-img').src = 'partly-cloudy.png';
  }
  if (w == 'Cloudy' || w == 'Overcast') {
    document.getElementById('main-img').src = 'over-cast.png';
  }
  if (w == 'Mist') {
    document.getElementById('main-img').src = 'mist.png';
  }
  if (w == 'Patchy rain possible' || w == 'Light rain shower' || w == 'Light drizzle' || w == 'Freezing drizzle') {
    document.getElementById('main-img').src = 'light-rain.png';
  }
  if (w == 'Thundery outbreaks possible') {
    document.getElementById('main-img').src = 'heavy-rain.png';
  }
  if (w == 'Light rain' || w == 'Moderate rain') {
    document.getElementById('main-img').src = 'moderate-rain.png';
  }
  if (w == 'Heavy rain' || w == 'Moderate or heavy rain with thunder' || w == 'Heavy freezing drizzle' || w=='Moderate or heavy rain shower'|| w=='Heavy rain at times') {
    document.getElementById('main-img').src = 'heavy-rain.png';
  }
  if (w == 'Heavy snow') {
    document.getElementById('main-img').src = 'conditions/heavy-snow.png';
  }
  if (w == 'Patchy light snow with thunde' || w == 'Light showers of ice pellets' || w == 'Moderate or heavy snow showers' || w == 'Light snow showers' || w == 'Moderate or heavy sleet showers' || w == 'Patchy snow possible') {
    document.getElementById('main-img').src = 'light-snow.png';
  }
  if (w == 'Blizzard') {
    document.getElementById('main-img').src = 'blizzard.png';
  }
  if (w == 'Fog' || w == 'Freezing fog') {
    document.getElementById('main-img').src = 'fog.png';
  }


  // return result;
}


async function forecast(city) {
  const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city + '&days=3';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43e1c58fcemsh507f538895f1b6dp18b6f5jsn06b2e249582e',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    str2 = JSON.parse(result);
    // console.log(str2);
  } catch (error) {
    console.error(error);
  }

  // document.getElementById('text').innerHTML = str2['forecast']['forecastday']['0']['day']['condition']['text'];


  document.getElementById('sunrise-time').innerHTML = str2['forecast']['forecastday']['0']['astro']['sunrise'];
  document.getElementById('sunset-time').innerHTML = str2['forecast']['forecastday']['0']['astro']['sunset'];
  // console.log(typeof str2['forecast']['forecastday']['0']['day']['maxtemp_c'])
  document.getElementById('max-temp').innerHTML = Math.round(str2['forecast']['forecastday']['0']['day']['maxtemp_c']) + '°C';
  document.getElementById('min-temp').innerHTML = Math.round(str2['forecast']['forecastday']['0']['day']['mintemp_c']) + '°C';
  document.getElementById('rain-chance').innerHTML = '  ' + Math.round(str2['forecast']['forecastday']['0']['day']['daily_chance_of_rain']) + '%';

  document.getElementById('day-1-max').innerHTML = Math.round(str2['forecast']['forecastday']['0']['day']['maxtemp_c']) + '°C';
  document.getElementById('day-1-min').innerHTML = Math.round(str2['forecast']['forecastday']['0']['day']['mintemp_c']) + '°C';
  document.getElementById('day-1-text').innerHTML = str2['forecast']['forecastday']['0']['day']['condition']['text'];

      a=str2['forecast']['forecastday']['0']['day']['condition']['text'];
      if(a=='Sunny'){
        document.getElementById('img-one').src='sunny.png';
        
      }
      if(a=='Clear'){
        document.getElementById('img-one').src='clear.png';
        
      }
      if(a=='Partly cloudy'){
        document.getElementById('img-one').src='partly-cloudy.png';
        
      }
      if(a=='Cloudy' || a=='Overcast'){
        document.getElementById('img-one').src='over-cast.png';
        
      }
      if(a=='Mist'){
        document.getElementById('img-one').src='mist.png';
        
      }
      if(a=='Patchy rain possible' || a=='Light rain shower' || a=='Light drizzle' || a=='Freezing drizzle'){
        document.getElementById('img-one').src='light-rain.png';
        
      }
      if(a=='Thundery outbreaks possible'){
        document.getElementById('img-one').src='heavy-rain.png';
        
      }
      if(a=='Light rain' || a=='Moderate rain'){
        document.getElementById('img-one').src='moderate-rain.png';
        
      }
      if(a=='Heavy rain' || a=='Moderate or heavy rain with thunder' || a=='Heavy freezing drizzle'){
        document.getElementById('img-one').src='heavy-rain.png';
      }
      if(a=='Heavy snow'){
        document.getElementById('img-one').src='conditions/heavy-snow.png';
        
      }
      if(a=='Patchy light snow with thunde' || a=='Light showers of ice pellets' ||a=='Moderate or heavy snow showers' || a=='Light snow showers' || a=='Moderate or heavy sleet showers' ||a=='Patchy snow possible'){
        document.getElementById('img-one').src='light-snow.png';
        
      }
      if(a=='Blizzard'){
        document.getElementById('img-one').src='blizzard.png';
        
      }
      if(a=='Fog' || a=='Freezing fog'){
        document.getElementById('img-one').src='fog.png';
        
      }
      
  





  document.getElementById('day-2-max').innerHTML = Math.round(str2['forecast']['forecastday']['1']['day']['maxtemp_c']) + '°C';
  document.getElementById('day-2-min').innerHTML = Math.round(str2['forecast']['forecastday']['1']['day']['mintemp_c']) + '°C';
  document.getElementById('day-2-text').innerHTML = str2['forecast']['forecastday']['1']['day']['condition']['text'];
  // console.log('kkkk'+str2['forecast']['forecastday']['1']['day']['condition']['text'])
 
  b=str2['forecast']['forecastday']['1']['day']['condition']['text'];
  if(b=='Sunny'){
    document.getElementById('img-two').src='sunny.png';
  }
  if(b=='Clear'){
    document.getElementById('img-two').src='clear.png';
  }
  if(b=='Partly cloudy'){
    document.getElementById('img-two').src='partly-cloudy.png';
  }
  if(b=='Cloudy' || b=='Overcast'){
    document.getElementById('img-two').src='over-cast.png';
  }
  if(b=='Mist'){
    document.getElementById('img-two').src='mist.png';
  }
  if(b=='Patchy rain possible' || b=='Light rain shower' || b=='Light drizzle' || b=='Freezing drizzle'){
    document.getElementById('img-two').src='light-rain.png';
  }
  if(b=='Thundery outbreaks possible'){
    document.getElementById('img-two').src='heavy-rain.png';
  }
  if(b=='Light rain' || b=='Moderate rain'){
    document.getElementById('img-two').src='moderate-rain.png';
  }
  if(b=='Heavy rain' || b=='Moderate or heavy rain with thunder' || b=='Heavy freezing drizzle'){
    document.getElementById('img-two').src='heavy-rain.png';
  }
  if(b=='Heavy snow'){
    document.getElementById('img-two').src='conditions/heavy-snow.png';
  }
  if(b=='Patchy light snow with thunde' || b=='Light showers of ice pellets' ||b=='Moderate or heavy snow showers' || b=='Light snow showers' || b=='Moderate or heavy sleet showers' ||b=='Patchy snow possible'){
    document.getElementById('img-two').src='light-snow.png';
  }
  if(b=='Blizzard'){
    document.getElementById('img-two').src='blizzard.png';
  }
  if(b=='Fog' || b=='Freezing fog'){
    document.getElementById('img-two').src='fog.png';
  }




  document.getElementById('day-3-max').innerHTML = Math.round(str2['forecast']['forecastday']['2']['day']['maxtemp_c']) + '°C';
  document.getElementById('day-3-min').innerHTML = Math.round(str2['forecast']['forecastday']['2']['day']['mintemp_c']) + '°C';
  document.getElementById('day-3-text').innerHTML = str2['forecast']['forecastday']['2']['day']['condition']['text'];
  document.getElementById('day-3-date').innerHTML = str2['forecast']['forecastday']['2']['date'];

  c=str2['forecast']['forecastday']['2']['day']['condition']['text'];
  if(c=='Sunny'){
    document.getElementById('img-three').src='sunny.png';
  }
  if(c=='Clear'){
    document.getElementById('img-three').src='clear.png';
  }
  if(c=='Partly cloudy'){
    document.getElementById('img-three').src='partly-cloudy.png';
  }
  if(c=='Cloudy' || c=='Overcast'){
    document.getElementById('img-three').src='over-cast.png';
  }
  if(c=='Mist'){
    document.getElementById('img-three').src='mist.png';
  }
  if(c=='Patchy rain possible' || c=='Light rain shower' || c=='Light drizzle' || c=='Freezing drizzle'){
    document.getElementById('img-three').src='light-rain.png';
  }
  if(c=='Thundery outbreaks possible'){
    document.getElementById('img-three').src='heavy-rain.png';
  }
  if(c=='Light rain' || c=='Moderate rain'){
    document.getElementById('img-three').src='moderate-rain.png';
  }
  if(c=='Heavy rain' || c=='Moderate or heavy rain with thunder' || c=='Heavy freezing drizzle'){
    document.getElementById('img-three').src='heavy-rain.png';
  }
  if(c=='Heavy snow'){
    document.getElementById('img-three').src='conditions/heavy-snow.png';
  }
  if(c=='Patchy light snow with thunde' || c=='Light showers of ice pellets' ||c=='Moderate or heavy snow showers' || c=='Light snow showers' || c=='Moderate or heavy sleet showers' ||c=='Patchy snow possible'){
    document.getElementById('img-three').src='light-snow.png';
  }
  if(c=='Blizzard'){
    document.getElementById('img-three').src='blizzard.png';
  }
  if(c=='Fog' || c=='Freezing fog'){
    document.getElementById('img-three').src='fog.png';
  }

  
  



}


async function cardWeather(city, card) {
  let str3;
  city = city.toLocaleUpperCase();
  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43e1c58fcemsh507f538895f1b6dp18b6f5jsn06b2e249582e',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    str3 = JSON.parse(result);
    // console.log(str3);
    // console.log(typeof result);
  } catch (error) {
    alert('Enter a city name');
    console.error(error);
  }

  document.getElementById(card + '-temp').innerHTML = Math.round(parseFloat(str3['current']['temp_c'])) + '°C';
  document.getElementById(card + '-city').innerHTML = str3['location']['name'];
  document.getElementById(card + '-text').innerHTML = str3['current']['condition']['text'];

  let w = str3['current']['condition']['text'];

  if (w == 'Sunny') {
    document.getElementById(card + '-img').src = 'sunny.png';
  }
  if (w == 'Clear') {
    document.getElementById(card + '-img').src = 'clear.png';
  }
  if (w == 'Partly cloudy') {
    document.getElementById(card + '-img').src = 'partly-cloudy.png';
  }
  if (w == 'Cloudy' || w == 'Overcast') {
    document.getElementById(card + '-img').src = 'over-cast.png';
  }
  if (w == 'Mist') {
    document.getElementById(card + '-img').src = 'mist.png';
  }
  if (w == 'Patchy rain possible' || w == 'Light rain shower' || w == 'Light drizzle' || w == 'Freezing drizzle') {
    document.getElementById(card + '-img').src = 'light-rain.png';
  }
  if (w == 'Thundery outbreaks possible') {
    document.getElementById(card + '-img').src = 'heavy-rain.png';
  }
  if (w == 'Light rain' || w == 'Moderate rain' || w=='Torrential rain shower') {
    document.getElementById(card + '-img').src = 'moderate-rain.png';
  }
  if (w == 'Heavy rain' || w == 'Moderate or heavy rain with thunder' || w == 'Heavy freezing drizzle' || w=='Moderate or heavy rain shower' || w== 'Heavy rain at times') {
    document.getElementById(card + '-img').src = 'heavy-rain.png';
  }
  if (w == 'Heavy snow') {
    document.getElementById(card + '-img').src = 'heavy-snow.png';
  }
  if (w == 'Patchy light snow with thunde' || w == 'Light showers of ice pellets' || w == 'Moderate or heavy snow showers' || w == 'Light snow showers' || w == 'Moderate or heavy sleet showers' || w == 'Patchy snow possible') {
    document.getElementById(card + '-img').src = 'light-snow.png';
  }
  if (w == 'Blizzard') {
    document.getElementById(card + '-img').src = 'blizzard.png';
  }
  if (w == 'Fog' || w == 'Freezing fog') {
    document.getElementById(card + '-img').src = 'fog.png';
  }


  // console.log('hello '+str3['current']['condition']['text'])


}









function enter() {
  if (document.getElementById('search-field').value != '') {
    city = document.getElementById("search-field").value;
    // console.log(typeof city);
    let p = city.toLocaleUpperCase();
    // console.log(p);

    forecast(p);
    currentWeather(p);
  }
  else {
    alert('Enter a city name');
  }


}


function keyEnter() {


  let g = document.getElementById('search-field');

  if (g == document.activeElement) {
    // console.log(document.getElementById('search-field') == document.activeElement);
    // console.log('helloooooo');
    // console.log(document.getElementById('search-field') == document.activeElement);

    document.addEventListener('keydown', e => {
      // console.log(e);
      if (e.key === 'Enter') {
        enter();
      }

    })



  }

}






function start() {
  city = 'kolkata';
  currentWeather(city);
  // console.log(city);
  forecast(city);
  
  cardWeather("mumbai", 'card1');
  cardWeather("Delhi,india", 'card2');
  cardWeather("Bangalore", 'card3');
  cardWeather("chennai", 'card4');

  

  



}

// let p=city.toLocaleUpperCase();

// currentWeather(p);

// console.log(document.getElementById('search-field') == document.activeElement);






// document.getElementById(img).src='over-cast.png';

// function checkImg(a,img,day){

//   // if(a=='Sunny'){
//   //   document.getElementById(img).src='sunny.png';
//   // }
//   if(a=='Clear'){
//     document.getElementById(img).src='clear.png';
//   }
//   if(a=='Partly cloudy'){
//     document.getElementById(img).src='partly-cloudy.png';
//   }
//   if(a=='Cloudy' || w=='Overcast'){
//     document.getElementById(img).src='over-cast.png';
//   }
//   if(a=='Mist'){
//     document.getElementById(img).src='mist.png';
//   }
//   if(a=='Patchy rain possible' || a=='Light rain shower' || a=='Light drizzle' || a=='Freezing drizzle'){
//     document.getElementById(img).src='light-rain.png';
//   }
//   if(a=='Thundery outbreaks possible'){
//     document.getElementById(img).src='heavy-rain.png';
//   }
//   if(a=='Light rain' || a=='Moderate rain'){
//     document.getElementById(img).src='moderate-rain.png';
//   }
//   if(a=='Heavy rain' || a=='Moderate or heavy rain with thunder' || a=='Heavy freezing drizzle'){
//     document.getElementById(img).src='heavy-rain.png';
//   }
//   if(a=='Heavy snow'){
//     document.getElementById(img).src='conditions/heavy-snow.png';
//   }
//   if(a=='Patchy light snow with thunde' || a=='Light showers of ice pellets' ||a=='Moderate or heavy snow showers' || a=='Light snow showers' || a=='Moderate or heavy sleet showers' ||a=='Patchy snow possible'){
//     document.getElementById(img).src='light-snow.png';
//   }
//   if(a=='Blizzard'){
//     document.getElementById(img).src='blizzard.png';
//   }
//   if(a=='Fog' || a=='Freezing fog'){
//     document.getElementById(img).src='fog.png';
//   }



// }

// console.log('hello '+l)
// console.log('hello '+str3['current']['condition']['text'])




