"use client";
import { useParams } from "next/navigation";
import { CARBON_PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = CARBON_PROJECTS.find((p) => p.id === id) || CARBON_PROJECTS[0];

  return (
    <div className="min-h-screen pt-20 bg-[#050816]">
      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        
        {/* LEFT: The "Command Center" Map/Visuals */}
        <div className="w-full lg:w-2/3 relative bg-black border-r border-white/10">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          
          {/* Overlay Grid & Scanning Effect */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <motion.div 
            animate={{ y: [0, 400, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1 bg-[#00FF88] shadow-[0_0_15px_#00FF88] opacity-50"
          />

          <div className="absolute bottom-8 left-8 glass-card p-4 font-mono text-[10px] space-y-1">
            <p className="text-[#00FF88]">SATELLITE: SENTINEL-2B</p>
            <p>LAT: 30.7333° N | LNG: 76.7794° E</p>
            <p>STATUS: CLOUD_FREE_SCAN_COMPLETE</p>
          </div>
        </div>

        {/* RIGHT: Technical Data & Purchase */}
        <div className="w-full lg:w-1/3 p-8 overflow-y-auto custom-scrollbar">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="px-3 py-1 border border-[#00D1FF] text-[#00D1FF] text-[10px] font-bold tracking-widest uppercase">
              {project.id}
            </span>
            <h1 className="text-4xl font-black mt-4 mb-2 uppercase italic leading-none">{project.name}</h1>
            <p className="text-gray-400 mb-8">{project.location}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-card p-4">
                <p className="text-[10px] text-gray-500 font-mono uppercase">Avg SOC Delta</p>
                <p className="text-xl font-bold text-[#00FF88]">+2.4%</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-[10px] text-gray-500 font-mono uppercase">Verification</p>
                <p className="text-xl font-bold text-[#00D1FF]">{project.rating}</p>
              </div>
            </div>

            <div className="space-y-6 mb-10">
                <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2">Technical Analysis</h3>
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "Analysis of multispectral bands B4, B8, and B11 confirms consistent biomass growth and soil health improvement via regenerative tilling practices."
                </p>
            </div>

            <div className="p-6 bg-[#00FF88] text-black rounded-sm">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-black text-xs tracking-tighter uppercase">Total Investment</span>
                    <span className="text-2xl font-black">${project.price}/ton</span>
                </div>
                <button className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all">
                    Initiate Smart Contract
                </button>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}