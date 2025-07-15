"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function SobreNosPage() {
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
					<h1 className="font-semibold text-[#17404E] text-2xl">Sobre nós</h1>
				</header>
				<div className="flex flex-col flex-1 items-center">
					<Logo />
					<img
						src="../Campus-UFC.jpg"
						alt="Campus Mucambinho"
						className="shadow my-6 rounded-lg w-full max-w-2xl h-56 md:h-80 object-cover"
					/>
					<div className="mb-4 w-full max-w-2xl text-[#17404E] text-base text-justify leading-relaxed">
						<p className="mb-2">
							O IntraGo é uma aplicação web desenvolvida com o objetivo de
							facilitar o deslocamento de estudantes, professores e servidores
							entre os campi da instituição. A plataforma permite visualizar, de
							forma simples e em tempo real, as rotas dos ônibus, seus horários
							e possíveis atrasos, contribuindo para o planejamento do dia a dia
							acadêmico.
						</p>
						<p className="mb-2">
							A interface foi pensada para ser direta e acessível, com foco na
							usabilidade, permitindo que o usuário acesse rapidamente as
							informações mais importantes assim que entra no sistema.
						</p>
						<p>
							Este projeto foi desenvolvido por Daniel Meneses, Joaquim Gregório
							e Francisco Wendel, como parte da atividade da disciplina de
							TechWeb I
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
