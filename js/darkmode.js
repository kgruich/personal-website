/*
const toggle = document.querySelector(".switch");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme === "light") {
    document.body.classList.toggle("light-theme");
}

toggle.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";
    }
    localStorage.setItem("theme", theme);
});*/

/*if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === 'light') {
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");
    } else if (currentTheme === 'light') {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    }
}*/

function darkModeToggle(checkboxElem) {
    if (checkboxElem.checked) {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");
        // localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
        // localStorage.setItem('theme', 'light');
    }
}

/*prevent preload transition firing */