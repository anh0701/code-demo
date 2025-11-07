const samples = [
  { name: "Button Hover", slug: "button-hover", desc: "Hiệu ứng hover cho nút bấm" },
  { name: "Card Layout", slug: "card-layout", desc: "Bố cục thẻ đơn giản" }
];

const list = document.getElementById("list");
samples.forEach(s => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h2>${s.name}</h2><p>${s.desc}</p>`;
  div.onclick = () => {
    window.location.href = `live-pen.html?sample=${s.slug}`;
  };
  list.appendChild(div);
});