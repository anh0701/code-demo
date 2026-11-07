document.querySelectorAll(".spotlight-btn").forEach(button => {
  button.addEventListener("pointermove", e => {
    const rect = button.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    button.style.setProperty("--x", `${x}%`);
    button.style.setProperty("--y", `${y}%`);
  });

  button.addEventListener("pointerleave", () => {
    button.style.setProperty("--x", "50%");
    button.style.setProperty("--y", "50%");
  });
});