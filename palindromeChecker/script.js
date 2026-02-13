const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultSpan = document.getElementById('result');

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,"")
    let inverseStr = cleanStr.split('').reverse().join('')
    return inverseStr === cleanStr
}



checkButton.addEventListener('click',()=>{
    if (inputText.value===''){
        alert('Please input a value')
    }
    isPalindrome(inputText.value) ?
    resultSpan.textContent = `${inputText.value} is a palindrome!` :
    resultSpan.textContent = `${inputText.value} is not a palindrome!`
    console.log(inputText.value)
})


console.log()