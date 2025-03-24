// Function that does something with users
function doSomething(users) {
    // Loop through the users
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let x = user.age * 2; // Multiply age by 2
        let y = x / 3; // Divide by 3
        let z = y + 10; // Add 10
        console.log("User: " + user.name + ", Value: " + z); // Print result
    }
}
