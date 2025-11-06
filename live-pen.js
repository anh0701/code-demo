// tool bar
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


const htmlEditor = ace.edit(document.getElementById('htmlEditor'));
htmlEditor.session.setMode('ace/mode/html');
htmlEditor.setOptions({
  fontSize: fontSize, 
  showPrintMargin: false, 
  wrap: true,
});

const cssEditor = ace.edit(document.getElementById('cssEditor'));
cssEditor.session.setMode('ace/mode/css');
cssEditor.setOptions({
  fontSize: fontSize, 
  showPrintMargin: false, 
  wrap: true,
});

const jsEditor = ace.edit(document.getElementById('jsEditor'));
jsEditor.session.setMode('ace/mode/javascript');
jsEditor.setOptions({
  fontSize: fontSize, 
  showPrintMargin: false, 
  wrap: true,
});

const params = new URLSearchParams(window.location.search);
const sampleFile = params.get("sample");

if (sampleFile) {
  fetch(sampleFile)
    .then(r => r.json())
    .then(data => {
      htmlEditor.setValue(data.html || "", 1);
      cssEditor.setValue(data.css || "", 1);
      jsEditor.setValue(data.js || "", 1);
      buildPreview();
    })
    .catch(err => alert("Không tải được mẫu: " + err));
}


const defaultHTML = `<!doctype html>\n<html>\n  <body>\n    <div class="card">\n      <h2>Hello — Live Pen</h2>\n      <p>Chỉnh sửa HTML/CSS/JS và nhấn \"Chạy\".</p>\n      <button id=\"btn\">Nhấn tôi</button>\n    </div>\n  </body>\n</html>`;
const defaultCSS = `body{font-family:Inter,system-ui,Arial;margin:20px;background:#f5f7fa}\n.card{background:#fff;padding:16px;border-radius:12px;box-shadow:0 4px 12px rgba(2,6,23,0.06)}\nbutton{padding:8px 12px;border-radius:8px;border:0;cursor:pointer}`;
const defaultJS = `document.getElementById('btn')?.addEventListener('click',()=>alert('Hello from preview!'))`;

if (!localStorage.getItem('livepen:init')) {
  htmlEditor.setValue(defaultHTML, 1);
  cssEditor.setValue(defaultCSS, 1);
  jsEditor.setValue(defaultJS, 1);
  localStorage.setItem('livepen:init', '1');
} else {
  htmlEditor.setValue(localStorage.getItem('livepen:html') || defaultHTML, 1);
  cssEditor.setValue(localStorage.getItem('livepen:css') || defaultCSS, 1);
  jsEditor.setValue(localStorage.getItem('livepen:js') || defaultJS, 1);
}

const iframe = document.getElementById('preview');
function buildPreview() {
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();

  const iframe = document.getElementById("preview");
  const doc = iframe.contentDocument || iframe.contentWindow.document;

  const full = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}<\/script>
    </body>
    </html>
  `;

  doc.open();
  doc.write(full);
  doc.close();
}


buildPreview();

const runBtn = document.getElementById('runBtn');
const autorun = document.getElementById('autorun');
runBtn.addEventListener('click', buildPreview);

window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault(); buildPreview();
  }
});

function maybeAutoRun() { if (autorun.checked) buildPreview(); }
htmlEditor.session.on('change', maybeAutoRun);
cssEditor.session.on('change', maybeAutoRun);
jsEditor.session.on('change', maybeAutoRun);

// document.getElementById('saveBtn').addEventListener('click', () => {
//   localStorage.setItem('livepen:html', htmlEditor.getValue());
//   localStorage.setItem('livepen:css', cssEditor.getValue());
//   localStorage.setItem('livepen:js', jsEditor.getValue());
//   alert('Đã lưu vào localStorage');
// });

// document.getElementById('loadBtn').addEventListener('click', () => {
//   htmlEditor.setValue(localStorage.getItem('livepen:html') || defaultHTML, 1);
//   cssEditor.setValue(localStorage.getItem('livepen:css') || defaultCSS, 1);
//   jsEditor.setValue(localStorage.getItem('livepen:js') || defaultJS, 1);
//   buildPreview();
// });

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset về nội dung mặc định?')) {
    htmlEditor.setValue(defaultHTML, 1);
    cssEditor.setValue(defaultCSS, 1);
    jsEditor.setValue(defaultJS, 1);
    buildPreview();
  }
});




