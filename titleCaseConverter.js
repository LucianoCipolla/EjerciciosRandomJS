const titleCase = str => {
    let anterior = " "
    let titleStr = ""
    for (const char of str) {
        if (anterior === " "){
        titleStr += char.toUpperCase()
        } else {
        titleStr += char.toLowerCase()
        }
        anterior = char
    }
    return titleStr
}

console.log(titleCase("hola como estas"))