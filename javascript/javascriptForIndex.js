var carouselContainerClass = "carousel-item";
var activeCarouselContainerClass = "carousel-item active"
var carouselClass = "d-block w-100";
var carouselForPcSrc = [
    "images/bgImage/alfonsoBg.jpg",
    "images/bgImage/BailenBg.jpg",
    "images/bgImage/magallanesBg.JPG",
    "images/bgImage/maragondonBg.jpg",
    "images/bgImage/mendezBg.jpg",
    "images/bgImage/naicBg.jpg",
    "images/bgImage/tagaytayBg.JPG",
    "images/bgImage/ternateBg.jpg"
]
var carouselForPhoneSrc = [
    "images/bgImage/alfonsoBgPhone.jpg",
    "images/bgImage/magallanesBgPhone.JPG",
    "images/bgImage/maragondonBgPhone.jpg",
    "images/bgImage/mendezBgPhone.jpg",
    "images/bgImage/naicBgPhone.jpg",
    "images/bgImage/BailenBgPhone.jpg",
    "images/bgImage/tagaytayBgPhone.JPG",
    "images/bgImage/ternateBgPhone.jpg"
]

function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}

function injectSrcOfCarousel() {
    shuffleArray(carouselForPcSrc);
    shuffleArray(carouselForPhoneSrc);
    if (window.innerWidth >= 770) {
        document.querySelector("#defaultCarousel .carousel-inner").innerHTML = '<div class="'+activeCarouselContainerClass+'" > <img src="'+carouselForPcSrc[0]+'" class="'+carouselClass+'" > </div>';
        for (let i = 1; i < carouselForPcSrc.length; i++) {
            document.querySelector("#defaultCarousel .carousel-inner").innerHTML += '<div class="'+carouselContainerClass+'" > <img src="'+carouselForPcSrc[i]+'" class="'+carouselClass+'" > </div>';
        }
    }else {
        document.querySelector("#defaultCarousel .carousel-inner").innerHTML = '<div class="'+activeCarouselContainerClass+'" > <img src="'+carouselForPhoneSrc[0]+'" class="'+carouselClass+'" > </div>';
        for (let i = 1; i < carouselForPhoneSrc.length; i++) {
            document.querySelector("#defaultCarousel .carousel-inner").innerHTML += '<div class="'+carouselContainerClass+'" > <img src="'+carouselForPhoneSrc[i]+'" class="'+carouselClass+'" > </div>';
        }
    }
}

injectSrcOfCarousel();

var colors = [
    "#dc3545",
    "#fd7e14",
    "#ffc107",
    "#198754",
    "#0d6efd",
    "#6610f2",
    "#6f42c1"
]

document.getElementById("startToExploreBtn").style.backgroundColor = colors[(Math.floor(Math.random()*colors.length))];