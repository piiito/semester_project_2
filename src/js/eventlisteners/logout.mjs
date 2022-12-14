import { loadFromStorage, removeFromStorage } from "../storage.mjs"



//Logout function


export function logoutAccount(){
    
    // removeFromStorage(token);
    // removeFromStorage("profile");
    
    localStorage.clear();

    console.log("hey");
    const token = loadFromStorage("token");

    if (!token) {
        window.location.href="/index.html";

    }
}
console.log("heyhey");

//Logout event listener function

export function logoutEventListener() {
    
    const logoutButton = document.querySelector(".logout-button");
    if (logoutButton){

    logoutButton.addEventListener("click", logoutAccount);
    }
     console.log("heyheyhey");

    
    };

    logoutEventListener()