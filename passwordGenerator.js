const generatePassword = length =>{
    const randomStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    let password = ''

    for (let i=0;i<length;i++){
        const randomNumber = Math.floor(Math.random()*(randomStr.length))
        password+=randomStr[randomNumber]
    }
    return password
}

const password = generatePassword(5)
console.log(`Generated password: ${password}`)