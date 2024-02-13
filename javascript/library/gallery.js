const image = document.getElementById("central-image");
const previousButton = document.getElementById("previous-image");
const nextButton = document.getElementById("next-image");
const imageNames = [
  "image_1.png",
  "image_2.png",
  "image_3.png",
  "image_4.png",
  "image_5.png",
  "image_6.png",
  "image_7.png",
  "image_8.png",
  "image_9.png",
  "image_10.png",
];
let currentImage = 0;

previousButton.onclick = () => {
  currentImage--;
  if (currentImage < 0) currentImage = imageNames.length - 1;
  image.src = "./images/gallery/" + imageNames[currentImage];
};

nextButton.onclick = () => {
  currentImage++;
  if (currentImage >= imageNames.length) currentImage = 0;
  image.src = "./images/gallery/" + imageNames[currentImage];
};
