import React from "react";import Logo from "./Logo";
export default function Footer() {
	return (
		<footer
			className="flex justify-between items-center bg-[#F8F8F8] mt-8 px-4 md:px-16 py-3 border-t-0 border-b-[#F7931E] border-b-4 md:rounded-none rounded-b-2xl w-full"
			style={{ boxSizing: "border-box" }}
		>
			<span className="text-gray-500 text-xs">
				Todos os direitos reservados ©
			</span>
			<Logo />
		</footer>
	);
}
