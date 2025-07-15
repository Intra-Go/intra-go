import React from "react";import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";

export default function NavBar({ onMenuClick }: { onMenuClick: () => void }) {
	const pathname =
		typeof window !== "undefined" ? window.location.pathname : "/";
	const isHome = pathname === "/";
	return (
		<nav className="flex justify-between items-center mb-6 w-full">
			<div className="flex items-center gap-2">
				{!isHome && (
					<button
						onClick={() => window.history.back()}
						className="hover:bg-[#f3f6fa] p-1 rounded focus:outline-none focus:ring-[#F7931E] focus:ring-2 text-[#17404E] text-xl transition"
						aria-label="Voltar"
					>
						<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
							<path
								d="M15 18l-6-6 6-6"
								stroke="#17404E"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				)}
				<Logo />
			</div>
			{/* Desktop nav */}
			<div className="hidden md:flex items-center gap-8">
				<a
					href="/avisos"
					className="font-medium text-[#17404E] hover:underline"
				>
					Avisos
				</a>
				<a
					href="/sobre-nos"
					className="font-medium text-[#17404E] hover:underline"
				>
					Sobre nós
				</a>
				<a href="/ajuda" className="font-medium text-[#17404E] hover:underline">
					Ajuda
				</a>
			</div>
			{/* Mobile menu */}
			<button
				className="md:hidden focus:outline-none hover:scale-105 active:scale-95 transition-transform duration-150"
				onClick={onMenuClick}
			>
				<HamburgerMenu />
			</button>
		</nav>
	);
}
