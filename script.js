document
    .querySelector(".dropdown-toggle")
    .addEventListener("click", function () {
        const dropdownMenu = document.querySelector(".dropdown-menu");
        dropdownMenu.classList.toggle("show");
        const sliders = document.querySelectorAll(".slider-container");
        sliders.forEach((slider, index) => {
        setTimeout(() => {
            slider.style.opacity = "1";
        }, index * 200);
    });
});

document.querySelectorAll(".slider").forEach((slider) => {
    slider.addEventListener("input", function () {
        this.nextElementSibling.textContent = this.value;

        const brightness = document.getElementById("brightness").value;
        const contrast = document.getElementById("contrast").value;
        document.documentElement.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
        const volume = document.getElementById("volume").value / 100;
        const mediaElements = document.querySelectorAll("audio, video");
        mediaElements.forEach((media) => {
            media.volume = volume;
        });
    });
});

const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
toggleDarkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) 
        toggleDarkModeButton.textContent = "☀️ Light Mode";
    else
        toggleDarkModeButton.textContent = "🌙 Dark Mode";
});