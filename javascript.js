var button1 = document.getElementById("surfButton1");
    button1.addEventListener("click", showAll);

var button2 = document.getElementById("surfButton2");
    button2.addEventListener("click", showRandom);

var button3 = document.getElementById("surfButton3");
    button3.addEventListener("click", removeSpots);

var surfingSpots = document.querySelector('.surfingSpots');
var spotList = document.getElementById("spotList");

function listSpots(spots)
{
    // Display spot div
    if (spotList.style.display === "none") 
    {
      spotList.style.display = "block";
    }

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

    // Create one card per spot
    spots.forEach(spot => 
    {
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
      $(document).ready(function()
      {
        $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
          tags: keyword,
          tagmode: "any",
          format: "json"
        },
        function(data) 
        {
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
      function showDetails() 
      {
        body.append(info);
        if (info.style.display === "block") 
        {
          info.style.display = "none"
        } 
        else {
          info.style.display = "block"
        };
        info.innerHTML = "<p><b>County:</b> " + spot.county_name + "</p><p><b>Spot ID:</b> " + spot.spot_id + "</p><p><b>Longitude:</b> " + spot.longitude + "</p><p><b>Latitude: </b>" + spot.latitude + "</p>";
      } 
    })
}

// Button 1: display all surfing spots from the API
function showAll(event) 
{
  // Empty the div from previous card(s) and add instruction
  surfingSpots.innerHTML = "<h4><b>Click on a spot for more details</b></h4>";

  // Fetch API
  fetch('all.json')
    .then(response => response.json())
    .then(data => 
    {
      listSpots(data);
    })
    .catch(error => console.error(error))
} 

// Button 2: display a random surfing spot
function showRandom(event) 
{
  // Empty the div from previous card and add instruction
    surfingSpots.innerHTML = "<h4><b>Click on the spot for more details</b></h4>";

  // Fetch API
  fetch('all.json')
    .then(response => response.json())
    .then(data => 
    {
      listRandomSpot(data);
    })
    .catch(error => console.error(error))

  // Pick random spot
  function listRandomSpot (spots) 
  {
    var spot = spots[Math.floor(Math.random()*spots.length)];
    var randomSpotArray = [spot];
    listSpots(randomSpotArray);
  }
} 

// Button 3: hide surfing spot div
function removeSpots (event) 
{
  var surfingSpots = document.querySelector('.surfingSpots');
  
  surfingSpots.innerHTML = "";

  if (spotList.style.display === "block") 
  {
    spotList.style.display = "none"
  } else 
  {
    spotList.style.display = "block"
  };
}