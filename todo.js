const toDoForm = document.querySelector(".toDoForm-js"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector("toDoList-js");

const TODOS_LS = 'toDos';

function loadToDos(){
  const toDos = localStorage.getItem();
}

function init(){

  loadToDos();
}
init();