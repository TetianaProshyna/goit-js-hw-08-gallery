import galleryItems from "./gallery-items.js";

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const createItemsList = (itemsList) => {
  return itemsList.reduce((acc, item) => {
    acc += `<li class="gallery__item"><a
    class="gallery__link"
    href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    /></a></li>`;
    return acc;
  }, "");
};
const galleryListRef = document.querySelector(".js-gallery");
galleryListRef.insertAdjacentHTML("afterbegin", createItemsList(galleryItems));

// Реализация делегирования на галерее ul.js-gallery и
// получение url большого изображения.

// Открытие модального окна по клику на элементе галереи.

// Подмена значения атрибута src элемента img.lightbox__image.

// Закрытие модального окна по клику на кнопку
// button[data - action= "close-lightbox"].

// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна,
// пока грузится изображение, мы не видели предыдущее.
