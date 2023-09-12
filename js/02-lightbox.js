import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

createGallery();
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
  captions: true,
});

function createGallery() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" width="800" height="600"/>
   </a>
</li>`;
    })
    .join("");
  galleryList.insertAdjacentHTML("afterbegin", markup);
}
