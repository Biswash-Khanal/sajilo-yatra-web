// components/BottomNav.tsx
import { navItems } from "@/assets/assets";

import { useRouter } from "next/router";
import NavigationItem from "./NavigationItem";



export default function BottomNav() {
	const router = useRouter();



	return (
		<nav className="fixed bottom-0 left-0 right-0 z-50 bg-secondary border-2 border-primary  shadow-md ">
			<ul className="flex justify-evenly items-center py-2">
				{navItems.map(({ href, label, icon }) => {
					const isActive = router.pathname === href;
					return (
						<li key={label}>
							<NavigationItem href={href} label={label} icon={icon} isActive={isActive}/>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
