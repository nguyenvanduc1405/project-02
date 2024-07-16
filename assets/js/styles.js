const active = document.querySelectorAll(".navbar__link");
[...active].forEach((value) =>
    value.addEventListener("click", function (event) {
        [...active].forEach((value) => value.classList.remove("active"));
        event.target.classList.add("active");
    })
);

const dot = document.querySelectorAll(".dot");
[...dot].forEach((value) =>
    value.addEventListener("click", function (event) {
        [...dot].forEach((items) => items.classList.remove("active"));
        event.target.classList.add("active");
    })
);
