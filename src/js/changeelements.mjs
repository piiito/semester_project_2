import { loadFromStorage } from "./storage.mjs";


// Removes elements when logged in or out


export function logged(){

    const token = loadFromStorage("token")

    if (token){

    const TextElements = document.querySelectorAll(".logged-in");

    for (var i = 0, max = TextElements.length; i < max; i++) {
    TextElements[i].style.display = "none";
}

}

else if (!token){

    const TextElements = document.querySelectorAll(".logged-out");

    for (var i = 0, max = TextElements.length; i < max; i++) {
    TextElements[i].style.display = "none";
   }
}
};

// Changes and removes CTAs

export function changeCTA(){

    const token = loadFromStorage("token")

    if (token){
    
    const registerCTA = document.querySelector(".register-cta");
    registerCTA.innerText = "View listings";
    registerCTA.setAttribute("href", "listings.html");

    const loginCTA = document.querySelector(".login-cta");
    loginCTA.style.display = "none";

}};

// Changes text when logged in 

export function elementHidden(){
    const token = loadFromStorage("token")

    if (token){
    const hidden = document.querySelector(".get-credits");
    hidden.innerText= "Find art from all over the world!";
    }
}

