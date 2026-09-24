import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="w-32 h-32 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
        >
          <ShieldCheck className="w-16 h-16 text-green-500" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-wide font-display"
        >
          Garansi 100% Uang Kembali 7 Hari
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-2xl border border-green-500/20 bg-green-500/5 shadow-[0_0_40px_rgba(34,197,94,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-green-500 rounded-l-2xl"></div>
          <h3 className="text-2xl font-bold text-white mb-4">Uji Coba Bebas Risiko (Risk Reversal)</h3>
          <p className="text-lg text-zinc-300 mb-6 leading-relaxed font-medium">
            Risiko sepenuhnya ada di pundak kami. Uji sistem AI MUSIK STUDIO selama 7 hari. Jika Anda tidak berhasil membuat 1 pun aset audio yang layak jual atau merasa sistem ini tidak seperti yang dijanjikan, <strong className="text-green-400">kami akan mengembalikan uang Anda 100% tanpa ditanya (No Questions Asked).</strong>
          </p>
          <p className="text-sm text-zinc-400 font-bold uppercase tracking-wider">
            Anda hanya punya pilihan untuk UNTUNG atau UANG KEMBALI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
