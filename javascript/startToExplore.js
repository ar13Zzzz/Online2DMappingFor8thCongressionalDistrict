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
    document.getElementById("modalTitle").style.color = "#fff";
    document.getElementById("modalDescription").innerHTML = "Known for its picturesque views of Taal Volcano and Lake, cool climate, and being a popular weekend getaway destination.";
    document.getElementById("modalDescription").style.color = "#fff";
    document.querySelector(".modalLink").href = "../html/municipality/tagaytay.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "#198754";
    document.getElementById("modalGoToDestinationList").style.color = "#fff";
}
function openModalAlfonso() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/alfonsoBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Alfonso";
    document.getElementById("modalTitle").style.color = "#fafafa";
    document.getElementById("modalDescription").innerHTML = "Known for its scenic countryside, lush farmlands, and proximity to popular tourist destinations such as Tagaytay City and Taal Volcano.";
    document.getElementById("modalDescription").style.color = "#fff";
    document.querySelector(".modalLink").href = "../html/municipality/alfonso.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "#fd7e14";
    document.getElementById("modalGoToDestinationList").style.color = "#fff";
}
function openModalBailen() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/BailenBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Bailen";
    document.getElementById("modalTitle").style.color = "#fff";
    document.getElementById("modalDescription").innerHTML = "Known for its rich historical heritage and significant contributions to the country's struggle for independence.";
    document.getElementById("modalDescription").style.color = "#f8f9fa";
    document.querySelector(".modalLink").href = "../html/municipality/bailen.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "#ffc107";
    document.getElementById("modalGoToDestinationList").style.color = "#fff";
}
function openModalMagallanes() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/magallanesBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Magallanes";
    document.getElementById("modalTitle").style.color = "#fff";
    document.getElementById("modalDescription").innerHTML = "Known for its vibrant agricuture industry, particularly its rice and coconut production, contributing to the region's economy and livelihoods.";
    document.getElementById("modalDescription").style.color = "#f8f9fa";
    document.querySelector(".modalLink").href = "../html/municipality/magallanes.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "#dc3545";
    document.getElementById("modalGoToDestinationList").style.color = "#fff";
}
function openModalMaragondon() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/maragondonBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Maragondon";
    document.getElementById("modalTitle").style.color = "#fff";
    document.getElementById("modalDescription").innerHTML = "Known for its historical significance, being the sight of significant events during the Philippines Revolution against Spanish colonial rule.";
    document.getElementById("modalDescription").style.color = "#f8f9fa";
    document.querySelector(".modalLink").href = "../html/municipality/maragondon.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "#0d6efd";
    document.getElementById("modalGoToDestinationList").style.color = "#fff";
}
function openModalMendez() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/mendezBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Mendez";
    document.getElementById("modalTitle").style.color = "#fff";
    document.getElementById("modalDescription").innerHTML = "Known for its breathtaking landscape and cool climate, making it popular destination for nature lovers and weekend getaways.";
    document.getElementById("modalDescription").style.color = "#f8f9fa";
    document.querySelector(".modalLink").href = "../html/municipality/mendez.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "#6f42c1";
    document.getElementById("modalGoToDestinationList").style.color = "#fff";
}
function openModalNaic() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/naicBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Naic";
    document.getElementById("modalTitle").style.color = "#fff";
    document.getElementById("modalDescription").innerHTML = "Known for its historical heritage, including the iconic Naic Church and its role in the Philippines revolution against Spanish colonization.";
    document.getElementById("modalDescription").style.color = "#f8f9fa";
    document.querySelector(".modalLink").href = "../html/municipality/naic.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "#d63384";
    document.getElementById("modalGoToDestinationList").style.color = "#fff";
}
function openModalTernate() {
    showModal();
    document.getElementById('modalContentContainer').style.backgroundImage = "url('../images/bgImage/ternateBg.JPG')";
    document.getElementById("modalTitle").innerHTML = "Ternate";
    document.getElementById("modalTitle").style.color = "#fff";
    document.getElementById("modalDescription").innerHTML = "Known for its stunning beaches, crystal-clear waters, captivating marine life, making it a sought-after destination for beach enthusiasts and divers.";
    document.getElementById("modalDescription").style.color = "#f8f9fa";
    document.querySelector(".modalLink").href = "../html/municipality/ternate.html";
    document.getElementById("modalGoToDestinationList").style.backgroundColor = "lightgreen";
    document.getElementById("modalGoToDestinationList").style.color = "#fff";
}

// bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
