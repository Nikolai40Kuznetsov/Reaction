import ava from "../assets/ava.jpg"

let defaultUsers = [
    {
      name: "admin",
      pasword: "1234",
      info:"admin",
      image: ava,
      favorite: [],
    }
]

const STORAGE_KEY = "users_data";
function loadUsers() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : defaultUsers;
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}


function clearItem() {
    users.forEach(user => {
        user.favorite = [];
    });
    saveUsers(users);
}

const users = loadUsers();

export { users, saveUsers, clearItem }