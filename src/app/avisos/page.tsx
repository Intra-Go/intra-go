"use client";import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const avisos = [
	{
		icon: (
			<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#F7931E" />
				<path d="M12 8v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
				<circle cx="12" cy="16" r="1" fill="#fff" />
			</svg>
		),
		title: "Achados e perdidos",
		date: "Hoje 17h00",
		desc: "Um estojo e uma blusa foram encontrados no...",
	},
	{
		icon: (
			<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#F7931E" />
				<path d="M12 8v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
				<circle cx="12" cy="16" r="1" fill="#fff" />
			</svg>
		),
		title: "Voltamos a funcionar",
		date: "Hoje 16h00",
		desc: "O intra já voltou a funcionar, problema resol...",
	},
	{
		icon: (
			<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#F7931E" />
				<path d="M12 8v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
				<circle cx="12" cy="16" r="1" fill="#fff" />
			</svg>
		),
		title: "O ônibus quebrou !!!",
		date: "Hoje 15h00",
		desc: "O nosso intra está paralisado para reparos...",
	},
	{
		icon: (
			<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#F7931E" />
				<rect x="7" y="7" width="10" height="10" rx="2" fill="#fff" />
			</svg>
		),
		title: "Chuva forte no campus",
		date: "Ontem 15h",
		desc: "O tempo virou por aqui, então já venha avi...",
	},
	{
		icon: (
			<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#F7931E" />
				<rect x="7" y="7" width="10" height="10" rx="2" fill="#fff" />
			</svg>
		),
		title: "Feriado vindo aí!",
		date: "Segunda 12h00",
		desc: "Fique por dentro dos feriados desse mês",
	},
	{
		icon: (
			<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#F7931E" />
				<rect x="7" y="7" width="10" height="10" rx="2" fill="#fff" />
			</svg>
		),
		title: "Amanhã é feriado!",
		date: "18 de junho",
		desc: "A gente sabe que você já sabe mas...",
	},
	{
		icon: (
			<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#F7931E" />
				<rect x="7" y="7" width="10" height="10" rx="2" fill="#fff" />
			</svg>
		),
		title: "Evento no campus",
		date: "15 de junho",
		desc: "Teremos uma feira cultural esta sem...",
	},
	{
		icon: (
			<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="12" fill="#F7931E" />
				<rect x="7" y="7" width="10" height="10" rx="2" fill="#fff" />
			</svg>
		),
		title: "Semana do meio ambiente",
		date: "15 de junho",
		desc: "Atividades especiais em todos os blocos...",
	},
];

export default function AvisosPage() {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<div className="flex flex-col items-center bg-[#f3f6fa] md:bg-white px-2 md:px-0 py-0 w-full min-h-screen">
			<div className="flex flex-col flex-1 bg-white shadow-lg md:shadow-none mx-auto mt-8 md:mt-0 px-4 md:px-16 py-4 md:py-8 rounded-2xl md:rounded-none w-full max-w-[480px] md:max-w-full font-sans">
				<NavBar onMenuClick={() => setModalOpen(true)} />
				<header className="md:hidden flex items-center gap-2 mb-6">
					<button
						onClick={() => window.history.back()}
						className="mr-2 text-[#17404E] text-2xl"
					>
						<svg width="28" height="28" fill="none" viewBox="0 0 24 24">
							<path
								d="M15 18l-6-6 6-6"
								stroke="#17404E"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
					<h1 className="font-semibold text-[#17404E] text-2xl">Avisos</h1>
				</header>
				<div className="flex flex-col flex-1 gap-2">
					{avisos.map((aviso, i) => (
						<div
							key={i}
							className="flex items-center gap-3 bg-white shadow-sm px-2 py-2 border-gray-100 border-b rounded-lg"
						>
							<div>{aviso.icon}</div>
							<div className="flex-1 min-w-0">
								<div className="text-gray-500 text-xs">{aviso.date}</div>
								<div className="font-semibold text-[#17404E] truncate">
									{aviso.title}
								</div>
								<div className="text-gray-500 text-sm truncate">
									{aviso.desc}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
