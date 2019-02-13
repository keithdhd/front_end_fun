document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM ready");

  const phrases = [
    "JavaScript is awesome!",
    "Should've just used some lorem ipsum...",
    "How many of these did I write...?",
    "Some more placeholder text",
    "Running out of ideas here",
    "Custard Creams are the best biscuit."
  ]

  function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  function reqListener () {
    console.log(JSON.parse(this.responseText));
  }

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", reqListener);
  xhr.open("GET", "http://localhost:5000/api");
  xhr.send();

});
