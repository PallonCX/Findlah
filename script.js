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
    const resp = await fetch('./shopLists.json');
    const json = await resp.json();
    // console.log(json);
    Object.keys(json).forEach(k => {
        console.log(codeAddress(json[k]["address"]))
    })
} 

function codeAddress(address) {
    geocoder.geocode( {"address": address}, function(results, status) {
      if (status == 'OK') {
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        console.log("OK");
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
}

