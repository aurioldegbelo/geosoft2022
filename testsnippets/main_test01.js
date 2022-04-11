"use strict"

// add function to compute distances here

let distances = [4, 2, 5, 1, 3]
distances.sort(function(a, b) {
  return a - b
})

let txt = " Distances sorted from small to large: <br/>"
for (let i in distances) {
    console.log(distances[i])
    txt += distances[i] + "<br/>"
  }

document.getElementById("results").innerHTML = txt

/*
var items = [
    { city: 'Cologne', distance: 30 },
    { city: 'Amsterdam', distance: 40 },
    { city: 'Munich', distance: 12 },
    { city: 'Muenster', distance: -12 },
    { city: 'Madrid', distance: 24 },
    { city: 'Bueno Aires', distance: 33 }
  ];
  
  // Sortieren nach Wert
  items.sort(function (a, b) {
    return a.distance - b.distance;
  });
  
console.log(items)

var txt = ""
for (let x in items) {
    console.log(items[x])
    txt += items[x].city + " " + items[x].distance+ " <br/>";
  };

*/




