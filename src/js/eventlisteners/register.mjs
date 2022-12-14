import { registerAccount } from "../api/register.mjs"



// Register event listener function

export function setRegistrationFormEventListener() {
    const registrationForm = document.querySelector("#registrationForm");

    registrationForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        const registrationForm = e.target;
        const formData = new FormData(registrationForm);
        const profileData = Object.fromEntries(formData.entries());

        registerAccount(profileData);
    })     
}