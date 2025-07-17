"use client";import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BottomModal from "../components/BottomModal";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function AjudaPage() {
	const [modalOpen, setModalOpen] = useState(false);
	const handleContactClick = () => {
		const message = encodeURIComponent(
			"Olá, preciso de suporte com a plataforma IntraGo!"
		);
		const phoneNumber = 5588981480767;
		// Detecta se é mobile
		const isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			);

		let whatsappUrl;
		if (isMobile) {
			// Para mobile, usa o protocolo whatsapp://
			whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
		} else {
			// Para desktop, usa o WhatsApp Web
			whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
		}

		window.open(whatsappUrl, "_blank");
	};

	return (
		<div className="flex flex-col items-center bg-[#F8F8F8] md:bg-white px-2 md:px-0 py-0 w-full min-h-screen">
			<div className="flex flex-col flex-1 bg-white shadow-lg md:shadow-none mx-auto mt-8 md:mt-0 px-4 md:px-16 py-4 md:py-8 rounded-2xl md:rounded-none w-full max-w-[480px] md:max-w-full font-sans">
				<NavBar onMenuClick={() => setModalOpen(true)} />
				<div className="flex flex-col flex-1 items-center text-center">
					<Image
						src="/intraGo-logo-nameless.svg"
						alt="Logo intraGo minimalista"
						width={48}
						height={48}
						className="mb-4 w-12 h-12"
					/>
					<p className="mb-8 text-[#17404E] text-base leading-relaxed">
						Para dúvidas, sugestões ou problemas, entre em contato com a equipe
						do IntraGo.
						<br />
						Estamos aqui para ajudar você a ter a melhor experiência possível!
					</p>
					<button
						onClick={handleContactClick}
						className="flex items-center gap-2 bg-[#17404E] hover:bg-[#035] px-6 py-3 rounded-lg font-medium text-white transition-colors duration-200"
					>
						<ChatBubbleLeftRightIcon className="w-5 h-5" />
						Entrar em contato
					</button>
				</div>
				<BottomModal open={modalOpen} onClose={() => setModalOpen(false)} />
			</div>
			<Footer />
		</div>
	);
}
