"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, Zap, DollarSign, BarChart3 } from 'lucide-react';

const MOCK_OFFERS = [
  { id: 1, buyer: "Global EcoCorp", price: "$24.50", volume: "500 tCO2e", status: "Verified" },
  { id: 2, buyer: "Azure Logistics", price: "$22.00", volume: "1,200 tCO2e", status: "Pending" },
  { id: 3, buyer: "GreenPort India", price: "$26.10", volume: "150 tCO2e", status: "Verified" },
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <Link href="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-all">
          <ArrowLeft size={24} className="text-cyber-green" />
        </Link>
        <h1 className="text-3xl font-black tracking-tighter uppercase italic">
          Credit<span className="text-cyber-blue">Market</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 border-cyber-blue/20">
          <p className="text-[10px] text-gray-500 font-mono uppercase">Global Avg Price</p>
          <p className="text-3xl font-black text-cyber-blue">$23.15</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-[10px] text-gray-500 font-mono uppercase">Active Buy Orders</p>
          <p className="text-3xl font-black">1,402</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-[10px] text-gray-500 font-mono uppercase">Your Tradable Credits</p>
          <p className="text-3xl font-black text-cyber-green">142.5</p>
        </div>
      </div>

      {/* Mock Listings */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
          <Zap size={14} className="text-cyber-blue" /> Live_Buy_Bids
        </h2>
        
        {MOCK_OFFERS.map((offer) => (
          <div key={offer.id} className="glass-card p-6 flex items-center justify-between hover:bg-white/5 transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-cyber-blue/10 rounded flex items-center justify-center">
                <Globe size={20} className="text-cyber-blue" />
              </div>
              <div>
                <h3 className="font-bold">{offer.buyer}</h3>
                <p className="text-[10px] font-mono text-gray-500 tracking-tighter">SECURE_SETTLEMENT_ENABLED</p>
              </div>
            </div>

            <div className="flex gap-12 items-center">
              <div className="text-right">
                <p className="text-[10px] font-mono text-gray-500">BID_PRICE</p>
                <p className="font-black text-cyber-green text-xl">{offer.price}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono text-gray-500">VOLUME</p>
                <p className="font-black text-white text-xl">{offer.volume}</p>
              </div>
              <button className="btn-cyber py-2 px-6 text-[10px]">Execute Sale</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}