"use client";import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

const position = [-3.6842, -40.3546]; // Sobral-CE
const markerIcon = new L.Icon({
	iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

export default function DynamicMap() {
	return (
		<MapContainer
			center={position}
			zoom={14}
			scrollWheelZoom={false}
			style={{ height: 180, width: "100%", borderRadius: 12 }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position} icon={markerIcon}>
				<Popup>Campus Mucambinho</Popup>
			</Marker>
		</MapContainer>
	);
}
