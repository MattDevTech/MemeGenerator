let imageURL = "";
let topTextValue = "";
let bottomTextValue = "";
let memeGeneratorForm = document.querySelector("#memeGenerator");
let newMeme = null;
let memeWindow = document.querySelector("#memeWindow");

memeGeneratorForm.addEventListener("submit", onSubmit);

function onSubmit (ev) {
    ev.preventDefault();
    //Create the Div to hold the meme
    memeDiv = document.createElement("div");
    memeWindow.prepend(memeDiv);
    memeDiv.classList.add("meme");
    //Generate image from form input
    imageURL = document.querySelector("#imageInput").value;
    memeImg = document.createElement("img");
    memeImg.setAttribute("src", `${imageURL}`);
    memeImg.classList.add("meme-img");
    //Add image to meme Div
    memeDiv.prepend(memeImg);

    //Add Top Text to meme Div
    topTextValue = document.querySelector("#topText").value;
    topText = document.createElement("Div");
    topText.innerText = topTextValue;
    topText.setAttribute("class", "top-text");
    memeDiv.prepend(topText);
    
    //Add bottom text to meme div
    bottomTextValue = document.querySelector("#bottomText").value;
    bottomText = document.createElement("Div");
    bottomText.innerText = bottomTextValue;
    bottomText.setAttribute("class", "bottom-text");
    memeDiv.append(bottomText);

    //Add delete functionality on click
    memeDiv.addEventListener("click", deleteMeme);

    //Add delete button
    deleteButton = document.createElement("Button");
    deleteButton.innerText = "DELETE";
    deleteButton.setAttribute("class", "delete-button")
    memeDiv.append(deleteButton);

    //Resets the form
    memeGeneratorForm.reset();
}

function deleteMeme(ev) {
    ev.target.parentElement.remove();
}