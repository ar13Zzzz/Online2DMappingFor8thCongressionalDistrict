let options = {
    root: null, //the root will be the window screen
    threshold: 0.3, //need to be 30% visible to activate animation
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var cls = entry.target.getAttribute('data-animate');
        if (window.innerWidth > 430) {
            entry.target.classList.toggle(cls, entry.isIntersecting);
        }
    })
}, options);

const sampleImages = document.querySelectorAll('.sampleImages');
const routeAndFrontWrapper = document.querySelectorAll('.routeAndFrontkWrapper');
const card = document.querySelectorAll('#accordion');
const otherBranches = document.querySelectorAll('.otherBranchesWrapper');
const backAndTopBtn = document.querySelectorAll('.backTopBtnContainer');
for (const target of sampleImages) {
    observer.observe(target);
}
for (const target1 of routeAndFrontWrapper) {
    observer.observe(target1);
}
for (const target2 of card ) {
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
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
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