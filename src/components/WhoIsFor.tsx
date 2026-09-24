import { motion } from 'motion/react';
import { 
  Users, 
  Briefcase, 
  Home, 
  Video, 
  Laptop,
  XOctagon
} from 'lucide-react';

const targets = [
  {
    icon: Briefcase,
    title: 'Pencari Pasif Income',
    desc: 'Anda yang ingin membangun pipa income kedua yang terus mengalirkan uang tanpa harus resign atau mengganggu jam kerja utama.'
  },
  {
    icon: Home,
    title: 'Pemburu Peluang Online',
    desc: 'Anda yang sudah lelah dijejali teori atau course mahal, dan kini hanya butuh mesin bisnis Plug & Play yang siap jalan.'
  },
  {
    icon: Video,
    title: 'Kaum Rebahan Produktif',
    desc: 'Anda yang sadar bahwa HP dan kuota internet harusnya bisa digunakan untuk mencetak uang dari rumah, bukan sekadar membuang waktu.'
  },
  {
    icon: Laptop,
    title: 'Freelancer & Kreator',
    desc: 'Anda yang ingin memiliki Tombol Dewa untuk memonopoli klien jasa jingle lokal tanpa harus capek belajar merakit musik.'
  }
];

const antiTargets = [
  "Pencari Tombol Ajaib 'Kaya Semalam' tanpa mau sedikit pun berusaha.",
  "Musisi Idealis yang sangat anti dan membenci penggunaan AI dalam seni.",
  "Orang yang malas menekan klik, membaca panduan, atau menyalin teks."
];

export default function WhoIsFor() {
  return (
    <section className="py-24 bg-[#030303] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <Users className="w-4 h-4" /> UNTUK SIAPA SISTEM INI?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Dirancang Khusus Bagi Anda yang <span className="text-yellow-500">Haus Akan Hasil Nyata</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 font-medium"
          >
            Bukan untuk musisi pro yang sudah nyaman dengan software rumit. Sistem ini untuk pemula yang ingin segera melihat profit nyata.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-24">
          {targets.map((target, idx) => {
            const Icon = target.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900/50 p-4 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-all duration-300 hover:bg-zinc-900/80 hover:-translate-y-2 group"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-black rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-white/10 group-hover:border-yellow-500/50 transition-colors shadow-inner">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-yellow-500" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3">{target.title}</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{target.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Anti-Targets: Pagar Pembatas */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full mb-4">
              <XOctagon className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Sistem Ini <span className="text-red-500 underline decoration-red-500/50 underline-offset-4">BUKAN</span> Untuk Anda Jika...</h3>
            <p className="text-zinc-400">Tolong tutup halaman ini dan jangan membeli jika Anda termasuk salah satu kriteria di bawah ini:</p>
          </div>
          
          <div className="space-y-4">
            {antiTargets.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-500 text-sm font-bold">X</span>
                </div>
                <p className="text-zinc-300 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
