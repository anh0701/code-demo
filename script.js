const samples = [
    { name: "Button Hover", file: "samples/button-hover.json", desc: "Hiệu ứng hover cho nút bấm" },
    { name: "Card Layout", file: "samples/card-layout.json", desc: "Bố cục thẻ đơn giản" },
    { name: "Navbar", file: "samples/navbar.json", desc: "Thanh điều hướng responsive" }
];

const list = document.getElementById("list");
samples.forEach(s => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h2>${s.name}</h2><p>${s.desc}</p>`;
    div.onclick = () => {
        window.location.href = `live-pen.html?sample=${encodeURIComponent(s.file)}`;
    };
    list.appendChild(div);
});