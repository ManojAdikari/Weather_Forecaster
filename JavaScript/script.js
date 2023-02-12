
var geocoder;
var lat;
var lng;
var currentTime;
var leftMenu = document.getElementById("MenuList");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}
//Get the latitude and the longitude;
function successFunction(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    Get_Current_location_data(lat,lng);
    Add_Local_Storage_data();
}

function errorFunction() {
    alert("Geocoder failed");
}

function initialize() {
    geocoder = new google.maps.Geocoder();



}




function Get_Current_location_data(latEL, lon) {
    var locQueryUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + latEL + "&lon=" + lon + "&appid=86f449b1686830557920b88a72ce844c&units=metric";
    // 
    fetch(locQueryUrl)
        .then(function (response) {
          
            return response.json();
        })
        .then(function (data) {

            var location = document.getElementById("location"); desc
            var desc = document.getElementById("desc");
            var weathericon = document.getElementById("weather-icon");
            var sunrise = document.getElementById("sunrise");
            var sunset = document.getElementById("sunset");
            var tempC = document.getElementById("c");
            var tempF = document.getElementById("f");
            location.textContent = "     " + data.name;
            var icon = data.weather[0].icon;
            var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            weathericon.src = iconUrl;

            var sunriseGMT = new Date(data.sys.sunrise * 1000);
            var sunsetGMT = new Date(data.sys.sunset * 1000);
            sunrise.textContent = sunriseGMT.toLocaleTimeString() + "  " + "   ";
            sunset.textContent = sunsetGMT.toLocaleTimeString() + "  " + "   ";

            var temp = data.main.temp;
            var fahrenheit = (temp * 9) / 5 + 32;
            console.table(data);
            tempC.textContent = temp.toFixed(2) + " " + "°C";
            tempF.textContent = fahrenheit.toFixed(2) + " " + "°F";
            Get_weather_data_for_next_five_dats(lat, lng);
            getDateTime();

        });
}

function Get_weather_data_for_next_five_dats(latEL, lon) {
    var date1Img = document.getElementById("date1Img");
    var date1 = document.getElementById("date1");
    var date1desc = document.getElementById("date1desc");
    var date1_Tempc = document.getElementById("date1_Tempc");
    var date1_Tempf = document.getElementById("date1_Tempf");
    var date1_wind = document.getElementById("date1_wind");
    var date1_Humin = document.getElementById("date1_Humin");

    var date2Img = document.getElementById("date2Img");
    var date2 = document.getElementById("date2");
    var date2desc = document.getElementById("date2desc");
    var date2_Tempc = document.getElementById("date2_Tempc");
    var date2_Tempf = document.getElementById("date2_Tempf");
    var date2_wind = document.getElementById("date2_wind");
    var date2_Humin = document.getElementById("date2_Humin");
    
    var date3Img = document.getElementById("date3Img");
    var date3 = document.getElementById("date3");
    var date3desc = document.getElementById("date3desc");
    var date3_Tempc = document.getElementById("date3_Tempc");
    var date3_Tempf = document.getElementById("date3_Tempf");
    var date3_wind = document.getElementById("date3_wind");
    var date3_Humin = document.getElementById("date3_Humin");

    var date4Img = document.getElementById("date4Img");
    var date4 = document.getElementById("date4");
    var date4desc = document.getElementById("date4desc");
    var date4_Tempc = document.getElementById("date4_Tempc");
    var date4_Tempf = document.getElementById("date4_Tempf");
    var date4_wind = document.getElementById("date4_wind");
    var date4_Humin = document.getElementById("date4_Humin");

    var date5Img = document.getElementById("date5Img");
    var date5 = document.getElementById("date5");
    var date5desc = document.getElementById("date5desc");
    var date5_Tempc = document.getElementById("date5_Tempc");
    var date5_Tempf = document.getElementById("date5_Tempf");
    var date5_wind = document.getElementById("date5_wind");
    var date5_Humin = document.getElementById("date5_Humin");

    var locQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latEL + "&lon=" + lon + "&appid=86f449b1686830557920b88a72ce844c&units=metric";
    //"https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=86f449b1686830557920b88a72ce844c&units=metric";
    fetch(locQueryUrl)
        .then(function (response) {

            return response.json();
        })
        .then(function (data) {

         
            var Fivedays = data.list.filter((e) => e.dt_txt.includes('09:00:00'))


            if (Fivedays.length === 5) {

                var icon = Fivedays[0].weather[0].icon;
                var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                date1Img.src = iconUrl;
                date1.textContent = Fivedays[0].dt_txt.slice(0, 10);
                date1desc.textContent =Fivedays[0].weather[0].description;
                date1_Tempc.textContent = Fivedays[0].main.feels_like.toFixed(2) + " " + "°C";
                date1_Tempf.textContent = ((Fivedays[0].main.feels_like * 9) / 5 + 32).toFixed(2) + " " + "°F";
                date1_wind.textContent = Fivedays[0].wind.speed + ' KMs/H';
                date1_Humin.textContent = Fivedays[0].main.humidity + '%';

                var icon = Fivedays[1].weather[0].icon;
                var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                date2Img.src = iconUrl;
                date2.textContent = Fivedays[1].dt_txt.slice(0, 10);
                date2desc.textContent =Fivedays[1].weather[0].description;
                date2_Tempc.textContent = Fivedays[1].main.feels_like.toFixed(2) + " " + "°C";
                date2_Tempf.textContent = ((Fivedays[1].main.feels_like * 9) / 5 + 32).toFixed(2) + " " + "°F";
                date2_wind.textContent = Fivedays[1].wind.speed + ' KMs/H';
                date2_Humin.textContent = Fivedays[1].main.humidity + '%';

                var icon = Fivedays[2].weather[0].icon;
                var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                date3Img.src = iconUrl;
                date3.textContent = Fivedays[2].dt_txt.slice(0, 10);
                date3desc.textContent =Fivedays[2].weather[0].description;
                date3_Tempc.textContent = Fivedays[2].main.feels_like.toFixed(2) + " " + "°C";
                date3_Tempf.textContent = ((Fivedays[2].main.feels_like * 9) / 5 + 32).toFixed(2) + " " + "°F";
                date3_wind.textContent = Fivedays[2].wind.speed + ' KMs/H';
                date3_Humin.textContent = Fivedays[2].main.humidity + '%';

                var icon = Fivedays[3].weather[0].icon;
                var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                date4Img.src = iconUrl;
                date4.textContent = Fivedays[3].dt_txt.slice(0, 10);
                date4desc.textContent =Fivedays[3].weather[0].description;
                date4_Tempc.textContent = Fivedays[3].main.feels_like.toFixed(2) + " " + "°C";
                date4_Tempf.textContent = ((Fivedays[3].main.feels_like * 9) / 5 + 32).toFixed(2) + " " + "°F";
                date4_wind.textContent = Fivedays[3].wind.speed + ' KMs/H';
                date4_Humin.textContent = Fivedays[3].main.humidity + '%';

                var icon = Fivedays[4].weather[0].icon;
                var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                date5Img.src = iconUrl;
                date5.textContent = Fivedays[4].dt_txt.slice(0, 10);
                date5desc.textContent =Fivedays[4].weather[0].description;
                date5_Tempc.textContent = Fivedays[4].main.feels_like.toFixed(2) + " " + "°C";
                date5_Tempf.textContent = ((Fivedays[4].main.feels_like * 9) / 5 + 32).toFixed(2) + " " + "°F";
                date5_wind.textContent = Fivedays[4].wind.speed + ' KMs/H';
                date5_Humin.textContent = Fivedays[4].main.humidity + '%';

            }







        });


}

async function Search_new_city_data()
{
    var cityname = document.getElementById("city-name");
    if(cityname.value!=="")
    {
        Get_Selected_City_Data(cityname.value,"Save")
    }

}

function Get_Selected_City_Data(city_name,Acction)
{
    var latEl;
    var lonEl;
    var locQueryUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city_name + "&appid=86f449b1686830557920b88a72ce844c&units=metric&country=AU";
    //"https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=86f449b1686830557920b88a72ce844c&units=metric";
    fetch(locQueryUrl)
        .then(function (response) {


            return response.json();
        })
      .then(function (data) {
       if(data.length!==0)
       {
        latEl = data[0].lat;
        lonEl = data[0].lon;
        Set_Selected_city_data(latEl,lonEl);
        Get_weather_data_for_next_five_dats(latEl, lonEl);
        if(Acction==="Save"){
            Save_To_Local_Storage(city_name);
        }
        
       }
       else{
        window.alert(["Please enter a valid city name"]);
       }
        
      });

}

function Set_Selected_city_data(latEL, lon) {
    var locQueryUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + latEL + "&lon=" + lon + "&appid=86f449b1686830557920b88a72ce844c&units=metric";
    // 
    fetch(locQueryUrl)
        .then(function (response) {
            // In order to use the data, it must first be parsed. Use .json() when the
            // API response format is JSON.
            return response.json();
        })
        .then(function (data) {

            var location = document.getElementById("location"); desc
            var desc = document.getElementById("desc");
            var weathericon = document.getElementById("weather-icon");
            var sunrise = document.getElementById("sunrise");
            var sunset = document.getElementById("sunset");
            var tempC = document.getElementById("c");
            var tempF = document.getElementById("f");
            location.textContent = "     " + data.name;
            var icon = data.weather[0].icon;
            var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            weathericon.src = iconUrl;

            var sunriseGMT = new Date(data.sys.sunrise * 1000);
            var sunsetGMT = new Date(data.sys.sunset * 1000);
            sunrise.textContent = sunriseGMT.toLocaleTimeString() + "  " + "   ";
            sunset.textContent = sunsetGMT.toLocaleTimeString() + "  " + "   ";

            var temp = data.main.temp;
            var fahrenheit = (temp * 9) / 5 + 32;
            console.table(data);
            tempC.textContent = temp.toFixed(2) + " " + "°C";
            tempF.textContent = fahrenheit.toFixed(2) + " " + "°F";
           
        });
}

function Save_To_Local_Storage(CITY) {
    if (CITY == "") {
      
    }
    else {
      
      var CITYNAME = CITY;
      let save = [];
      save = JSON.parse(localStorage.getItem('Citys')) || [];
      console.table(save);
      save.push([CITYNAME]);
      localStorage.setItem("Citys", JSON.stringify(save));
      Add_Local_Storage_data();
    }
  }
  
  //-----------------------------Add Local Storage data to Left Menu 
  function Add_Local_Storage_data () {
    //localStorage.removeItem("PlayList");
    var ul = document.querySelector('#MenuList');
    var listLength = ul.children.length;
    if (listLength != 0) {
      for (i = 0; i < listLength; i++) {
        ul.removeChild(ul.children[0]);
      }
    }
    let LocCity = [];
    LocCity = JSON.parse(localStorage.getItem('Citys'));
    if (LocCity != null) {
      for (var i = 0; i < LocCity.length; i++) {
        
        var val = LocCity[i][0];
        var el = document.createElement('li');
        el.textContent =val;
        el.val = val;
        leftMenu.appendChild(el);
      }
    }
  }

function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
    setInterval();
}

// example usage: realtime clock
setInterval(function () {
    currentTime = getDateTime();
    document.getElementById("Today").innerHTML = currentTime;
}, 1000);

leftMenu.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
      SelectedListItemValue = e.target.val;
      SelectedListItemText = e.target.innerText;
      Get_Selected_City_Data(SelectedListItemText,"Play");
    }
  });
  