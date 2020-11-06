const   toDoForm = document.querySelector(".js-toDoForm"),  /* toDoForm이라는 상수에 html파일의 class js-toDoForm 을 초기화 */
        toDoInput = toDoForm.querySelector("input"),        /* toDoForm에서 input 태그를 호출 해서 toDoInput 상수 초기화*/
        toDoList = document.querySelector(".js-toDoList");  /* toDoList상수에 html파일의 클래스명 .js-toDoList로 초기화 */

const   TODOS_LS = "toDos";                                 /* create constant TODOS_LS take element "toDos" string */

let toDos = [];                                             /* create constant toDos as empty array */

 function deleteToDo(event) {                               /* create deleteToDo function */
   const btn = event.target;                                /* constant btn even */
   const li = btn.parentNode;                               /* constant li  */
   toDoList.removeChild(li);                                /* remove li in toDoList */ 
   const cleanToDos = toDos.filter(function(toDo) {         /* create cleanToDos */
     return toDo.id !== parseInt(li.id);
   });
   toDos = cleanToDos;
   saveToDos();
 }

function saveToDos() {                                      /* create function name saveToDos this function will save localstorage */
 localStorage.setItem(TODOS_LS, JSON.stringify(toDos));     /* localstorage can not save data type in Js(only save string) so JSON.stringify can change any Js's object to string */
}

function paintToDo(text) {                                  /* paintToDo라는 이름으로 함수 초기화 */ 
  const li = document.createElement("li");                  /* html에 li라는 이름으로 list 태그 생성 (create list in the html) */
  const delBtn = document.createElement("button");          /* html에 상수 delBtn 의 버튼 생성 */
  const span = document.createElement("span");              /* create const name of span -> create element span type in the html file */  
  const newId = toDos.length + 1;                           /* create constant name newId toDos element num +1 만큼 */
  span.innerText = text;                                    /* use const span and instert text(paintToDo(text)) in the span by .innerText */ 
  delBtn.innerText = "❌";                                  /* delBtn(button type)안에 ❌ 를 넣어줌 (.innertext) */
  delBtn.addEventListener("click", deleteToDo);
  li.appendChild(delBtn);                                   /* create list by const li and append const delbtn */  
  li.appendChild(span);                                     /* create list by const li and append const span */ 
  li.id = newId                                             /* append id to constant name li as newId */
  toDoList.appendChild(li);                                 /* append toDoList by child(li) */
  const toDoObj = {                                         /* create constant toDoObj for string  */
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos(); 
}

function handleSubmit(event) {                              /* function initialize that name is handleSubmit */
  event.preventDefault();                                   /* .preventDefault = dont refresh the page when eventing */
  const currentValue = toDoInput.value;                     /* create a constant name currentValue using a global constant(toDoInput.value(input)) */
  paintToDo(currentValue);                                  /* paint(append) toDoInput.value(input) wiht using paintToDo() function */
  toDoInput.value = "";                                     /* toDoInput initialize null */
}

function loadToDos() {                                      /* after save toDos, loading toDos function */
  const loadedToDos = localStorage.getItem(TODOS_LS);       /* create constant loadedToDos, take in localStorage constant TODOS_LS */ 
   if (loadedToDos !== null) {                              /* when loadedToDos is not null, */
     const parsedToDos = JSON.parse(loadedToDos);           /* create constant parsedToDos change loadedToDos as type parse */ 
     parsedToDos.forEach(function(toDo) {                   /* mini function for eachtime */
       paintToDo(toDo.text);
     });
  }
} /* JSON mean Js Object notation */

function init() {                                           /* create function name init */
  loadToDos();                                              /* access loadToDos */
  toDoForm.addEventListener("submit", handleSubmit);        /* when const toDoForm sumbmit, activate handleSubmit */
}

init();                                                     /* function init github init*/