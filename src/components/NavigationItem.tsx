import { NavigationItemProps } from "@/assets/assets";
import Link from "next/link";


export default function NavigationItem({href, label, icon, isActive}:NavigationItemProps) {
  return (
    <Link href={href}>
      <div
        className={`w-20 sm:w-30 lg:w-40 xl:w-60 py-1 border-2 rounded-xl  flex flex-col items-center text-xs ${
          isActive ? "text-blue-600" : "text-gray-500"
        }`}
      >
        {icon}
        <span className="hidden sm:block font-semibold">{label}</span>
      </div>
    </Link>
  );
}
