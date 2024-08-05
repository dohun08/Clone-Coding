
const slideTwo = document.querySelector("#slideTwo");
const slider = document.getElementById("#slideTwo-wrap");
const slideTwoSlider = document.querySelector("#slideTwo-slider");
const slideTwoLis = slideTwoSlider.querySelectorAll('li')
/* ul 넓이 계산해 주기 */
const liWidth = slideTwoLis[0].clientWidth;
const sliderWidth = 2800;
  
/* 리스너 설치하기 */
let currentIdx = 0; // 슬라이드 현재 번호
let translate = 0; // 슬라이드 위치 값
function start(){
    setInterval(()=> {slideTwos()}, 3000);
}
function slideTwos(){
    console.log("111");
    if(currentIdx == 8){
        currentIdx = 0;
        translate = -liWidth+liWidth;
        slider.style.transform = `translateX(${translate}px)`;
        slider.style.transition = "none";
      }
      else {
          translate -= liWidth;
          slider.style.transform = `translateX(${translate}px)`;
          currentIdx+=1;
          
      }
}
