function uniteUnique(arr1,arr2,...arrX){
    const uniqueArr = []
    for (const element of arr1){
        if (!uniqueArr.includes(element)){
            uniqueArr.push(element)
        }
    }
    for (const element of arr2){
        if (!uniqueArr.includes(element)){
            uniqueArr.push(element)
        }
    }   
    for (const arr of arrX){
        for (const element of arr){
            if (!uniqueArr.includes(element)){
                uniqueArr.push(element)
            }
        }
    }
    return uniqueArr
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))