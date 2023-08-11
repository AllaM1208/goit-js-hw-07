import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(item => `<div class="gallery__item">
                  <a class="gallery__link" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                  </a>
                </div>`)
  .join('');

gallery.innerHTML = galleryMarkup;

const lightbox = basicLightbox.create(`<div class="lightbox"><img src="" alt="" /></div>`);

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const original = event.target.parentNode.href;
    const description = event.target.alt;
    lightbox.element().querySelector('img').src = original;
    lightbox.element().querySelector('img').alt = description;
    lightbox.show();
  }
});

lightbox.on('show', () => {
  document.body.style.overflow = 'hidden';
});
lightbox.on('close', () => {
  document.body.style.overflow = '';
});
