const themes = [{name:'light',message:'Here comes the sun tutu tutu'},{name:'dark',message:'Winter is comming'}]

const switcherEl = document.getElementById('theme-switcher-button')
const themesOptions = document.querySelectorAll('[role="menuitem"]')
const dropdown = document.getElementById('theme-dropdown')

switcherEl.addEventListener('click',()=>{
  if(dropdown.hidden===true){ 
  dropdown.hidden=false
  switcherEl.setAttribute('aria-expanded','true')
  } else {
  dropdown.hidden=true
  switcherEl.setAttribute('aria-expanded','false')
  }
})



function getThemeMessage(nameTheme){
  for (const theme of themes){
    if (nameTheme.toLowerCase()===theme.name){
      return theme.message
    }
  }
}

const messageEl = document.getElementById('status')
const body = document.querySelector('body')


themesOptions.forEach(theme=>{
  theme.addEventListener('click',()=>{
    const message = getThemeMessage(theme.textContent)
    messageEl.textContent = message
    dropdown.hidden=true
    body.setAttribute('class',`theme-${theme.textContent.toLowerCase()}`)
  })
})