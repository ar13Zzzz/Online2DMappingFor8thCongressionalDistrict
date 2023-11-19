var carouselContainerClass = "carousel-item";
var carouselClass = "d-block w-100";

var defaultHeaderCarouselSrc = [
    "../../images/ternate/whereToEat/resto/chefJohnsGardenCafeRestaurant/chefJohnCover.jpg",
    "../../images/ternate/whereToEat/resto/theDeckRestaurant/theDeckCover.jpg",
    "../../images/ternate/whereToEat/resto/seaviewTernate/seaviewTernateCover.jpg",
    "../../images/ternate/whereToEat/cafe/cafeHellas/cafeHellasCover.jpg",
    "../../images/ternate/whereToEat/cafe/mountainBrewCoffeeShop/mountainBrewCover.jpg",
    "../../images/ternate/whereToStay/hotel/abucanaCamp/abucanaCover.jpg",
    "../../images/ternate/whereToStay/resort/boracayDeCavite/katungkulanCover.jpg",
    "../../images/ternate/whereToStay/resort/casaLasBrisas/casaLasBrisasCover.jpg",
    "../../images/ternate/whereToStay/resort/coolWavesPuertoAzul/coolWavesCover.jpg",
    "../../images/ternate/whereToStay/resort/panimanBeachResort/panimanCover.jpg",
    "../../images/ternate/whereToStay/resort/ternateBeachResort/ternateBeachResortCover.jpg",
    "../../images/ternate/whereToExplore/naturalAttraction/caylabneBayResortAndMarina/caylabneCover.jpg",
    "../../images/ternate/whereToExplore/naturalAttraction/caynipaCove/caynipaCoveCover.jpg"
];
var whereToEatCarouselSrc = [
    "../../images/ternate/whereToEat/resto/chefJohnsGardenCafeRestaurant/chefJohnCover.jpg",
    "../../images/ternate/whereToEat/resto/theDeckRestaurant/theDeckCover.jpg",
    "../../images/ternate/whereToEat/resto/seaviewTernate/seaviewTernateCover.jpg",
    "../../images/ternate/whereToEat/cafe/cafeHellas/cafeHellasCover.jpg",
    "../../images/ternate/whereToEat/cafe/mountainBrewCoffeeShop/mountainBrewCover.jpg"
];
var whereToStayCarouselSrc = [
    "../../images/ternate/whereToStay/hotel/abucanaCamp/abucanaCover.jpg",
    "../../images/ternate/whereToStay/resort/boracayDeCavite/katungkulanCover.jpg",
    "../../images/ternate/whereToStay/resort/casaLasBrisas/casaLasBrisasCover.jpg",
    "../../images/ternate/whereToStay/resort/coolWavesPuertoAzul/coolWavesCover.jpg",
    "../../images/ternate/whereToStay/resort/panimanBeachResort/panimanCover.jpg",
    "../../images/ternate/whereToStay/resort/ternateBeachResort/ternateBeachResortCover.jpg"
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