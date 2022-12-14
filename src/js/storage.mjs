// Save to local storage

export function saveToStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));

}
export function loadFromStorage(key){
    const value = localStorage.getItem(key);
    return JSON.parse(value);

}
export function removeFromStorage(key){
    localStorage.removeItem(key, JSON.stringify(value));

}


