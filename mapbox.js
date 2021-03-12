L.mapbox.accessToken = 'pk.eyJ1Ijoic3VkYW1mZXJuYW5kbyIsImEiOiJja20xb2M4Ymowa2l4MnhxdG54em4xcWtzIn0.LJjx0EIijx9z2l618Z4V-w';
var map = L.map('map').setView([51.0468, -114.0698], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/sudamfernando/ckm334d1m5kka17qk0yvvlymd.html?fresh=true&title=copy&access_token='+ L.mapbox.accessToken, {
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
      attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
