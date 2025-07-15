import React from "react";
export default function HamburgerMenu({
	className = "w-7 h-7 text-[#F7931E]",
}) {
	return (
		<svg className={className} fill="none" viewBox="0 0 24 24">
			<rect y="4" width="24" height="2" rx="1" fill="currentColor" />
			<rect y="11" width="24" height="2" rx="1" fill="currentColor" />
			<rect y="18" width="24" height="2" rx="1" fill="currentColor" />
		</svg>
	);
}
