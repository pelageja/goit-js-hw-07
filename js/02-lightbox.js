import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulRef = document.querySelector('.gallery');


const cartMarkup = createPictureCartMarkup(galleryItems);
 ulRef.insertAdjacentHTML('beforeend', cartMarkup);


function createPictureCartMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a  href="${original}">
   <img class="gallery__image"
     src="${preview}" 
    alt="${description}" />
   </a>
   </li>
   `;
    })
    .join('');
 
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});





