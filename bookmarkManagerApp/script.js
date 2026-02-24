const mainSection = document.getElementById('main-section')
const formSection = document.getElementById('form-section')
const addBookmarkButton = document.getElementById('add-bookmark-button')
const categoryName = document.querySelector('.category-name')
const categoryDropdown = document.querySelector('#category-dropdown')
const closeFormButton = document.getElementById('close-form-button')
const addBookmarkButtonForm = document.getElementById('add-bookmark-button-form')
const nameInput = document.getElementById('name')
const urlInput = document.getElementById('url')
const bookmarkListSection = document.getElementById('bookmark-list-section')
const viewCategoryButton = document.getElementById('view-category-button')
const categoryList = document.getElementById('category-list')


const bookmarks = getBookmarks()

function getBookmarks(){
  let data =  localStorage.getItem('bookmarks')
  return data ? JSON.parse(data) : []
}


const displayOrCloseForm=()=>{
  mainSection.classList.toggle('hidden')
  formSection.classList.toggle('hidden')
}

addBookmarkButton.addEventListener('click',()=>{
  categoryName.innerText = categoryDropdown.value
  displayOrCloseForm()
})


closeFormButton.addEventListener('click',displayOrCloseForm)

addBookmarkButtonForm.addEventListener('click',()=>{
  const bookmarkObj = {name:nameInput.value,category:categoryDropdown.value,url:urlInput.value}
  bookmarks.push(bookmarkObj)
  localStorage.setItem(bookmarks,JSON.stringify(bookmarks))
  nameInput.value = ''
  urlInput.value = ''
  displayOrCloseForm()
})

const displayOrHideCategory=()=>{
  bookmarkListSection.classList.toggle('hidden')
  mainSection.classList.toggle('hidden')
}

viewCategoryButton.addEventListener('click',()=>{
  categoryName.innerText = categoryDropdown.value
  displayOrHideCategory()
  const isThereAnyBookmark = bookmarks.findIndex((bookmark)=> bookmark.category === categoryDropdown.value)

  if (isThereAnyBookmark === -1){
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`
    return
  }
  
})


console.log(bookmarks)