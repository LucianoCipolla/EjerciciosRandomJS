const example = "The quick brown fox jumped over the lazy dog" // longest word jumped with six characters

const findLongestWordLength = sentence => {
    let mayor = 0
    const words = sentence.trim().split(/\s+/) // /\s+/ expresion regular(\) que representa uno o mas(+) espacios en blanco(s)
    for ( const word of words) {
    const tam = word.length
    if (tam > mayor){
        mayor = tam
    }
    }
    return mayor
}

console.log(findLongestWordLength(example))