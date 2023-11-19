let options = {
    root: null, //the root will be the window screen
    threshold: 0.3, //need to be 30% visible to activate animation
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var cls = entry.target.getAttribute('data-animate');
        if (entry.isIntersecting) {
            if (window.innerWidth > 430) {
                entry.target.classList.add(cls);
            }
        }
    })
}, options);

const sampleImages = document.querySelectorAll('.sampleImages');
const routeAndFrontWrapper = document.querySelectorAll('.routeAndFrontkWrapper');
const frontAddressAndNearestLandmark = document.querySelectorAll('.frontAndNearestLandmarkContainer');
const otherBranches = document.querySelectorAll('.otherBranchesWrapper');
const backAndTopBtn = document.querySelectorAll('.backTopBtnContainer');
for (const target of sampleImages) {
    observer.observe(target);
}
for (const target1 of routeAndFrontWrapper) {
    observer.observe(target1);
}
for (const target2 of frontAddressAndNearestLandmark ) {
    observer.observe(target2);
}
for (const target3 of otherBranches) {
    observer.observe(target3);
}
for (const target4 of backAndTopBtn) {
    observer.observe(target4);
}

// code to display the fixed back to top button on the right side
var backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
        backToTopBtn.style.display = "none";
    }else if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        backToTopBtn.style.display = "block";
    }else {
        backToTopBtn.style.display = "none";
    }
}

// bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]') 
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var routeBtnTxt = document.getElementById("dropendRouteBtn");

function revealMainRoute() {
    routeBtnTxt.innerHTML = "Main Route";

    if (document.getElementsByClassName("altRouteBtn2").length > 0) {
        document.querySelector(".mainRouteContainer").style.display = "block";
    }
    if (document.getElementsByClassName("altRouteBtn2").length > 0) {
        document.querySelector("#alternativeRouteContainer2").style.display = "none";
    }
    if (document.getElementsByClassName("altRouteBtn3").length > 0) {
        document.querySelector("#alternativeRouteContainer3").style.display = "none";
    }
    if (document.getElementsByClassName("altRouteBtn4").length > 0) {
        document.querySelector("#alternativeRouteContainer4").style.display = "none";
    }
}
function revealAlternativeRoute2() {
    routeBtnTxt.innerHTML = "Route #2";

    if (document.getElementsByClassName("altRouteBtn2").length > 0) {
        document.querySelector(".mainRouteContainer").style.display = "none";
    }
    if (document.getElementsByClassName("altRouteBtn2").length > 0) {
        document.querySelector("#alternativeRouteContainer2").style.display = "block";
    }
    if (document.getElementsByClassName("altRouteBtn3").length > 0) {
        document.querySelector("#alternativeRouteContainer3").style.display = "none";
    }
    if (document.getElementsByClassName("altRouteBtn4").length > 0) {
        document.querySelector("#alternativeRouteContainer4").style.display = "none";
    }
}
function revealAlternativeRoute3() {
    routeBtnTxt.innerHTML = "Route #3";

    if (document.getElementsByClassName("altRouteBtn2").length > 0) {
        document.querySelector(".mainRouteContainer").style.display = "none";
    }
    if (document.getElementsByClassName("altRouteBtn2").length > 0) {
        document.querySelector("#alternativeRouteContainer2").style.display = "none";
    }
    if (document.getElementsByClassName("altRouteBtn3").length > 0) {
        document.querySelector("#alternativeRouteContainer3").style.display = "block";
    }
    if (document.getElementsByClassName("altRouteBtn4").length > 0) {
        document.querySelector("#alternativeRouteContainer4").style.display = "none";
    }
}
if (document.getElementsByClassName("altRouteBtn4").length > 0) {
    function revealAlternativeRoute4() {
        routeBtnTxt.innerHTML = "Route #4";

        if (document.getElementsByClassName("altRouteBtn2").length > 0) {
            document.querySelector(".mainRouteContainer").style.display = "none";
        }
        if (document.getElementsByClassName("altRouteBtn2").length > 0) {
            document.querySelector("#alternativeRouteContainer2").style.display = "none";
        }
        if (document.getElementsByClassName("altRouteBtn3").length > 0) {
            document.querySelector("#alternativeRouteContainer3").style.display = "none";
        }
        if (document.getElementsByClassName("altRouteBtn4").length > 0) {
            document.querySelector("#alternativeRouteContainer4").style.display = "block";
        }
    }
}

var addressWhenNearestLandmarkIsTouristDestination = document.getElementById("touristDestinationLandmarkAddress").innerHTML;
document.getElementById("addressInsideNearestLandmark").innerHTML = addressWhenNearestLandmarkIsTouristDestination;
