document.addEventListener("DOMContentLoaded", () => {
  const includes = [
    { id: "header", file: "components/header.html" },
    { id: "footer", file: "components/footer.html" },
  
  ];

  includes.forEach((inc) => {
    const el = document.getElementById(inc.id);
    if (el) {
      fetch(inc.file)
        .then(res => res.text())
        .then(data => el.innerHTML = data)
        .catch(err => console.error(`Error loading ${inc.file}:`, err));
    }
  });
});
