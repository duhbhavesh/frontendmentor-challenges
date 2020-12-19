let shortenInput = document.querySelector("#input__url");
let shortenOutput = document.querySelector("#output__url");
let shortenBtn = document.querySelector("#submit__url");
shortenBtn.addEventListener("click", handleShortenLink);

let apiURL = "https://shortly.link/api/links/create?api_token=dzOXpbBRGdNB7zO8C4Gil10L8OEBlETmRK4End6q";

function handleShortenLink() {
  let userInput = shortenInput.value;
  let finalURL = constructURL(userInput);
  console.log(finalURL);

  fetch(finalURL)
    .then(response => response.json())
    .then(json => {
      shortenOutput.innerText = console.log(json.link.short_url);
    })
    .catch(() => alert("Error Occured!"))
}

function constructURL(inputText){
  let encodedURL = encodeURI(inputText);
  return `${apiURL}?long_url=${encodedURL}`;
}