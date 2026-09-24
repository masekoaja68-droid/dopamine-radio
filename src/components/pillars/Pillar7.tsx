import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Award, 
  CheckCircle2, 
  Zap
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Briefcase,
    title: 'Mode Profesional & Invoicing Invoicing Kustom',
    headline: '"Cetak Invoice Resmi dan Ekspor Dokumen Pakai Logo Bisnis Anda Sendiri, Tampil Melejit di Mata Klien!"',
    desc: 'Tawarkan jasa ke brand lokal dengan standar tinggi. Mode Profesional memungkinkan Anda mengelola multi-klien, dan mengekspor Invoice/Lirik berlogo bisnis Anda sendiri (Invoicing Kustom). Tampil elit, bukan amatir!',
    benefit: <>Pengelompokan proyek berdasarkan sub-akun klien terpisah, <strong className="text-white">ekspor dokumen lirik/brief Invoicing Kustom dengan logo dan nama bisnis Anda sendiri (tanpa watermark)</strong>, serta pembuat lembar tagihan (invoice) resmi otomatis dari CRM.</>,
    emotion: 'Bangga, Percaya Diri, & Otoritas Tinggi'
  },
  {
    icon: GraduationCap,
    title: 'Akademi "Song Architect" & Sertifikat Digital Keahlian',
    headline: '"Klaim Sertifikat Keahlian \'Song Architect\' dan Tunjukkan Bukti Kompetensi Anda ke Calon Klien!"',
    desc: 'Buktikan Anda bukan sekadar pengetik prompt acak! Lulus 6 modul singkat dan dapatkan Sertifikat "Song Architect". Pajang di LinkedIn atau etalase jualan sebagai bukti validitas keahlian Anda!',
    benefit: <>6 Modul edukasi terstruktur (dari anatomi lagu hingga prompt engineering) <strong className="text-white">yang diakhiri kuis interaktif dan penerbitan Sertifikat Keahlian Digital resmi.</strong></>,
    emotion: 'Validasi Sosial & Kredibilitas (Pride)'
  },
  {
    icon: Users,
    title: 'Manajemen Identitas Artis & Katalog EPK Mini',
    headline: '"Kelola Banyak Persona Artis Virtual dan Pamerkan Katalog Musik Anda bak Label Rekaman!"',
    desc: 'Satu akun, banyak gaya! Pisahkan portofolio Lo-Fi, Pop, atau EDM dengan Wizard Identitas Artis. Buat persona panggung lengkap dengan biografi dan EPK Mini. Anda adalah label rekaman Anda sendiri!',
    benefit: <>Wizard pengelolaan multi-persona panggung artis virtual lengkap dengan <strong className="text-white">biografi, sonic signature, dan halaman etalase portofolio mini (EPK) per persona</strong> yang siap dibagikan ke platform atau calon pembeli.</>,
    emotion: 'Pemilik Aset (Ownership) & Skalabilitas'
  }
];

const secondaryFeatures = [
  {
    title: '1. Manajemen Identitas Artis:',
    desc: 'Setup multi-persona panggung, sonic signature, dan katalog lagu terpisah untuk setiap merek musik Anda.'
  },
  {
    title: '2. Katalog EPK Mini:',
    desc: 'Tampilan etalase mini portofolio lagu per persona artis yang siap dibagikan ke platform rilis atau klien.'
  },
  {
    title: '3. Mesin Intelijen "Apa yang Berhasil":',
    desc: 'Analisis data internal yang memetakan kombinasi genre dan mood paling menguntungkan bagi bisnis Anda.'
  },
  {
    title: '4. Mode Profesional & Multi-Klien:',
    desc: 'Pengelompokan proyek per klien dan ekspor dokumen Invoicing Kustom bersih tanpa identitas pihak ketiga.'
  },
  {
    title: '5. Generator Invoice Bisnis:',
    desc: 'Pembuat lembar tagihan resmi otomatis yang terhubung langsung dengan catatan di Client CRM Anda.'
  },
  {
    title: '6. Akademi "Song Architect":',
    desc: '6 Modul pembelajaran terstruktur, kuis interaktif, dan pencetakan Sertifikat Digital Keahlian Resmi.'
  }
];

export default function Pillar7() {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden" id="pillar-7">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <Award className="w-4 h-4" /> PILAR 7: AUTHORITY BUILDER
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Stop Dianggap "Spammer AI Murahan". Naik Kelas Jadi Pemilik Bisnis Musik Digital <span className="text-purple-500">Ber-Sertifikat Resmi!</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
          >
            Kelola Banyak Klien Secara Rapi, <strong className="text-white">Cetak Tagihan Invoicing Kustom Pakai Logo Bisnis Anda Sendiri, dan Klaim Sertifikat Keahlian Resmi</strong> untuk Memikat Klien Berbayar Tinggi.
          </motion.p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {mainFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-300 group flex flex-col h-full shadow-2xl"
              >
                <div className="p-8 flex-grow">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner group-hover:border-purple-500/50 transition-colors">
                    <Icon className="w-7 h-7 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <div className="bg-purple-500/10 border-l-4 border-purple-500 p-4 rounded-r-xl mb-6">
                    <p className="text-purple-500 font-medium italic text-sm leading-relaxed">
                      {feature.headline}
                    </p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-start gap-3 pt-6 border-t border-white/5">
                      <Zap className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-bold text-sm mb-1">Manfaat Nyata:</span>
                        <span className="text-zinc-400 text-xs leading-relaxed">{feature.benefit}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 py-4 px-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Emosi Anda:</span>
                  <span className="text-sm text-purple-500 font-bold">{feature.emotion}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">6 Fitur Pendukung Super (Engine Specs)</h3>
            <p className="text-zinc-400 text-sm">Infrastruktur lengkap untuk membangun kredibilitas Bisnis dan label rekaman Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
