import { motion } from 'motion/react';
import { 
  Music, 
  Settings, 
  Scissors, 
  DollarSign, 
  Rocket, 
  Briefcase, 
  GraduationCap,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

const pillars = [
  {
    icon: Music,
    title: 'Pilar 1: Core Song Architect Engine',
    desc: 'Ubah cerita biasa menjadi lirik puitis (Show, Don\'t Tell) dan atur dinamika arsitektur lagu komersial.',
  },
  {
    icon: Settings,
    title: 'Pilar 2: Smart Control & Sadar-Genre',
    desc: 'Pemilih genre yang otomatis mengunci pola birama, tempo, dan aransemen agar tidak meleset.',
  },
  {
    icon: Scissors,
    title: 'Pilar 3: Execution Engine (Anti-Bocor)',
    desc: 'Kamus Vokal 5-Dimensi dan perlindungan "Exclude" otomatis. Vokal lebih manusiawi, tanpa bug.',
  },
  {
    icon: Scissors,
    title: 'Pilar 4: Production Hub (Browser Studio)',
    desc: 'Rapikan audio, potong jeda kosong, buat Cover Art AI, dan susun metadata Rilis Otomatis di browser.',
  },
  {
    icon: DollarSign,
    title: 'Pilar 5: Monetization Hub (Cuan Engine)',
    desc: 'Navigasi hukum dan papan CRM B2B untuk memonetisasi musik di YouTube, Stock Audio, dan Jasa.',
  },
  {
    icon: Rocket,
    title: 'Pilar 6: Akselerator Cuan Pemula',
    desc: 'Demo Reel Portofolio Instan, Mode Pasar Lokal (IDR), dan Skrip Obrolan Klien Siap-Salin.',
  },
  {
    icon: GraduationCap,
    title: 'Pilar 7: Authority Builder (Sertifikasi)',
    desc: 'Mode Profesional Invoicing Kustom, Manajemen Persona Artis, dan Sertifikat Resmi "Song Architect".',
  }
];

export default function Introduction() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Text & Description */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-bold tracking-widest uppercase mb-4"
              >
                PERKENALKAN...
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight uppercase"
              >
                AI MUSIK STUDIO
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-yellow-500 font-bold leading-relaxed mb-8"
              >
                Semua orang bisa membuat lagu dengan AI, tapi 99% GAGAL mencetak uang darinya. Kami BUKAN generator prompt. Kami membangun Sistem Bisnis Audio In-A-Box yang memandu Anda mengubah file audio menjadi mesin cashflow.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 md:p-8 shadow-xl relative"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-500 rounded-l-2xl"></div>
              <div className="space-y-4">
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                  <strong className="text-white text-xl">AI MUSIK STUDIO</strong> adalah Mesin Bisnis Audio Digital yang dirancang untuk satu tujuan mutlak: <span className="text-yellow-400 font-bold bg-yellow-500/10 px-1 rounded">mencetak aset digital pencetak keuntungan tanpa henti.</span>
                </p>
                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed"><strong className="text-white">Tanpa Bakat Musik:</strong> Sistem cerdas merakit lirik dan melodi jadi lagu komersial dalam hitungan detik.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed"><strong className="text-white">Eksekusi Jalur Cuan:</strong> Jembatan langsung ke AdSense YouTube, royalti Stock Music, dan klien lokal.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed"><strong className="text-white">Set & Forget:</strong> Mesin passive income yang otomatis bekerja 24 jam sejak hari pertama.</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Mockup Image */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
                alt="AI MUSIK STUDIO App Interface" 
                loading="lazy"
                className="w-full h-auto aspect-square md:aspect-[4/3] lg:aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-zinc-950/90 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 shadow-xl w-[90%] md:w-auto justify-center">
                 <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                 <span className="text-white font-medium text-xs md:text-sm whitespace-nowrap text-ellipsis overflow-hidden">First-in-Market AI Music Business OS</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Urgency, Offer, Countdown, CTA, Guarantee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-b from-zinc-900 to-black border border-yellow-500/30 p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden w-full"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white mb-4 uppercase tracking-tight whitespace-normal md:whitespace-nowrap">
              Akses <span className="text-yellow-500">AI MUSIK STUDIO</span> Sekarang
            </h3>
            
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-8 max-w-4xl mx-auto font-medium whitespace-normal md:whitespace-nowrap">
              Ambil jalan pintas, hemat waktu & tenaga. <strong className="text-red-400">Harga Diskon HANGUS permanen dalam:</strong>
            </p>

            {/* Countdown */}
            <div className="flex justify-center gap-4 mb-10">
              {[
                { label: 'Jam', value: timeLeft.hours },
                { label: 'Menit', value: timeLeft.minutes },
                { label: 'Detik', value: timeLeft.seconds }
              ].map((time, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center shadow-inner mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-yellow-500 font-mono">
                      {time.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{time.label}</span>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <a 
              href="#pricing"
              className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black text-xl px-12 py-5 rounded-full uppercase tracking-wider transition-all shadow-[0_0_40px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_rgba(239,68,68,0.5)] hover:scale-105 flex items-center justify-center gap-3 mx-auto mb-8"
            >
              YA, KUNCI HARGA DISKON SAYA
              <ArrowRight className="w-6 h-6" />
            </a>

            {/* Guarantee */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span>100% Garansi Uang Kembali 7 Hari</span>
              </div>
              <span className="hidden sm:inline text-zinc-700">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span>Akses Instan & Aktivasi Cepat</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
