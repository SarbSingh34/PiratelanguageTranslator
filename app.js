
var btnTranslate = document.querySelector("#btn-translate")
var inputxt = document.querySelector("#inputarea")
var outputarea = document.querySelector("#output")
var serverurl = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text)
{
  return serverurl + "?" + "text="+ text 
} 

  function clickHandler()
{

  var inputext  = inputxt.value;
  
    fetch(getTranslationURL(inputext)) 
     .then(response => response.json())
     .then(json => 
      {

        var  translatedText  = json.contents.translated;
        outputarea.innerText = translatedText;
     }
     )

}
   btnTranslate.addEventListener("click", clickHandler )
  



