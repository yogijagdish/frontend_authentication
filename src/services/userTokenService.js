
// it stores the token when user login or register itself
const storeToken = (value) => {
    if(value){
        const {access,refresh} = value
        localStorage.setItem('access_token',access)
        localStorage.setItem('refresh_token',refresh)
    }
}

// it is used to access the token to make sure that the user neednot login every time it redirects to home page
const getToken = () => {
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem('refresh_token')
    return {access_token,refresh_token}
}

// it removes the token from local storage when user log out
const deleteToken =() => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}

export {storeToken,getToken,deleteToken}