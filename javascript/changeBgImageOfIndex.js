// array for background images
var bgimage = [
    "../images/bgImage/alfonsoBg.JPG",
    "../images/bgImage/maragondonBg.jpg",
    "../images/bgImage/magallanesBg.JPG",
    "../images/bgImage/mendezBg.jpg",
    "../images/bgImage/naicBg.jpg",
    "../images/bgImage/tagaytayBg.jpg",
    "../images/bgImage/ternateBg.JPG",
    "../images/bgImage/bailenBg.JPG"
];
var bgimage1 = [
    "../images/bgImage/maragondonBg.jpg",
    "../images/bgImage/magallanesBg.JPG",
    "../images/bgImage/mendezBg.jpg",
    "../images/bgImage/naicBg.jpg",
    "../images/bgImage/tagaytayBg.jpg",
    "../images/bgImage/ternateBg.JPG",
    "../images/bgImage/bailenBg.JPG",
    "../images/bgImage/alfonsoBg.JPG"
];
var bgimage2 = [
    "../images/bgImage/magallanesBg.JPG",
    "../images/bgImage/mendezBg.jpg",
    "../images/bgImage/naicBg.jpg",
    "../images/bgImage/tagaytayBg.jpg",
    "../images/bgImage/ternateBg.JPG",
    "../images/bgImage/bailenBg.JPG",
    "../images/bgImage/alfonsoBg.JPG",
    "../images/bgImage/maragondonBg.jpg"
];

// variables for containers
var cont = document.getElementById("bgImage");
var cont1 = document.getElementById("bgImage1");
var cont2 = document.getElementById("bgImage2");

var a = 0;
var b = 0;
var c = 0;

setInterval(() => {
   cont.style.backgroundImage = "url("+bgimage[a]+")";
   cont1.style.backgroundImage = "url("+bgimage1[b]+")";
   cont2.style.backgroundImage = "url("+bgimage2[c]+")";
   a++;
   b++;
   c++;
    if (a == bgimage.length || b == bgimage1.length || c == bgimage2.length) {
        a = 0;
        b = 0;
        c = 0;
    };
}, 2000);
