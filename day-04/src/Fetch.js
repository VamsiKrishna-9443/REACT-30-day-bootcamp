

    //fetch basic
    console.log("Basic Fetch")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response);
    });
    //fetch using async/await
    console.log("fetch using aync and await")
    async function getUsers() {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json()
            console.log(users);
        }
        catch(error)
        {
            console.log(error);
        }
}

getUsers();