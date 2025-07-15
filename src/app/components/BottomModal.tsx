"use client";
import React, { useState } from "react";
import Logo from "./Logo";

const options = [
	{
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" stroke="#F7931E" strokeWidth="2" />
				<path
					d="M12 8v4"
					stroke="#F7931E"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<circle cx="12" cy="16" r="1" fill="#F7931E" />
			</svg>
		),
		label: "Avisos",
		href: "/avisos",
	},
	{
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" stroke="#F7931E" strokeWidth="2" />
				<path
					d="M12 16v-4"
					stroke="#F7931E"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<circle cx="12" cy="8" r="1" fill="#F7931E" />
			</svg>
		),
		label: "Sobre nós",
		href: "/sobre-nos",
	},
	{
		icon: (
			<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" stroke="#F7931E" strokeWidth="2" />
				<path
					d="M12 8v4"
					stroke="#F7931E"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<circle cx="12" cy="16" r="1" fill="#F7931E" />
			</svg>
		),
		label: "Ajuda",
		href: "/ajuda",
	},
];

export default function BottomModal({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	if (!open) return null;
	return (
		<div
			className="z-40 fixed inset-0 flex justify-center items-end bg-black/30"
			onClick={onClose}
		>
			<div
				className="relative bg-white shadow-xl mx-auto p-6 pb-3 rounded-t-2xl w-full max-w-[480px]"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-col gap-2 mb-2">
					{options.map((opt) => (
						<a
							key={opt.label}
							href={opt.href}
							className="flex items-center gap-3 hover:bg-gray-100 px-2 py-2 rounded-lg transition"
						>
							{opt.icon}
							<span className="font-medium text-[#17404E] text-lg">
								{opt.label}
							</span>
							<svg
								className="ml-auto"
								width="20"
								height="20"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									d="M9 6l6 6-6 6"
									stroke="#17404E"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					))}
				</div>
				<div className="mt-2 text-gray-400 text-xs">Versão: 1.0.0 build 1</div>
			</div>
		</div>
	);
}
