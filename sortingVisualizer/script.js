const arrayContainer = document.getElementById('array-container')
const generateBtn = document.getElementById('generate-btn')
const sortBtn = document.getElementById('sort-btn')
const startingArr = document.getElementById('starting-array')


const generateElement=()=>{
  return Math.floor(Math.random()*100 +1)
}

const generateArray = () =>{
  const arr = []
  for (let i = 0; i<5; i++){
    arr.push(generateElement())
  }
  return arr
  //return [87,6,1,37,76]
}

const generateContainer = () =>{
  return document.createElement('div')
}

const fillArrContainer = (el,arr) => {
    el.innerHTML = ``
  arr.forEach(num=>{
    el.innerHTML += `<span>${num}</span>`
  })
}

const isOrdered = (num1,num2) => {
  return num1<=num2 ? true : false
}

const swapElements = (arr,index) => {
  if (isOrdered(arr[index],arr[index+1])){
    return arr
  }
  const curr = arr[index]
  const next = arr[index+1]
  arr[index] = next
  arr[index+1] = curr
  return arr
}

const highlightCurrentEls = (el,index) => {
  const children = el.children
  children[index].style.border = '2px dashed red'
  children[index+1].style.border = '2px dashed red'  
}

const bubbleSort = (arr=[]) => {
  highlightCurrentEls(startingArr,0)
  for (let i=0;i<arr.length-1;i++){
    for (let j=0;j<arr.length-1;j++){
      swapElements(arr,j)
      const container = generateContainer()
      arrayContainer.appendChild(container)
      fillArrContainer(container,arr)
      highlightCurrentEls(container,j)
      console.log(j,arr)
    }  
  }
  //final
  const container = generateContainer()
  arrayContainer.appendChild(container)
  fillArrContainer(container,arr)
  //container.style.border = '3px solid green'
  return arr
}

let currentArr = []

generateBtn.addEventListener('click',()=>{
  sortBtn.hidden = false
  arrayContainer.innerHTML = ""
  currentArr = generateArray() 
  fillArrContainer(startingArr,currentArr)
  arrayContainer.appendChild(startingArr)


})

sortBtn.addEventListener('click',()=>{
  bubbleSort(currentArr)
  sortBtn.hidden = true
})
