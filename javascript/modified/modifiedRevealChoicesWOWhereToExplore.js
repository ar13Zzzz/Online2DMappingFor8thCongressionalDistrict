var carouselWhereToEat = document.getElementById('carouselWhereToEat');
var carouselWhereToStay = document.getElementById('carouselWhereToStay');
var carouselChurches = document.getElementById('carouselChurches');

var choicesWhereToEat = document.getElementById('whereToEat');
var choicesWhereToStay = document.getElementById('whereToStay');
var choicesChurches = document.getElementById('whereToChurches');

function revealWhereToEat() {
    if (window.innerWidth >= 770) {
        carouselWhereToEat.style.display = "block";
        carouselWhereToStay.style.display = "none";
        carouselChurches.style.display = "none";

        choicesWhereToEat.style.display = "block";
        choicesWhereToStay.style.display = "none";
        choicesChurches.style.display = "none";
    }
}
function revealWhereToStay() {
    if (window.innerWidth >= 770) {
        carouselWhereToEat.style.display = "none";
        carouselWhereToStay.style.display = "block";
        carouselChurches.style.display = "none";
        
        choicesWhereToEat.style.display = "none";
        choicesWhereToStay.style.display = "block";
        choicesChurches.style.display = "none";
    }
}
function revealWhereToChurches() {
    if (window.innerWidth >= 770) {
        carouselWhereToEat.style.display = "none";
        carouselWhereToStay.style.display = "none";
        carouselChurches.style.display = "block";
        
        choicesWhereToEat.style.display = "none";
        choicesWhereToStay.style.display = "none";
        choicesChurches.style.display = "block";
    }
}

// code to display the fixed back to top button on the right side
var backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if (window.innerWidth >= 770) {
        if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
            backToTopBtn.style.display = "block";
        }else {
            backToTopBtn.style.display = "none";
        }
    }
    else if (window.innerWidth <= 430) {
        if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
            backToTopBtn.style.display = "block";
        }else {
            backToTopBtn.style.display = "none";
        }
    }
    else {
        if(document.body.scrollTop > 375 || document.documentElement.scrollTop > 375){
            backToTopBtn.style.display = "block";
        }else {
            backToTopBtn.style.display = "none";
        }
    }
}