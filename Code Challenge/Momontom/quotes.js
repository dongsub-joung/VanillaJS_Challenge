const say= document.querySelector(".quotes");


fetch(`http://quotes.rest/qod.js?category=inspire`, {
    headers: {
        "Accept": "application/json",
      "Content-Type": "application/json"
    }
})
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
});

