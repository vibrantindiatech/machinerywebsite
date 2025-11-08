// Counter animation
document.querySelectorAll(".counter").forEach(counter => {
  let target = +counter.dataset.target;
  let count = 0;
  let speed = 50;
  const update = () => {
    if (count < target) {
      count += 1;
      counter.textContent = count;
      setTimeout(update, speed);
    }
  };
  update();
});

// Back-to-top
const topBtn = document.createElement("button");
topBtn.className = "btn btn-primary back-to-top";
topBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
