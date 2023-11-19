var carouselContainerClass = "carousel-item";
var carouselClass = "d-block w-100";

var defaultHeaderCarouselSrc = [
    "../../images/tagaytay/whereToEat/restoLang/firstRow/antonios/antoniosResto/antoniosRestaurantCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/arnaldosResto/arnaldosRestaurantCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/BistroIbarra/bistroIbarraCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/bulaloCapital/bulaloCapitalTagaytayNasugbuHwy/bulaloCapitalMainBranchCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/bulaloPointTutoTutoGrill/bulaloPointTuroTuroGrillCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/ceciliasAllDayBreakfastAndResto/allDaysSilangJunctionSouth/ceciliasAllDayAndRestaurantCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/dahonAtMesaTags/dahonAtMesaCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/dbasBulalohan/dbasCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/donLimoneNapaGrill/donLimoneNapaGrillCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/entrada/entradaCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/farmersTableTags/farmersTableCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/firelakeGrill/fireLakeGrillCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/goriosRoadsideResto/goriosRoadsideCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/kaTunyingTags/kaTunyingCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/liesilsRestoAndEvent/liesilsRestoAndEventCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/lolaNenas/lolaNenasCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/memoryLane/memoryLaneCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/moriellisInnAndDiner/moriellisCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/myCountryHouseTags/myCountryHouseTagaytayCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/ribchon/ribchonCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/ribsarapTags/ribSarapCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/rowenasPasalubongTags/rowenasPasalubongEmilioAguinaldoHwy/rowenasEmilioAguinaldHwyCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/samiraByChel/samiraByCheleCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/solVictorias/solVictoriasCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/staciesRibsAndSteaks/staciesRibAndSteakCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/sweetKnotHaven/sweetKnotHavenCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/tazaFreshTable/tazaFreshTableCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/tipananResto/tipananCoverResto.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/viewpointInnAndResto/viewpointInnAndRestoCover.jpg",
    "../../images/tagaytay/whereToEat/restoBar/cabanasDineAndBar/cabanasDineAndBarCover.jpg",
    "../../images/tagaytay/whereToEat/restoBar/delanteraRestoBar/delanteraRestoBarCover.jpg",
    "../../images/tagaytay/whereToEat/restoBar/papaDomsBarAndResto/papaDomsCover.jpg",
    "../../images/tagaytay/whereToEat/restoBar/PusoGrillAndRestoBar/pusoGrillAndRetoBarCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/balinsasayawAlfrescoDiningAndCafe/balinsasayawAlfrescoDiningCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/crossroadSizzling/crossroadSizzlingCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/dekada/dekadaCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/gerrysGrillTags/gerrysGrillCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/greenAts/greenAtsCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/hermana/hermanaCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/jayteesFilipinoCuisine/jayteesFilipinoCuisine/jayteesFilipinoCuisineCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/leslisResto/lesliesCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/loumarsCafeAndResto/loumarsCafeAndRestoCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/masingngo/masingngoCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/MaxsResto/maxCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/merbenTapsi/merbenTapsiloganCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/nanayCiriliasKapengBarako/nanayCiriliasKapengBarakoCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/pamanaResto/pamanaRestoCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/ridgeParkKainanSaKubo/ridgeParkKainanSaKuboCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/sigloModernFilipino/sigloCover.jpg",
    "../../images/tagaytay/whereToEat/japaneseResto/aozoraJapaneseResto/aozoraAtTheFarmAnnaMarianeSt/aozoraAtTheFarmCover.jpg",
    "../../images/tagaytay/whereToEat/italianResto/bellaCiao/bellaCiaoCover.jpg",
    "../../images/tagaytay/whereToEat/italianResto/bounGiornoCaffe/buonGiornoCover.jpg",
    "../../images/tagaytay/whereToEat/italianResto/morganoResto/morganoCover.jpg",
    "../../images/tagaytay/whereToEat/italianResto/mamaLousItalianKitchen/mamaLouCover.jpg",
    "../../images/tagaytay/whereToEat/koreanResto/bonchonFora/bonchonCover.jpg",
    "../../images/tagaytay/whereToEat/koreanResto/romanticBaboy/romanticBaboyCover.jpg",
    "../../images/tagaytay/whereToEat/koreanResto/theSamgyupsalTags/theSamgyupsalCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/bagOfBeans/bagOfBeansMain/bagOfBeansMainCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/barakoHaus/barakoHausCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/baristaLoft/baristaLoftCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/cafeVioLa/cafeVioLaCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/caffeNativo/cafeNativoCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/charsGardenCafe/charsGardrnCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/coffeeAndDreams/coffeeAndDreamsCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/cafiocaTagaytay/cafiocaCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/embraceCafe/embraceCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/facioCoffeeAndCocktails/facioCoffeeAndCocktailsCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/foundCafe/foundCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/greenhouseCafe/greenhouseCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/helloCafe/helloCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/hillbarnCafeAndResto/hillbarnCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/kapeMoTo/kapeMotoCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/kapengMainitTags/kapengMainitCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/kubliCafeBistro/kubliCafeBistro.jpg",
    "../../images/tagaytay/whereToEat/cafe/lawaCafe/lawaCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/lulaCafePh/lulaCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/marjsCafe/marjsCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/ruinedProject/ruinedProjectCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/sipNBrewByMiaraCafe/sipNBrewCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/starbs/starbsReserveHiraya/starbsHirayaCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/tsokolateria/tsokolateriaCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/yaletownCafe/yaletownCafeCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/belizeTagaytay/belizeTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/cabinsByEcoHotel/cabinsByEcoHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/containersByEcoHotel/containersByEcoHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/countryChetau/countryChateauCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/daysHotel/daysHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/escala/escalaTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/hotelCarlito/hotelCarlitoCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/hotelDominique/hotelDominiqueCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/oneTagaytayPlaceHotelSuites/oneTagaytayPlaceCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/questHotel/questHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/rangyaHotel/rangyaHotelTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/royalParcHotel/royaleParcHotelTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/summitRidgeHotel/summitRidgeHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/taalVistaHotel/taalVistaHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/tagaytayCountryHotel/countryHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/wingateManor/tagaytayWingateManorCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/lakeHotel/lakeHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/carmelenceLodge/theCarmelenceLodgeCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/lakeviewSuitesByCocotel/theLakeViewSuitesByCocotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/windyRidgeHotel/windyRidgeHotelTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/viaAppia/viaAppiaCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/viewParkHotel/viewParkHotelCover.jpeg",
    "../../images/tagaytay/whereToStay/hotel/villaIbarra/villaIbarraCover.jpg",
    "../../images/tagaytay/whereToStay/resort/anyaResort/anyaResortCover.jpg",
    "../../images/tagaytay/whereToStay/resort/crosswindResortSuites/crosswindsResorrSuitesCover.jpeg",
    "../../images/tagaytay/whereToStay/resort/estanciaResortHotel/estanciaCover.jpg",
    "../../images/tagaytay/whereToStay/resort/hortzHotelAndResort/hortzHotelAndResortCover.jpg",
    "../../images/tagaytay/whereToStay/resort/hotelKimberly/hotelKimberlyCover.jpg",
    "../../images/tagaytay/whereToStay/resort/laBellaBotiqueHotel/laBellaBotiqueHotelCover.jpg",
    "../../images/tagaytay/whereToStay/resort/leeBotiqueHotel/leeBoutiqueHotelCover.jpg",
    "../../images/tagaytay/whereToStay/resort/nurtureWellnessVillage/nurtureWellnessVillageCover.jpg",
    "../../images/tagaytay/whereToStay/resort/pinaColina/pinaColinaHotelAndResortCover.jpg",
    "../../images/tagaytay/whereToStay/resort/puraVidaResort/puraVidaResortCover.jpg",
    "../../images/tagaytay/whereToStay/resort/tagaytayHighlands/tagaytayHighlandsCover.jpg",
    "../../images/tagaytay/whereToExplore/residenceInn/residenceInnCover.jpg",
    "../../images/tagaytay/whereToExplore/peoplesPark/peoplesParkCover.png",
    "../../images/tagaytay/whereToExplore/skyRanch/skyRanch.jpg",
    "../../images/tagaytay/whereToExplore/picnicGrove/picnicGroveCover.png",
    "../../images/tagaytay/whereToExplore/museoOrlina/museoOrlinaCover.jpg",
    "../../images/tagaytay/whereToExplore/puzzlaMansion/puzzlaMansionCover.jpg",
    "../../images/tagaytay/churches/ourLadyOfManaog/ourLadyOfManaogCover.jpg",
    "../../images/tagaytay/churches/ourLadyOfLourdes/ourLadyOfLourdesParishChurchCover.jpg",
    "../../images/tagaytay/churches/pinkSistersConventAndChapel/pinkSistersConventAndChapelCover.jpg"
];
var whereToEatCarouselSrc = [
    "../../images/tagaytay/whereToEat/restoLang/firstRow/antonios/antoniosResto/antoniosRestaurantCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/arnaldosResto/arnaldosRestaurantCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/BistroIbarra/bistroIbarraCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/bulaloCapital/bulaloCapitalTagaytayNasugbuHwy/bulaloCapitalMainBranchCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/bulaloPointTutoTutoGrill/bulaloPointTuroTuroGrillCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/ceciliasAllDayBreakfastAndResto/allDaysSilangJunctionSouth/ceciliasAllDayAndRestaurantCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/dahonAtMesaTags/dahonAtMesaCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/dbasBulalohan/dbasCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/donLimoneNapaGrill/donLimoneNapaGrillCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/entrada/entradaCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/farmersTableTags/farmersTableCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/firelakeGrill/fireLakeGrillCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/goriosRoadsideResto/goriosRoadsideCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/kaTunyingTags/kaTunyingCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/liesilsRestoAndEvent/liesilsRestoAndEventCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/lolaNenas/lolaNenasCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/memoryLane/memoryLaneCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/moriellisInnAndDiner/moriellisCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/myCountryHouseTags/myCountryHouseTagaytayCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/ribchon/ribchonCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/ribsarapTags/ribSarapCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/rowenasPasalubongTags/rowenasPasalubongEmilioAguinaldoHwy/rowenasEmilioAguinaldHwyCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/samiraByChel/samiraByCheleCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/solVictorias/solVictoriasCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/staciesRibsAndSteaks/staciesRibAndSteakCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/sweetKnotHaven/sweetKnotHavenCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/tazaFreshTable/tazaFreshTableCover.jpg",
    "../../images/tagaytay/whereToEat/restoLang/secondRow/tipananResto/tipananCoverResto.jpg",
    "../../images/tagaytay/whereToEat/restoLang/firstRow/viewpointInnAndResto/viewpointInnAndRestoCover.jpg",
    "../../images/tagaytay/whereToEat/restoBar/cabanasDineAndBar/cabanasDineAndBarCover.jpg",
    "../../images/tagaytay/whereToEat/restoBar/delanteraRestoBar/delanteraRestoBarCover.jpg",
    "../../images/tagaytay/whereToEat/restoBar/papaDomsBarAndResto/papaDomsCover.jpg",
    "../../images/tagaytay/whereToEat/restoBar/PusoGrillAndRestoBar/pusoGrillAndRetoBarCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/balinsasayawAlfrescoDiningAndCafe/balinsasayawAlfrescoDiningCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/crossroadSizzling/crossroadSizzlingCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/dekada/dekadaCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/gerrysGrillTags/gerrysGrillCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/greenAts/greenAtsCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/hermana/hermanaCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/jayteesFilipinoCuisine/jayteesFilipinoCuisine/jayteesFilipinoCuisineCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/leslisResto/lesliesCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/loumarsCafeAndResto/loumarsCafeAndRestoCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/masingngo/masingngoCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/MaxsResto/maxCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/merbenTapsi/merbenTapsiloganCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/nanayCiriliasKapengBarako/nanayCiriliasKapengBarakoCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/pamanaResto/pamanaRestoCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/ridgeParkKainanSaKubo/ridgeParkKainanSaKuboCover.jpg",
    "../../images/tagaytay/whereToEat/filiResto/sigloModernFilipino/sigloCover.jpg",
    "../../images/tagaytay/whereToEat/japaneseResto/aozoraJapaneseResto/aozoraAtTheFarmAnnaMarianeSt/aozoraAtTheFarmCover.jpg",
    "../../images/tagaytay/whereToEat/italianResto/bellaCiao/bellaCiaoCover.jpg",
    "../../images/tagaytay/whereToEat/italianResto/bounGiornoCaffe/buonGiornoCover.jpg",
    "../../images/tagaytay/whereToEat/italianResto/morganoResto/morganoCover.jpg",
    "../../images/tagaytay/whereToEat/italianResto/mamaLousItalianKitchen/mamaLouCover.jpg",
    "../../images/tagaytay/whereToEat/koreanResto/bonchonFora/bonchonCover.jpg",
    "../../images/tagaytay/whereToEat/koreanResto/romanticBaboy/romanticBaboyCover.jpg",
    "../../images/tagaytay/whereToEat/koreanResto/theSamgyupsalTags/theSamgyupsalCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/bagOfBeans/bagOfBeansMain/bagOfBeansMainCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/barakoHaus/barakoHausCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/baristaLoft/baristaLoftCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/cafeVioLa/cafeVioLaCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/caffeNativo/cafeNativoCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/charsGardenCafe/charsGardrnCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/coffeeAndDreams/coffeeAndDreamsCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/cafiocaTagaytay/cafiocaCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/embraceCafe/embraceCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/facioCoffeeAndCocktails/facioCoffeeAndCocktailsCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/foundCafe/foundCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/greenhouseCafe/greenhouseCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/helloCafe/helloCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/hillbarnCafeAndResto/hillbarnCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/kapeMoTo/kapeMotoCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/kapengMainitTags/kapengMainitCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/kubliCafeBistro/kubliCafeBistro.jpg",
    "../../images/tagaytay/whereToEat/cafe/lawaCafe/lawaCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/lulaCafePh/lulaCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/marjsCafe/marjsCafeCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/ruinedProject/ruinedProjectCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/sipNBrewByMiaraCafe/sipNBrewCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/starbs/starbsReserveHiraya/starbsHirayaCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/tsokolateria/tsokolateriaCover.jpg",
    "../../images/tagaytay/whereToEat/cafe/yaletownCafe/yaletownCafeCover.jpg"
];
var whereToStayCarouselSrc = [
    "../../images/tagaytay/whereToStay/hotel/belizeTagaytay/belizeTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/cabinsByEcoHotel/cabinsByEcoHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/containersByEcoHotel/containersByEcoHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/countryChetau/countryChateauCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/daysHotel/daysHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/escala/escalaTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/hotelCarlito/hotelCarlitoCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/hotelDominique/hotelDominiqueCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/oneTagaytayPlaceHotelSuites/oneTagaytayPlaceCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/questHotel/questHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/rangyaHotel/rangyaHotelTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/royalParcHotel/royaleParcHotelTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/summitRidgeHotel/summitRidgeHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/taalVistaHotel/taalVistaHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/tagaytayCountryHotel/countryHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/wingateManor/tagaytayWingateManorCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/lakeHotel/lakeHotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/carmelenceLodge/theCarmelenceLodgeCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/lakeviewSuitesByCocotel/theLakeViewSuitesByCocotelCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/windyRidgeHotel/windyRidgeHotelTagaytayCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/viaAppia/viaAppiaCover.jpg",
    "../../images/tagaytay/whereToStay/hotel/viewParkHotel/viewParkHotelCover.jpeg",
    "../../images/tagaytay/whereToStay/hotel/villaIbarra/villaIbarraCover.jpg",
    "../../images/tagaytay/whereToStay/resort/anyaResort/anyaResortCover.jpg",
    "../../images/tagaytay/whereToStay/resort/crosswindResortSuites/crosswindsResorrSuitesCover.jpeg",
    "../../images/tagaytay/whereToStay/resort/estanciaResortHotel/estanciaCover.jpg",
    "../../images/tagaytay/whereToStay/resort/hortzHotelAndResort/hortzHotelAndResortCover.jpg",
    "../../images/tagaytay/whereToStay/resort/hotelKimberly/hotelKimberlyCover.jpg",
    "../../images/tagaytay/whereToStay/resort/laBellaBotiqueHotel/laBellaBotiqueHotelCover.jpg",
    "../../images/tagaytay/whereToStay/resort/leeBotiqueHotel/leeBoutiqueHotelCover.jpg",
    "../../images/tagaytay/whereToStay/resort/nurtureWellnessVillage/nurtureWellnessVillageCover.jpg",
    "../../images/tagaytay/whereToStay/resort/pinaColina/pinaColinaHotelAndResortCover.jpg",
    "../../images/tagaytay/whereToStay/resort/puraVidaResort/puraVidaResortCover.jpg",
    "../../images/tagaytay/whereToStay/resort/tagaytayHighlands/tagaytayHighlandsCover.jpg"
];
var whereToExploreCarouselSrc = [
    "../../images/tagaytay/whereToExplore/residenceInn/residenceInnCover.jpg",
    "../../images/tagaytay/whereToExplore/peoplesPark/peoplesParkCover.png",
    "../../images/tagaytay/whereToExplore/skyRanch/skyRanch.jpg",
    "../../images/tagaytay/whereToExplore/picnicGrove/picnicGroveCover.png",
    "../../images/tagaytay/whereToExplore/museoOrlina/museoOrlinaCover.jpg",
    "../../images/tagaytay/whereToExplore/puzzlaMansion/puzzlaMansionCover.jpg"
];
var churchesCarouselSrc = [
    "../../images/tagaytay/churches/ourLadyOfManaog/ourLadyOfManaogCover.jpg",
    "../../images/tagaytay/churches/ourLadyOfLourdes/ourLadyOfLourdesParishChurchCover.jpg",
    "../../images/tagaytay/churches/pinkSistersConventAndChapel/pinkSistersConventAndChapelCover.jpg"
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
function insertContentToChurches() {
    shuffleArray(churchesCarouselSrc);
    for (var i = 0; i < churchesCarouselSrc.length - 1; i++) {
        document.querySelector("#carouselChurches .carousel-inner").innerHTML += '<div class="'+carouselContainerClass+'" > <img src="'+churchesCarouselSrc[i]+'" class="'+carouselClass+'" > </div>';
    }
}

insertDefaultCarouselSrc(); //to immediately shuffle the array after opening the page and insert inside the container