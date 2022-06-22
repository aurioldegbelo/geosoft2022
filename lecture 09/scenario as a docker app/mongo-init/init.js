db =  new Mongo().getDB("mydatabase") // See https://www.mongodb.com/docs/manual/reference/method/Mongo.getDB/

let allpois = { 
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

// See https://www.mongodb.com/docs/manual/reference/method/js-collection/
db.pois.insertOne(allpois)

