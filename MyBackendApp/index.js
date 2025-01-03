const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

const url = "http://localhost:8080/api";

const getUsers = async() => {
    const response = await fetch(url+"/users");
    console.log(response);
}

getUsers();