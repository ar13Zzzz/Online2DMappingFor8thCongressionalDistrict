var carouselContainerClass = "carousel-item";
var carouselClass = "d-block w-100";

var defaultHeaderCarouselSrc = [
    "../../images/bailen/whereToEat/resto/arFoodBistro/arFoodBistroCover.jpg",
    "../../images/bailen/whereToEat/resto/dannielsDen/dannielsDenCover.png",
    "../../images/bailen/whereToEat/cafe/tagpuanCafe/tagpuanCover.jpg",
    "../../images/bailen/whereToStay/resort/bangisNgBailen/bangisNgBailenCover.jpg",
    "../../images/bailen/whereToStay/resort/laFamiliaFarmAndResort/laFamiliaCover.png",
    "../../images/bailen/whereToStay/resort/talaRiverPark/talaRiverParkCover.jpg",
    "../../images/bailen/whereToExplore/naturalAttraction/malibiclibicFalls/malibiclibicCover.jpg",
    "../../images/bailen/church/stJosephParish/stJosephParishCover.jpg"
];
var whereToEatCarouselSrc = [
    "../../images/bailen/whereToEat/resto/arFoodBistro/arFoodBistroCover.jpg",
    "../../images/bailen/whereToEat/resto/dannielsDen/dannielsDenCover.png",
    "../../images/bailen/whereToEat/cafe/tagpuanCafe/tagpuanCover.jpg"

];
var whereToStayCarouselSrc = [
    "../../images/bailen/whereToStay/resort/bangisNgBailen/bangisNgBailenCover.jpg",
    "../../images/bailen/whereToStay/resort/laFamiliaFarmAndResort/laFamiliaCover.png",
    "../../images/bailen/whereToStay/resort/talaRiverPark/talaRiverParkCover.jpg"
];

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

function insertDefaultCarouselSrc() {
    shuffleArray(defaultHeaderCarouselSrc);
    for (var i = 0; i < defaultHeaderCarouselSrc.length - 1; i++) {
        document.querySelector("#defaultCarousel .carousel-inner").innerHTML += '<div class="'+carouselContainerClass+'" > <img src="'+defaultHeaderCarouselSrc[i]+'" class="'+carouselClass+'" > </div>';
    }
}
function insertContentToWhereToEat() {
    shuffleArray(whereToEatCarouselSrc);
    for (var i = 0; i < whereToEatCarouselSrc.length - 1; i++) {
        document.querySelector("#carouselWhereToEat .carousel-inner").innerHTML += '<div class="'+carouselContainerClass+'" > <img src="'+whereToEatCarouselSrc[i]+'" class="'+carouselClass+'" > </div>';
    }
}
function insertContentToWhereToStay() {
    shuffleArray(whereToStayCarouselSrc);
    for (var i = 0; i < whereToStayCarouselSrc.length - 1; i++) {
        document.querySelector("#carouselWhereToStay .carousel-inner").innerHTML += '<div class="'+carouselContainerClass+'" > <img src="'+whereToStayCarouselSrc[i]+'" class="'+carouselClass+'" > </div>';
    }
}

insertDefaultCarouselSrc(); //to immediately shuffle the array after opening the page and insert inside the container