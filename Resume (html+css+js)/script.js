function Scrolltop() {
  window.scrollTo({ top:0, behavior:"smooth" });
}
function theme(){
const icon = document.getElementById("themeIcon");
const a4 = document.getElementById("A4");


icon.addEventListener("click", () => {
  a4.classList.toggle("dark");
  icon.textContent = a4.classList.contains("dark") ? "🌙" : "☀";
});

}