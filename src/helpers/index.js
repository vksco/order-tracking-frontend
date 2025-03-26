

export const check_authenticated = () => {
    const token = localStorage.getItem('user_token')
    if(token) {
        return true
    }
    return false
}