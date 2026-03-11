const background = document.querySelector(".background");
const buttons = document.querySelectorAll(".btn");

const images = [
"bg1.png",
"bg2.png",
"bg3.png",
"bg4.png",
"bg5.png",
"bg6.png",
"bg7.png"
];

images.forEach(src => {
    const img = new Image();
    img.src = src;
});

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        const bg = button.getAttribute("data-bg");
        background.style.backgroundImage = `url(${bg})`;
    });

    button.addEventListener("mouseleave", () => {
        background.style.backgroundImage = "url(bg1.png)";
    });

});

function goToProfile() {
    window.location.href = "Profile.html";
}

function goToHobbies() {
    window.location.href = "Hobbies.html";
}

function goToFavorites() {
    window.location.href = "Favorites.html";
}

function goToGoals() {
    window.location.href = "Goals.html";
}

function goToExperience() {
    window.location.href = "Experience.html";
}

function goToSkills() {
    window.location.href = "Skills.html";
}