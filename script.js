const groups = document.querySelectorAll(".group");

groups.forEach((group) => {
  const fadeLink = group.querySelector(".fade-link");

  group.addEventListener("mouseover", () => {
    fadeLink.classList.add("fade-in-left");
  });

  group.addEventListener("mouseleave", () => {
    fadeLink.classList.remove("fade-in-left");
  });
});
