var carouselContainerClass = "carousel-item";
var carouselClass = "d-block w-100";

var defaultHeaderCarouselSrc = [
    "../../images/alfonso/whereToEat/restoLang/alfrescoRestaurant1911/alfrescoDiningCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/burgersAhuy/burgersAhuyCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/crosswings/crosswingsCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/girasolTagaytay/girasolCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/kashingsBistro/kashingsCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/marciaAdamsRestaurant/marciaAdamsCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/monsRestaurant/monsRestaurantCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/queensStrawberryFarm/queensStrawberryFarmCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/sonyasGarden/sonyasGardenCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/tanawinSaGulod/tanawinSaGulodCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/teresetoz/teresitozCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/theBlueRoomDIningTagaytay/blueRoomCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/tiyaDelisGardenRestaurant/tiyaDelisCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/verdiviewRestaurant/verdiviewCover.jpg",
    "../../images/alfonso/whereToEat/japaneseResto/suruginRamenHouse/suruginCover.jpg",
    "../../images/alfonso/whereToEat/japaneseResto/zenzenJapaneseFoodHaulAndCafe/zenzenCover.jpg",
    "../../images/alfonso/whereToEat/cafe/highGrindCafe/highGrindCover.jpg",
    "../../images/alfonso/whereToEat/cafe/kapeanCoffeePh/kapeanCover.jpg",
    "../../images/alfonso/whereToEat/cafe/khalakutiCafe/khalakutiCover.jpg",
    "../../images/alfonso/whereToEat/cafe/lequestriaCafe/lequestriaCover.jpg",
    "../../images/alfonso/whereToEat/cafe/linleysKitchenCafe/linleysCover.jpg",
    "../../images/alfonso/whereToEat/cafe/theRidgeCafeTagaytay/theRidgeCover.jpg",
    "../../images/alfonso/whereToEat/cafe/theTigerAlleyFarmAndGardenCafe/tigerAlleyCover.jpg",
    "../../images/alfonso/whereToEat/cafe/theWhiteDomeCafe/whiteDomeCover.jpg",
    "../../images/alfonso/whereToEat/cafe/yssasCoffeeHouse/yssaCover.jpg",
    "../../images/alfonso/whereToStay/hotel/abaganTiManila/abagatanCover.jpg",
    "../../images/alfonso/whereToStay/hotel/hillcreekGardensTagaytay/hillcreekCover.jpg",
    "../../images/alfonso/whereToStay/resort/campBenjamin/campBenjaminCover.jpg",
    "../../images/alfonso/whereToStay/resort/eljoysForestResort/eljoyCover.jpg",
    "../../images/alfonso/whereToStay/resort/pintoresco/pintorescoCover.jpg",
    "../../images/alfonso/whereToStay/resort/pollasResortAndLeisureFarm/pollasFarmCover.jpg",
    "../../images/alfonso/whereToStay/resort/teusFarmAndRiverStoneResort/teusFarmCover.jpg",
    "../../images/alfonso/whereToExplore/reptilandAdventure/reptilandCover.jpg",
    "../../images/alfonso/whereToExplore/theGingerBreadHouse/gingerBreadHouseCover.jpg",
    "../../images/alfonso/whereToExplore/saluysoyFalls/saluysoyFallsCover.jpg",
    "../../images/alfonso/churches/stJohnNepomucenoParishChuch/stJohnNepomucenoCover.jpg"
];
var whereToEatCarouselSrc = [
    "../../images/alfonso/whereToEat/restoLang/alfrescoRestaurant1911/alfrescoDiningCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/burgersAhuy/burgersAhuyCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/crosswings/crosswingsCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/girasolTagaytay/girasolCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/kashingsBistro/kashingsCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/marciaAdamsRestaurant/marciaAdamsCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/monsRestaurant/monsRestaurantCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/queensStrawberryFarm/queensStrawberryFarmCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/sonyasGarden/sonyasGardenCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/tanawinSaGulod/tanawinSaGulodCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/teresetoz/teresitozCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/theBlueRoomDIningTagaytay/blueRoomCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/tiyaDelisGardenRestaurant/tiyaDelisCover.jpg",
    "../../images/alfonso/whereToEat/restoLang/verdiviewRestaurant/verdiviewCover.jpg",
    "../../images/alfonso/whereToEat/japaneseResto/suruginRamenHouse/suruginCover.jpg",
    "../../images/alfonso/whereToEat/japaneseResto/zenzenJapaneseFoodHaulAndCafe/zenzenCover.jpg",
    "../../images/alfonso/whereToEat/cafe/highGrindCafe/highGrindCover.jpg",
    "../../images/alfonso/whereToEat/cafe/kapeanCoffeePh/kapeanCover.jpg",
    "../../images/alfonso/whereToEat/cafe/khalakutiCafe/khalakutiCover.jpg",
    "../../images/alfonso/whereToEat/cafe/lequestriaCafe/lequestriaCover.jpg",
    "../../images/alfonso/whereToEat/cafe/linleysKitchenCafe/linleysCover.jpg",
    "../../images/alfonso/whereToEat/cafe/theRidgeCafeTagaytay/theRidgeCover.jpg",
    "../../images/alfonso/whereToEat/cafe/theTigerAlleyFarmAndGardenCafe/tigerAlleyCover.jpg",
    "../../images/alfonso/whereToEat/cafe/theWhiteDomeCafe/whiteDomeCover.jpg",
    "../../images/alfonso/whereToEat/cafe/yssasCoffeeHouse/yssaCover.jpg"
];
var whereToStayCarouselSrc = [
    "../../images/alfonso/whereToStay/hotel/abaganTiManila/abagatanCover.jpg",
    "../../images/alfonso/whereToStay/hotel/hillcreekGardensTagaytay/hillcreekCover.jpg",
    "../../images/alfonso/whereToStay/resort/campBenjamin/campBenjaminCover.jpg",
    "../../images/alfonso/whereToStay/resort/eljoysForestResort/eljoyCover.jpg",
    "../../images/alfonso/whereToStay/resort/pintoresco/pintorescoCover.jpg",
    "../../images/alfonso/whereToStay/resort/pollasResortAndLeisureFarm/pollasFarmCover.jpg",
    "../../images/alfonso/whereToStay/resort/teusFarmAndRiverStoneResort/teusFarmCover.jpg"
];
var whereToExploreCarouselSrc = [
    "../../images/alfonso/whereToExplore/reptilandAdventure/reptilandCover.jpg",
    "../../images/alfonso/whereToExplore/theGingerBreadHouse/gingerBreadHouseCover.jpg",
    "../../images/alfonso/whereToExplore/saluysoyFalls/saluysoyFallsCover.jpg"
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
function insertContentToWhereToExplore() {
    shuffleArray(whereToExploreCarouselSrc);
    for (var i = 0; i < whereToExploreCarouselSrc.length - 1; i++) {
        document.querySelector("#carouselWhereToExplore .carousel-inner").innerHTML += '<div class="'+carouselContainerClass+'" > <img src="'+whereToExploreCarouselSrc[i]+'" class="'+carouselClass+'" > </div>';
    }
}

insertDefaultCarouselSrc(); //to immediately shuffle the array after opening the page and insert inside the container