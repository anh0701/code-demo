const demos = [
    {
        id: "slide-down",
        title: "Slide Down",
        category: "Button Hover",
        description: "Button background slides down on hover.",
        keywords: ["slide", "down", "button", "hover", "transition"],
        path: "demos/button-hover/slide-down"
    },
    {
        id: "slide-left",
        title: "Slide Left",
        category: "Button Hover",
        description: "Button background slides from right to left.",
        keywords: ["slide", "left", "button", "hover", "transition"],
        path: "demos/button-hover/slide-left"
    },
    {
        id: "shine-image-hover",
        title: "Shine Image Hover",
        category: "Image Effects",
        description: "Shining light effect when hovering over an image.",
        keywords: ["shine", "image", "light", "hover", "overlay"],
        path: "demos/shine-image-hover"
    },
    {
        id: "slide-right",
        title: "Slide Right",
        category: "Button Hover",
        description: "Button background slides from left to right.",
        keywords: ["slide", "right", "button", "hover", "transition"],
        path: "demos/button-hover/slide-right"
    },
    {
        id: "opacity",
        title: "Opacity",
        category: "Button Hover",
        description: "Button opacity changes on hover.",
        keywords: ["opacity", "fade", "transparent", "button", "hover"],
        path: "demos/button-hover/opacity"
    },
    {
        id: "border-1",
        title: "Border 1",
        category: "Button Hover",
        description: "Animated border effect on button hover.",
        keywords: ["border", "outline", "button", "hover"],
        path: "demos/button-hover/border-1"
    },
    {
        id: "border-2",
        title: "Border 2",
        category: "Button Hover",
        description: "Animated border effect on button hover.",
        keywords: ["border", "outline", "button", "hover"],
        path: "demos/button-hover/border-2"
    },
    {
        id: "border-3",
        title: "Border 3",
        category: "Button Hover",
        description: "Animated border effect on button hover.",
        keywords: ["border", "outline", "button", "hover"],
        path: "demos/button-hover/border-3"
    },
    {
        id: "border-4",
        title: "Border 4",
        category: "Button Hover",
        description: "Animated border effect on button hover.",
        keywords: ["border", "outline", "button", "hover"],
        path: "demos/button-hover/border-4"
    },
    {
        id: "border-5",
        title: "Border 5",
        category: "Button Hover",
        description: "Animated border effect on button hover.",
        keywords: ["border", "outline", "button", "hover"],
        path: "demos/button-hover/border-5"
    },
    {
        id: "text-rolling",
        title: "Text Rolling",
        category: "Button Effects",
        description: "Text rolling animation when hovering over a button.",
        keywords: ["text", "rolling", "animation", "button", "hover"],
        path: "demos/button-hover/text-rolling"
    },
    {
        id: "expanding-icon",
        title: "Expanding Icon Button",
        category: "Button Effects",
        description: "Button expands to reveal an icon.",
        keywords: ["expanding", "icon", "button", "animation", "hover"],
        path: "demos/button-hover/expanding-icon"
    },
    {
        id: "confetti",
        title: "Confetti",
        category: "Animations",
        description: "Confetti particle animation effect.",
        keywords: ["confetti", "particles", "celebration", "animation"],
        path: "demos/confetti",
        link: "https://www.kirilv.com/canvas-confetti/"
    },
    {
        id: "image-overlay",
        title: "Image Overlay",
        category: "Image Effects",
        description: "Overlay effect displayed over an image.",
        keywords: ["image", "overlay", "hover", "layer"],
        path: "demos/img-overlay"
    },
    {
        id: "flexbox-hover",
        title: "Flexbox Hover Effect",
        category: "Layout Effects",
        description: "Interactive layout effect using CSS Flexbox.",
        keywords: ["flexbox", "layout", "hover", "expand", "resize"],
        path: "demos/flex-box"
    },
    {
        id: "menu-hover",
        title: "Menu Hover",
        category: "Navigation",
        description: "Interactive navigation menu hover effect.",
        keywords: ["menu", "navigation", "navbar", "hover"],
        path: "demos/menu-hover"
    },
    {
        id: "toast",
        title: "Toast",
        category: "UI Components",
        description: "Toast notification component.",
        keywords: ["toast", "notification", "alert", "message", "popup"],
        path: "demos/toast"
    },
    {
        id: "infinite-scroll",
        title: "Infinite Scroll",
        category: "Scrolling Effects",
        description: "Automatically loads more content while scrolling.",
        keywords: ["infinite", "scroll", "loading", "pagination"],
        path: "demos/infinite-scroll"
    },
    {
        id: "smooth-scroll",
        title: "Smooth Scroll",
        category: "Scrolling Effects",
        description: "Smooth scrolling animation between page sections.",
        keywords: ["smooth", "scroll", "animation", "navigation"],
        path: "demos/smooth-scroll"
    },
    {
        id: "slide-up",
        title: "Slide Up",
        category: "Button Hover",
        description: "Button background slides up on hover.",
        keywords: ["slide", "up", "button", "hover", "transition"],
        path: "demos/button-hover/slide-up"
    },
    {
    id: "neon-glow",
    title: "Neon Glow",
    category: "Button Hover",
    description: "Button emits a neon glow effect on hover.",
    keywords: ["neon", "glow", "light", "button", "hover"],
    path: "demos/button-hover/neon-glow"
  },
  {
    id: "ripple",
    title: "Ripple Effect",
    category: "Button Effects",
    description: "Expanding ripple animation when clicking a button.",
    keywords: ["ripple", "click", "wave", "button"],
    path: "demos/button-hover/ripple"
  },
  {
    id: "3d-press",
    title: "3D Press",
    category: "Button Effects",
    description: "Button presses down with a realistic 3D effect.",
    keywords: ["3d", "press", "depth", "click"],
    path: "demos/button-hover/3d-press"
  },
  {
    id: "gradient-shift",
    title: "Gradient Shift",
    category: "Button Hover",
    description: "Button gradient smoothly changes on hover.",
    keywords: ["gradient", "color", "shift", "hover"],
    path: "demos/button-hover/gradient-shift"
  },
  {
    id: "rotating-border",
    title: "Rotating Border",
    category: "Button Hover",
    description: "Animated gradient border rotates around the button.",
    keywords: ["rotating", "border", "gradient", "animation"],
    path: "demos/button-hover/rotating-border"
  },
  {
    id: "bounce",
    title: "Bounce",
    category: "Button Hover",
    description: "Button bounces playfully when hovered.",
    keywords: ["bounce", "spring", "button", "hover"],
    path: "demos/button-hover/bounce"
  },
  {
    id: "wobble",
    title: "Wobble",
    category: "Button Hover",
    description: "Button shakes with a playful wobble animation.",
    keywords: ["wobble", "shake", "motion", "hover"],
    path: "demos/button-hover/wobble"
  },
  {
    id: "spotlight",
    title: "Spotlight",
    category: "Button Hover",
    description: "A spotlight follows the cursor over the button.",
    keywords: ["spotlight", "light", "cursor", "hover"],
    path: "demos/button-hover/spotlight"
  },
  {
    id: "elastic",
    title: "Elastic",
    category: "Button Hover",
    description: "Button stretches and bounces with an elastic effect.",
    keywords: ["elastic", "stretch", "spring", "hover"],
    path: "demos/button-hover/elastic"
  },
  {
    id: "circle-reveal",
    title: "Circle Reveal",
    category: "Button Hover",
    description: "Circular background expands to reveal a new color.",
    keywords: ["circle", "reveal", "radial", "hover"],
    path: "demos/button-hover/circle-reveal"
  },
];
