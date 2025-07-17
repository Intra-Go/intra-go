"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NavBar from "./components/NavBar";
import LocationIcon from "./components/LocationIcon";
import BottomModal from "./components/BottomModal";
import Footer from "./components/Footer";

type StopPoint = {
	name: string;
	latitude: number;
	longitude: number;
};

const DynamicMap = dynamic(() => import("./components/DynamicMap"), {
	ssr: false,
});

export default function Home() {
	const [modalOpen, setModalOpen] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [previousStopPoint, setPreviousStopPoint] = useState<StopPoint | null>(null);
	
	useEffect(() => setIsClient(true), []);

	const schedules = [
		"07h00",
		"07h45",
		"09h00",
		"10h00",
		"11h00",
		"11h50",
		"12h40",
		"13h30",
		"14h10",
		"17h20",
		"18h20",
		"19h20",
		"21h40",
	]

	const stopPoints: StopPoint[] = [
		{
			name: "Campus Mucambinho",
			latitude: -3.6934793712408096,
			longitude: -40.35495510388736,
		},
		{
			name: "Santa Casa",
			latitude: -3.69348338101137,
			longitude: -40.35889087093821,
		},
		{
			name: "SPA",
			latitude: -3.6889271381036415,
			longitude: -40.35345328190906,
		},
		{
			name: "Cadeia Criativa",
			latitude: -3.684814020811564,
			longitude: -40.35246007155203,
		},
		{
			name: "Hospital do Coração",
			latitude: -3.685687359130303,
			longitude: -40.33685468283901,
		},
		{
			name: "FAMED",
			latitude: -3.6818968846851607,
			longitude: -40.33721068088307,
		},
		{
			name: "Receita Federal",
			latitude: -3.6834579787343125,
			longitude: -40.342637524790945,
		},
	];

	const [selectedStopPoint, setSelectedStopPoint] = useState<StopPoint>(stopPoints[0]);
	const [nextStopPoint, setNextStopPoint] = useState<StopPoint>(stopPoints[1]);

	useEffect(() => {
		const interval = setInterval(() => {
			setSelectedStopPoint(currentSelected => {
				const currentIndex = stopPoints.findIndex(sp => sp.name === currentSelected.name);
				const nextIndex = (currentIndex + 1) % stopPoints.length;
				const newSelected = stopPoints[nextIndex];

				const nextNextIndex = (nextIndex + 1) % stopPoints.length;
				setNextStopPoint(stopPoints[nextNextIndex]);

				setPreviousStopPoint(currentSelected);
				
				setIsAnimating(true);
				
				setTimeout(() => {
					setIsAnimating(false);
				}, 5000);

				return newSelected;
			});
		}, 20000);

		return () => clearInterval(interval);
	}, [stopPoints]);

	return (
		<div className="flex flex-col items-center bg-[#f3f6fa] md:bg-white px-2 md:px-0 py-0 w-full min-h-screen">
			<div className="flex flex-col flex-1 bg-white shadow-lg md:shadow-none mx-auto mt-8 md:mt-0 px-4 md:px-16 py-4 md:py-8 rounded-2xl md:rounded-none w-full max-w-[480px] md:max-w-full font-sans">
				<NavBar onMenuClick={() => setModalOpen(true)} />

				<h1 className="mb-4 font-semibold text-[#17404E] text-2xl md:text-3xl">
					Rota do intra
				</h1>

				<div className="flex md:flex-row flex-col md:gap-8 mb-6">
					<div className="mb-6 md:mb-0 rounded-xl w-full md:w-2/3 h-44 md:h-60 overflow-hidden">
						{isClient && (
							<DynamicMap
								position={[
									selectedStopPoint.latitude,
									selectedStopPoint.longitude,
								]}
								label={selectedStopPoint.name}
								startPosition={previousStopPoint ? [previousStopPoint.latitude, previousStopPoint.longitude] : undefined}
								endPosition={[selectedStopPoint.latitude, selectedStopPoint.longitude]}
								animate={isAnimating}
								animationDuration={3000}
							/>
						)}
					</div>
					<section className="flex flex-col justify-between w-full md:w-1/3">
						<h2 className="mb-2 font-semibold text-[#17404E] text-lg">
							Próximas paradas
						</h2>
						<div className="flex items-center gap-2 bg-[#F5F5F5] hover:bg-[#ffe7c2] mb-2 p-3 rounded-lg transition-colors duration-200">
							<LocationIcon />
							<span className="font-bold text-[#17404E]">
								{nextStopPoint.name}
							</span>
							<span className="ml-2 text-gray-500 text-xs">
								Chega em no máximo 15 minutos
							</span>
						</div>
						<div className="flex justify-center gap-2 mt-2">
							{stopPoints.map(renderStopPointBar)}
						</div>
					</section>
				</div>

				<div className="flex md:flex-row flex-col md:gap-8">
					<section className="mb-6 md:mb-0 w-full md:w-2/3">
						<h2 className="mb-2 font-semibold text-[#17404E] text-lg">
							Horários de saída do intra
						</h2>
						<div className="gap-2 grid grid-cols-3 md:grid-cols-4 mb-2">
							{schedules.map((h, i) => (
								<div
									key={i}
									className="bg-[#F5F5F5] hover:bg-[#e6f7ff] py-2 rounded-lg font-medium text-[#17404E] text-base text-center transition-colors duration-200"
								>
									{h}
								</div>
							))}
						</div>
						<div className="text-gray-500 text-xs">
							Todos os horários com saída do{" "}
							{selectedStopPoint.name}
						</div>
					</section>
					<section className="w-full md:w-1/3">
						<h2 className="mb-2 font-semibold text-[#17404E] text-lg">
							Pontos de parada
						</h2>
						{stopPoints.map(renderStopPoint)}
					</section>
				</div>
				<BottomModal open={modalOpen} onClose={() => setModalOpen(false)} />
			</div>
			<Footer />
		</div>
	);

	function renderStopPoint(stopPoint: StopPoint, i: number) {
		const isSelected = stopPoint.name === selectedStopPoint.name;
		const isPast = i < stopPoints.findIndex(sp => sp.name === selectedStopPoint.name);

		let iconColor = "#B0B0B0";
		if (isPast || isSelected) iconColor = "#F7931E";

		return (
			<div
				key={stopPoint.name}
				className="flex items-center gap-2 bg-[#F5F5F5] hover:bg-[#e6f7ff] mb-2 p-3 rounded-lg transition-colors duration-200"
			>
				<LocationIcon color={iconColor} />
				<span
					className={`text-[#17404E] ${isSelected ? "font-bold" : ""}`}
				>
					{stopPoint.name}
				</span>
			</div>
		);
	}

	function renderStopPointBar(stopPoint: StopPoint, i: number) {
		const isSelected = stopPoint.name === selectedStopPoint.name;
		const isPast = i < stopPoints.findIndex(sp => sp.name === selectedStopPoint.name);


		if (isPast) {
			return <div className="bg-[#F7931E] opacity-50 rounded w-8 h-1" />
		}

		if (isSelected) {
			return <div className="bg-[#F7931E] rounded w-8 h-1" />
		}
		
		return <div className="bg-[#17404E] opacity-20 rounded w-8 h-1" />
		
	}
}
