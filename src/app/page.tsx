"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NavBar from "./components/NavBar";
import LocationIcon from "./components/LocationIcon";
import BottomModal from "./components/BottomModal";
import Footer from "./components/Footer";

const DynamicMap = dynamic(() => import("./components/DynamicMap"), {
	ssr: false,
});

export default function Home() {
	const [modalOpen, setModalOpen] = useState(false);
	const [isClient, setIsClient] = useState(false);
	useEffect(() => setIsClient(true), []);

	return (
		<div className="flex flex-col items-center bg-[#f3f6fa] md:bg-white px-2 md:px-0 py-0 w-full min-h-screen">
			<div className="flex flex-col flex-1 bg-white shadow-lg md:shadow-none mx-auto mt-8 md:mt-0 px-4 md:px-16 py-4 md:py-8 rounded-2xl md:rounded-none w-full max-w-[480px] md:max-w-full font-sans">
				<NavBar onMenuClick={() => setModalOpen(true)} />

				{/* Título */}
				<h1 className="mb-4 font-semibold text-[#17404E] text-2xl md:text-3xl">
					Rota do intra
				</h1>

				{/* Mapa dinâmico e próximas paradas em grid no desktop */}
				<div className="flex md:flex-row flex-col md:gap-8 mb-6">
					<div className="mb-6 md:mb-0 rounded-xl w-full md:w-2/3 h-44 md:h-60 overflow-hidden">
						{isClient && <DynamicMap />}
					</div>
					<section className="flex flex-col justify-between w-full md:w-1/3">
						<h2 className="mb-2 font-semibold text-[#17404E] text-lg">
							Próximas paradas
						</h2>
						<div className="flex items-center gap-2 bg-[#F5F5F5] hover:bg-[#ffe7c2] mb-2 p-3 rounded-lg transition-colors duration-200">
							<LocationIcon />
							<span className="font-bold text-[#17404E]">FAMED</span>
							<span className="ml-2 text-gray-500 text-xs">
								Chega em no máximo 15 minutos
							</span>
						</div>
						<div className="flex justify-center gap-2 mt-2">
							<div className="bg-[#F7931E] rounded w-8 h-1" />
							<div className="bg-[#F7931E] opacity-50 rounded w-8 h-1" />
							<div className="bg-[#F7931E] opacity-20 rounded w-8 h-1" />
						</div>
					</section>
				</div>

				{/* Horários de saída e pontos de parada em grid no desktop */}
				<div className="flex md:flex-row flex-col md:gap-8">
					<section className="mb-6 md:mb-0 w-full md:w-2/3">
						<h2 className="mb-2 font-semibold text-[#17404E] text-lg">
							Horários de saída do intra
						</h2>
						<div className="gap-2 grid grid-cols-3 md:grid-cols-4 mb-2">
							{[
								"07h00",
								"07h45",
								"09h00",
								"10h00",
								"11h00",
								"11h50",
								"12h40",
								"12h40",
								"12h40",
								"12h40",
								"12h40",
								"12h40",
							].map((h, i) => (
								<div
									key={i}
									className="bg-[#F5F5F5] hover:bg-[#e6f7ff] py-2 rounded-lg font-medium text-[#17404E] text-base text-center transition-colors duration-200"
								>
									{h}
								</div>
							))}
						</div>
						<div className="text-gray-500 text-xs">
							Todos os horários com saída do Campus Mucambinho
						</div>
					</section>
					<section className="w-full md:w-1/3">
						<h2 className="mb-2 font-semibold text-[#17404E] text-lg">
							Pontos de parada
						</h2>
						<div className="flex items-center gap-2 bg-[#F5F5F5] hover:bg-[#e6f7ff] mb-2 p-3 rounded-lg transition-colors duration-200">
							<LocationIcon />
							<span className="text-[#17404E]">Campus mucambinho</span>
						</div>
						{/* Adicione mais pontos conforme necessário */}
					</section>
				</div>
				<BottomModal open={modalOpen} onClose={() => setModalOpen(false)} />
			</div>
			<Footer />
		</div>
	);
}
