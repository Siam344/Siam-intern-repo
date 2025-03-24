function getFullName(user) {
    if (user.firstName && user.lastName) return `${user.firstName} ${user.lastName}`;
    if (user.firstName) return user.firstName;
    if (user.lastName) return user.lastName;
    return "Unknown";
}

function getAgeMessage(age) {
    if (age === undefined) return "Age not provided";
    return age > 0 ? `Age: ${age}` : "Invalid age";
}

function formatUserMessage(user) {
    const fullName = getFullName(user);
    const ageMessage = getAgeMessage(user.age);
    return `Name: ${fullName} | ${ageMessage}`;
}

function processUserData(users) {
    const messages = users.map(formatUserMessage);
    messages.forEach((message) => console.log(message));
}
