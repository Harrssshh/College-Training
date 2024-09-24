document.addEventListener('DOMContentLoaded', () => {
    const usersList = document.getElementById('users-list');

    // Fetch user data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // Loop through the users and display their data
            users.forEach(user => {
                const userItem = document.createElement('li');
                
                // Create a formatted string for the user's address
                const address = `${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;
                
                // Fill the list item with user details
                userItem.innerHTML = `
                    <strong>Name:</strong> ${user.name} <br>
                    <strong>Email:</strong> ${user.email} <br>
                    <strong>Address:</strong> ${address}
                `;
                
                usersList.appendChild(userItem);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
});
