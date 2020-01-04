const LOCATED = "located";
const APIKEY = "d3360477cd6d456eee3dc53f71444f50";
const locateJs = document.querySelector('.locate-js');




function saveLocated(positionObj){
  localStorage.setItem(LOCATED, JSON.stringify(positionObj));
}

function wheaterAPI(latitude, longitude){
  fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
  ).then(function(response){
    return response.json();
  }).then(function(json){
    console.log(json);
    const weather = json.weather[0].main;
    const name = json.sys.country;
    locateJs.innerText = `${name}/${weather}`
  });
}

function error(){
  console.log("call located fail");
}
function succes(position){
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const positionObj = {
    latitude,
    longitude
  };
  saveLocated(positionObj);
  wheaterAPI(latitude, longitude);
}

function callLocate(){
  navigator.geolocation.getCurrentPosition(succes, error);

}

function init(){
 const locate = localStorage.getItem(LOCATED);
 if(locate == null){
   callLocate();
 }else{
   const LocateParse = JSON.parse(locate);
   wheaterAPI(LocateParse.latitude, LocateParse.longitude);
 }
};


init();