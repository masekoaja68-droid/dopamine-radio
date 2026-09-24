import { motion } from 'motion/react';
import { Flame, Check, ShieldCheck, Crown, ShoppingCart, Radio, CheckCircle2, VolumeX } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 17,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#050505] pt-12 pb-20">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* BRAND & LICENSE */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="bg-yellow-500 p-1.5 rounded-lg">
              <Radio className="w-6 h-6 text-zinc-950" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-widest text-white">
              AI MUSIK <span className="text-yellow-500">STUDIO</span>
            </h2>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm md:text-lg font-bold text-white tracking-widest uppercase mb-6"
          >
            PENAWARAN SPESIAL LAUNCHING DIBUKA !
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-yellow-500/50 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 text-yellow-400 font-bold text-sm md:text-base shadow-[0_0_20px_rgba(234,179,8,0.2)]"
          >
            <Flame className="w-5 h-5 text-yellow-500" /> 
            PERHATIAN: KHUSUS PENCARI PELUANG ONLINE & KAUM REBAHAN PRODUKTIF
          </motion.div>
        </div>

        {/* HEADLINES */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.2] text-white mb-8"
          >
            Bagaimana Menyulap <span className="text-yellow-500">15 Menit Ketikan</span> di Layar Anda Menjadi <span className="text-red-500">Aset Audio Bernilai Jutaan Rupiah...</span> <br className="hidden md:block"/>Tanpa Menyentuh Satu Pun Alat Musik.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-yellow-500/5 border border-yellow-500/30 p-5 md:p-6 max-w-4xl mx-auto rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.05)] mb-6"
          >
            <p className="text-base md:text-lg text-zinc-200 font-medium leading-relaxed">
              <strong className="text-white">AI MUSIK STUDIO adalah Aplikasi Web (Software) siap pakai.</strong> Bukan sekadar prompt generator. Ini adalah <strong className="text-yellow-400">Sistem Bisnis Audio In-A-Box</strong>. Mulai dari merakit lagu AI kelas studio, manajemen order klien B2B, hingga panduan rilis Spotify: <strong className="text-white">Semuanya dalam satu dashboard browser Anda.</strong>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm bg-yellow-500/10 px-4 py-1.5 rounded-md"
          >
            <Crown className="w-4 h-4" /> Peluang Langka: Harga Early Bird Sebelum Launching Resmi!
          </motion.div>
        </div>

        {/* MOCKUP PLACEHOLDER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-zinc-900 group"
        >
          {/* Browser header simulation */}
          <div className="bg-zinc-950 px-4 py-3 border-b border-white/5 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <div className="ml-4 bg-zinc-900 px-3 py-1 rounded text-[10px] text-zinc-500 font-mono">app.aimusikstudio.com</div>
          </div>
          
          <div className="w-full aspect-video md:aspect-[16/9] relative bg-black group">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/5Cv6gKDLhn0?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=5Cv6gKDLhn0&controls=0&showinfo=0&rel=0`} 
              title="AI MUSIK STUDIO Teaser" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            {isMuted && (
              <div 
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 cursor-pointer hover:bg-black/40 transition-colors"
                onClick={() => setIsMuted(false)}
              >
                <div className="bg-black/70 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 border border-white/10 shadow-2xl transform transition-transform group-hover:scale-105">
                  <VolumeX className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm tracking-wide">TAP UNTUK MENYALAKAN SUARA</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* BENEFIT CHECKLIST (Merged) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-3 gap-y-6 gap-x-8 px-4 md:px-0">
            {[
              'Bypass Teori 10.000 Jam (Sistem Merakit Konsep Untuk Anda)',
              '100% Hak Lirik & Blueprint Milik Anda (Aman Digunakan)',
              'Sistem "Tinggal Contek" Untuk Closing Klien Lokal',
              'Aplikasi Web (Akses Dari Mana Saja, Setup Cepat)',
              'Pilihan Akses Fleksibel (1 Bulan, 6 Bulan, 1 Tahun)',
              'Lisensi Arsitektur Komersial (Bebas Jual Hasil Tanpa Batas)'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-200 text-sm font-bold leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA & PRICING */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white mb-2">Penawaran Spesial Launching <strong className="text-red-500 font-black">DISKON HINGGA 80%</strong></p>
          <div className="bg-red-500/10 border border-red-500/20 px-6 py-2 rounded-lg mb-6 inline-flex flex-col md:flex-row items-center gap-2">
            <span className="text-zinc-400 font-medium text-sm md:text-base">Harga Mulai Dari: <span className="line-through decoration-red-500 decoration-2 font-bold text-zinc-300">Rp 199.000</span></span>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="text-yellow-500 font-black text-lg md:text-xl tracking-wide">Hari Ini Mulai Rp 99.000!</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold mb-4 text-sm md:text-base bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20">
            <Flame className="w-5 h-5" /> Peluang Emas Ini Berakhir Setelah:
          </div>
          
          {/* Timer */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-8">
            {[
              { value: timeLeft.days, label: 'Hari' },
              { value: timeLeft.hours, label: 'Jam' },
              { value: timeLeft.minutes, label: 'Menit' },
              { value: timeLeft.seconds, label: 'Detik' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f0f0f0] text-zinc-950 px-4 py-3 rounded-xl text-center w-[70px] md:w-[80px] shadow-lg">
                <span className="block text-2xl md:text-3xl font-black font-mono leading-none mb-1">{String(item.value).padStart(2, '0')}</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>

          <a 
            href="#pricing"
            className="w-full max-w-lg flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-b from-orange-500 to-red-600 text-white font-black text-lg md:text-xl rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_8px_0_rgba(220,38,38,1)] hover:shadow-[0_4px_0_rgba(220,38,38,1)] hover:translate-y-1 mb-6 uppercase tracking-wide border border-orange-400"
          >
            <ShoppingCart className="w-6 h-6" />
            YA, BERIKAN SAYA AKSES INSTAN SEKARANG
          </a>
          
          <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-300 font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10 text-center">
            <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
            7 HARI GARANSI UANG KEMBALI 100% (Gagal Bikin Aset = Uang Kembali)
          </div>
        </motion.div>

      </div>
    </section>
  );
}
