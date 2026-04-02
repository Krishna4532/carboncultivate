"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 bg-[#00FF88] rounded-full blur-[4px] absolute" />
          <span className="relative z-10">CARBON<span className="text-[#00FF88]">CULTIVATE</span></span>
        </Link>

        <div className="flex gap-8 items-center text-[10px] font-bold tracking-[0.2em] uppercase">
          <Link href="/dashboard" className={pathname === "/dashboard" ? "text-[#00FF88]" : "text-gray-400"}>Dashboard</Link>
          <Link href="/marketplace" className={pathname.includes("/marketplace") ? "text-[#00FF88]" : "text-gray-400"}>Marketplace</Link>
          <button className="px-5 py-2 border border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black transition-all">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}