const demoContainer = document.getElementById("demo-container");

/* Render Demo Cards*/


function renderDemos() {
    demoContainer.innerHTML = demos.map(demo => `
        <section class="demo-card">

            <div class="demo-card-header">
                <span class="demo-category">
                    ${demo.category}
                </span>

                <h3>${demo.title}</h3>
            </div>

            ${demo.link ? `
                <div class="demo-links">
                    <a href="${demo.link}"
                       target="_blank"
                       rel="noopener noreferrer">
                        External Resource ↗
                    </a>
                </div>
            ` : ""}

            <div class="demo-preview">
                <iframe
                    src="${demo.path}/index.html"
                    title="${demo.title}"
                    loading="lazy">
                </iframe>
            </div>

            <div class="demo-actions">
                <button
                    class="code-demo"
                    data-demo="${demo.path}"
                    data-title="${demo.title}">
                    &lt;/&gt; View Code
                </button>
            </div>

        </section>
    `).join("");
}

renderDemos();

const modal = document.getElementById("code-modal");
const modalTitle = document.getElementById("modal-title");
const modalPath = document.getElementById("modal-path");

const closeButton = document.getElementById("close-modal");
const copyButton = document.getElementById("copy-code");

const codeDisplay = document.getElementById("code-display");
const codeContainer = document.getElementById("code-container");
const loading = document.getElementById("loading");

const tabs = document.querySelectorAll(".tab");

// Các file source của demo hiện tại
const fileTypes = {
    html: {
        name: "index.html",
        language: "html"
    },
    css: {
        name: "style.css",
        language: "css"
    },
    js: {
        name: "script.js",
        language: "javascript"
    }
};

let currentDemo = "";
let currentFile = "html";
let currentCode = "";

// Cache code đã tải để không phải fetch lại
const codeCache = new Map();

/* =========================
   Open Modal
========================= */

document.addEventListener("click", async event => {
    const button = event.target.closest(".code-demo");

    if (!button) return;

    currentDemo = button.dataset.demo;
    currentFile = "html";

    modalTitle.textContent = button.dataset.title;
    modalPath.textContent = currentDemo;

    modal.showModal();

    await loadCode(currentFile);
});

/* =========================
   Load Code
========================= */

async function loadCode(fileType) {
    currentFile = fileType;

    const file = fileTypes[fileType];

    const filePath = `${currentDemo}/${file.name}`;

    loading.hidden = false;
    loading.textContent = "Loading source code...";

    codeContainer.hidden = true;
    codeDisplay.textContent = "";

    copyButton.disabled = true;

    updateActiveTab();

    try {
        let code;

        // Kiểm tra cache
        if (codeCache.has(filePath)) {
            code = codeCache.get(filePath);
        } else {
            const response = await fetch(filePath);

            if (!response.ok) {
                throw new Error("File not found");
            }

            code = await response.text();

            codeCache.set(filePath, code);
        }

        currentCode = code;

        codeDisplay.className = `language-${file.language}`;
        codeDisplay.textContent = code;

        loading.hidden = true;
        codeContainer.hidden = false;

        copyButton.disabled = false;

        // Highlight syntax
        if (window.hljs) {
            hljs.highlightElement(codeDisplay);
        }

    } catch (error) {
        currentCode = "";

        loading.textContent =
            fileType === "js"
                ? "JavaScript file not found or not available."
                : "Unable to load source code. Please check the file path.";

        loading.hidden = false;
        codeContainer.hidden = true;

        copyButton.disabled = true;

        console.error(error);
    }
}

/* =========================
   Switch Tabs
========================= */

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const fileType = tab.dataset.file;

        if (currentFile === fileType) return;

        loadCode(fileType);
    });
});

function updateActiveTab() {
    tabs.forEach(tab => {
        tab.classList.toggle(
            "active",
            tab.dataset.file === currentFile
        );
    });
}

/* =========================
   Copy Code
========================= */

copyButton.addEventListener("click", async () => {
    if (!currentCode) return;

    try {
        await navigator.clipboard.writeText(currentCode);

        copyButton.textContent = "Copied!";

        setTimeout(() => {
            copyButton.textContent = "Copy Code";
        }, 1500);

    } catch (error) {
        console.error("Copy failed:", error);
        copyButton.textContent = "Copy failed";
    }
});

/* =========================
   Close Modal
========================= */

closeButton.addEventListener("click", () => {
    modal.close();
});

// Click outside modal to close
modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.close();
    }
});

// Reset copy button when modal closes
modal.addEventListener("close", () => {
    copyButton.textContent = "Copy Code";
});
