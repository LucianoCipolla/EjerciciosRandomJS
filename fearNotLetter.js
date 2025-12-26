const fearNotLetter = str =>{
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const start = alphabet.indexOf(str[0])
    let cant = 0
    for (let i=start;i<=start+str.length-1;i++){
    if (str[cant]!== alphabet[i]){
        return alphabet[i]
    }
    cant++
    }
}


console.log(fearNotLetter("stvwx"))