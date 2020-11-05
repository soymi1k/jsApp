const   clockContainer = document.querySelector(".js-clock"), /* 문서에서 js-clock 이라는 클래스명을 색인 */
        clockTitle = clockContainer.querySelector("h1"); //const 후 , 로 한번에 상수 지정/

function getTime(){ /* getTime이라는 함수 생성 */
    const date = new Date(); /* date는 내장함수 */
    const minutes = date.getMinutes(); /* 상수 date안의 getMinutes()를 호출 */
    const hours = date.getHours(); 
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ?`0${hours}` : hours}:${
        minutes < 10 ?`0${minutes}` : minutes}:${
        seconds < 10 ?`0${seconds}` : seconds 
    }`; /* 백틱, ${} 사용해서 상수 호출  */
}

function init(){
    getTime();
    setInterval(getTime, 1000);

}

init();  