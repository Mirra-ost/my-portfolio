
// Определяем текущую страницу сайта
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// Подсвечиваем ссылку на открытую страницу
document.querySelectorAll(".navbar ul a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.setAttribute("aria-current", "page");
        link.style.color = "#b47b69";
        link.style.fontWeight = "bold";
    }
});

console.log("Сайт успешно загружен!");
