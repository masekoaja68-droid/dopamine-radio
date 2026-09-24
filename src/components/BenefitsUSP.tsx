import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp } from 'lucide-react';

const reasons = [
  {
    title: 'Mesin Pencetak Cashflow',
    desc: 'Bukan sekadar hobi, raup <strong className="text-white">royalti AdSense, Stock Music, & jasa B2B</strong> dari satu lagu.'
  },
  {
    title: 'Bypass Teori 10.000 Jam',
    desc: 'Tak perlu mahir bermusik. Hasilkan audio elit sekelas studio <strong className="text-white">dalam hitungan menit</strong>.'
  },
  {
    title: '100% Bebas Copyright',
    desc: 'Tidur nyenyak. Setiap karya dijamin <strong className="text-white">aman dengan lisensi komersial resmi</strong>.'
  },
  {
    title: 'Bisnis Plug & Play',
    desc: 'Fokus terima bayaran. Sistem CRM dan Invoice otomatis kami <strong className="text-white">yang urus birokrasinya</strong>.'
  },
  {
    title: 'Kerja Bebas Waktu & Tempat',
    desc: 'Cukup buka browser. Eksekusi pesanan bernilai tinggi <strong className="text-white">dari meja makan atau sambil rebahan</strong>.'
  },
  {
    title: 'Sistem All-in-One Terpusat',
    desc: 'Satu platform lengkap: dari produksi audio <strong className="text-white">hingga bimbingan monetisasi & rilis global</strong>.'
  }
];

const momentum = [
  'Ledakan AI Audio: Jutaan kreator butuh BGM aman hak cipta.',
  'Ekonomi Kreator: Peluang Make Money Online paling realistis.',
  'Permintaan B2B: Kebutuhan jingle & audio UMKM tinggi.',
  'Monetisasi Mudah: Pencairan profit jauh lebih instan.'
];

export default function BenefitsUSP() {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <TrendingUp className="w-4 h-4" /> MOMENTUM EMAS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            Mengapa Pasar <span className="text-yellow-500">Membayar Mahal</span> Untuk Ini?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-300 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Permintaan audio original sedang meledak. AI MUSIK STUDIO adalah senjata Anda meraup profit dari tren ini. Inilah 6 alasannya:
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-6">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-zinc-900/50 p-3 sm:p-6 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-colors shadow-lg group flex flex-col h-full"
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-base rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold shrink-0 sm:mt-0.5 border border-yellow-500/20 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-[12px] sm:text-lg font-bold text-white mb-1 sm:mb-2 leading-tight">{reason.title}</h4>
                    <p className="text-[10px] sm:text-sm text-zinc-400 leading-tight sm:leading-relaxed" dangerouslySetInnerHTML={{ __html: reason.desc }}></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#111] to-black p-8 rounded-3xl border border-yellow-500/30 shadow-[0_0_40px_rgba(234,179,8,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-[50px] pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-6">Jangan Ketinggalan Momentum</h3>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              Mulai hari ini, atau Anda hanya akan jadi penonton kesuksesan orang lain.
            </p>
            <ul className="space-y-6">
              {momentum.map((item, idx) => {
                const [bold, desc] = item.split(': ');
                return (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-1">{bold}</strong>
                      <span className="text-zinc-400 text-sm">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
