import { updateProfile } from "../api/updateavatar.mjs"
import { getProfile } from "../api/updateavatar.mjs"
import { loadFromStorage } from "../storage.mjs";


// UpdatePost eventListener

export async function updateProfileFormEventListener() {
    const updateProfileForm = document.querySelector("#profileform");

    if (updateProfileForm){

    const name = loadFromStorage("name");
    const email = loadFromStorage("email");
    // const avatar = loadFromStorage("avatar");
    updateProfileForm.name.value = name;
    updateProfileForm.email.value = email;

    const button = updateProfileForm.querySelector("button");
    button.disabled = true;


    const profile = await getProfile(name);
    

    updateProfileForm.avatar.value = profile.avatar;
 
    
    const avatarImage = document.querySelector(".avatar-image");
    avatarImage.src= profile.avatar;


    button.disabled = false;

    updateProfileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const updateProfileForm = e.target;
        const formData = new FormData(updateProfileForm);
        const profileData = Object.fromEntries(formData.entries())
        

        profileData.name = name;
        profileData.email = email;
        const avatar = profileData.avatar;
        
        const avatarImage = document.querySelector(".avatar-image");
        avatarImage.src= avatar;

        updateProfile(profileData);

    });
}
}

