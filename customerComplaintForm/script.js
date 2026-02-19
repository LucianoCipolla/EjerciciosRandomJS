const fullName = document.getElementById('full-name')
const email = document.getElementById('email')
const orderN = document.getElementById('order-no')
const productCode = document.getElementById('product-code')
const quantity = document.getElementById('quantity')
const complaints = document.querySelectorAll('input[name="complaint"]')
const complaintDescription = document.getElementById('complaint-description')
const otherComplaint = document.getElementById('other-complaint')
const solutions = document.querySelectorAll('input[name="solutions"]')
const solutionDescription = document.getElementById('solution-description')
const otherSolution = document.getElementById('other-solution')

const complaintDescriptionContainer = document.getElementById('complaint-description-container')
const solutionDescriptionContainer = document.getElementById('solution-description-container')

function isFullNameEmpty(){
  return fullName.value ? true : false
}

function isEmailValid(){
  const regex = /[\w]+@[\w]+\.com/
  return email.value.match(regex) ? true : false
}

function isOrderNValid(){
  const regex = /2024[\d]{6}/
  return orderN.value.match(regex) ? true : false
}

function isProductCodeValid(){
  const regex = /[a-z]{2}[\d]{2}-[a-z][\d]{3}-[a-z]{2}[\d]/i
  return productCode.value.match(regex) ? true : false
}

function isQuantityValid(){
  return quantity.value>0 ? true : false
}

function isOneChecked(listCheckbox){
  for (const checkbox of listCheckbox){
    if (checkbox.checked){
      return true
    }
  }
  return false
}

function isDescriptionValid(description,otherCheckbox){
  if (!otherCheckbox.checked){
    return true
  }
  if (description.value.length >= 20 && otherCheckbox.checked){
    return true
  }
  return false
}

function validateForm(){
  return {
    'full-name':isFullNameEmpty(),
    email: isEmailValid(),
    'order-no': isOrderNValid(),
    'product-code' : isProductCodeValid(),
    quantity: isQuantityValid(),
    'complaints-group' : isOneChecked(complaints),
    'complaint-description' : isDescriptionValid(complaintDescription,otherComplaint),
    'solutions-group': isOneChecked(solutions),
    'solution-description' : isDescriptionValid(solutionDescription,otherSolution)
  }
}

function isValid(obj){
  let result = true
  for (const property in obj){
    if (!obj[property]){
      const element = document.getElementById(property)
      element.style.borderColor = 'red'
      result = false
    }
  }
  return result
}

otherComplaint.addEventListener('change', () => {
  complaintDescriptionContainer.hidden = !otherComplaint.checked
})

solutions.forEach(solution => {
    solution.addEventListener('change', (e) => {
      if (e.target.value === 'other') {
        solutionDescriptionContainer.hidden = false;
        solutionDescription.required = true;
    } else {
        solutionDescriptionContainer.hidden = true;
        solutionDescription.required = false;
    }
  })
})

const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => 
  input.addEventListener('change', (e) => {
    const form = validateForm()
    const element = e.target
    const elements = document.querySelectorAll(`input[name="${e.target.name}"]`)

    if (e.target.type === 'checkbox' || e.target.type === 'radio'){
      const fieldset = element.closest('fieldset')
      fieldset.style.borderColor = isOneChecked(elements) ? 'green' : 'red'
    } else {
      element.style.borderColor = form[e.target.id] ? 'green' : 'red'
    }
  })
);

const form = document.getElementById('form')

form.addEventListener('submit',()=>{
  isValid(validateForm())
})
