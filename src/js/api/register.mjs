import { mainAPI_URL } from "./constants.mjs"
import { registrationEndpoint } from "./constants.mjs"



//Send registration form to the API function

export async function registerAccount(profile){
    const response = await fetch (mainAPI_URL + registrationEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(profile)
     })

    const result = await response.json();
    const id = result.id

    if (id) {
        alert("You are now registered! Please log in");
        window.location.href="/login.html";

    }else{
        alert("Please try again");
        location.reload();
    }
    return result;

}