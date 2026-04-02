"use client";
import { useEffect, useState } from "react";

export default function ImpactCounter() {
  const [tons, setTons] = useState(1240500);

  useEffect(() => {
    const interval = setInterval(() => {
      setTons(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-12 text-center my-20">
      <h3 className="text-gray-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">Total CO2 Sequestration Verified</h3>
      <div className="text-6xl md:text-8xl font-black text-[#00FF88] tracking-tighter tabular-nums">
        {tons.toLocaleString()}
        <span className="text-2xl text-white ml-4 uppercase tracking-normal">Metric Tons</span>
      </div>
      <div className="mt-8 flex justify-center gap-10 text-[10px] font-bold text-gray-600 tracking-widest uppercase">
        <p>// 12,402 ACTIVE FIELDS</p>
        <p>// 98.2% SATELLITE ACCURACY</p>
        <p>// $4.2M FARMER EARNINGS</p>
      </div>
    </div>
  );
}