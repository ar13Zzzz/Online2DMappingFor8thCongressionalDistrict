var carouselContainerClass = "carousel-item";
var carouselClass = "d-block w-100";

var defaultHeaderCarouselSrc = [
    "../../images/mendez/whereToEat/resto/eduardosGrillAndResto/eduardosCover.jpg",
    "../../images/mendez/whereToEat/resto/juddiesBulaloAtInihawExpress/juddiesCover.jpg",
    "../../images/mendez/whereToEat/resto/mannaCafeAndRestaurant/mannaCover.jpg",
    "../../images/mendez/whereToEat/resto/theTapsishopMendez/tapsishopCover.jpg",
    "../../images/mendez/whereToEat/cafe/cafeJulita/cafeJulitaCover.jpg",
    "../../images/mendez/whereToEat/cafe/kapenaPastriesAndBrews/kapeñaCover.jpg",
    "../../images/mendez/whereToEat/cafe/mugnifico/mugnificoCover.jpg",
    "../../images/mendez/whereToEat/cafe/mugnifico/mugnificoCover.jpg",
    "../../images/mendez/whereToStay/hotel/epFarmTagaytay/epFarmCover.jpg",
    "../../images/mendez/whereToStay/resort/cabanaDeAceron/cabanaDeAceronCover.jpg",
    "../../images/mendez/whereToStay/resort/enchanteFarm/enchanteFarmCover.jpg",
    "../../images/mendez/whereToStay/resort/juanasPrivateResortTagaytay/juanasPrivateResortCover.jpg",
    "../../images/mendez/whereToStay/resort/kinshipsResort/kinshipsCover.jpg",
    "../../images/mendez/whereToStay/resort/stJuliansSereneResort/stJuliansCover.jpg",
    "../../images/mendez/whereToStay/resort/villaDoroteoPrivateResort/villaDoroteoCover.jpg",
    "../../images/mendez/whereToExplore/zoo/paradozooThemeFarm/paradizooCover.jpg",
    "../../images/mendez/whereToExplore/zoo/yokisFarm/yokisFarmCover.jpg",
];
var whereToEatCarouselSrc = [
    "../../images/mendez/whereToEat/resto/eduardosGrillAndResto/eduardosCover.jpg",
    "../../images/mendez/whereToEat/resto/juddiesBulaloAtInihawExpress/juddiesCover.jpg",
    "../../images/mendez/whereToEat/resto/mannaCafeAndRestaurant/mannaCover.jpg",
    "../../images/mendez/whereToEat/resto/theTapsishopMendez/tapsishopCover.jpg",
    "../../images/mendez/whereToEat/cafe/cafeJulita/cafeJulitaCover.jpg",
    "../../images/mendez/whereToEat/cafe/kapenaPastriesAndBrews/kapeñaCover.jpg",
    "../../images/mendez/whereToEat/cafe/mugnifico/mugnificoCover.jpg",
    "../../images/mendez/whereToEat/cafe/mugnifico/mugnificoCover.jpg"
];
var whereToStayCarouselSrc = [
    "../../images/mendez/whereToStay/hotel/epFarmTagaytay/epFarmCover.jpg",
    "../../images/mendez/whereToStay/resort/cabanaDeAceron/cabanaDeAceronCover.jpg",
    "../../images/mendez/whereToStay/resort/enchanteFarm/enchanteFarmCover.jpg",
    "../../images/mendez/whereToStay/resort/juanasPrivateResortTagaytay/juanasPrivateResortCover.jpg",
    "../../images/mendez/whereToStay/resort/kinshipsResort/kinshipsCover.jpg",
    "../../images/mendez/whereToStay/resort/stJuliansSereneResort/stJuliansCover.jpg",
    "../../images/mendez/whereToStay/resort/villaDoroteoPrivateResort/villaDoroteoCover.jpg"
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