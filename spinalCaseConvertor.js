const spinalCase = (str)=>{
    return str.replace(/([A-Z])/g,'-$1').replace(/^-/,'').replace(/\s(?!-)/,'-').replace(/(?:_|\s)/g,'').toLowerCase()
}

console.log(spinalCase("Teletubbies say Eh-oh"))