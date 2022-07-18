const createMenu = function() {
    //remove previous article content
    const content = document.querySelector(".content");
    const removeArticle = document.querySelector(".article-home");
    content.removeChild(removeArticle);

    const article = document.createElement("div");
    article.classList.add("article-home");

    const articleMenu = document.createElement("div");
    articleMenu.classList.add("article-menu");

    for (let i=0; i < 7; i++) {
        const gridItem = document.createElement("div");
        // const gridItemTitle = document.createElement("h1");
        // gridItemTitle.textContent = `Yummy item ${i}`;
        // gridItem.appendChild(gridItemTitle);
        gridItem.classList.add("grid-item");
        gridItem.classList.add(`no${i}`);
        articleMenu.appendChild(gridItem);
    }

    article.appendChild(articleMenu);
    // content.appendChild(article);
    $(article).hide().appendTo(content).fadeIn(1000);
}

export {createMenu};