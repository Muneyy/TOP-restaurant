const createInterface = function () {
    const content = document.querySelector(".content");
    const removeArticle = document.querySelector(".article-home");
    content.removeChild(removeArticle);

    const article = document.createElement("div");
    article.classList.add("article-home");

    const articleHeader = document.createElement("div");
    articleHeader.classList.add("article-header");

    const articleHeaderText = document.createElement("h2");
    articleHeaderText.textContent = "Dine,"
    const articleHeaderDescription = document.createElement("h3");
    articleHeaderDescription.textContent = "experience authentic."

    articleHeader.appendChild(articleHeaderText);
    articleHeader.appendChild(articleHeaderDescription);
    article.appendChild(articleHeader);
    $(article).hide().appendTo(content).fadeIn(1000);
    // content.appendChild(article);

}

export {createInterface}