const images = ["flower1.jpg", "flower2.jpg", "flower3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `flowerimage/${chosenImage}`;

document.body.appendChild(bgImage);