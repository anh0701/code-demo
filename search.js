import demos from "./demos.config.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("demo-search");
    const clearButton = document.getElementById("clear-search");
    const categoryContainer = document.getElementById("category-filters");
    const resultCount = document.getElementById("result-count");
    const emptyState = document.getElementById("empty-state");
    const demoContainer = document.getElementById("demo-container");

    if (!searchInput || !demoContainer) return;

    const demoCards = Array.from(
        demoContainer.querySelectorAll(".demo-card")
    );

    let activeCategory = "All";
    let searchKeyword = "";

    // Normalize text
    function normalizeText(text) {
        return String(text || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    // Get unique categories
    const categories = [
        "All",
        ...new Set(demos.map(demo => demo.category).filter(Boolean))
    ];

    // Render category buttons
    function renderCategories() {
        categoryContainer.innerHTML = categories
            .map(category => `
                <button
                    type="button"
                    class="category-btn ${category === activeCategory ? "active" : ""}"
                    data-category="${category}"
                >
                    ${category}
                </button>
            `)
            .join("");
    }

    // Filter demos
    function filterDemos() {
        let visibleCount = 0;

        demoCards.forEach(card => {
            const demoId = card.dataset.id;

            const demo = demos.find(
                item => String(item.id || item.path) === demoId
            );

            if (!demo) {
                card.hidden = true;
                return;
            }

            const searchableText = normalizeText([
                demo.title,
                demo.category,
                demo.description,
                ...(demo.keywords || [])
            ].join(" "));

            const matchesSearch =
                searchableText.includes(searchKeyword);

            const matchesCategory =
                activeCategory === "All" ||
                demo.category === activeCategory;

            const isVisible = matchesSearch && matchesCategory;

            card.hidden = !isVisible;

            if (isVisible) {
                visibleCount++;
            }
        });

        // Update result count
        resultCount.textContent =
            `Showing ${visibleCount} of ${demoCards.length} demos`;

        // Empty state
        emptyState.hidden = visibleCount > 0;

        // Clear button
        clearButton.classList.toggle(
            "visible",
            searchInput.value.length > 0
        );
    }

    // Category click
    categoryContainer.addEventListener("click", event => {
        const button = event.target.closest(".category-btn");

        if (!button) return;

        activeCategory = button.dataset.category;

        renderCategories();
        filterDemos();
    });

    // Search with debounce
    let searchTimeout;

    searchInput.addEventListener("input", () => {
        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(() => {
            searchKeyword = normalizeText(searchInput.value);
            filterDemos();
        }, 250);

        clearButton.classList.toggle(
            "visible",
            searchInput.value.length > 0
        );
    });

    // Clear search
    clearButton.addEventListener("click", () => {
        clearTimeout(searchTimeout);

        searchInput.value = "";
        searchKeyword = "";

        filterDemos();
        searchInput.focus();
    });

    // Initialize
    renderCategories();
    filterDemos();
});
