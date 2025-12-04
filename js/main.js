// GSAP animation
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".hero a", { opacity: 0, scale: 0.9, duration: 0.5, stagger: 0.3, delay: 1 });
// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
gsap.to(".hero-subtitle", { opacity: 1, y: 0, delay: 0.3, duration: 1, ease: "power3.out" });

gsap.utils.toArray(".feature-box").forEach((box, i) => {
  gsap.from(box, {
    scrollTrigger: { trigger: box, start: "top 80%" },
    y: 50, opacity: 0, duration: 0.8, delay: i * 0.1
  });
});

gsap.utils.toArray(".machine-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 85%" },
    opacity: 0, y: 80, duration: 0.8, ease: "power2.out"
  });
});

// Counter Animation
document.querySelectorAll(".counter").forEach(counter => {
  let target = +counter.dataset.target;
  let count = 0;
  const update = () => {
    const increment = target / 80;
    if (count < target) {
      count += increment;
      counter.textContent = Math.ceil(count);
      requestAnimationFrame(update);
    } else counter.textContent = target;
  };
  ScrollTrigger.create({
    trigger: counter,
    start: "top 90%",
    once: true,
    onEnter: update
  });
});
