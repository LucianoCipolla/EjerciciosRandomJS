const diffArray = (arr1,arr2) => {
    const result = [...arr1,...arr2]
    return result.filter(element => !arr2.includes(element) || !arr1.includes(element))
}


console.log(diffArray(["diamond", "stick", "apple"],["stick", "emerald", "bread"]))