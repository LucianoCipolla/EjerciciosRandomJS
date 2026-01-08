const sumPrimes = num => {
    if (num<2){
        return 0
    }
    let isPrime=false
    let sum = 2
    for(let i=3;i<=num;i++){
        isPrime=true
        for(let j=2;j<i;j++){
            if (i%j===0){
                isPrime=false
                break
            }
        }
        if (isPrime){sum+=i}
    }
    return sum
}

console.log(sumPrimes(5))