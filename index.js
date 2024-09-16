const btn = document.querySelectorAll(".btn");

btn.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
    btn.style.color = "black";
  })
);
