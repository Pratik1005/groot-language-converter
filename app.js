var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json";

// https://api.funtranslations.com/translate/morse.json

// https://api.funtranslations.com/translate/minion.json

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
    console.log(serverURL + "?" + "text=" + text);
}


function clickHandler() {
    console.log("clicked");
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
            outputDiv.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"));
}

btnTranslate.addEventListener("click", clickHandler);

