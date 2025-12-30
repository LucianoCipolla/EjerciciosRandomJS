const pyramid = (pattern,rows,bool) => {
    let spaces = ' '
    let count = rows -1
    let str = '\n'
    if (bool){
        count = 0
        for (let i=rows;i>0;i--){
        str = str + (spaces.repeat(count)+pattern.repeat(i*2-1)+'\n')
        count += 1
    }
    } else {
        for (let i=0;i<rows;i++){
        str = str+(spaces.repeat(count)+pattern.repeat(i*2+1)+'\n')
        count -= 1
    }
    }
    return str
}


console.log(pyramid("o", 4, true))