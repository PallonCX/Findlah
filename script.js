(function(window, mapster) {

    // map options
    var options = mapster.MAP_OPTIONS;
    var element = document.getElementById("map-canvas");

    // map
    var map = mapster.create(element, options);

    var geocoder = new google.maps.Geocoder();

    function geocode(opts, geocoder) {
        geocoder.geocode({
            address: opts.address
        }, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                opts.success.call(this, results, status);
            } else {
                opts.error.call(this, status);
            }
        });
    }

    geocode({
        address: "",
        success: function(results) {
            var result = results[0];
            map.addMarker({
                lat: result.geometry.location.lat(),
                lng: result.geometry.location.lng()
            });
        },
        error: function(status) {
            console.error(status);
        }
    }, geocoder);

})(window, window.Mapster || (window.Mapster = {}));
