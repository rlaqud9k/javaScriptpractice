const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imageNumber){
  const image = new Image();
  image.src = `image/${imageNumber + 1}.jpg`;
  body.prepend(image);
  image.classList.add("bgImage")
  image.addEventListener("loadend", function(){

  })

}

function genRandom(){
  const num = Math.floor(Math.random() *3);
  return num;

}

function init(){
  const randomNumber =genRandom();
  paintImage(randomNumber);
}

init();