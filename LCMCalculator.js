const smallestCommons = arr => {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    let mcm = 1
    const nums = []
    for (let i=min;i<=max;i++){
        mcm *= i
        nums.push(i)
    }
    const isCm = (nums,mcm) => {
        for(const num of nums){
            if (mcm%num!==0){return false}
        }
    return true
    }

    let flag
    for (let i=max;i<=mcm;i+=max){
        flag = isCm(nums,i)
        if(flag){
            return i
        }
    }
}


console.log(smallestCommons([1, 13]))