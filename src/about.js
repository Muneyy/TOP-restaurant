const createAbout = function () {
    //remove previous article content
    const content = document.querySelector(".content");
    const removeArticle = document.querySelector(".article-home");
    content.removeChild(removeArticle);

    const article = document.createElement("div");
    article.classList.add("article-home");

    const articleAbout = document.createElement("div");
    articleAbout.classList.add("article-about");

    const articleAboutText = document.createElement("h1");
    articleAboutText.textContent = "TWICE for seven more years."
    const articleAboutDescription = document.createElement("h3");
    articleAboutDescription.textContent = "big fandom, small mentality, dark heart"

    articleAbout.appendChild(articleAboutText);
    articleAbout.appendChild(articleAboutDescription);
    article.appendChild(articleAbout);

    $(article).hide().appendTo(content).fadeIn(1000);
    // content.appendChild(article);
}

export {createAbout}