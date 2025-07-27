// components/BottomNav.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Map, Calculator, MessageCircle } from "lucide-react";

export default function BottomNav() {
	const router = useRouter();

	const navItems = [
		{ href: "/", label: "Home", icon: <Home size={20} /> },
		{ href: "/routes", label: "Routes", icon: <Map size={20} /> },
		{ href: "/fare", label: "Fare", icon: <Calculator size={20} /> },
		{ href: "/feedback", label: "Feedback", icon: <MessageCircle size={20} /> },
	];

	return (
		<nav className="fixed bottom-0 left-0 right-0 z-50 bg-secondary border-2 border-primary border-gray-200 shadow-md ">
			<ul className="flex justify-around items-center py-2">
				{navItems.map(({ href, label, icon }) => {
					const isActive = router.pathname === href;
					return (
						<li key={label}>
							<Link href={href}>
								<div
									className={`border-2 w-20 flex flex-col items-center text-xs ${
										isActive ? "text-blue-600" : "text-gray-500"
									}`}
								>
									{icon}
									<span>{label}</span>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
