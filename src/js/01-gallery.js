import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const ulEl = document.querySelector(".gallery");
function createGalleryMarkUp(items){
   return items.map((item)=>
   `<li class="gallery__item">
   <a class="gallery__link" 
   href ="${item.original}">
   <img
   class="gallery__image" 
   src="${item.preview}"
   data-source="${item.original}"
   alt="${item.description}"/></a></li>`).join("");
}
const addGalleryMarkUp = createGalleryMarkUp(galleryItems);
ulEl.innerHTML = addGalleryMarkUp;

const lightbox = new SimpleLightbox('.gallery a');

ulEl.addEventListener("click", event => {
    event.preventDefault();
    if(event.target.nodeName !== "IMG"){
        return;
    }
});
document.addEventListener('keydown', (event) => {
   if (event.key === 'Escape' && lightbox.isOpen()) {
       lightbox.close();
   }
});