import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Zap, Sparkles, Star } from 'lucide-react';

const valueStack = [
  { name: 'Core Song Architect Engine', value: 'Rp 499.000' },
  { name: 'Smart Control & Commercial Architecture', value: 'Rp 399.000' },
  { name: 'Browser Studio Pasca-Produksi', value: 'Rp 349.000' },
  { name: 'Cuan Hub & Monetization Engine', value: 'Rp 599.000' },
  { name: 'Automated Business & CRM', value: 'Rp 449.000' },
  { name: 'Akademi & Sertifikasi "Song Architect"', value: 'Rp 749.000' },
  { name: 'Akselerator Cuan Pemula (IDR/QRIS)', value: 'Rp 299.000' },
];

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]" id="pricing">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-yellow-500/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* VALUE STACK INTEGRATION */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            BERHENTI MEMBAKAR UANG UNTUK CARA LAMA
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
          >
            Total Nilai Sistem Yang Anda Dapatkan:
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-zinc-900/50 border border-yellow-500/20 p-6 md:p-8 rounded-3xl shadow-2xl mb-12 backdrop-blur-sm"
          >
             <ul className="space-y-4 text-left">
              {valueStack.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-zinc-300 font-medium text-base md:text-lg flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" />
                    {item.name}
                  </span>
                  <span className="text-zinc-500 line-through decoration-red-500/50 text-sm md:text-base font-mono">{item.value}</span>
                </li>
              ))}
             </ul>
             <div className="pt-6 mt-2 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-lg md:text-xl text-zinc-400 font-medium">Total Value Modul:</span>
                <span className="text-3xl md:text-4xl font-black text-white bg-red-500/20 px-6 py-2 rounded-xl border border-red-500/30 font-mono">
                  Rp 3.344.000
                </span>
             </div>
          </motion.div>
        </div>

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <ShieldCheck className="w-5 h-5" /> 100% ZERO RISK GUARANTEE
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            Pilih Paket Akses Anda Sekarang
          </motion.h2>
          
          <p className="text-base md:text-xl text-zinc-400 max-w-3xl mx-auto">
            Kunci harga diskon promo launching hari ini. Pilihan fleksibel sesuai kebutuhan Anda: 1 Bulan, 6 Bulan, atau 1 Tahun Penuh. Garansi Uang Kembali 7 Hari berlaku penuh!
          </p>
        </div>

        {/* 3 PRICING TIERS: 1 BULAN, 6 BULAN, 1 TAHUN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: 1 Bulan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="relative bg-[#111111] border border-white/10 hover:border-white/20 p-6 md:p-8 rounded-[2rem] text-center shadow-xl flex flex-col transition-all duration-300"
          >
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Eksplorasi / Uji Coba
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 font-serif tracking-wide mt-2">
              AKSES 1 BULAN
            </h3>
            <p className="text-zinc-500 mb-2 text-xs md:text-sm">
              Harga Normal: <span className="line-through decoration-red-900/70">Rp 199.000</span>
            </p>
            
            <div className="flex justify-center items-start gap-1 mb-3 mt-2">
              <span className="text-lg text-yellow-500 font-bold mt-2">Rp</span>
              <span className="text-5xl font-black text-white tracking-tighter">99</span>
              <span className="text-base text-yellow-500 font-bold mt-1">.000</span>
              <span className="text-xs text-zinc-500 self-end mb-2 ml-1">/ 30 Hari</span>
            </div>

            <div className="bg-zinc-900/90 border border-white/5 rounded-xl py-2 px-3 mb-6">
              <p className="text-[11px] text-zinc-400">
                Kupon Launching: <strong className="text-yellow-400 font-mono">BULANAN</strong>
              </p>
            </div>
            
            <ul className="space-y-3.5 mb-8 text-left flex-grow text-sm">
              <li className="flex items-center gap-3 text-white font-semibold bg-[#1a1a1a] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Akses Sistem 30 Hari Penuh</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <span><strong className="text-white">Web App AI MUSIK STUDIO</strong> (Sistem BYOK API Key)</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-300">5 Core Engine:</strong> Lyric, Emotion, Genre, Voice, Trace</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-300">Browser Studio:</strong> Trim, Fade, & Quality Inspector</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-300">Cover Art AI & Metadata:</strong> Siap Rilis Audio</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-300">Cuan Hub:</strong> 100% Hak Komersial Bebas Klaim</span>
              </li>
            </ul>
            
            <a 
              href="#order"
              className="block w-full py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm rounded-xl transition-all uppercase tracking-wider border border-white/10"
            >
              PILIH 1 BULAN
            </a>
            <p className="text-[11px] text-zinc-500 mt-3">Tanpa perpanjangan otomatis terselubung</p>
          </motion.div>

          {/* Card 2: 6 Bulan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-gradient-to-b from-[#161616] to-[#0e0e0e] border border-yellow-500/40 p-6 md:p-8 rounded-[2rem] text-center shadow-xl flex flex-col hover:border-yellow-500/60 transition-all duration-300"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-gradient-to-r from-amber-600 to-yellow-500 text-black font-extrabold text-[11px] rounded-full tracking-widest uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3 h-3 text-black" />
              PILIHAN POPULER
            </div>

            <div className="mb-2 mt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400/90 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                Kreator & Freelancer
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 font-serif tracking-wide mt-2">
              AKSES 6 BULAN
            </h3>
            <p className="text-zinc-500 mb-2 text-xs md:text-sm">
              Harga Normal: <span className="line-through decoration-red-900/70">Rp 699.000</span>
            </p>
            
            <div className="flex justify-center items-start gap-1 mb-1 mt-2">
              <span className="text-lg text-yellow-500 font-bold mt-2">Rp</span>
              <span className="text-5xl font-black text-white tracking-tighter">199</span>
              <span className="text-base text-yellow-500 font-bold mt-1">.000</span>
              <span className="text-xs text-zinc-500 self-end mb-2 ml-1">/ 6 Bulan</span>
            </div>
            <p className="text-[11px] text-green-400 font-semibold mb-3">
              Setara ~Rp 33.000 / bulan saja!
            </p>

            <div className="bg-[#1c1a12] border border-yellow-500/30 rounded-xl py-2 px-3 mb-6">
              <p className="text-[11px] text-zinc-300">
                Kupon Launching: <strong className="text-yellow-400 font-mono">HEMAT6</strong>
              </p>
            </div>
            
            <ul className="space-y-3.5 mb-8 text-left flex-grow text-sm">
              <li className="flex items-center gap-3 text-white font-semibold bg-yellow-500/10 p-2.5 rounded-xl border border-yellow-500/20">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>Akses Sistem 6 Bulan (180 Hari)</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <span>Termasuk <strong className="text-white">SEMUA Fitur Paket 1 Bulan</strong></span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <span><strong className="text-white">CRM & Revenue Dashboard:</strong> Kelola Order Klien B2B</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <span><strong className="text-white">Invoicing Kustom:</strong> Cetak Tagihan dengan Logo Sendiri</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <span><strong className="text-white">Demo Reel & Pasar Lokal:</strong> Format IDR & Etalase Cepat</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <span><strong className="text-white">50+ Blueprint Genre:</strong> Formula Musik Laris Teruji</span>
              </li>
            </ul>
            
            <a 
              href="#order"
              className="block w-full py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-sm rounded-xl transition-all uppercase tracking-wider shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20"
            >
              PILIH 6 BULAN
            </a>
            <p className="text-[11px] text-zinc-500 mt-3">Pilihan paling seimbang untuk bangun profit</p>
          </motion.div>

          {/* Card 3: 1 Tahun (Best Value) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative z-10"
          >
            <div className="absolute inset-0 bg-yellow-500/15 rounded-[2rem] blur-xl opacity-70" />
            <div className="relative bg-[#0b0b0b] border-2 border-yellow-500 p-6 md:p-8 rounded-[2rem] text-center shadow-[0_0_50px_rgba(234,179,8,0.15)] flex flex-col h-full">
              
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white rounded-full text-[11px] font-black tracking-widest uppercase shadow-lg border border-red-500/50 w-max z-20 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-white text-white" />
                BEST VALUE • PALING HEMAT
              </div>
              
              <div className="mb-2 mt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                  Hemat 80% • Bisnis Audio Pro
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-serif tracking-wide mt-2">
                AKSES 1 TAHUN
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm mb-2">
                Harga Normal: <span className="line-through decoration-red-800 font-medium">Rp 1.499.000</span>
              </p>
              
              <div className="flex justify-center items-start gap-1 mb-1 mt-2">
                <span className="text-lg text-yellow-500 font-bold mt-2">Rp</span>
                <span className="text-5xl font-black text-white tracking-tighter">299</span>
                <span className="text-base text-yellow-500 font-bold mt-1">.000</span>
                <span className="text-xs text-zinc-400 self-end mb-2 ml-1">/ 1 Tahun</span>
              </div>
              <p className="text-[11px] text-green-400 font-semibold mb-3">
                Cuma ~Rp 24.900 / bulan (Paling Murah!)
              </p>

              <div className="bg-[#121212] border border-yellow-500/30 rounded-xl py-2 px-3 mb-6 flex flex-col items-center">
                <p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-0.5">Kupon Promo Launching:</p>
                <div className="font-mono text-lg font-black text-yellow-500 tracking-widest">
                  TAHUNAN
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 text-left flex-grow text-sm">
                <li className="flex items-center gap-3 text-white font-bold bg-[#141414] p-2.5 rounded-xl border border-yellow-500/30">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Akses Penuh Selama 12 Bulan (365 Hari)</span>
                </li>
                <li className="flex items-start gap-2.5 text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Termasuk SEMUA Fitur AI MUSIK STUDIO Lengkap</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white">CRM & Revenue Dashboard:</strong> Multi-Klien & Manajemen Order</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Invoicing Kustom:</strong> Template Profesional Logo Sendiri</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Demo Reel & Script Chat:</strong> Bahan Closing Klien B2B Siap Pakai</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Multi-Persona & Sertifikat:</strong> Akademi Resmi "Song Architect"</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Prioritas Support & Update:</strong> Semua Fitur Baru Sepanjang Tahun</span>
                </li>
              </ul>
              
              <a 
                href="#order"
                className="block w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black text-sm rounded-xl transition-all shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] uppercase tracking-wider mb-4 border border-orange-400"
              >
                AMANKAN 1 TAHUN (BEST VALUE)
              </a>

              <div className="flex flex-col items-center gap-2 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-green-400 bg-green-950/20 px-3 py-1.5 rounded-full border border-green-900/40 w-full">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-bold">7 Hari Garansi Uang Kembali 100%</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-yellow-500/90 font-medium">
                  <Zap className="w-3 h-3 shrink-0" />
                  <span>Akses sistem langsung dikirimkan ke email Anda</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
