var button = document.getElementById("surfButton1");
    button.addEventListener("click", showList);

function showList(event) {
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
    var spotList = document.getElementById("spotList");
    if (spotList.style.display === "block") {
      spotList.style.display = "none"
    } else {
      spotList.style.display = "block"
    };
    spots.sort(function(a,b)
    {
    if (a.spot_name < b.spot_name)
      return -1;
    else if  (a.spot_name > b.spot_name)
      return 1;
    else
      return 0;
    })
    spots.forEach(spot => {
      // Creating bootstrap cards
      let card = document.createElement("div");
          card.setAttribute("class", "card");
      let body = document.createElement("div");
          body.setAttribute("class", "card-body");
      let title = document.createElement("div");
          title.setAttribute("class", "card-title");
      let info = document.createElement("div");
          info.setAttribute("class", "card-text");
      // Displaying cards
      surfingSpots.append(card);
      card.append(body);
      body.append(title);
      // Inserting spots in cards
      title.innerHTML = "<h4>" + spot.spot_name + "</h4>";

      card.addEventListener('click', showDetails);

      // Display details in cards
      function showDetails() {
        body.append(info);
        if (info.style.display === "block") {
          info.style.display = "none"
        } else {
          info.style.display = "block"
        };
        info.innerHTML = "<p><b>County:</b> " + spot.county_name + "</p><p><b>Spot ID:</b> " + spot.spot_id + "</p><p><b>Longitude:</b> " + spot.longitude + "</p><p><b>Latitude: </b>" + spot.latitude + "</p>";
      } // End of details

    }) // End of foreach
  } // End of listSpots function

} // End of showList function