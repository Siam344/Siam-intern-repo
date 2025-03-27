// Constants to avoid magic numbers and strings
const UNKNOWN_NAME = "Unknown";
const AGE_NOT_PROVIDED = "Age not provided";
const INVALID_AGE = "Invalid age";
const NAME_PREFIX = "Name: ";
const AGE_PREFIX = "Age: ";
const MESSAGE_SEPARATOR = " | ";

function getFullName(user) {
  if (user.firstName && user.lastName)
    return `${user.firstName} ${user.lastName}`;
  if (user.firstName) return user.firstName;
  if (user.lastName) return user.lastName;
  return UNKNOWN_NAME;
}

function getAgeMessage(age) {
  if (age === undefined) return AGE_NOT_PROVIDED;
  return age > 0 ? `${AGE_PREFIX}${age}` : INVALID_AGE;
}

function formatUserMessage(user) {
  const fullName = getFullName(user);
  const ageMessage = getAgeMessage(user.age);
  return `${NAME_PREFIX}${fullName}${MESSAGE_SEPARATOR}${ageMessage}`;
}

function processUserData(users) {
  const messages = users.map(formatUserMessage);
  messages.forEach((message) => console.log(message));
}
