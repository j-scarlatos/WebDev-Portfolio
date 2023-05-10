let examples = document.querySelectorAll('.example');

function setHtmlVis() {
    examples.forEach(example => {
        let hidHtml = example.querySelector('.hidden-html');
        hidHtml.setAttribute('aria-hidden', 'true');
    }, 0);
}
function showHtml() {
    examples.forEach(example => {
        let htmlButton = example.querySelector('.html-button');
        let hidHtml = example.querySelector('.hidden-html');
        htmlButton.addEventListener('click', () => {
            hidHtml.setAttribute('aria-hidden',
            hidHtml.getAttribute('aria-hidden') === 'true' ? 
            'false' : 'true');
            let hidCss = example.querySelector('.hidden-css');
            hidCss.setAttribute('aria-hidden', 'true');
        })
    }, 0);
}

function setCssVis() {
    examples.forEach(example => {
        let hidCss = example.querySelector('.hidden-css');
        hidCss.setAttribute('aria-hidden', 'true');
    }, 0);
}
function showCss() {
    examples.forEach(example => {
        let cssButton = example.querySelector('.css-button');
        let hidCss = example.querySelector('.hidden-css');
        cssButton.addEventListener('click', () => {
            hidCss.setAttribute('aria-hidden',
            hidCss.getAttribute('aria-hidden') === 'true' ? 
            'false' : 'true');
            let hidHtml = example.querySelector('.hidden-html');
            hidHtml.setAttribute('aria-hidden', 'true');
        })
    }, 0);
}

function allFuncs() {
    setHtmlVis();
    showHtml();
    setCssVis();
    showCss();
}

window.addEventListener("load", allFuncs);