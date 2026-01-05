let inventory = []

const findProductIndex = name =>{
    for (let product of inventory){
        if (name.toLowerCase()===product.name){
        return inventory.indexOf(product)
        }
    }
    return -1
}

const addProduct = product =>{
    const index=findProductIndex(product.name)
    product.name = product.name.toLowerCase()
    if (index!==-1){
        inventory[index].quantity += product.quantity
        console.log(`${product.name} quantity updated`) 
    }
    else {
        inventory.push(product)
        console.log(`${product.name} added to inventory`)
    }
}

const removeProduct = (name,quantity) =>{
    name = name.toLowerCase()
    for (let product of inventory){

    if (product.name === name){
        if (product.quantity>=quantity){
        product.quantity -= quantity
        console.log(`Remaining ${product.name} pieces: ${product.quantity}`)
        
            if (product.quantity === 0){
                const index = findProductIndex(product.name)
                inventory.splice(index,1)
            }

        } else {
            console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`)
        }
        return
        }
    }
    console.log(`${name} not found`)

} 
//console.log(findProductIndex("flour"))
addProduct({name: "FLOUR", quantity: 5})
addProduct({name: "FLOUR", quantity: 5})
removeProduct("FLOUR", 10)  
removeProduct("FLOUR", 5)
addProduct({name: "FLOUR", quantity: 5})
removeProduct("FLOUR", 10)