import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryItemsLength = galleryItems.length;

for (let i = galleryItemsLength - 1; i > -1; i--) {
  const preview = galleryItems[i]["preview"];
  const original = galleryItems[i]["original"];
  const description = galleryItems[i]["description"];
  gallery.insertAdjacentHTML(
    "afterbegin",
    '<div class="gallery__item"><a class="gallery__link" href="large-image.jpg"><img class="gallery__image" src="small-image.jpg" data-source="large-image.jpg" alt="Image description" /></a></div>'
  );
  const galleryLink = document.querySelector(".gallery__link");
  const galleryImg = document.querySelector(".gallery__image");
  galleryLink.setAttribute("onclick", "event.preventDefault()");
  galleryLink.setAttribute("href", original);
  galleryImg.setAttribute("src", preview);
  galleryImg.setAttribute("data-source", original);
  galleryImg.setAttribute("alt", description);
}

gallery.addEventListener("click", selectImg);

function selectImg(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedImg = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src=${selectedImg} width="800" height="600">
`
  );
  instance.show();
}

console.log(galleryItems);
