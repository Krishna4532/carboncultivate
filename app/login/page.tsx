"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [role, setRole] = useState<"FARMER" | "BUYER">("FARMER");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication logic
    if (role === "FARMER") router.push("/dashboard");
    else router.push("/marketplace");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] px-6">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card w-full max-w-md p-10 relative z-10 border-t-4 border-t-[#00FF88]"
      >
        <div className="text-center mb-10">
          <h2 className="font-orbitron text-[#00FF88] tracking-[0.3em] text-[10px] uppercase mb-2">Secure Access</h2>
          <h1 className="text-3xl font-black tracking-tighter uppercase">Protocol <span className="text-gray-500">Login</span></h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Role Selector */}
          <div className="flex p-1 bg-black/40 rounded-lg border border-white/5">
            <button
              type="button"
              onClick={() => setRole("FARMER")}
              className={`flex-1 py-2 text-[10px] font-bold tracking-widest uppercase transition-all ${role === 'FARMER' ? 'bg-[#00FF88] text-black' : 'text-gray-500'}`}
            >
              Farmer
            </button>
            <button
              type="button"
              onClick={() => setRole("BUYER")}
              className={`flex-1 py-2 text-[10px] font-bold tracking-widest uppercase transition-all ${role === 'BUYER' ? 'bg-[#00FF88] text-black' : 'text-gray-500'}`}
            >
              Buyer
            </button>
          </div>

          <div className="space-y-4">
            <div className="group">
              <label className="text-[10px] font-mono text-gray-500 uppercase ml-1">Node_ID</label>
              <input 
                type="text" 
                placeholder="CC-NODE-042" 
                className="w-full bg-black/50 border border-white/10 p-4 text-sm focus:border-[#00FF88] outline-none transition-all font-mono"
                required
              />
            </div>
            <div className="group">
              <label className="text-[10px] font-mono text-gray-500 uppercase ml-1">Auth_Key</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-black/50 border border-white/10 p-4 text-sm focus:border-[#00FF88] outline-none transition-all font-mono"
                required
              />
            </div>
          </div>

          <button className="w-full py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-[#00FF88] transition-all">
            Initialize Session
          </button>
        </form>

        <p className="mt-8 text-center text-[9px] text-gray-600 font-mono">
          &gt; ENCRYPTED_CHANNEL_ACTIVE: SHA-256 <br />
          &gt; STANDBY_FOR_SATELLITE_HANDSHAKE
        </p>
      </motion.div>
    </div>
  );
}