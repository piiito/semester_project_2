import { mainAPI_URL } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"



// Show credit function
export async function showCredits(){
    const token = loadFromStorage("token");
    const name = loadFromStorage("name")

    const response = await fetch (`${mainAPI_URL}/api/v1/auction/profiles/${name}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
     })

    const credit = await response.json();
    
    if(credit){
        const totalCredit = document.querySelector("#credits");
        totalCredit.innerHTML= `${credit.credits}`;

    }

}
