function addTogether(num1 , num2){  const nums = arguments.length
  if(nums===1){
    if (typeof num1 !== 'number'){
      return
    }
    return function(num2){
      if (typeof num2 !== 'number'){
      return}
      return num1+num2
      }
  } 
  if (typeof num1 !== 'number'||typeof num2 !== 'number'){
    return
  }
  return num1+num2

}

console.log(addTogether(2)([3])) 