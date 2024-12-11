const imageProductSell = document.querySelector("figure#image-product-sell img");
const ImagesColumnProduct = document.querySelectorAll(".image-show-product");

let allImagesProduct =
    [
        "./images/arvore-natal.webp",
        "./images/arvore2-column.webp",
        "./images/tres-modelos-arma.webp",
        "./images/bateria-recarregavel-arma.webp",
        "./images/arma-balas.webp",
        "./images/arma-5000-bolinhas.webp",
        "./images/oculos-proteção.webp",
    ]

export function changeImageProduct(index) {
    imageProductSell.src = allImagesProduct[index];
}

ImagesColumnProduct.forEach((image, indexImage) => {
    image.addEventListener("mouseover", () => {
        changeImageProduct(indexImage);
    })
});