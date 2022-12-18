import { mainAPI_URL } from "./constants.mjs"
import { loadFromStorage } from "../storage.mjs"



// Update profile function
export async function  updateProfile(profileData){
    if(!profileData.name) {
        throw new Error ("Update requires a name");

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
     
     return await response.json();


    }

    
    
    
    // Get profile function
    export async function  getProfile(){
        const name = loadFromStorage("name");
        if(!name) {
            throw new Error ("Update requires a name");
    
        }
    
        const getProfileURL= `${mainAPI_URL}/api/v1/auction/profiles/${name}`;
        const token = loadFromStorage("token");
    
        const response = await fetch (getProfileURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
         })
         
         const profile = response.json();
         
         return profile;
         
        }
    
    