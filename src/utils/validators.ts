export const login = (value: string) => {
    if (!value) {
        return 'Field can not be empty'
    }

    if (value.length < 3) {
        return `Length of login should not be less 3 letters.`
    }

    return false
}
