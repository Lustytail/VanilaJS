
const loginDiv = document.querySelector(".login");
const mainDiv = document.querySelector(".main");
const id = document.querySelector("#ID");
const form = document.querySelector(".login-form");

function toggleDiv() {
    loginDiv.classList.add("hidden");
    mainDiv.classList.remove("hidden");
}

function login(event) {
    event.preventDefault();

    const inputID = id.value;

    if(inputID === "") {
        alert("Input your ID");
        return;
    }

    localStorage.setItem("ID", inputID);

    toggleDiv();
}

form.addEventListener("submit", login);

if(localStorage.getItem("ID") !== null) {
    toggleDiv();
}
