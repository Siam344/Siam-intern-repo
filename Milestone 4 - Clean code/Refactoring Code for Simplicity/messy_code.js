function processUserData(users) {
    let output = [];
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let fullName = "";
        if (user.firstName && user.lastName) {
            fullName = user.firstName + " " + user.lastName;
        } else if (user.firstName) {
            fullName = user.firstName;
        } else if (user.lastName) {
            fullName = user.lastName;
        } else {
            fullName = "Unknown";
        }

        let ageMessage = "";
        if (user.age) {
            if (user.age > 0) {
                ageMessage = "Age: " + user.age;
            } else {
                ageMessage = "Invalid age";
            }
        } else {
            ageMessage = "Age not provided";
        }

        let message = "Name: " + fullName + " | " + ageMessage;
        output.push(message);
    }
    for (let j = 0; j < output.length; j++) {
        console.log(output[j]);
    }
}
