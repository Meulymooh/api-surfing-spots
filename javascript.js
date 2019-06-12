// Display all surfing spots from the API

var button1 = document.getElementById("surfButton1");
    button1.addEventListener("click", showAll);

function showAll(event) {
  // Fetch surfing spots
  var surfingSpots = document.querySelector('.surfingSpots');

  fetch('all.json')
    .then(response => response.json())
    .then(data => {
    listSpots(surfingSpots, data);
    })
    .catch(error => console.error(error))

  // List surfing spots
  function listSpots (surfingSpots, spots) {
    var spotList = document.getElementById("spotList");
    if (spotList.style.display === "block") {
      spotList.style.display = "none"
    } else {
      spotList.style.display = "block"
    };
    // Sort surfing spots alphabetically
    spots.sort(function(a,b)
    {
    if (a.spot_name < b.spot_name)
      return -1;
    else if  (a.spot_name > b.spot_name)
      return 1;
    else
      return 0;
    })

    // Empty the div from previous card(s) and add instruction
    surfingSpots.innerHTML = "<h4><b>Click on a spot for more details</b></h4>";

    spots.forEach(spot => {

      // Create bootstrap cards
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

      // Add random Flickr image 
      var keyword = "surfing wave";
      $(document).ready(function(){
        $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
          tags: keyword,
          tagmode: "any",
          format: "json"
        },
        function(data) {
          var rnd = Math.floor(Math.random() * data.items.length);
          var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
          cardImg.src = image_src;
        });
        });

      // Display cards
      surfingSpots.append(cards);
      cards.append(cardImg);
      cards.append(body);
      body.append(title);

      // Insert spots in cards
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
      } 
    }) 
  } 
} 

// Display a random surfing spot
var button2 = document.getElementById("surfButton2");
    button2.addEventListener("click", showRandom);

function showRandom(event) {
  // Fetch surfing spots
  var surfingSpots = document.querySelector('.surfingSpots');

  fetch('all.json')
    .then(response => response.json())
    .then(data => {
    listSpots(surfingSpots, data);
    })
    .catch(error => console.error(error))

  // List surfing spots
  function listSpots (surfingSpots, spots) {
    var spotList = document.getElementById("spotList");
    if (spotList.style.display === "block") {
      spotList.style.display = "none";
    } else {
      spotList.style.display = "block"
    };

    // Empty the div from previous card(s) and add instruction
    surfingSpots.innerHTML = "<h4><b>Click on the spot for more details</b></h4>";

    // Create bootstrap card
    var spot = spots[Math.floor(Math.random()*spots.length)];
    
    // Create bootstrap card
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

    // Add random Flickr image 
    var keyword = "surfing wave";
    $(document).ready(function(){
      $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      {
        tags: keyword,
        tagmode: "any",
        format: "json"
      },
      function(data) {
        var rnd = Math.floor(Math.random() * data.items.length);
        var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
          cardImg.src = image_src;
      });
      });

    // Display card
    surfingSpots.append(cards);
    cards.append(cardImg);
    cards.append(body);
    body.append(title);

    // Insert spot in card
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
    }
  } 
} 