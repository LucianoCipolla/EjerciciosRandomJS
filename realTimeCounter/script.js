const textarea = document.getElementById('text-input')
const count = document.getElementById('char-count')

textarea.addEventListener('input', ()=> {

    if (textarea.value.length >= 50) {
        count.style.color = 'red'
        textarea.value = textarea.value.slice(0, 50)
    }
    count.textContent = `Character Count: ${textarea.value.length}/50`
})