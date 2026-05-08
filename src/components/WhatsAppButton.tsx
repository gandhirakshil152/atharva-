import { useState } from "react";

const NUMBERS = [
  { number: "916359255655", label: "Atharva Enterprise (Kapil Pandya)" },
];
const MESSAGE = "Hello! I'm interested in your raw materials. Please share details.";

const WhatsAppButton = () => {
  const [showNumbers, setShowNumbers] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Number options */}
      <div className={`absolute bottom-16 right-0 transition-all duration-300 ${showNumbers ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
        <div className="bg-background border border-border rounded-xl shadow-lg p-3 space-y-2 min-w-[200px]">
          {NUMBERS.map((n) => (
            <a
              key={n.number}
              href={`https://wa.me/${n.number}?text=${encodeURIComponent(MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-white">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.746 3.072 9.382L1.062 31.26l6.076-1.95a15.91 15.91 0 008.866 2.694C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.318 22.614c-.39 1.1-1.932 2.014-3.16 2.28-.84.18-1.938.322-5.632-1.21-4.726-1.956-7.768-6.748-8.004-7.06-.226-.312-1.9-2.532-1.9-4.83s1.2-3.428 1.628-3.898c.39-.428.924-.642 1.432-.642.174 0 .33.016.47.03.428.018.642.042.924.716.352.84 1.21 2.948 1.316 3.164.108.216.216.504.066.792-.14.296-.264.48-.48.738-.216.258-.454.576-.648.774-.216.216-.44.452-.19.886.252.434 1.118 1.846 2.402 2.99 1.65 1.472 3.042 1.928 3.474 2.144.432.216.684.18.936-.108.258-.296 1.098-1.278 1.39-1.716.288-.432.582-.36.978-.216.4.144 2.502 1.18 2.93 1.396.432.216.716.324.822.504.108.174.108 1.024-.282 2.126z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{n.label}</p>
                <p className="text-xs text-muted-foreground">+{n.number.slice(0,2)} {n.number.slice(2)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Main button */}
      <button
        onClick={() => setShowNumbers(!showNumbers)}
        aria-label="Chat on WhatsApp"
        className="relative"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.746 3.072 9.382L1.062 31.26l6.076-1.95a15.91 15.91 0 008.866 2.694C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.318 22.614c-.39 1.1-1.932 2.014-3.16 2.28-.84.18-1.938.322-5.632-1.21-4.726-1.956-7.768-6.748-8.004-7.06-.226-.312-1.9-2.532-1.9-4.83s1.2-3.428 1.628-3.898c.39-.428.924-.642 1.432-.642.174 0 .33.016.47.03.428.018.642.042.924.716.352.84 1.21 2.948 1.316 3.164.108.216.216.504.066.792-.14.296-.264.48-.48.738-.216.258-.454.576-.648.774-.216.216-.44.452-.19.886.252.434 1.118 1.846 2.402 2.99 1.65 1.472 3.042 1.928 3.474 2.144.432.216.684.18.936-.108.258-.296 1.098-1.278 1.39-1.716.288-.432.582-.36.978-.216.4.144 2.502 1.18 2.93 1.396.432.216.716.324.822.504.108.174.108 1.024-.282 2.126z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
