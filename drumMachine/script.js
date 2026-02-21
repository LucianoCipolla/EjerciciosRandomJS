const drums = document.querySelectorAll('.drum-pad');
const drumMachine = document.getElementById('drum-machine')
const display = document.getElementById('display')


drums.forEach(drum => {
    drum.addEventListener('click',()=>{
        const audio = drum.querySelector('audio')
        displayName(drum)
        audio.play()
    })
})

document.addEventListener('keydown',(e)=>{
    drums.forEach(drum =>{
        const audio = drum.querySelector('audio')
        if (audio.id === e.key.toUpperCase()){
            displayName(drum)
            audio.play()
        }
    })
})

function displayName(drum){
    display.innerText = drum.id
}