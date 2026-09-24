import { motion } from 'motion/react';
import Pillar1 from './pillars/Pillar1';
import Pillar2 from './pillars/Pillar2';
import Pillar3 from './pillars/Pillar3';
import Pillar4 from './pillars/Pillar4';
import Pillar5 from './pillars/Pillar5';
import Pillar6 from './pillars/Pillar6';
import Pillar7 from './pillars/Pillar7';

export default function SevenPillars() {
  return (
    <>
      <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden" id="pillars-intro">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-bold tracking-widest uppercase mb-6"
            >
              MESIN PENCETAK ASET DIGITAL
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              7 Pilar Utama AI MUSIK STUDIO <span className="text-yellow-500">Menjadi Passive Income</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed"
            >
              Bukan sekadar tool AI. Ini adalah <strong className="text-white">Ekosistem Bisnis Siap Pakai</strong> yang memangkas waktu Anda, menjamin kualitas komersial, dan mengunci transaksi pertama Anda lebih cepat.
            </motion.p>
          </div>
        </div>
      </section>

      <Pillar1 />
      <Pillar2 />
      <Pillar3 />
      <Pillar4 />
      <Pillar5 />
      <Pillar6 />
      <Pillar7 />
      <section className="py-16 bg-[#020202] border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
           <a 
            href="#pricing"
            className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-yellow-500 text-black font-black text-lg rounded-xl hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(234,179,8,0.2)] uppercase tracking-wide"
          >
            LIHAT PAKET HARGA & DISKON
          </a>
        </motion.div>
      </section>
    </>
  );
}
