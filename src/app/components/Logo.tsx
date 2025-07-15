import React from "react";import Image from "next/image";
export default function Logo() {
	return (
		<Image
			src="/intraGo-logo.svg"
			alt="Logo intraGo"
			width={120}
			height={20}
			style={{ height: "auto" }}
			priority
		/>
	);
}
