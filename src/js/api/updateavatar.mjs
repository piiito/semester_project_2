import { mainAPI_URL } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"



// Update profile function
export async function  updateProfile(profileData){
    if(!profileData.name) {
        throw new Error ("Update equires a name");

    }

    const updateProfileURL= `${mainAPI_URL}/api/v1/auction/profiles/${profileData.name}/media`;
    const token = loadFromStorage("token");
    const name = loadFromStorage("name");

    const response = await fetch (updateProfileURL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(profileData)
     })
     
     return await response.json;

    // const profile = await response.json();  
    // console.log(profile);
    // const avatar = profile.avatar;



    // if (avatar) {
    //     alert("Your avatar was successfully updated!");
    //     window.location.href="/profile.html";

    }

    
    
    
    // Get profile function
    export async function  getProfile(name){
        if(!name) {
            throw new Error ("Update equires a name");
    
        }
    
        const getProfileURL= `${mainAPI_URL}/api/v1/auction/profiles/${name}`;
        const token = loadFromStorage("token");
        // const name = loadFromStorage("name");
    
        const response = await fetch (getProfileURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
         })
         
         return response.json;
         
        // const profile = await response.json();  
        // console.log(profile);
        // const avatar = profile.avatar;
    
    
    
        // if (avatar) {
        //     alert("Your avatar was successfully updated!");
        //     window.location.href="/profile.html";
    
        }
    
    