import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");

const renderImage = (arr, container) => {
  const markup = arr
    .map(
      (item) =>
        `<li class="gallery__item">
  <a class="gallery__link">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join("");

  container.insertAdjacentHTML("afterbegin", markup);
};

renderImage(galleryItems, ulGallery);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`div class = "modal"> 
    <img src="${event.target.dataset.source}"> 
    </div>`);

  instance.show();

  window.addEventListener("keydown", closeModal);
}

function closeModal(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", closeModal);
  }
}

ulGallery.addEventListener("click", openModal);
