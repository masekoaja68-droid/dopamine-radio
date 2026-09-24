import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Penyusunan Arsitektur Emosi Lagu',
    biasa: 'Tidak Ada',
    dopamine: '100% Terstruktur (Wizard)',
  },
  {
    feature: 'Penyuntingan Lirik (Lyric Coach)',
    biasa: 'Teks Generik Kaku',
    dopamine: 'Auto-Transform (Show Don\'t Tell)',
  },
  {
    feature: 'Adaptasi Kontrol Musik Sadar-Genre',
    biasa: 'Slider Kaku Sama Semua',
    dopamine: '6 Profil Dynamic Smart Slider',
  },
  {
    feature: 'AI Grammar & Exclude Protection',
    biasa: 'Sering Bocor / Bug',
    dopamine: 'Tagging Engine & Mandatory Exclude',
  },
  {
    feature: 'Studio Audio & Pasca-Produksi',
    biasa: 'Harus Pakai DAW Eksternal',
    dopamine: 'Built-in Browser Waveform & Trim',
  },
  {
    feature: 'Fitur Monetisasi & Bisnis Bisnis',
    biasa: 'Nol (Tidak Ada)',
    dopamine: 'Cuan Hub + Mode Pasar Lokal IDR',
  }
];

export default function Comparison() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Mengapa <span className="text-gradient-gold">AI MUSIK STUDIO</span> Tidak Tertandingi?
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl overflow-hidden border border-white/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 text-sm md:text-base font-semibold text-zinc-300 w-1/3">Fitur / Kemampuan</th>
                  <th className="p-6 text-sm md:text-base font-semibold text-zinc-400 w-1/3">Prompt Generator Biasa</th>
                  <th className="p-6 text-sm md:text-base font-bold text-yellow-400 w-1/3 bg-yellow-500/5">AI MUSIK STUDIO OS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-sm md:text-base text-zinc-300 font-medium">{row.feature}</td>
                    <td className="p-6 text-sm md:text-base text-zinc-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{row.biasa}</span>
                      </div>
                    </td>
                    <td className="p-6 text-sm md:text-base text-white bg-yellow-500/5">
                      <div className="flex items-center gap-2 font-medium">
                        <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                        <span>{row.dopamine}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
