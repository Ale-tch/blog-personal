const header = document.getElementById("header");

header.addEventListener("mouseenter", () => {
header.style.background = "linear-gradient(135deg, #0b1f3a, #006b7a)";
header.style.transform = "translateY(-3px)";
header.style.boxShadow = "0 8px 25px rgba(0, 255, 255, 0.25)";
header.style.transition = "all 0.4s ease";
});

header.addEventListener("mouseleave", () => {
header.style.background = "#0b1f3a";
header.style.transform = "translateY(0)";
header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.45)";
});
