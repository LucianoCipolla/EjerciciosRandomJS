const permuteString = (str,prefix='',results=[]) =>{
  if (!str.length){
    results.push(prefix)
    return results
  }
  for (let i = 0; i < str.length ; i++){
    const char = str[i]
    const remaining = str.slice(0,i) + str.slice(i+1)
    permuteString(remaining,prefix+char,results)
  }
  return [...new Set(results)]
}

console.log(permuteString('fcc'))