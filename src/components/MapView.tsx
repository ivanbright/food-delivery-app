import { useEffect, useRef } from "react";
import L from "leaflet";

export default function MapView({ location, relatedPlaces }) {
    const mapRef = useRef(null);
    const markersRef = useRef(L.layerGroup());

    useEffect(() => {
        console.log("MapView initialized");
        if (!mapRef.current) {
            mapRef.current = L.map("map").setView([-1.9441, 30.0619], 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "© OpenStreetMap contributors",
            }).addTo(mapRef.current);

            markersRef.current.addTo(mapRef.current);
        }
    }, []);

    useEffect(() => {
        if (!location || !mapRef.current) return;

        markersRef.current.clearLayers();

        mapRef.current.setView([location.lat, location.lon], 15);

        L.marker([location.lat, location.lon])
            .addTo(markersRef.current)
            .bindPopup("Delivery Location")
            .openPopup();

        relatedPlaces.forEach(place => {
            L.marker([place.lat, place.lon])
                .addTo(markersRef.current)
                .bindPopup(place.name);
        });
    }, [location, relatedPlaces]);

    return <div id="map" className="w-full h-[400px] rounded-xl overflow-hidden bg-white" />;
}
