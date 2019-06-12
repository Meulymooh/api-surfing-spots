Link: https://meulymooh.github.io/api-surfing-spots/index.html

# API: California's Surfing Spots

* Peer exercise
* I partnered up with Jan. We worked on the same surfing spot API but we decided to implement it separately while helping each other and advancing at the same speed.

## Duration

June 6th and 7th. 

## API Choice

Jan and I were not very much into beer. Since Jan is a surfer, we chose a surfing spot API. We encountered 2 major problems with it (but too late):

1. Unlike the beer API, we cannot add a "/random" at the end of the URL to fetch a random array. We have to use javascript's math function.

2. The surfing API and Flickr URLs are http. The exercise link on github is https. It's then causing a mixed-content error in the console. Adding an "s" to the Flickr API works, but it's not working with the surfing API. So I'm now just hosting the json file in my repo to make it work on github.

## Unfinished

Optimizing my code (part of my code is doubled for "all cards" and "random card").

## Difficulties

* Trying not to spend too much time on styling.
* Sorting out the JSON response alphabetically.   
* Getting a random image. The API url we chose doesn't allow "/random".

## Feedback

In a previous exercise (Pokedex), I used the XMLHttp request. This time we had to use fetch() and it's much easier.

The reason why I didn't work directly with Jan is that we didn't find a way to divide the work. Each instruction was dependent on the previous one, so working on separate tasks at the same time was not really possible.