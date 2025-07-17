"use client";import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BottomModal from "../components/BottomModal";
import {
	ExclamationTriangleIcon,
	CheckCircleIcon,
	ExclamationCircleIcon,
	CalendarIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";
const avisos = [
	{
		icon: <ExclamationTriangleIcon className="w-8 h-8 text-yellow-500" />,
		title: "Achados e perdidos",
		date: "Hoje 17,",
		desc: "Um estojo e uma blusa foram encontrados no...",
	},
	{
		icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
		title: "Voltamos a funcionar",
		date: "Hoje 16,",
		desc: "O intra já voltou a funcionar, problema resol...",
	},
	{
		icon: <ExclamationCircleIcon className="w-8 h-8 text-red-500" />,
		title: "O ônibus quebrou !!!",
		date: "Hoje 15,",
		desc: "O nosso intra está paralisado para reparos...",
	},
	{
		icon: <ExclamationTriangleIcon className="w-8 h-8 text-yellow-500" />,
		title: "Chuva forte no campus,",
		date: "Ontem 15h",
		desc: "O tempo virou por aqui, então já venha avi...",
	},
	{
		icon: <CalendarIcon className="w-8 h-8 text-blue-500" />,
		title: "Feriado vindo aí!",
		date: "Segunda 120",
		desc: "Fique por dentro dos feriados desse mês",
	},
	{
		icon: <CalendarIcon className="w-8 h-8 text-blue-500" />,
		title: "Amanhã é feriado!",
		date: "18 de junho",
		desc: "A gente sabe que você já sabe mas...",
	},
	{
		icon: <InformationCircleIcon className="w-8 h-8 text-purple-500" />,
		title: "Evento no campus",
		date: "15 de junho",
		desc: "Teremosuma feira cultural esta sem...",
	},
	{
		icon: <InformationCircleIcon className="w-8 h-8 text-purple-500" />,
		title: "Semana do meio ambiente",
		date: "15 de junho,",
		desc: "Atividades especiais em todos os blocos...",
	},
];

export default function AvisosPage() {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<div className="flex flex-col items-center bg-[#F8F8F8] md:bg-white px-2 py-0 w-full min-h-screen md:px0">
			<div className="flex flex-col flex-1 bg-white shadow-lg md:shadow-none mx-auto mt-8 md:mt-0 px-4 md:px-16 py-4 md:py-8 md:rounded-none w-full max-w-[480md:max-w-full font-sans ded-2xl">
				<NavBar onMenuClick={() => setModalOpen(true)} />
				<header className="md:hidden flex justify-center items-center mb-6">
					<h1 className="w-full font-semibold text-[#17404E] text-2xl text-center">
						Avisos
					</h1>
				</header>
				<div className="flex flex-col flex-1 gap-2">
					{avisos.map((aviso, i) => (
						<div
							key={i}
							className="flex items-center gap-3 bg-white shadow-sm px-2 py-2 rounded-lg"
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
				<BottomModal open={modalOpen} onClose={() => setModalOpen(false)} />
			</div>
			<Footer />
		</div>
	);
}
