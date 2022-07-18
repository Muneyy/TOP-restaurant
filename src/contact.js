const createContact = function () {
    //remove previous article content
    const content = document.querySelector(".content");
    const removeArticle = document.querySelector(".article-home");
    content.removeChild(removeArticle);

    const article = document.createElement("div");
    article.classList.add("article-home");

    const articleContact = document.createElement("div");
    articleContact.classList.add("article-contact");

    const articleContactText = document.createElement("h4");
    const phoneNumber = document.createElement("h2");
    articleContactText.textContent = "0999-909-9999 / 0918-555-8088";
    phoneNumber.textContent = "Phone Number";
    const articleContactDescription = document.createElement("h4");
    const emailText = document.createElement("h2");
    articleContactDescription.textContent = "poppoppopoohahh.com"
    emailText.textContent = "Email";

    articleContact.appendChild(phoneNumber);
    articleContact.appendChild(articleContactText);
    articleContact.appendChild(emailText);
    articleContact.appendChild(articleContactDescription);
    article.appendChild(articleContact);

    $(article).hide().appendTo(content).fadeIn(1000);
    // content.appendChild(article);
}

export {createContact}