var carouselContainerClass = "carousel-item";
var carouselClass = "d-block w-100";

var defaultHeaderCarouselSrc = [
    "../../images/naic/whereToEat/resto/amareLaCucina/amareCover.jpg",
    "../../images/naic/whereToEat/resto/mcylKtvAndResto/mcylCover.jpg",
    "../../images/naic/whereToEat/resto/panGrillRestoAndCafe/panGrillCover.jpg",
    "../../images/naic/whereToEat/restoBar/hideout/hideoutCover.jpg",
    "../../images/naic/whereToEat/cafe/lunaCafe/lunaCafeCover.jpg",
    "../../images/naic/whereToStay/resort/arvicSeasideBeachResort/seasideBeachResortCover.jpg",
    "../../images/naic/whereToStay/resort/torresFarmHotelAndResort/torresCover.jpg",
    "../../images/naic/church/naicChurch/diocesanShrineCover.jpg"
];
var whereToEatCarouselSrc = [
    "../../images/naic/whereToEat/resto/amareLaCucina/amareCover.jpg",
    "../../images/naic/whereToEat/resto/mcylKtvAndResto/mcylCover.jpg",
    "../../images/naic/whereToEat/resto/panGrillRestoAndCafe/panGrillCover.jpg",
    "../../images/naic/whereToEat/restoBar/hideout/hideoutCover.jpg",
    "../../images/naic/whereToEat/cafe/lunaCafe/lunaCafeCover.jpg"
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

insertDefaultCarouselSrc(); //to immediately shuffle the array after opening the page and insert inside the container