document.querySelectorAll('.button').forEach(button => {
    const text = button.textContent.trim();

    button.innerHTML = `
        <div>
            ${[...text].map((char, index) =>
                `<span style="--index: ${index}">${char === ' ' ? '&nbsp;' : char}</span>`
            ).join('')}
        </div>
    `;
});