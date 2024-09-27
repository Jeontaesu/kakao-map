const mapContainer = document.querySelector("#map");
const mapOption = { center: new kakao.maps.LatLng(37.51936795597721, 127.05708259472347), level: 2 };

//map instance
const map = new kakao.maps.Map(mapContainer, mapOption);

//marker instance
const marker = new kakao.maps.Marker({ position: mapOption.center });

//add marker layer on map layer
marker.setMap(map);
