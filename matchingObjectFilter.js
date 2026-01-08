const whatIsInAName = (arr,obj) => {
    return arr.filter(element => {
        for (let property in obj){
            if (obj[property] !== element[property]){
                return false
            }
        }
        return true
    })
}


console.log(whatIsInAName([
    { "apple": 1, "bat": 2 }, 
    { "apple": 1 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }], 
    { "apple": 1, "cookie": 2 }))

//[{"apple": 1, "bat": 2, "cookie": 2}]