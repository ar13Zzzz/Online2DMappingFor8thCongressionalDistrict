var carouselContainerClass = "carousel-item";
var carouselClass = "d-block w-100";

var defaultHeaderCarouselSrc = [
    "../../images/magallanes/whereToStay/hotel/papingsStaycationAndCampsite/papingsCover.jpg",
    "../../images/magallanes/whereToStay/resort/eplaceResort/ePlaceCover.jpg",
    "../../images/magallanes/whereToStay/resort/theBrut/theBrutCover.jpg",
    "../../images/magallanes/whereToExplore/naturalAttraction/buhayForest/buhayForestCover.jpg",
    "../../images/magallanes/whereToExplore/naturalAttraction/utodRiverAndFalls/utodCover.jpg",
    "../../images/magallanes/churches/nuestraSenoraDeGuiaParish/nuestraSenoraCover.jpg",
    "../../images/magallanes/whereToEat/resto/aripungyaw/aripungyawCover.jpg",
    "../../images/magallanes/whereToEat/cafe/earthsCupCoffeeAndCacaoFarm/earthsCupCover.jpg",
    "../../images/magallanes/whereToEat/cafe/kniCoffeeAndSnacks/kniCover.jpg",
    "../../images/magallanes/whereToEat/cafe/salipitCoffeeFarm/salipitCover.jpg"
];
var whereToEatCarouselSrc = [
    "../../images/magallanes/whereToEat/resto/aripungyaw/aripungyawCover.jpg",
    "../../images/magallanes/whereToEat/cafe/earthsCupCoffeeAndCacaoFarm/earthsCupCover.jpg",
    "../../images/magallanes/whereToEat/cafe/kniCoffeeAndSnacks/kniCover.jpg",
    "../../images/magallanes/whereToEat/cafe/salipitCoffeeFarm/salipitCover.jpg"
];
var whereToStayCarouselSrc = [
    "../../images/magallanes/whereToStay/hotel/papingsStaycationAndCampsite/papingsCover.jpg",
    "../../images/magallanes/whereToStay/resort/eplaceResort/ePlaceCover.jpg",
    "../../images/magallanes/whereToStay/resort/theBrut/theBrutCover.jpg"
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