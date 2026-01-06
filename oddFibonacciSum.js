const sumFibs = num =>{
    let acum = 0
    let ant=0
    let act=1
    let sig=0
    while(act<=num){
        if (act%2==1 && act<=num){
        acum+=act
        }
        sig =ant+act
        ant = act
        act = sig
    }
    return acum
}


console.log(sumFibs(1000))