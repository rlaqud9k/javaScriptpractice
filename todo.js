const toDoForm = document.querySelector(".toDoForm-js"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".toDoList-js");

const TODOS_LS = 'toDos';
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";

  delBtn.addEventListener("click", function(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(ToDo){
      return ToDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
  })

  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text : text,
    id: newId 
  };
  toDos.push(toDoObj);
  saveToDos(); 
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
  }

function loadToDos(){
  const loadToDos = localStorage.getItem(TODOS_LS);
  if(loadToDos != null){
      const parsedToDos = JSON.parse(loadToDos);
      parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
      });

  }
}

function init(){

  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();