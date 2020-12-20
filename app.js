var btnToTranslate = document.querySelector("#btn");
var input = document.querySelector("#input-text");
var output = document.querySelector("#translated-text");

// var serverURL = "https://lessonfourapi.tanapratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json";


//creating custom URL for the english text that user has given
function createURL(engText) {
    return serverURL + "?" + "text=" + engText;
}


//error handling function
function errorHandler(error) {
    console.log("Error has Occured!! " + error);
    alert("Error has Occured!! " + error);
}

//translating
function translate(engText) {
    fetch(createURL(engText))
    .then(responseThatCameFirst => responseThatCameFirst.json())
    .then(responseThatCameSecond => {
        var translatedText = responseThatCameSecond.contents.translated;
        output.innerText = translatedText; //output
    })
    .catch(errorHandler)
}

//giving input
function ifClickDoThis() {
    if(input.value === ""){
        alert("Please Enter Some Text!")
    }
    translate(input.value);
}

btnToTranslate.addEventListener("click", ifClickDoThis); 








//how does catch() work internally? and what does it mean to callback?

// catch(callbackFunctionWhichWeHavePassedToCatchWhileCallingCatch) {
//     //Do something....
//     //Do something more....



//     //just before ending, catch() calls the callback function which it has received as parameter, with passing the real error to the callback function
//     callbackFunctionWhichWeHavePassedToCatchWhileCallingCatch(error);
// }