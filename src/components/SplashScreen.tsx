import { useState, useEffect } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [phase, setPhase] = useState<"enter" | "logo" | "text" | "ready" | "exit">("enter");
  const [visibleChars, setVisibleChars] = useState(0);
  const companyName = "ATHARVA ENTERPRISE";

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 200);
    const t2 = setTimeout(() => setPhase("text"), 1400);
    const t3 = setTimeout(() => setPhase("ready"), 3600);
    const t4 = setTimeout(() => setPhase("exit"), 4200);
    const t5 = setTimeout(onFinish, 6200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onFinish]);

  useEffect(() => {
    if (phase === "text") {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setVisibleChars(i);
        if (i >= companyName.length) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: '#0a0a0f' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            background: 'hsl(16, 75%, 48%)',
            opacity: 0.2,
            left: `${10 + (i * 7.3) % 80}%`,
            top: `${15 + (i * 5.7) % 70}%`,
            animation: `splashFloat ${4 + (i % 3)}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}

      {/* HUD rings */}
      <div className={`absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] transition-all duration-1200 ${
        phase === "enter" ? "scale-0 opacity-0" : "scale-100 opacity-100"
      }`}>
        <div className="absolute inset-0 rounded-full border border-white/[0.03]" 
          style={{ animation: 'splashSpin 25s linear infinite' }} />
        <div className="absolute inset-6 rounded-full border border-white/[0.05] border-dashed" 
          style={{ animation: 'splashSpin 18s linear infinite reverse' }} />
      </div>

      {/* Corner brackets */}
      {['top-8 left-8', 'top-8 right-8 rotate-90', 'bottom-8 right-8 rotate-180', 'bottom-8 left-8 -rotate-90'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} transition-all duration-700 ${
          phase === "enter" ? "opacity-0 scale-50" : "opacity-30"
        }`} style={{ transitionDelay: `${i * 100}ms` }}>
          <div className="w-6 h-6 border-t border-l" style={{ borderColor: 'hsl(16, 75%, 48%, 0.4)' }} />
        </div>
      ))}

      {/* Main content */}
      <div className="relative text-center px-6">
        {/* Logo */}
        <div className={`transition-all duration-1000 ${
          phase === "enter" ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}>
          <img 
            src="/logowhite.png" 
            alt="Atharva Enterprise" 
            className="h-40 sm:h-52 md:h-64 lg:h-72 mx-auto"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(231,76,60,0.2))',
            }}
          />
        </div>

        {/* Character-by-character text */}
        <div className="mt-10 h-8 flex items-center justify-center">
          <div className="flex gap-[2px]">
            {companyName.split("").map((char, i) => (
              <span
                key={i}
                className="text-[11px] sm:text-sm tracking-[0.35em] font-mono transition-all duration-500"
                style={{
                  color: i < visibleChars ? 'rgba(255,255,255,0.6)' : 'transparent',
                  transform: i < visibleChars ? 'translateY(0)' : 'translateY(8px)',
                  transitionDelay: `${i * 30}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className={`mt-4 transition-all duration-700 ${
          phase === "ready" || phase === "exit" ? "opacity-60" : "opacity-0"
        }`}>
          <p className="text-[9px] sm:text-[10px] tracking-[0.5em] font-mono" style={{ color: 'hsl(16, 75%, 48%, 0.6)' }}>
            PREMIUM RAW MATERIALS
          </p>
        </div>

        {/* Loading bar */}
        <div className="mt-12 mx-auto w-48 h-[1px] overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div
            className={`h-full transition-all ease-out ${
              phase === "enter" ? "w-0 duration-0" : "w-full duration-[4800ms]"
            }`}
            style={{ background: 'linear-gradient(90deg, hsl(16, 75%, 38%), hsl(16, 75%, 48%), hsl(30, 80%, 55%))' }}
          />
        </div>

        {/* Status */}
        <p className={`mt-3 text-[8px] tracking-[0.3em] font-mono transition-all duration-500 ${
          phase === "enter" ? "opacity-0" : "opacity-20"
        }`} style={{ color: '#fff' }}>
          {phase === "logo" && "INITIALIZING..."}
          {phase === "text" && "LOADING MODULES..."}
          {phase === "ready" && "SYSTEM READY"}
          {phase === "exit" && "LAUNCHING..."}
        </p>
      </div>

      <style>{`
        @keyframes splashSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes splashFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-15px); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
