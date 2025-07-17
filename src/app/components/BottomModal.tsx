"use client";import React from "react";
import {
	BellIcon,
	InformationCircleIcon,
	QuestionMarkCircleIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";

const options = [
	{
		icon: <BellIcon className="w-6 h-6 text-[#F7931E]" />,
		label: "Avisos",
		href: "/avisos",
	},
	{
		icon: <InformationCircleIcon className="w-6 h-6 text-[#F7931E]" />,
		label: "Sobre nós",
		href: "/sobre-nos",
	},
	{
		icon: <QuestionMarkCircleIcon className="w-6 h-6 text-[#F7931E]" />,
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
							<ChevronRightIcon className="ml-auto w-5 h-5 text-[#17404E]" />
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
