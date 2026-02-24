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
const closeListButton = document.getElementById('close-list-button')
const deleteBookmarkButton = document.getElementById('delete-bookmark-button')


const bookmarks = getBookmarks()

function getBookmarks(){
  let data =  localStorage.getItem('bookmarks')
  if (!data) return []
  try {
    const result = JSON.parse(data);

    if (!Array.isArray(result)) return [];

    const isValid = result.every(
      item =>
        typeof item === "object" &&
        item !== null &&
        "name" in item &&
        "category" in item &&
        "url" in item
    );

    return isValid ? result : [];

  } catch(error) {
    return []

  }
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

addBookmarkButtonForm.addEventListener('click', () => {
  const bookmarks = getBookmarks();

  const bookmarkObj = {name:nameInput.value,category:categoryDropdown.value,url:urlInput.value}
  bookmarks.push(bookmarkObj)
  localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
  nameInput.value = ''
  urlInput.value = ''
  displayOrCloseForm()
})

const displayOrHideCategory=()=>{
  bookmarkListSection.classList.toggle('hidden')
  mainSection.classList.toggle('hidden')
}

const viewCategory = ()=>{
  const bookmarks = getBookmarks();
  const isThereAnyBookmark = bookmarks.findIndex((bookmark)=> bookmark.category === categoryDropdown.value)

  if (isThereAnyBookmark === -1){
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`
    return
  }
  categoryList.innerHTML = ''
  bookmarks.forEach(bookmark=>{
    if (bookmark.category === categoryDropdown.value){
      categoryList.innerHTML += `<div><input id="${bookmark.name}" value="${bookmark.name}" name="bookmarks" type="radio">
    <label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label></div>`
    }
  })
}

viewCategoryButton.addEventListener('click',()=>{
  
  categoryName.innerText = categoryDropdown.value
  displayOrHideCategory()
  viewCategory()
  

})

closeListButton.addEventListener('click',()=>{
  bookmarkListSection.classList.toggle('hidden')
  mainSection.classList.toggle('hidden')
})


deleteBookmarkButton.addEventListener('click',()=> {
  const bookmarksByCategory = document.querySelectorAll('input[type="radio"]')
  bookmarksByCategory.forEach(bookmarkRadio=>{
    if (bookmarkRadio.checked){
      const bookmarks = getBookmarks();
      const index = bookmarks.findIndex(bookmark => bookmark.name===bookmarkRadio.id && bookmark.category === categoryDropdown.value)
      if (index !== -1) {
        bookmarks.splice(index,1)
      }
      localStorage.setItem('bookmarks',JSON.stringify(bookmarks))

    }
  })
  viewCategory()
})