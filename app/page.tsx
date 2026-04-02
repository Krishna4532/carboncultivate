export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cyber-dark px-4">
      {/* Test the custom green color and tracking */}
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-white">
        CARBON<span className="text-cyber-green italic">CULTIVATE</span>
      </h1>
      
      <p className="mt-4 text-gray-500 font-mono text-sm uppercase tracking-[0.3em]">
        // Satellite dMRV Protocol v1.0
      </p>

      {/* Test the button styling */}
      <a 
        href="/dashboard" 
        className="mt-10 px-10 py-4 bg-cyber-green text-black font-black uppercase text-xs tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
      >
        Enter Dashboard
      </a>
    </main>
  );
}