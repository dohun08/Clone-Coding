document.addEventListener('DOMContentLoaded', function() {
    const main = document.getElementById('main');
    const pages = document.querySelectorAll('.page');
    const appDownload = document.getElementById("appDownload");
    const riderButton = document.getElementById("rider-button-pc");
    const o = document.getElementById("o");
    const header = document.getElementById("header");
    const bmImg = document.querySelectorAll(".animation");
    const ochildren = o.children;
    let currentPage = 0;
    let isScrolling = false;
    const scrollDelay = 1000; // 스크롤 딜레이 (밀리초)


    function scrollToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < pages.length) { //스크롤됐을때 화면이동
            main.scrollTo({
                top: pages[pageIndex].offsetTop,
                behavior: 'smooth'
            });
            
            //클릭됐을때 화면이동
            ochildren[0].addEventListener("click", function(){
                main.scrollTo({
                    top:pages[1].offsetTop,
                    behavior: 'smooth'
                });
                pageIndex = 1;
                currentPage = 1;
                setTimeout(() => {
                    bmImg[0].style.display = "block";
                    bmImg[0].classList.add("bmHi");
                }, 500);
                o.classList.add("ohi");
                o.style.display = "flex";
                ochildren[0].src = "img/oO.png";
                ochildren[1].src = "img/o.png";
                ochildren[2].src = "img/o.png";
                ochildren[3].src = "img/o.png";
                ochildren[4].src = "img/o.png";
                ochildren[5].src = "img/o.png";
                ochildren[6].src = "img/o.png";
                riderButton.classList.add("buttonby");
                setTimeout(()=> {riderButton.style.display = "none"}, 700);
                document.getElementById("icon").style.width = "350px";
                appDownload.style.display = "block";
            });
            ochildren[1].addEventListener("click", function(){
                main.scrollTo({
                    top:pages[2].offsetTop,
                    behavior: 'smooth'
                });
                pageIndex = 2;
                currentPage = 2;
                setTimeout(() => {
                    bmImg[1].style.display = "block";
                    bmImg[1].classList.add("bmHi");
                }, 500);
                ochildren[0].src = "img/o.png";
                ochildren[1].src = "img/oO.png";
                ochildren[2].src = "img/o.png";
                ochildren[3].src = "img/o.png";
                ochildren[4].src = "img/o.png";
                ochildren[5].src = "img/o.png";
                ochildren[6].src = "img/o.png";
            });
            ochildren[2].addEventListener("click", function(){
                main.scrollTo({
                    top:pages[3].offsetTop,
                    behavior: 'smooth'
                });
                pageIndex = 3;
                currentPage = 3;
                setTimeout(() => {
                    bmImg[2].style.display = "block";
                    bmImg[2].classList.add("bmHi");
                }, 500);
                ochildren[0].src = "img/o.png";
                ochildren[1].src = "img/o.png";
                ochildren[2].src = "img/oO.png";
                ochildren[3].src = "img/o.png";
                ochildren[4].src = "img/o.png";
                ochildren[5].src = "img/o.png";
                ochildren[6].src = "img/o.png";
            });
            ochildren[3].addEventListener("click", function(){
                main.scrollTo({
                    top:pages[4].offsetTop,
                    behavior: 'smooth'
                });
                pageIndex = 4;
                currentPage = 4;
                setTimeout(() => {
                    bmImg[3].style.display = "block";
                    bmImg[3].classList.add("bmHi");
                }, 500);
                ochildren[0].src = "img/o.png";
                ochildren[1].src = "img/o.png";
                ochildren[2].src = "img/o.png";
                ochildren[3].src = "img/oO.png";
                ochildren[4].src = "img/o.png";
                ochildren[5].src = "img/o.png";
                ochildren[6].src = "img/o.png";
            });
            ochildren[4].addEventListener("click", function(){
                main.scrollTo({
                    top:pages[5].offsetTop,
                    behavior: 'smooth'
                });
                pageIndex = 5;
                currentPage = 5;
                setTimeout(() => {
                    bmImg[4].style.display = "block";
                    bmImg[4].classList.add("bmHi");
                }, 500);
                ochildren[0].src = "img/o.png";
                ochildren[1].src = "img/o.png";
                ochildren[2].src = "img/o.png";
                ochildren[3].src = "img/o.png";
                ochildren[4].src = "img/oO.png";
                ochildren[5].src = "img/o.png";
                ochildren[6].src = "img/o.png";
            });
            ochildren[5].addEventListener("click", function(){
                main.scrollTo({
                    top:pages[6].offsetTop,
                    behavior: 'smooth'
                });
                pageIndex = 6;
                currentPage = 6;
                setTimeout(() => {
                    bmImg[5].style.display = "block";
                    bmImg[5].classList.add("bmHi");
                }, 500);
                ochildren[0].src = "img/o.png";
                ochildren[1].src = "img/o.png";
                ochildren[2].src = "img/o.png";
                ochildren[3].src = "img/o.png";
                ochildren[4].src = "img/o.png";
                ochildren[5].src = "img/oO.png";
                ochildren[6].src = "img/o.png";
            });
            ochildren[6].addEventListener("click", function(){
                main.scrollTo({
                    top:pages[7].offsetTop,
                    behavior: 'smooth'
                });
                pageIndex = 7;
                currentPage = 7;
                setTimeout(() => {
                    bmImg[6].style.display = "block";
                    bmImg[6].classList.add("bmHi");
                }, 500);
                ochildren[0].src = "img/o.png";
                ochildren[1].src = "img/o.png";
                ochildren[2].src = "img/o.png";
                ochildren[3].src = "img/o.png";
                ochildren[4].src = "img/o.png";
                ochildren[5].src = "img/o.png";
                ochildren[6].src = "img/oO.png";
                setTimeout(() => {header.style.display = "block"}, 400);
                header.classList.remove("headerBy");
                header.classList.add("headerHi");
            });



            if(pageIndex == 0){
                o.classList.remove("ohi");
                o.classList.add("buttonby");
                setTimeout(() => {o.style.display = "none"}, 700);
                riderButton.classList.remove("buttonby");
                riderButton.style.display = "block";
                document.getElementById("icon").style.width = "180px";
                appDownload.style.display = "none";
            }
            else if(pageIndex == 1){
                setTimeout(() => {
                    bmImg[0].style.display = "block";
                    bmImg[0].classList.add("bmHi");
                }, 500);
                o.classList.add("ohi");
                o.style.display = "flex";
                ochildren[0].src = "img/oO.png";
                ochildren[1].src = "img/o.png";
                riderButton.classList.add("buttonby");
                setTimeout(()=> {riderButton.style.display = "none"}, 700);
                document.getElementById("icon").style.width = "350px";
                appDownload.style.display = "block";
            }
            else if(pageIndex == 2){
                setTimeout(() => {
                    bmImg[1].style.display = "block";
                    bmImg[1].classList.add("bmHi");
                }, 500);
                ochildren[0].src = "img/o.png";
                ochildren[1].src = "img/oO.png";
                ochildren[2].src = "img/o.png";
            }
            else if(pageIndex == 3){
                setTimeout(() => {
                    bmImg[2].style.display = "block";
                    bmImg[2].classList.add("bmHi");
                }, 500);
                ochildren[1].src = "img/o.png";
                ochildren[2].src = "img/oO.png";
                ochildren[3].src = "img/o.png";
            }
            else if(pageIndex == 4){
                setTimeout(() => {
                    bmImg[3].style.display = "block";
                    bmImg[3].classList.add("bmHi");
                }, 500);
                ochildren[2].src = "img/o.png";
                ochildren[3].src = "img/oO.png";
                ochildren[4].src = "img/o.png";
            }
            else if(pageIndex == 5){
                setTimeout(() => {
                    bmImg[4].style.display = "block";
                    bmImg[4].classList.add("bmHi");
                }, 500);
                ochildren[3].src = "img/o.png";
                ochildren[4].src = "img/oO.png";
                ochildren[5].src = "img/o.png";
            }
            else if(pageIndex == 6){
                setTimeout(() => {
                    bmImg[5].style.display = "block";
                    bmImg[5].classList.add("bmHi");
                }, 500);
                ochildren[4].src = "img/o.png";
                ochildren[5].src = "img/oO.png";
                ochildren[6].src = "img/o.png";
            }
            else if(pageIndex == 7){
                setTimeout(() => {
                    bmImg[6].style.display = "block";
                    bmImg[6].classList.add("bmHi");
                }, 500);
                ochildren[5].src = "img/o.png";
                ochildren[6].src = "img/oO.png";
                setTimeout(() => {header.style.display = "block"}, 400);
                header.classList.remove("headerBy");
                header.classList.add("headerHi");
            }
            else if(pageIndex == 8){
                
                header.classList.remove("headerHi");
                header.classList.add("headerBy");
                setTimeout(() => {header.style.display = "none"}, 400);
                
            }
            currentPage = pageIndex;
        }
    }

    window.addEventListener('wheel', function(event) {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            // Scroll down
            if (currentPage < pages.length - 1) {
                isScrolling = true;
                scrollToPage(currentPage + 1);
                setTimeout(() => isScrolling = false, scrollDelay);
                console.log(currentPage);
            }
        } else if (event.deltaY < 0) {
            // Scroll up
            if (currentPage > 0) {
                isScrolling = true;
                scrollToPage(currentPage - 1);
                setTimeout(() => isScrolling = false, scrollDelay);
            }
        }
    }, { passive: false });
});