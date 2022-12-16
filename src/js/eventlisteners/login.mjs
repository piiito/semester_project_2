import { loginAccount } from "../api/login.mjs"

//Login event listener function

export function setLoginFormEventListener() {
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginForm = e.target;
        const formData = new FormData(loginForm);
        const profileData = Object.fromEntries(formData.entries());

        loginAccount(profileData);


    });
}

