import { mainAPI_URL } from "./constants.mjs"
import { loginEndpoint } from "./constants.mjs"
import { loadFromStorage, saveToStorage } from "../storage.mjs"



//Send login form to API function


export async function loginAccount(profile){
    const response = await fetch (mainAPI_URL + loginEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
     })

    const result = await response.json();
    const token = result.accessToken;
    const name = result.name;
    const email = result.email;
    const avatar = result.avatar;

    saveToStorage("token", token);
    saveToStorage("name", name);
    saveToStorage("email", email);
    saveToStorage("avatar", avatar);

    if (token) {
        window.location.href="/listings.html";

    }
}