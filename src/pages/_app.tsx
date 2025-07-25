// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BottomNav from "@/components/BottomNav";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="bg-background text-text font-space">
			<main className="pb-16">
				<Component {...pageProps} />
			</main>
			<BottomNav />
			<div>Hello</div>
		</div>
	);
}
