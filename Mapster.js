MAP_OPTIONS = {
    center: {
        lat: 1.290270,
        lng: 103.851959
    },
    zoom: 12,
//         geocoder: true
};

// (function(window, google, List) {

//     var Mapster = (function(){

//         function Mapster(element, opts) {
//             this.gMap = new google.maps.Map(element, opts);
// //             this.markers = List.create();
// //             if(opts.geocoder) {
// //                 this.geocoder = new google.maps.Geocoder();
// //             }
//         }

// //         Mapster.prototype = {
// //             _on: function(opts) {
// //                 var self = this;
// //                 google.maps.event.addListener(opts.obj, opts.event, function(e){opts.callback.call(self, e);});
// //             },

// //             geocode: function(opts) {
// //                 var geocoder = new google.maps.Geocoder(); // Declare geocoder variable
// //                 geocoder.geocode({
// //                     address: opts.address
// //                 }, function(results, status){
// //                     if(status === google.maps.GeocoderStatus.OK) {
// //                         opts.success.call(this, results, status);
// //                     } else {
// //                         opts.error.call(this, status);
// //                     }
// //                 });
// //             },

// //             addMarkerByLocation: function(opts) {
// //                 var self = this;
// //                 this.geocode({ // Change this.map to this.geocode
// //                     address: opts.location,
// //                     success: function(results) {
// //                         results.forEach(function(result) {
// //                             opts.lat = result.geometry.location.lat();
// //                             opts.lng = result.geometry.location.lng();
// //                             self.addMarker(opts); // Change this.map.addMarker to self.addMarker
// //                         });
// //                     },
// //                     error: function(status) {
// //                         console.error(status);
// //                     }
// //                 });
// //             },

// //             addMarker: function(opts) {
// //                 var marker;
// //                 opts.position = {
// //                     lat: opts.lat,
// //                     lng: opts.lng
// //                 };
// //                 marker = this._createMarker(opts);
// //                 this.markers.add(marker);
// //                 if(opts.event) {
// //                     this._on({
// //                         obj: marker,
// //                         event: opts.event.name,
// //                         callback: opts.event.callback
// //                     });
// //                 }
// //                 if(opts.content){
// //                     this._on({
// //                         obj: marker,
// //                         event: "click",
// //                         callback: function() {
// //                             var infoWindow = new google.maps.InfoWindow({content: opts.content});
// //                             infoWindow.open(this.gMap, marker);
// //                         }
// //                     });
// //                 }
// //                 return marker;              
// //             },

// //             findBy: function(callback) {
// //                 return this.markers.find(callback);
// //             },

// //             removeBy: function(callback) {
// //                 this.markers.find(callback, function(markers) {
// //                     markers.forEach(function(marker) {
// //                         marker.setMap(null);
// //                     });
// //                 });
// //             },

// //             _createMarker: function(opts) {
// //                 opts.map = this.gMap;
// //                 return new google.maps.Marker(opts);
// //             }
// //         };

//         return Mapster;

//     })();

//     Mapster.create = function(element, opts) {
//         return new Mapster(element, opts);
//     };

//     window.Mapster = Mapster;

// }(window, google, List));
