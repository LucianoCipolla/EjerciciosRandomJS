const getAverage = arr => {
  let acum = 0
  for (const x of arr){
    acum += x
  }
  return acum / arr.length
}

const getGrade = score => {
  let result
  if (score>=0 && score <= 59){
    result = "F"
  } else if (score<=69){
    result = "D"
  } else if (score<=79){
    result = "C"
  } else if (score<=89){
    result = "B"
  } else if (score<=99){
    result = "A"
  } else {
    result = "A+"
  }
  return result
}

const hasPassingGrade = score => {
  const isPassingGrade = getGrade(score)
  if ( isPassingGrade !== "F"){
    return true
  } else {
    return false
  }
}

const studentMsg = (arr,score) => {
  if ( hasPassingGrade(score)){
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`
  } else {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}

console.log(getGrade(100))