
let fontSize = 15;
function applyFontSize() {
  htmlEditor.setFontSize(fontSize);
  cssEditor.setFontSize(fontSize);
  jsEditor.setFontSize(fontSize);
}

document.getElementById('larger').addEventListener('click', () => {
  fontSize += 1; applyFontSize();
});

document.getElementById('smaller').addEventListener('click', () => {
  if (fontSize > 10) fontSize -= 1;
  applyFontSize();
});

const htmlEditor = ace.edit("htmlEditor");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setOptions({ fontSize, wrap: true, showPrintMargin: false });

const cssEditor = ace.edit("cssEditor");
cssEditor.session.setMode("ace/mode/css");
cssEditor.setOptions({ fontSize, wrap: true, showPrintMargin: false });

const jsEditor = ace.edit("jsEditor");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setOptions({ fontSize, wrap: true, showPrintMargin: false });

const iframe = document.getElementById("preview");
function buildPreview() {
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`);
  doc.close();
}

const params = new URLSearchParams(window.location.search);
const sampleSlug = params.get("sample");

const defaultHTML = "<h2>Hello Live Pen</h2>";
const defaultCSS = "body{font-family:Arial;}";
const defaultJS = "console.log('Hello');";

if (sampleSlug) {
  fetch("samples/manifest.json")
    .then(r => r.json())
    .then(manifest => {
      const files = manifest[sampleSlug];
      if (!files) throw new Error(`Sample '${sampleSlug}' không tìm thấy trong manifest`);

      return Promise.all(files.map(f => fetch(`samples/${f}`).then(r => r.ok ? r.text() : "")))
        .then(contents => ({ files, contents }));
    })
    .then(({ files, contents }) => {
      const html = files.filter(f => f.endsWith(".html")).map(f => contents[files.indexOf(f)]).join("\n\n");
      const css = files.filter(f => f.endsWith(".css")).map(f => contents[files.indexOf(f)]).join("\n\n");
      const js = files.filter(f => f.endsWith(".js")).map(f => contents[files.indexOf(f)]).join("\n\n");


      htmlEditor.setValue(html, 1);
      cssEditor.setValue(css, 1);
      jsEditor.setValue(js, 1);

      buildPreview();
    })
    .catch(err => {
      console.error(err);
      htmlEditor.setValue(defaultHTML, 1);
      cssEditor.setValue(defaultCSS, 1);
      jsEditor.setValue(defaultJS, 1);
      buildPreview();
    });
} else {
  htmlEditor.setValue(defaultHTML, 1);
  cssEditor.setValue(defaultCSS, 1);
  jsEditor.setValue(defaultJS, 1);
  buildPreview();
}

document.getElementById("runBtn").addEventListener("click", buildPreview);
window.addEventListener("keydown", e => { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); buildPreview(); } });

const autorun = document.getElementById('autorun');
function maybeAutoRun() {
  if (autorun.checked) buildPreview();
}
htmlEditor.session.on('change', maybeAutoRun);
cssEditor.session.on('change', maybeAutoRun);
jsEditor.session.on('change', maybeAutoRun);

