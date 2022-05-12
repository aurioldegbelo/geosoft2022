"use strict"; 

// function definition
function showDetailsAsJSON(details)
    {
  
        let text = `The current selection is { POI Name: ${details[0].properties.poiname}, City Name:  ${details[0].properties.cityname}, Link:  <a href=" ${details[0].properties.link}"> ${details[0].properties.link}</a> }`   
        console.log(text)
        // pass the information about the current poi to the HTML information element
        document.getElementById("information").innerHTML = text
           
    }

function showDetailsOnMap(details, mymap)
{
        // get the current poi
        let currentpoi = details[0]

        // geojson uses long/lat as ordering
        let [long, lat]= currentpoi.geometry.coordinates
        
        mymap.setView([lat, long], 13) // leaflet uses lat/long

        // add a marker
        var marker = L.marker([lat, long]).addTo(mymap)
        let text = `<a href="${currentpoi.properties.link}"><img src="${currentpoi.properties.jpg_link}" width="320" height="175"></a>`
        
        // add the picture to the current popup
        console.log(text)
        marker.bindPopup(text).openPopup()
    
}


// execution of functions when the DOM has loaded
window.onload = function ()
{

// geojson file about the pictures
    let geojson = { 
"type": "FeatureCollection",
"features": [
  { "type": "Feature",
    "geometry": {"type": "Point", "coordinates": [7.628056, 51.962222]},
    "properties": {
      "poiname": "Prinzipalmarkt",
      "cityname": "Münster", 
      "link": "https://flic.kr/p/4kbwjN", 
      "jpg_link": "https://live.staticflickr.com/2288/2186136858_214f8685f2_n.jpg" }
  },
  { "type": "Feature",
    "geometry": {"type": "Point", "coordinates": [7.596000123049237, 51.96910828669141]},
    "properties": {
      "poiname": "GEO1",
      "cityname": "Münster", 
      "link": "http://geomundus.org/2014/images/geo2.jpg", 
       "jpg_link": "http://geomundus.org/2014/images/geo2.jpg"  }
  },
  { "type": "Feature",
  "geometry": {"type": "Point", "coordinates": [7.6131, 51.9637]},
  "properties": {
    "poiname": "Fürstbischöfliches Schloss",
    "cityname": "Münster", 
    "link": "https://flic.kr/p/2jaqZrE" , 
       "jpg_link": "https://live.staticflickr.com/65535/49989838756_4f282a4874_n.jpg"     }
  },
  { "type": "Feature",
  "geometry": {"type": "Point", "coordinates": [13.74, 51.05]},
  "properties": {
    "poiname": "Dresden",
    "cityname": "Dresden", 
    "link": "https://flic.kr/p/xFLCa1", 
       "jpg_link": "https://live.staticflickr.com/5784/20797109706_4926e40352_n.jpg"      }
  },
  { "type": "Feature",
  "geometry": {"type": "Point", "coordinates": [9.966111, 53.546111]},
  "properties": {
    "poiname": "Hamburger Hafen",
    "cityname": "Hamburg", 
    "link": "https://flic.kr/p/ugwtqM" , 
    "jpg_link": "https://live.staticflickr.com/520/18553682569_e69b6bae80_n.jpg"     }
  },
  { "type": "Feature",
  "geometry": {"type": "Point", "coordinates": [9.7375, 52.367222]},
  "properties": {
    "poiname": "Neues Rathaus",
    "cityname": "Hannover", 
    "link": "https://flic.kr/p/Lewsk8", 
    "jpg_link": "https://live.staticflickr.com/8195/29032754173_b6cc777166_n.jpg"      }
  },
  { "type": "Feature",
  "geometry": {"type": "Point", "coordinates": [13.377722, 52.516272]},
  "properties": {
    "poiname": "Brandenburger Tor",
    "cityname": "Berlin", 
    "link": "https://flic.kr/p/Fx7s3D" , 
       "jpg_link": "https://live.staticflickr.com/811/25949983617_3e2959a8e9_n.jpg"     }
  },
  { "type": "Feature",
  "geometry": {"type": "Point", "coordinates": [6.783333, 51.233333]},
  "properties": {
   "poiname": "Düsseldorf",
   "cityname": "Düsseldorf", 
   "link": "https://flic.kr/p/7nTYJg", 
       "jpg_link": "https://live.staticflickr.com/2687/4185928571_946dee0f20_n.jpg"  }
  },
  { "type": "Feature",
  "geometry": {"type": "Point", "coordinates": [8.684444, 50.113611]},
  "properties": {
  "poiname": "Frankfurt Altstadt",
  "cityname": "Frankfurt am Main", 
  "link": "https://flic.kr/p/2izHsWG", 
   "jpg_link": "https://live.staticflickr.com/65535/49608292196_e66a29859a_n.jpg" }
  },
  { "type": "Feature",
  "geometry": {"type": "Point", "coordinates": [11.578947, 48.14065]},
  "properties": {
    "poiname": "Antiquarium",
    "cityname": "München", 
    "link": "https://flic.kr/p/2axWda3", 
       "jpg_link": "https://live.staticflickr.com/65535/44337291772_f78486053b_n.jpg"      }
  }
  ]
    }
  
    
    // create a variable for the map
    let mymap = L.map('myfirstmap',
        {
            center: [51.961563, 7.628202],
            zoom: 13
        }) 
    
          
    // add the base map
    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${myMapBoxKey}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: myMapBoxKey
    }).addTo(mymap)
   
    // retrieve the pictures
    let pictures = geojson.features
    //console.log(pictures)

    // retrieve the poinames
    let poinames = pictures.map(function(el)
    {
        return el.properties.poiname
    })
    //console.log(poinames)

    // autocomplete
    $( "#pictures" ).autocomplete
    ({
        minLength: 1, // start after 1 character
        source: poinames, // take the poinames as source
        select: function( event, ui ) 
        {
            this.value = ui.item.value // update the value of the current field with the value of the selected element

            let details = pictures.filter(function (el) 
            {
                // return the only object for which the poiname matches the selection
                 return el.properties.poiname === ui.item.value 
            })


            // show the details as a JSON text
            showDetailsAsJSON(details)
            
            // show the details on a leaflet map 
            showDetailsOnMap (details, mymap)

            return false // see https://css-tricks.com/return-false-and-prevent-default/
        }
    })


}