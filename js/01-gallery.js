import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);





const ulRef = document.querySelector('.gallery');



const cartMarkup = createPictureCartMarkup(galleryItems);
ulRef.insertAdjacentHTML('beforeend', cartMarkup);








//Создаем функцию для создания разметки

function createPictureCartMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`;
    })
    .join('');
};




//Создаем функцию,чтобы страница не перезагружалась и то что кликаем именно на тег IMG

let instance;
function onPictureClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
 
  instance = basicLightbox.create(`<img src="${event.target.dataset.source}" />`
  );

  instance.show();

 window.addEventListener("keydown", onEcpBtnPush);

  
 
  function onEcpBtnPush(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
    window.removeEventListener("keydown", onEcpBtnPush);
  }
};
ulRef.addEventListener('click', onPictureClick);