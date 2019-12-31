 const form = document.querySelector(".form-js"),
input = document.querySelector("input"),
USER_LS = "kim",
SHOWING_CN = "show",
gretting = document.querySelector(".gretting-js");


function saveName(text){
  localStorage.setItem(USER_LS, text);

}


function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGretting(currentValue);
    saveName(currentValue);
  });
}

function paintGretting(text){
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);
  gretting.innerText = `Hello ${text}`;

}


function loadName(){
const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  }else{
    paintGretting(currentUser);
  }
}
function init(){
loadName();

}
init();