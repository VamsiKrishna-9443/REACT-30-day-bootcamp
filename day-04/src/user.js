const loading = document.getElementById("loading");
const errors = document.getElementById("errors");
const usersContainer = document.getElementById("users");

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch Users");
        }

        const users = await response.json();

        loading.style.display = "none";

        usersContainer.innerHTML = "";

        users.forEach((user) => {

            const usercard = document.createElement("div");

            usercard.innerHTML = `
                <h2>${user.name}</h2>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <hr>
            `;

            usersContainer.appendChild(usercard);
        });

    } catch (error) {

        loading.style.display = "none";

        errors.textContent = "Unable to load users. Please try again.";

        console.log(error);
    }
}

getUsers();