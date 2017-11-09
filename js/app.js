// Responsive Nav
function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Pop ups


//Grab Buttons
let aboutUs = document.getElementById("about");
let aboutUsNav = document.getElementById("about-nav");
let displayAboutUs = document.querySelector(".about-us-content");

let insights = document.getElementById("insights");
let insightsNav = document.getElementById("insights-nav");
let displayInsights = document.querySelector(".insights-content");

let people = document.getElementById("people");
let peopleNav = document.getElementById("people-nav");
let displayPeople = document.querySelector(".people-content");




let closeButton = document.getElementById("close-about");
let closeInsights = document.getElementById("close-insights");
let closePeople = document.getElementById("close-people");


// Event Listeners 
//About Us
aboutUs.addEventListener("click", function(){
    displayAboutUs.style.display = "flex";
});

aboutUsNav.addEventListener("click", function(){
    displayAboutUs.style.display = "flex";
});



closeButton.addEventListener("click", function(){
    displayAboutUs.style.display = "none";
});

// Insights 
insights.addEventListener("click", function(){
    displayInsights.style.display = "flex";
});

insightsNav.addEventListener("click", function(){
    displayInsights.style.display = "flex";
});

closeInsights.addEventListener("click", function(){
    displayInsights.style.display = "none";
});

//People
people.addEventListener("click", function(){
    displayPeople.style.display = "flex";
});

peopleNav.addEventListener("click", function(){
    displayPeople.style.display = "flex";
});

closePeople.addEventListener("click", function(){
    displayPeople.style.display = "none";
})

