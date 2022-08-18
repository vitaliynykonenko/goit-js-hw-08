// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import "../css/01-gallery.css";
// import "../css/common.css";

console.log(galleryItems);

const imgContainer = document.querySelector('.gallery');
const imgGallery = createImagesMarkup(galleryItems);
imgContainer.insertAdjacentHTML('beforeend', imgGallery);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>

    </div>
`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
