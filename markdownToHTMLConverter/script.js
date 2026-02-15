const markDownInput = document.getElementById('markdown-input')
const htmlOutput = document.getElementById('html-output')
const htmlPreview = document.getElementById('preview')

const h1Regex = /^#(?!#)\s.+/
const h2Regex = /^##(?!#)\s.+/
const h3Regex = /^###(?!#)\s.+/
const strongRegex = /^(\*\*|__).*\1$/
const emRegex = /^(\*|_)(?!\*).*(?<!\*)\1$/
const imgRegex = /^!\[(.*?)\]\((.*?)\)$/ 
const aRegex = /^\[(.*?)\]\((.*?)\)$/
const quoteRegex = /^> .+/


function convertMarkdown(){
  const lines = markDownInput.value.split('\n')
  let html = ''
  for (const line of lines){
    if(line.match(h1Regex)){
        html += `<h1>${parseInLine(line.replace(/^#{1,3}\s/,''))}</h1>`
        continue
    }
    if(line.match(h2Regex)){
        html += `<h2>${parseInLine(line.replace(/^#{1,3}\s/,''))}</h2>`
        continue
    }
    if(line.match(h3Regex)){
        html += `<h3>${parseInLine(line.replace(/^#{1,3}\s/,''))}</h3>`
        continue
    }
    if(line.match(strongRegex)){
        html += `<strong>${parseInLine(line.replace(/^(\*\*|__)/,'').replace(/(\*\*|__)$/,''))}</strong>`
        continue
    }
    if(line.match(emRegex)){
        html += `<em>${parseInLine(line.replace(/^(\*|_)/,'').replace(/(\*|_)$/,''))}</em>`
        continue
    }
    if(line.match(quoteRegex)){
        html += `<blockquote>${parseInLine(line.replace(/^>\s/,''))}</blockquote>`
        continue
    }
    if(line.match(imgRegex)){
        const match = line.match(imgRegex)
        html += `<img alt="${match[1]}" src="${match[2]}">`
        continue
    }
    if(line.match(aRegex)){
        const match = line.match(aRegex)
        html += `<a href="${match[2]}">${match[1]}</a>`
        continue
    }

    if(line!== ''){
      html+=`<p>${parseInLine(line)}</p>`
    } 
  }
  return html
}

function parseInLine(str){
  str = str.replace(/(\*\*|__)(.*)\1/,'<strong>$2</strong>')
  str = str.replace(/(\*|_)(.*)\1/,'<em>$2</em>')
  return str
}



markDownInput.addEventListener('input',()=>{
  const html = convertMarkdown()
  htmlOutput.textContent= html 
  preview.innerHTML = html 
  })