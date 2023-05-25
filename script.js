var map;
var geocoder;
var data;

function initMap() {
    geocoder = new google.maps.Geocoder();
    var mapOption = {
        center: {
            lat: 1.290270,
            lng: 103.851959
        },
        zoom: 12,
    };
    map = new google.maps.Map(document.getElementById("map"), mapOption); 
    fetching();
}

async function fetching() {
    const resp = await fetch('./data.json');
    const json = await resp.json();
    Object.keys(json).forEach(k => {
        var content = "";
        var p = "<h2><center>" + k + "</center></h2>";
        var a = "<h2><center>" + json[k]["address"] + "</center></h2>";
        var s = "";
        for(var i in json[k]["shops"]) {
            s += "<p><center>" + json[k]["shops"][i] + "</center></p>";
        }
        content = p + "<hr>" + a + "<hr>" + s;
        console.log(codeAddress(json[k]["address"], content));
    })
} 

function codeAddress(address, content) {
    geocoder.geocode( {"address": address}, function(results, status) {
      if (status == 'OK') {
        var infowindow = new google.maps.InfoWindow({
            content: content,
            ariaLabel: "Uluru",
        });
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        marker.addListener("click", () => {
            infowindow.open({
            anchor: marker,
            map,
            });
        });
        console.log("OK");
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
}

