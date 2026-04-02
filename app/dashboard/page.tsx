"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Satellite, 
  ShieldCheck, 
  Map as MapIcon, 
  Activity, 
  Database, 
  History, 
  ChevronRight,
  TrendingUp 
} from "lucide-react";

// This MUST be "export default function"
export default function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

  const triggerVerification = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("http://localhost:8000/api/verify?lat=30.7333&lng=76.7794");
      const result = await response.json();
      setData(result);
      setHistory(prev => [{
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        credits: result.credits,
        status: "VERIFIED"
      }, ...prev].slice(0, 3)); 
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white p-6 font-sans">
      <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-black tracking-tighter uppercase">
            Farmer<span className="text-cyber-green italic">Portal</span>
          </h1>
          <div className="flex gap-4 mt-1">
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Node: CC-CHANDIGARH-01</span>
            <span className="text-[9px] font-mono text-cyber-green uppercase tracking-widest animate-pulse">● System_Online</span>
          </div>
        </div>
        <div className="px-4 py-2 glass-card flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyber-green shadow-[0_0_8px_#00FF88]"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">Secure Enclave Active</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <div className="glass-card p-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                <MapIcon size={14} className="text-cyber-green" /> Field_Scanning_Service
              </h2>
            </div>
            
            <div className="relative w-full h-96 bg-black/60 border border-white/5 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="scanner-line"></div>
              <div className="text-center z-20">
                <Satellite size={48} className={`mx-auto mb-4 ${loading ? 'animate-spin text-cyber-green' : 'text-gray-700'}`} />
                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                  {loading ? "Decrypting Orbital Data..." : "Satellite Link Stable"}
                </p>
              </div>
            </div>

            <button onClick={triggerVerification} disabled={loading} className="btn-cyber w-full mt-6 py-5 text-sm">
              {loading ? "Running dMRV Protocol..." : "Initialize Verification"}
            </button>
          </div>

          <div className="glass-card p-4">
            <h3 className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-500 mb-4">
              <History size={12} /> Recent_Activity_Log
            </h3>
            <div className="space-y-2">
              {history.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/5">
                  <span className="text-[10px] font-mono text-gray-400">{item.time}</span>
                  <span className="text-[10px] font-bold text-cyber-green">+{item.credits} CREDITS</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 min-h-[400px]">
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10 text-white">
              <Activity size={14} className="text-cyber-green" /> Realtime_Metrics
            </h2>
            {data && (
              <div className="space-y-12">
                <div>
                  <p className="text-[10px] font-mono text-cyber-green mb-1">// SOC_CONTENT</p>
                  <p className="text-6xl font-black text-white">{data.soc}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-cyber-blue mb-1">// ESTIMATED_CREDITS</p>
                  <p className="text-6xl font-black text-white">{data.credits}</p>
                </div>
              </div>
            )}
          </div>

          <Link href="/marketplace" className="block group cursor-pointer">
            <div className="glass-card p-6 bg-cyber-blue/5 border-cyber-blue/20 border-l-4 border-l-cyber-blue">
              <div className="flex justify-between items-center mb-4">
                <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyber-blue">
                  <TrendingUp size={14} /> Marketplace_Hub
                </h2>
                <ChevronRight size={14} className="text-gray-500 group-hover:text-cyber-blue transition-all" />
              </div>
              <p className="text-[10px] text-gray-400 font-mono">
                Click to access the secondary market and settle verified tCO2e.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}