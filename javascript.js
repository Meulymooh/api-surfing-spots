// Fetch surfing spots
var surfingSpots = document.querySelector('.surfingSpots');

fetch('http://api.spitcast.com/api/spot/all')
  .then(response => response.json())
  .then(data => {
    listSpots(surfingSpots, data) // Prints result from `response.json()` in getRequest
  })
  .catch(error => console.error(error))


// List spots
function listSpots (listDiv, spots) {
  console.log(spots)
  let ul = document.createElement('ul')
  spots.forEach(spot => {
    let li = document.createElement('li')
    li.innerHTML = spot.spot_name
    ul.append(li)
  })
  console.log(ul)
  listDiv.append(ul)
}