export const first_name = (value: string) => {
    // Check if value contains latin or cyrillic characters
    const cyrillicPattern = /^[а-яА-ЯёЁ\s]+$/
    const latinPattern = /^[a-zA-Z\s]+$/
    if (!cyrillicPattern.test(value) || !latinPattern.test(value)) { 
        return 'First name should contain only Cyrillic or Latin characters'
    }

    // Check if first letter is not a capital letter
    const firstLetterNotCapitalPattern = /^[^A-ZА-ЯЁ]/
    if (firstLetterNotCapitalPattern.test(value)) {
        return 'First letter should be a capital letter'
    }

    // Check if value contains any spaces or numbers
    const spacesOrNumbersPattern = /\s|\d/
    if (spacesOrNumbersPattern.test(value)) {
        return 'Login should not contain any spaces or numbers'
    }

    // Check if value contains any special signs
    const specialSignsPattern = /-/;
    if (specialSignsPattern.test(value)) {
        return 'Value should not contain any special signs'
    }

    return false
}

export const second_name = (value: string) => {
    // Check if value contains latin or cyrillic characters
    const cyrillicPattern = /^[а-яА-ЯёЁ\s]+$/
    const latinPattern = /^[a-zA-Z\s]+$/
    if (!cyrillicPattern.test(value) || !latinPattern.test(value)) { 
        return 'First name should contain only Cyrillic or Latin characters'
    }

    // Check if first letter is not a capital letter
    const firstLetterNotCapitalPattern = /^[^A-ZА-ЯЁ]/
    if (firstLetterNotCapitalPattern.test(value)) {
        return 'First letter should be a capital letter'
    }

    // Check if value contains any spaces or numbers
    const spacesOrNumbersPattern = /\s|\d/
    if (spacesOrNumbersPattern.test(value)) {
        return 'Login should not contain any spaces or numbers'
    }

    // Check if value contains any special signs
    const specialSignsPattern = /-/;
    if (specialSignsPattern.test(value)) {
        return 'Value should not contain any special signs'
    }

    return false
}
