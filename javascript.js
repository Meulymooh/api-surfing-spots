// Fetch surfing spots
var surfingSpots = document.querySelector('.surfingSpots');

fetch('http://api.spitcast.com/api/spot/all')
  .then(response => response.json())
  .then(data => {
    listSpots(surfingSpots, data);
  })
  .catch(error => console.error(error))


// List spots
function listSpots (surfingSpots, spots) {
  // Creating bootstrap cards
  spots.forEach(spot => {
  let card = document.createElement("div");
      card.setAttribute("class", "card");
  let body = document.createElement("div");
      body.setAttribute("class", "card-body");
  let title = document.createElement("div");
      title.setAttribute("class", "card-title");
  let info = document.createElement("div");
      info.setAttribute("class", "card-text");
    surfingSpots.append(card);
    card.append(body);
    body.append(title);
    body.append(info);
    title.innerHTML = "<h4>" + spot.spot_name + "</h4>";
  })
}