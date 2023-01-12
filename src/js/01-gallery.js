// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const listImg = document.querySelector(`.gallery`);
const markupCards = creatImageList();

listImg.insertAdjacentHTML(`beforeend`, markupCards);
function creatImageList() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a href="${original}" onclick="return false">
      <img class="gallery__image"
       src="${preview}"
        alt="${description}"
        title="${description}"
        >
        </img></a>`;
    })
    .join(``);
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250
});