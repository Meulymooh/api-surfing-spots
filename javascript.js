var button = document.getElementById("surfButton1");
    button.addEventListener("click", showList);

var button = document.getElementById("surfButton2");
    button.addEventListener("click", showRandom);

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
    // Sort spots alphabetically
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
      let cards = document.createElement("div");
          cards.setAttribute("class", "card");
      let body = document.createElement("div");
          body.setAttribute("class", "card-body");
      let title = document.createElement("div");
          title.setAttribute("class", "card-title");
      let info = document.createElement("div");
          info.setAttribute("class", "card-text");
      let cardImg = document.createElement("img");
          cardImg.className = "card-img-top";
          cardImg.src = "img/surf.jpg";

      // Displaying cards
      surfingSpots.append(cards);
      cards.append(cardImg);
      cards.append(body);
      body.append(title);

      // Inserting spots in cards
      title.innerHTML = "<h4>" + spot.spot_name + "</h4>";
      cards.addEventListener('click', showDetails);

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

function showRandom(event) {
  // Fetch rsurfing spots
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

    spots.forEach(spot => {

      // Creating bootstrap card
      let cards = document.createElement("div");
          cards.setAttribute("class", "card");
      let body = document.createElement("div");
          body.setAttribute("class", "card-body");
      let title = document.createElement("div");
          title.setAttribute("class", "card-title");
      let info = document.createElement("div");
          info.setAttribute("class", "card-text");
      let cardImg = document.createElement("img");
          cardImg.className = "card-img-top";
          cardImg.src = "img/surf.jpg";

      // Displaying card
      surfingSpots.append(cards);
      cards.append(cardImg);
      cards.append(body);
      body.append(title);

      // Inserting spot in card
      title.innerHTML = "<h4>" + spot.spot_name + "</h4>";
      cards.addEventListener('click', showDetails);

      // Display details in card
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