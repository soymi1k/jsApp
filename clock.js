const   clockContainer = document.querySelector(".js-clock"),   /* 문서에서 js-clock 이라는 클래스명을 색인 */
        clockTitle = clockContainer.querySelector("h1");        //const 후 , 로 한번에 상수 지정/

function getTime(){                                             /* getTime이라는 함수 생성 */
    const date = new Date();                                    /* date는 내장함수 */
    const minutes = date.getMinutes();                          /* 상수 date안의 getMinutes()를 호출 */
    const hours = date.getHours();                              /* create constant name hours and use date constant, getHours */ 
    const seconds = date.getSeconds();                          /* same */
    clockTitle.innerText = `${                                  /* explore tag name h1 in class name js-clock by using constant clockContainer and clockTitle */
        hours < 10 ?`0${hours}` : hours}:${                     /* mini if syntax ? -> true, : -> false */
        minutes < 10 ?`0${minutes}` : minutes}:${
        seconds < 10 ?`0${seconds}` : seconds 
    }`;                                                         /* 백틱, ${} 사용해서 상수 호출  */
}

function init(){                                                /* create function name init */
    getTime();                                                  /* use function getTime */
    setInterval(getTime, 1000);                                 /* use built in function setInterval(), getTime() refresh 1000 ms */
    
}

init();                                                         /* activate init() */