import { loadFromStorage } from "../storage.mjs";

export function logged(){

    const token = loadFromStorage("token")
    console.log(token);

    if (token){

    const TextElements = document.querySelectorAll(".logged-in");
    console.log(TextElements);

    for (var i = 0, max = TextElements.length; i < max; i++) {
    TextElements[i].style.display = "none";
    console.log(TextElements);
}
}

else if (!token){

    const TextElements = document.querySelectorAll(".logged-out");
    console.log(TextElements);

    for (var i = 0, max = TextElements.length; i < max; i++) {
    TextElements[i].style.display = "none";
    console.log(TextElements);
}
    //     const loggedIn = document.querySelectorAll(".logged-out").style.display = "none";
        // const button = document.querySelectorAll(".logged-out");
        // button.style.display= "none";
        // console.log(button);
    }
}


// const token = loadFromStorage("token");

// if(token){
//     const logInButton = document.getElementById("logged-in");
//     console.log("testing");
//     logInButton.style.display = "none";

//     console.log("testing");
// }
// else{
//     const logOutButton = document.getElementById("logged-out");
//     logOutButton.style.display = "none";
//     console.log("testing2");
// }

// }



export function changeCTA(){

    const token = loadFromStorage("token")
    console.log(token);

    if (token){
    
    const registerCTA = document.querySelector(".register-cta");
    registerCTA.innerText = "View listings";
    registerCTA.setAttribute("href", "listings.html");
    const loginCTA = document.querySelector(".login-cta");
    loginCTA.style.display = "none";

}}