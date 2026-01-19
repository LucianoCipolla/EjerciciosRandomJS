const closeBtn = document.getElementById('close-btn');
const lightbox = document.querySelector('.lightbox');
const gallery = document.querySelector('.gallery');
const lightboxImg = document.getElementById('lightbox-image');

closeBtn.addEventListener('click',()=>{
    lightbox.style.display = 'none';
})

gallery.addEventListener('click', (event)=>{
    if(event.target.tagName === 'IMG'){
        lightbox.style.display = 'flex';
        lightboxImg.src = event.target.src.replace('-thumbnail','');
    }
})

lightbox.addEventListener('click',(event)=>{
    lightbox.style.display = 'none';
})