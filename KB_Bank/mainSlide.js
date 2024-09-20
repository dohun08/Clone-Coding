const mainSlide = document.getElementById("mainSlide");
const imgBox1 = document.getElementById("imgBox1");
const imgBox2 = document.getElementById("imgBox2");
const imgBox3 = document.getElementById("imgBox3");

const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");

const stop = document.getElementById("stop");
const slide = 0;
let index = 1;
var k=1;
var start;
if(k){
    k--;
    start = setInterval(() => {mainSlides()}, 4000);
}
var i=1;
function stop_play(){
    if(i){
        console.log("3");
        clearInterval(start);
        stop.src = "img/play.png";
        i--;
    }
    else{
        start = setInterval(() => {mainSlides()}, 4000);
        stop.src = "img/stop.png";
        i++;
    }
}
function mainSlides(){
    if(index == 1){
        mainSlide.style.backgroundColor = "#EEFCE6";
        imgBox1.style.display = "block";
        imgBox2.style.display = "none";
        imgBox3.style.display = "none";

        buttonOne.classList.add("square");
        buttonTwo.classList.remove("square");
        buttonThree.classList.remove("square");
        
        buttonOne.classList.remove("circle");
        buttonTwo.classList.add("circle");
        buttonThree.classList.add("circle");
        index +=1;
    }
    else if(index ==2){
        mainSlide.style.backgroundColor = "#ddebfd";
        imgBox1.style.display = "none";
        imgBox2.style.display = "block";
        imgBox3.style.display = "none";

        buttonOne.classList.remove("square");
        buttonTwo.classList.add("square");
        buttonThree.classList.remove("square");
        
        buttonOne.classList.add("circle");
        buttonTwo.classList.remove("circle");
        buttonThree.classList.add("circle");
        index+=1;
    }
    else if(index ==3){
        mainSlide.style.backgroundColor = "#e5f7f6";
        imgBox1.style.display = "none";
        imgBox2.style.display = "none";
        imgBox3.style.display = "block";

        buttonOne.classList.remove("square");
        buttonTwo.classList.remove("square");
        buttonThree.classList.add("square");
        
        buttonOne.classList.add("circle");
        buttonTwo.classList.add("circle");
        buttonThree.classList.remove("circle");
        index = 1;
    }
}
function plus(){
    if(index == 1){
        mainSlide.style.backgroundColor = "#ddebfd";
        imgBox1.style.display = "none";
        imgBox2.style.display = "block";
        imgBox3.style.display = "none";

        buttonOne.classList.remove("square");
        buttonTwo.classList.add("square");
        buttonThree.classList.remove("square");
        
        buttonOne.classList.add("circle");
        buttonTwo.classList.remove("circle");
        buttonThree.classList.add("circle");
        index=2;
    }
    else if(index == 2){
        mainSlide.style.backgroundColor = "#e5f7f6";
        imgBox1.style.display = "none";
        imgBox2.style.display = "none";
        imgBox3.style.display = "block";

        buttonOne.classList.remove("square");
        buttonTwo.classList.remove("square");
        buttonThree.classList.add("square");
        
        buttonOne.classList.add("circle");
        buttonTwo.classList.add("circle");
        buttonThree.classList.remove("circle");
        index=3;
    }
    else if(index == 3){
        mainSlide.style.backgroundColor = "#EEFCE6";
        imgBox1.style.display = "block";
        imgBox2.style.display = "none";
        imgBox3.style.display = "none";

        buttonOne.classList.add("square");
        buttonTwo.classList.remove("square");
        buttonThree.classList.remove("square");
        
        buttonOne.classList.remove("circle");
        buttonTwo.classList.add("circle");
        buttonThree.classList.add("circle");
        index=1;
    }
}




function minus(){
    if(index==1){
        mainSlide.style.backgroundColor = "#e5f7f6";
        imgBox1.style.display = "none";
        imgBox2.style.display = "none";
        imgBox3.style.display = "block";

        buttonOne.classList.remove("square");
        buttonTwo.classList.remove("square");
        buttonThree.classList.add("square");
        
        buttonOne.classList.add("circle");
        buttonTwo.classList.add("circle");
        buttonThree.classList.remove("circle");
        index=3;
    }
    else if(index==2){
        mainSlide.style.backgroundColor = "#EEFCE6";
        imgBox1.style.display = "block";
        imgBox2.style.display = "none";
        imgBox3.style.display = "none";

        buttonOne.classList.add("square");
        buttonTwo.classList.remove("square");
        buttonThree.classList.remove("square");
        
        buttonOne.classList.remove("circle");
        buttonTwo.classList.add("circle");
        buttonThree.classList.add("circle");
        index=1;
    }
    else if(index==3){
        mainSlide.style.backgroundColor = "#ddebfd";
        imgBox1.style.display = "none";
        imgBox2.style.display = "block";
        imgBox3.style.display = "none";

        buttonOne.classList.remove("square");
        buttonTwo.classList.add("square");
        buttonThree.classList.remove("square");
        
        buttonOne.classList.add("circle");
        buttonTwo.classList.remove("circle");
        buttonThree.classList.add("circle");
        index=2;
    }
}