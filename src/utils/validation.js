export const validateUserCredentials = (response, userInput) => {
    if (userInput.login !== response.username && userInput.password !== response.password) {
        throw Error('Incorrect login or password. Try again!')
    }
    return userInput;
}
