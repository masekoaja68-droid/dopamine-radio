import { motion } from 'motion/react';
import { 
  MousePointerClick, 
  Cpu, 
  DollarSign 
} from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: '1. Produksi Arsitektur (Di AI MUSIK STUDIO)',
    desc: 'Anda pegang kendali layaknya Produser. Pilih template cuan, dan sistem otomatis merakit "Blueprint" musik komersial Anda (struktur, lirik, genre, metatag).',
  },
  {
    icon: Cpu,
    title: '2. Render Audio (Di Suno AI)',
    desc: 'Salin "Blueprint" ajaib ke Suno atau AI lain. Mesin AI kini bekerja murni sebagai eksekutor yang mematuhi instruksi presisi Anda tanpa cacat atau halusinasi.',
  },
  {
    icon: DollarSign,
    title: '3. Panen Profit Multi-Kanal',
    desc: 'Saat musisi lain repot mengatur kabel studio, Anda sudah siap mengirim MP3 final ke klien B2B atau YouTube untuk panen royalti pasif.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            WORK LESS, EARN MORE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight uppercase tracking-tight"
          >
            Alur Kerja <span className="text-yellow-500">Super Cepat</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 font-medium"
          >
            Sistem kami merangkum proses produksi berbulan-bulan menjadi 3 langkah presisi. Pekerjaan Anda hanyalah fokus pada kreativitas dan konsisten mendistribusikan asetnya.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-8 items-start mb-16">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900/80 border border-white/5 p-3 sm:p-5 md:p-8 rounded-2xl md:rounded-3xl hover:border-yellow-500/30 transition-all duration-300 relative group shadow-xl h-full flex flex-col"
              >
                {/* Connector line for desktop */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-white/10 z-0"></div>
                )}
                
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center shadow-inner mb-3 md:mb-6 relative z-10 group-hover:scale-110 transition-transform shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-sm md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight">{item.title}</h4>
                  <p className="text-[9px] sm:text-xs md:text-base text-zinc-400 leading-tight md:leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Punchy Conclusion Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-500/10 to-orange-600/5 border border-yellow-500/20 p-8 md:p-10 rounded-3xl text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden mb-12"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500"></div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Bangun <span className="text-yellow-500">Aset Digital Jangka Panjang</span></h3>
          <p className="text-zinc-300 font-medium text-lg leading-relaxed">
            Satu lagu komersial yang Anda rilis hari ini, berpotensi terus menghasilkan royalti Dolar dari YouTube, Spotify, atau Marketplace Audio hingga bertahun-tahun ke depan selama Anda rajin membangun katalog karya.
          </p>
        </motion.div>

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
      </div>
    </section>
  );
}
