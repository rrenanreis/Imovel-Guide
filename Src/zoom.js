window.addEventListener("load", () => {
  var image = document.querySelector(".zoom-image");

  setTimeout(() => {
    image.classList.add("zoom-out");
  }, 100);
});
