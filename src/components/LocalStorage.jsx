function saveLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadLocalStorage(user){
    let user = JSON.parse( localStorage.user );
}
export {saveLocalStorage, loadLocalStorage}