function updateMap() {
    console.log("Updating Map : ");
    fetch("./data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);
            for (element of rsp.data) {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases > 255) {
                    color = "rgb(255, 0, 0)";
                } else {
                    color = `rgb(${cases}, 0, 0)`;
                }
                // marker on the map
                new mapboxgl.Marker({
                        draggable: false,
                        color: color
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            }
        })
}

// Update in every 20second
let interval = 20000;
setInterval(updateMap(), interval);