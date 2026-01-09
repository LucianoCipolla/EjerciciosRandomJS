function truthCheck(collection, pre) {
    //puedo remplazar todo el for con un evert ejemplo --> return collection.every(obj=>obj[pre]) (hace lo mismo y es mucho mas corto de escribir)
    for (const obj of collection){
        if (!obj[pre]){
        return false
        }
    }
    return true
}

let result = truthCheck([{name: "Quincy", role: "Founder", isBot: true}, {name: "Naomi", role: "", isBot: true}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


console.log(result)

