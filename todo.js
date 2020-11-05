const   toDoForm = document.querySelector(".js-toDoForm"),  /* toDoForm이라는 상수에 html파일의 class js-toDoForm 을 초기화 */
        toDoInput = toDoForm.querySelector("input"),        /* toDoForm에서 input 태그를 호출 해서 toDoInput 상수 초기화*/
        toDoList = document.querySelector(".js-toDoList");  /* toDoList상수에 html파일의 클래스명 .js-toDoList로 초기화 */

const   TODOS_LS = "toDos";                                 /* create constant TODOS_LS take element "toDos" string */

function paintToDo(text) {                                  /* paintToDo라는 이름으로 함수 초기화 */ 
  const li = document.createElement("li");                  /* html에 li라는 이름으로 list 태그 생성 (create list in the html) */
  const delBtn = document.createElement("button");          /* html에 상수 delBtn 의 버튼 생성 */
  delBtn.innerText = "❌";                                  /* delBtn(button type)안에 ❌ 를 넣어줌 (.innertext) */
  const span = document.createElement("span");              /* create const name of span -> create element span type in the html file */  
  span.innerText = text;                                    /* use const span and instert text(paintToDo(text)) in the span by .innerText */ 
  li.appendChild(delBtn);                                   /* create list by const li and append const delbtn */  
  li.appendChild(span);                                     /* create list by const li and append const span */ 
  toDoList.appendChild(li);                                 /* append toDoList by child(li) */ 
}

function handleSubmit(event) {                              /* function initialize that name is handleSubmit */
  event.preventDefault();                                   /* .preventDefault = dont refresh the page when eventing */
  const currentValue = toDoInput.value;                     /* create a constant name currentValue using a global constant(toDoInput.value(input)) */
  paintToDo(currentValue);                                  /* paint(append) toDoInput.value(input) wiht using paintToDo() function */
  toDoInput.value = "";                                     /* toDoInput initialize null */
}

function loadToDos() {                                      /* create function loadToDos */
  const toDos = localStorage.getItem(TODOS_LS);             /* create constant name  toDos */
  if (toDos !== null) {
  }
}

function init() {                                           /* create function name init */
  loadToDos();                                              /* access loadToDos */
  toDoForm.addEventListener("submit", handleSubmit);        /* when const toDoForm sumbmit, activate handleSubmit */
}

init();                                                     /* function init */