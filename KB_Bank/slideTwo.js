
const slideTwo = document.querySelector("#slideTwo");
const slider = document.getElementById("#slideTwo-wrap");
const slideTwoSlider = document.querySelector("#slideTwo-slider");
const slideTwoLis = slideTwoSlider.querySelectorAll('li')
/* ul 넓이 계산해 주기 */
const liWidth = 350;
const sliderWidth = 2800;
  
/* 리스너 설치하기 */
let currentIdx = 0; // 슬라이드 현재 번호
let translate = 0; // 슬라이드 위치 값

const stop2 = document.getElementById("stop2");
var start2 = setInterval(()=> {slideTwos()}, 5000);
var j=1;
function start_play2(){
    if(j){
        clearInterval(start2);
        j=0;
        stop2.src = "img/play.png";
        
    }
    else{
        start2 = setInterval(()=> {slideTwos()}, 5000);
        j=1;
        stop2.src = "img/stop2.png";
    }
}
function slideTwos(){
    if(currentIdx == 7){
        currentIdx = 0;
        translate = -liWidth+liWidth;
        
        slideTwoSlider.style.transition = "none";
        slideTwoSlider.style.transform = `translateX(0px)`;
        
      }
      else {
          translate -= liWidth;
          slideTwoSlider.style.transition = "0.5s";
          slideTwoSlider.style.transform = `translateX(${translate}px)`;
          currentIdx+=1;
          console.log(translate);
          console.log(currentIdx);
      }
}


//클릭하여 조절하기
function left(){
    if(currentIdx-1 == -1){
        currentIdx = 6;
        translate = -2100
        slideTwoSlider.style.transition = "0.5s";
        slideTwoSlider.style.transform = `translateX(-2100px)`;
    }
    else {
        translate += liWidth;
        slideTwoSlider.style.transition = "0.5s";
        slideTwoSlider.style.transform = `translateX(${translate}px)`;
        currentIdx-=1;
    }
}
function right(){
    if(currentIdx == 7){
        currentIdx = 0;
        translate = -liWidth+liWidth;
        
        slideTwoSlider.style.transition = "none";
        slideTwoSlider.style.transform = `translateX(0px)`;
    }
    else{
        translate -= liWidth;
        slideTwoSlider.style.transition = "0.5s";
        slideTwoSlider.style.transform = `translateX(${translate}px)`;
        currentIdx+=1;
    }
    
}