//

let i = 0; // current slide
let j = 4; // total slides
// let searchForm = document.querySelector('.search-form');

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".w .slide");
// const images = document.querySelectorAll(".image-container img");

function next() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}


function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

function indicator(num) {
    dots.forEach(function (dot) {
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#bfff5d";
}

function dot(index) {
    images.forEach(function (image) {
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}


// Autoplay of images starts here

var autoimageslider;

var repeater = () => {
    autoimageslider = setInterval(function(){
        document.getElementById("content" + (i + 1)).classList.remove("active");
        i = (j + i + 1) % j;
        document.getElementById("content" + (i + 1)).classList.add("active");
        indicator(i + 1);
    }, 4000);
}

repeater();

// Autoplay of images ends here

// Menu Button starts here

let part_2 = document.querySelector('.part-2');

document.querySelector('#menu-btn').onclick = () =>{
    part_2.classList.toggle('active');
}

// Menu Button ends here

// Search box starts here

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// Serach box ends here

// Login starts here

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

// Login ends here


// Back to top button

const Back_to_top = document.querySelector("#BackToTop");

window.addEventListener("scroll", scrollfunction);

function scrollfunction(){
    if (window.pageYOffset > 300){ //Show Button
        if(!Back_to_top.classList.contains("btnEntrance")){
            Back_to_top.classList.remove("btnExit");
            Back_to_top.classList.add("btnEntrance");
            Back_to_top.style.display = "block";
        }
    }
    else{ //Hide Button
        if(Back_to_top.classList.contains("btnEntrance")) {
            Back_to_top.classList.remove("btnEntrance");
            Back_to_top.classList.add("btnExit");
            setTimeout(function() {
                Back_to_top.style.display = "none";
            }, 250);
        }
    }
}


Back_to_top.addEventListener("click", backtotopfunction);

function backtotopfunction(){
    window.scrollTo(0,0)
}

// Back to top button ends here

