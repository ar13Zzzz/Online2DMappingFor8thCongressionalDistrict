// hide and show modal 
var modalContainer = document.getElementById('modalGoToMunicipality');
window.onclick = function(event) {
    if (event.target == modalContainer) {
        hideModal();
    }
}
function showModal() {
    modalContainer.style.display = "block";
}
function hideModal() {
    modalContainer.style.display = "none";
}

// change the contents of modal
function openModalTagaytay() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/tagaytayBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Tagaytay City";
    document.getElementById("modalTitle").style.color = "rgb(222, 218, 255)";
    document.getElementById("modalDescription").innerHTML = "Known for its picturesque views of Taal Volcano and Lake, cool climate, and being a popular weekend getaway destination.";
    document.getElementById("modalDescription").style.color = "rgb(222, 218, 255)";
    document.querySelector(".modalLink").href = "../html/municipality/tagaytay.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "rgb(0, 248, 66)";
    document.getElementById("modalGoToDestinationList").style.color = "rgb(35, 37, 36)";
}
function openModalAlfonso() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/alfonsoBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Alfonso";
    document.getElementById("modalTitle").style.color = "rgb(167, 159, 152)";
    document.getElementById("modalDescription").innerHTML = "Known for its scenic countryside, lush farmlands, and proximity to popular tourist destinations such as Tagaytay City and Taal Volcano.";
    document.getElementById("modalDescription").style.color = "rgb(255, 255, 255)";
    document.querySelector(".modalLink").href = "../html/municipality/alfonso.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "rgb(237, 111, 8)";
    document.getElementById("modalGoToDestinationList").style.color = "rgb(255, 255, 255)";
}
function openModalBailen() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/BailenBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Bailen";
    document.getElementById("modalTitle").style.color = "rgb(222, 218, 255)";
    document.getElementById("modalDescription").innerHTML = "Known for its rich historical heritage and significant contributions to the country's struggle for independence.";
    document.getElementById("modalDescription").style.color = "rgb(222, 218, 255)";
    document.querySelector(".modalLink").href = "../html/municipality/bailen.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "rgb(230, 233, 8)";
    document.getElementById("modalGoToDestinationList").style.color = "rgb(35, 37, 36)";
}
function openModalMagallanes() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/magallanesBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Magallanes";
    document.getElementById("modalTitle").style.color = "rgb(222, 218, 255)";
    document.getElementById("modalDescription").innerHTML = "Known for its vibrant agricuture industry, particularly its rice and coconut production, contributing to the region's economy and livelihoods.";
    document.getElementById("modalDescription").style.color = "rgb(250, 250, 250)";
    document.querySelector(".modalLink").href = "../html/municipality/magallanes.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "rgb(205, 25, 25)";
    document.getElementById("modalGoToDestinationList").style.color = "rgb(250, 250, 250)";
}
function openModalMaragondon() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/maragondonBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Maragondon";
    document.getElementById("modalTitle").style.color = "rgb(40, 30, 176)";
    document.getElementById("modalDescription").innerHTML = "Known for its historical significance, being the sight of significant events during the Philippines Revolution against Spanish colonial rule.";
    document.getElementById("modalDescription").style.color = "rgb(255, 255, 255)";
    document.querySelector(".modalLink").href = "../html/municipality/maragondon.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "rgb(40, 30, 176)";
    document.getElementById("modalGoToDestinationList").style.color = "rgb(255, 255, 255)";
}
function openModalMendez() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/mendezBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Mendez";
    document.getElementById("modalTitle").style.color = "rgb(250, 250, 250)";
    document.getElementById("modalDescription").innerHTML = "Known for its breathtaking landscape and cool climate, making it popular destination for nature lovers and weekend getaways.";
    document.getElementById("modalDescription").style.color = "rgb(250, 250, 250)";
    document.querySelector(".modalLink").href = "../html/municipality/mendez.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "rgb(32, 4, 51)";
    document.getElementById("modalGoToDestinationList").style.color = "rgb(250, 250, 250)";
}
function openModalNaic() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/naicBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Naic";
    document.getElementById("modalTitle").style.color = "rgb(222, 218, 255)";
    document.getElementById("modalDescription").innerHTML = "Known for its historical heritage, including the iconic Naic Church and its role in the Philippines revolution against Spanish colonization.";
    document.getElementById("modalDescription").style.color = "rgb(250, 250, 250)";
    document.querySelector(".modalLink").href = "../html/municipality/naic.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "rgb(173, 16, 113)";
    document.getElementById("modalGoToDestinationList").style.color = "rgb(250, 250, 250)";
}
function openModalTernate() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/ternateBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Ternate";
    document.getElementById("modalTitle").style.color = "rgb(222, 218, 255)";
    document.getElementById("modalDescription").innerHTML = "Known for its stunning beaches, crystal-clear waters, captivating marine life, making it a sought-after destination for beach enthusiasts and divers.";
    document.getElementById("modalDescription").style.color = "rgb(250, 250, 250)";
    document.querySelector(".modalLink").href = "../html/municipality/ternate.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "rgb(182, 233, 12)";
    document.getElementById("modalGoToDestinationList").style.color = "rgb(35, 37, 36)";
}

// bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// funfacts
var funFacts = [
    "Cavite's 8th congressional district is one of the eight congressional districts of the Philippines in Cavite. It has been represented in the House of Representatives of the Philippines since 2019.",
    'The 8th district of Cavite consist of Tagaytay city, and the municipalities of Alfonso, General Emilio Aguinaldo, Magallanes, Maragondon, Mendez, Naic, and Ternate.',
    'Currently represent in the 19th Congress by Hon. Aniela Bianca Tolentino of the National Unity Party (NUP) and previously represented by Hon. Abraham Tolentino from June 30, 2019 to June 30, 2022.',
    'In the second half of the 19th century the towns of Ternate, Magallanes, Gen. Emilio Aguinaldo (formerly Bailen), Alfonso, and Naic were mere barangays of Maragondon. Ternate was the first town to attain full independence on March 31, 1857, Alfonso and Bailen on 1858, Naic on 1869, and the last to attain independence was Magallanes that founded on July 15, 1879.',
    'General Emilio Aguinaldo was formerly known and still commonly reffered as Bailen, it was renamed in honor of Emilio Aguinaldo, the first President of the Philippines and also a native from Cavite.',
    "On June 19, 1965, with the signing of Republic Act No. 4346, the town's name, Bailen, was changed to General Emilio Aguinaldo, in honor of the first Philippine president, who died the year prior.",
    'The Philippine Commission approved Act No. 947 on October 15, 1903, annexing the municipalities of Bailen and Mendez to Alfonso, thus becoming barrios of Alfonso. Bailen was reconverted into an independent municipality in 1915 with the complete restoration of peace and order in Cavite.',
    'The Municipality of Magallanes was named after Ferdinand Magellan, who was known in Spanish as Fernando de Magallanes.',
    'On October 15, 1903, Magallanes was reverted to being part of Maragondon when its annual income became insufficient to maintain its status as an independent municipality. It was only in 1916 that Magallanes once again became a town.',
    'The name Maragondon is a Spanish approximation of the Tagalog word maragundong or madagundong, which means "having a rumbling or thunderous sound". This refers to the noise coming from the Kay Albaran river in the village of Capantayan. This was initially the place on which the town was to be built. However, due to the floods caused by the frequent overflowing of the river, the town was later relocated to its present site.',
    'Maragondon has three foudation dates which is 1611, 1690, and 1727.',
    'Ternate was formerly known as Bahra, the municipality is named after Ternate island of Indonesia where migrants from then Dutch East Indies originated.',
    'On October 15, 1903, Ternate was merged with Naic by virtue of Act No. 947. It was later separated by virtue of Executive Order No. 96 on November 1915 but was effective only on January 1, 1916.',
    'Alfonso became a separate district municipality from Indang on March 16, 1859 through the efforts of the community leaders Bonifacio Aveo and Felix del Mundo.',
    'Alfonso was called Alas-as for 17 years then named after King Alfonso XII of Spain.',
    'Tagaytay became a chartered city with the passing and signing of Commonwealth Act No. 338 by President Manuel L. Quezon on June 21, 1938. To form the newly founded city, areas of the towns of Silang, Mendez, Indang and Amadeo were removed from their town governments.'
];
var i = 0;
var speed = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
} //getter for the speed of delay

async function selectFromFacts() {
    document.querySelector('.fun-fact').innerHTML = ''; //delete the content first
    i = 0;
    var fact = funFacts[(Math.floor(Math.random() * funFacts.length))]; //to select random fact
    document.querySelector('.fun-fact-container ul').style.display = "block"; //display the container
    for(i = 0; i < fact.length; i++) {
        if (i+2 < fact.length) {
            document.getElementById("generateFunFactBtn").disabled = true;
        }else {
            document.getElementById("generateFunFactBtn").disabled = false;
        }
        document.querySelector('.fun-fact').innerHTML += fact.charAt(i); //to print a string that is in the position of i
        await speed(40); //delay 
        console.log(i+2, fact.length);
    }
}
