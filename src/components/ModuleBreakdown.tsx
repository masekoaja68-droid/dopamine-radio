import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const modules = [
  {
    id: '1',
    title: 'PILAR 1: Arsitektur Emosi & Lyric Coach',
    value: 'Rp 499.000',
    desc: 'Ubah ide mentah menjadi narasi emosional terstruktur. Jangan biarkan lagu Anda terdengar seperti buatan mesin yang datar.',
    features: ['Song Brief & Concept Generator', 'Emotional Architecture Wizard', 'Lyric Coach (Show Don\'t Tell)', 'Phonetic Lab & Hook Score'],
    image: 'https://images.unsplash.com/photo-1516280440502-0c9f13458b29?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'PILAR 2: Smart Control Sadar-Genre',
    value: 'Rp 399.000',
    desc: 'Satu set slider tidak cocok untuk semua genre. Kontrol beradaptasi secara musikal berdasarkan genre pilihan Anda.',
    features: ['Dual-Layer Master Control', 'Profil Kontrol Vokal Pop/Modern', 'Profil Kontrol Tradisional & Etnik', '4 Pilar Smart Slider (Jiwa, Release, Style, Vokal)'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'PILAR 3: AI Grammar v2.0 & Exclude System',
    value: 'Rp 449.000',
    desc: 'Mesin perakit arsitektur komersial presisi yang mencegah kebocoran kredit AI Anda akibat kesalahan generasi.',
    features: ['AI Audio Grammar Assembly', 'Kamus Vokal 5-Dimensi', 'Tag Instrumental Dinamis', 'Purpose-Based Exclude System'],
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'PILAR 4: Studio Pasca-Produksi Built-In',
    value: 'Rp 349.000',
    desc: 'Tidak perlu software DAW eksternal yang rumit. Rapikan dan sempurnakan karya Anda langsung di dalam browser.',
    features: ['Web Audio Player & Waveform Visualizer', 'Audio Quality Inspector', 'Trim & Fade Engine', 'Cover Art Prompt Cover Art & EPK Generator EPK Generator'],
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'PILAR 5: Cuan Hub & Monetization Engine',
    value: 'Rp 599.000',
    desc: 'Infrastruktur bisnis lengkap yang memandu Anda mengkomersialkan setiap karya ke berbagai saluran pendapatan.',
    features: ['Rights Checklist & Lisensi', 'Channel Matcher', 'YouTube Package Generator', 'Revenue Dashboard dengan AI MUSIK STUDIO Pulse'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'PILAR 6: Akselerator Cuan Pemula',
    value: 'Rp 299.000',
    desc: 'Frictionless Fast-Track monetisasi lokal. Hapus kebingungan pemula lewat fitur aksi cepat untuk pasar Indonesia.',
    features: ['Opportunity Radar', 'Demo Reel Generator 1-Klik', 'Mode Pasar Lokal Indonesia (IDR/QRIS)', 'Peta 30 Hari Cuan Pertama'],
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '7',
    title: 'PILAR 7: Modul Bisnis, Branding & Akademi',
    value: 'Rp 749.000',
    desc: 'Tingkatkan otoritas Anda dari sekadar pengguna AI menjadi Song Architect & Bisnis Bisnis Profesional bersertifikat.',
    features: ['Manajemen Identitas Artis', 'Katalog EPK Mini', 'Mode Profesional Invoicing Kustom & Invoice', 'Sertifikasi "Song Architect"'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function ModuleBreakdown() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ini Semua Yang Akan Anda Dapatkan
          </motion.h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Kami tidak menahan apapun. AI MUSIK STUDIO OS memberikan seluruh ekosistem bisnis audio AI untuk Anda dari A sampai Z.
          </p>
        </div>

        <div className="space-y-32">
          {modules.map((mod, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8 items-center"
            >
              {/* Massive Image Block */}
              <div className="w-full relative rounded-[2rem] overflow-hidden glass-panel border border-white/5 shadow-2xl group">
                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <img 
                  src={mod.image} 
                  alt={mod.title} 
                  loading="lazy"
                  className="w-full h-[350px] md:h-[500px] object-cover opacity-70 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Section Centered Below Image */}
              <div className="w-full max-w-4xl flex flex-col items-center text-center -mt-16 md:-mt-24 relative z-20">
                <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] w-full">
                  <h4 className="text-2xl md:text-3xl font-bold italic text-zinc-500 mb-6">
                    Seharga: <span className="line-through decoration-red-500/50">{mod.value}</span>
                  </h4>
                  <div className="inline-block px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
                    {`PILAR #${mod.id}`}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {mod.title.split(': ')[1]}
                  </h3>
                  <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                    {mod.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {mod.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-zinc-300 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-yellow-500/30 hover:bg-white/10 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                        <span className="leading-snug font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

