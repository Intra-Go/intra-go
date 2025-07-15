import React from "react";
export default function LocationIcon({ className = "w-5 h-5" }) {
	return (
		<svg className={className} fill="none" viewBox="0 0 24 24">
			<path
				d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10Z"
				stroke="#F7931E"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle cx="12" cy="11" r="2" stroke="#F7931E" strokeWidth="2" />
		</svg>
	);
}
