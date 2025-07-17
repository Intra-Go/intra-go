"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React, { useEffect, useRef } from "react";

const markerIcon = new L.Icon({
	iconUrl: 'busao.svg',
	iconSize: [25,41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

type Props = {
	position?: [number, number];
	label?: string;
	startPosition?: [number, number];
	endPosition?: [number, number];
	animate?: boolean;
	animationDuration?: number;
};

export default function DynamicMap({
	position = [-3.6842, -40.3546],
	label = "Campus Mucambinho",
	startPosition, 
	endPosition, 
	animate = false, 
	animationDuration = 5000}: Props) {
	const markerRef = useRef<L.Marker>(null);
	const animationRef = useRef<number | null>(null);
	const mapRef = useRef<L.Map>(null);

	useEffect(() => {
		if (mapRef.current && !animate) {
			mapRef.current.setView(position, mapRef.current.getZoom());
		}
	}, [position, animate]);

	useEffect(() => {
		if (animate && startPosition && endPosition && markerRef.current && mapRef.current) {
			const marker = markerRef.current;
			const map = mapRef.current;
			const startLatLng = L.latLng(startPosition[0], startPosition[1]);
			const endLatLng = L.latLng(endPosition[0], endPosition[1]);
			
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}

			const startTime = Date.now();
			
			const animateMarker = () => {
				const elapsed = Date.now() - startTime;
				const progress = Math.min(elapsed / animationDuration, 1);
				
				const easeInOutQuad = (t: number) => t <0.5? 2 * t * t : -1 + (4 - 2 * t) * t;
				const easedProgress = easeInOutQuad(progress);
				
				const currentLat = startLatLng.lat + (endLatLng.lat - startLatLng.lat) * easedProgress;
				const currentLng = startLatLng.lng + (endLatLng.lng - startLatLng.lng) * easedProgress;
				
				const currentPosition = [currentLat, currentLng] as [number, number];
				marker.setLatLng(currentPosition);
				
				map.setView(currentPosition, map.getZoom());
				
				if (progress < 1) {
					animationRef.current = requestAnimationFrame(animateMarker);
				}
			};
			
			animationRef.current = requestAnimationFrame(animateMarker);
		}
		
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [animate, startPosition, endPosition, animationDuration]);

	return (
		<MapContainer
			ref={mapRef}
			center={position}
			zoom={14}
			scrollWheelZoom={false}
			style={{ height: "100%", borderRadius: 12 }}
			attributionControl={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker 
				ref={markerRef}
				position={animate && startPosition ? startPosition : position} 
				icon={markerIcon}
			>
				<Popup>{label}</Popup>
			</Marker>
		</MapContainer>
	);
}
