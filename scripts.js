const profileImages = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300/FF0000",
    "https://via.placeholder.com/300/00FF00",
    "https://via.placeholder.com/300/0000FF"
];

let currentImageIndex = 0;

const profileImage = document.getElementById("profile-image");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= profileImages.length) {
        currentImageIndex = 0;
    }
    profileImage.src = profileImages[currentImageIndex];
}

noButton.addEventListener("click", showNextImage);
yesButton.addEventListener("click", showNextImage);
