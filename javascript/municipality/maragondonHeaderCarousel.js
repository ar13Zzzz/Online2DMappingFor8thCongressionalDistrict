var carouselContainerClass = "carousel-item";
var carouselClass = "d-block w-100";

var defaultHeaderCarouselSrc = [
    "../../images/maragondon/whereToExplore/naturalAttraction/pantihanFalls/pantihanFallsCover.jpg",
    "../../images/maragondon/whereToExplore/naturalAttraction/mtMarami/mtMaramiCover.jpg",
    "../../images/maragondon/whereToExplore/naturalAttraction/mtBuntis/mtBuntisCover.jpg",
    "../../images/maragondon/whereToExplore/park/andresBonifacioShrineAndEcoTourismPark/andresBonifacioShrineCover.jpg",
    "../../images/maragondon/whereToExplore/museum/bonifacioTrialHouse/bonifacioTrialHouseCover.jpg",
    "../../images/maragondon/whereToStay/resorts/riverfrontGardenResort/riverfrontCover.jpg",
    "../../images/maragondon/whereToStay/resorts/leVeRaHidden/leVeRaHiddenCover.jpg",
    "../../images/maragondon/whereToStay/resorts/dagisdisNgMaragondon/dagisdisNgMaragondon.jpg",
    "../../images/maragondon/whereToEat/cafe/battercaf/battercafCover.jpg",
    "../../images/maragondon/whereToEat/resto/honoriosRestaurant/honoriosCover.jpg",
    "../../images/maragondon/church/ourLadyOfAssumptionParishChurch/ourLadyOfAssumptionCover.jpg"
];
var whereToStayCarouselSrc = [
    "../../images/maragondon/whereToStay/resorts/riverfrontGardenResort/riverfrontCover.jpg",
    "../../images/maragondon/whereToStay/resorts/leVeRaHidden/leVeRaHiddenCover.jpg",
    "../../images/maragondon/whereToStay/resorts/dagisdisNgMaragondon/dagisdisNgMaragondon.jpg"
];
var whereToExploreCarouselSrc = [
    "../../images/maragondon/whereToExplore/naturalAttraction/pantihanFalls/pantihanFallsCover.jpg",
    "../../images/maragondon/whereToExplore/naturalAttraction/mtMarami/mtMaramiCover.jpg",
    "../../images/maragondon/whereToExplore/naturalAttraction/mtBuntis/mtBuntisCover.jpg",
    "../../images/maragondon/whereToExplore/park/andresBonifacioShrineAndEcoTourismPark/andresBonifacioShrineCover.jpg",
    "../../images/maragondon/whereToExplore/museum/bonifacioTrialHouse/bonifacioTrialHouseCover.jpg"
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
function insertContentToWhereToStay() {
    shuffleArray(whereToStayCarouselSrc);
    for (var i = 0; i < whereToStayCarouselSrc.length - 1; i++) {
        document.querySelector("#carouselWhereToStay .carousel-inner").innerHTML += '<div class="'+carouselContainerClass+'" > <img src="'+whereToStayCarouselSrc[i]+'" class="'+carouselClass+'" > </div>';
    }
}
function insertContentToWhereToExplore() {
    shuffleArray(whereToExploreCarouselSrc);
    for (var i = 0; i < whereToExploreCarouselSrc.length - 1; i++) {
        document.querySelector("#carouselWhereToExplore .carousel-inner").innerHTML += '<div class="'+carouselContainerClass+'" > <img src="'+whereToExploreCarouselSrc[i]+'" class="'+carouselClass+'" > </div>';
    }
}

insertDefaultCarouselSrc(); //to immediately shuffle the array after opening the page and insert inside the container