import { motion } from 'motion/react';
import { ShoppingCart, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CTASection({ title = "Terbatas! Akses AI MUSIK STUDIO OS Hemat JUTAAN Rupiah" }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 45,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 border-y border-white/5 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-gold opacity-[0.03]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
          {title}
        </h2>
        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-zinc-900 px-6 py-4 rounded-xl border border-yellow-500/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <span className="text-3xl md:text-4xl font-bold text-yellow-500 font-display">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-xs text-zinc-500 block uppercase mt-1 tracking-wider">Jam</span>
          </div>
          <div className="bg-zinc-900 px-6 py-4 rounded-xl border border-yellow-500/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <span className="text-3xl md:text-4xl font-bold text-yellow-500 font-display">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-xs text-zinc-500 block uppercase mt-1 tracking-wider">Menit</span>
          </div>
          <div className="bg-zinc-900 px-6 py-4 rounded-xl border border-yellow-500/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <span className="text-3xl md:text-4xl font-bold text-yellow-500 font-display">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-xs text-zinc-500 block uppercase mt-1 tracking-wider">Detik</span>
          </div>
        </div>
        <a href="#pricing" className="px-10 py-5 bg-gradient-gold text-zinc-950 font-bold text-xl rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(234,179,8,0.25)] mx-auto mb-6 w-full sm:w-auto inline-flex">
          <ShoppingCart className="w-6 h-6" />
          YA, KUNCI HARGA DISKON SAYA
        </a>
        <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm font-medium">
          <ShieldCheck className="w-5 h-5 text-green-400" />
          <span>7 Hari Garansi Uang Kembali 100%</span>
        </div>
      </div>
    </div>
  );
}
