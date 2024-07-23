const url = "https://jsonplaceholder.typicode.com/todos"

const  getAllUsers = fetch(url)

getAllUsers.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
