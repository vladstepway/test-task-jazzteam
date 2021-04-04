export const validateUserCredentials = (response, userInput) => {
    if (userInput.login === response.username && userInput.password === response.password) {
        return userInput;
    }
    throw Error('Incorrect login or password. Try again!')
}
