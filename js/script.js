let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title="VOLTE ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});