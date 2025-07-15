"use client";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AjudaPage() {
	return (
		<div className="flex flex-col items-center bg-[#f3f6fa] md:bg-white px-2 md:px-0 py-0 w-full min-h-screen">
			<div className="flex flex-col flex-1 bg-white shadow-lg md:shadow-none mx-auto mt-8 md:mt-0 px-4 md:px-16 py-4 md:py-8 rounded-2xl md:rounded-none w-full max-w-[480px] md:max-w-full font-sans">
				<NavBar onMenuClick={() => {}} />
				<div className="flex flex-col flex-1 items-center text-center">
					<img
						src="/intraGo-logo-nameless.svg"
						alt="Logo intraGo minimalista"
						className="mb-4 w-12 h-12"
					/>
					<p className="text-[#17404E] text-base leading-relaxed">
						Para dúvidas, sugestões ou problemas, entre em contato com a equipe
						do IntraGo.
						<br />
						Estamos aqui para ajudar você a ter a melhor experiência possível!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
