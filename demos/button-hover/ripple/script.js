document.querySelectorAll(".ripple-btn").forEach(button => {
  button.addEventListener("click", e => {
    const rect = button.getBoundingClientRect();

    const size = Math.max(
      rect.width,
      rect.height
    ) * 2;

    const ripple = document.createElement("span");

    ripple.className = "ripple-wave";

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    ripple.style.left =
      `${e.clientX - rect.left - size / 2}px`;

    ripple.style.top =
      `${e.clientY - rect.top - size / 2}px`;

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });
});