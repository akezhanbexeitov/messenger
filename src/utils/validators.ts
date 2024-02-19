const namesValidators = (value: string) => {
    // Check if value contains latin or cyrillic characters
    const cyrillicPattern = /^[а-яА-ЯёЁ\s]+$/
    const latinPattern = /^[a-zA-Z\s]+$/
    if (!cyrillicPattern.test(value) && !latinPattern.test(value)) { 
        return 'First name must contain only Cyrillic or Latin characters'
    }

    // Check if first letter is not a capital letter
    const firstLetterNotCapitalPattern = /^[^A-ZА-ЯЁ]/
    if (firstLetterNotCapitalPattern.test(value)) {
        return 'First letter must be a capital letter'
    }

    return false
}


// eslint-disable-next-line @typescript-eslint/naming-convention
export const first_name = (value: string) => namesValidators(value)

// eslint-disable-next-line @typescript-eslint/naming-convention
export const second_name = (value: string) => namesValidators(value)

export const login = (value: string) => {
    // Check if the login is not from 3 to 20 characters long
    if (value.length < 3 || value.length > 20) {
        return 'Login must be from 3 to 20 characters long'
    }

    // Check if login contains any spaces
    const spacesPattern = /\s/;
    if (spacesPattern.test(value)) {
        return 'Login must not contain any spaces'
    }

    // Check if login contains any special signs other than dash and underline
    const specialSignsPattern = /[^a-zA-Z0-9-_]/;
    if (specialSignsPattern.test(value)) {
        return 'Login must not contain any special signs other than dash and underline'
    }

    // Check if login is not all numbers and contains only Latin characters, numbers, dashes, and underscores
    const latinWithNumbersPattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9-_]+$/;
    if (!latinWithNumbersPattern.test(value)) {
        return 'Login must have Latin characters and can contain numbers, dashes, and underscores';
    }
}

export const email = (value: string) => {
    // Check if email is valid
    const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
    if (!emailPattern.test(value)) {
        return 'Enter valid email address'
    }
    return false
}

export const password = (value: string) => {
    // Check if the password is not from 8 to 40 characters long
    if (value.length < 8 || value.length > 40) {
        return 'Password must be from 8 to 40 characters long'
    }

    // Check if password contains at least one uppercase letter
    const uppercasePattern = /[A-Z]/;
    if (!uppercasePattern.test(value)) {
        return 'Password must contain at least one uppercase letter'
    }

    // Check if password contains at least one digit
    const digitPattern = /\d/;
    if (!digitPattern.test(value)) {
        return 'Password must contain at least one digit'
    }

    return false
}

export const phone = (value: string) => {
    // Check if the phone number is not from 10 to 15 characters long
    if (value.length < 10 || value.length > 15) {
        return 'Phone number must be from 10 to 15 characters long'
    }

    // Check if phone number consists of digits and possibly starts with a plus
    const phonePattern = /^\+?\d+$/;
    if (!phonePattern.test(value)) {
        return 'Phone number must consist of only digits and optionally start with a plus sign'
    }

    return false
}

export const message = (value: string) => {
    // Check if the message is empty
    if (!value.trim()) {
        return 'Message should not be empty'
    }

    return false
}

export const chatTitle = (value: string) => { 
    // Check if the chat title is empty
    if (!value.trim()) {
        return 'Chat title should not be empty'
    }

    return false
}

export const userName = (value: string) => { 
    // Check if the user name is empty
    if (!value.trim()) {
        return 'User name should not be empty'
    }

    return false
}
