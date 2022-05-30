// structuring involving callback
window.onload = function ()
{

    var results = null 
    var location = {long: "", lat: ""}


    // Querying of the API
    var xhttp = new XMLHttpRequest()
    xhttp.open("GET", "...", true)
    xhttp.send()
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            results = xhttp.responseText
        }
    }

    locationButton = document.getElementById("getLocationBtn")
    locationButton.addEventListener("click", function() {

        if (navigator.geolocation) 
        {
            navigator.geolocation.getCurrentPosition(getPosition)
         } 
         else 
         {
            alert("Geolocation is not supported by this browser.");
         }

    })


    // function to get the location
    function getPosition(position) {

        location.lat = position.coords.latitude;
        location.long = position.coords.longitude;
    
        workWithResultsAndLocation(results, location)

     }
        
 
}

// function to work with both results and location
function  workWithResultsAndLocation(res, loc)
{

    console.log("RESULTS", res)
    console.log("LOCATION", loc)

}




