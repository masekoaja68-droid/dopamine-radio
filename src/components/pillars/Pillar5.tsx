import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  LineChart, 
  KanbanSquare, 
  DollarSign, 
  CheckCircle2, 
  Zap
} from 'lucide-react';

const mainFeatures = [
  {
    icon: ShieldCheck,
    title: 'Rights Checklist & Copyright Shield',
    headline: '"Jualan dan Rilis Lagu Tanpa Rasa Cemas Kena Pentung Hak Cipta (Copyright Strike)!"',
    desc: 'Takut lagu AI kena masalah hak cipta? Rights Checklist memindai kelayakan hukum karya Anda otomatis. Dapatkan kepastian status "Siap Dimonetisasi" sebelum rilis ke YouTube, Spotify, atau klien!',
    checklists: [
      'Validator Kelayakan Hukum',
      'Proteksi Imitasi Artis',
      'Penerbit Status "Siap Monetisasi"'
    ],
    benefit: 'Validator 4 pilar kelayakan hukum yang memindai lagu Anda dan <strong className="text-white">menerbitkan status badge (Siap Dimonetisasi, Perlu Diperbaiki, atau Hanya Personal).</strong>',
    emotion: 'Peace of Mind (Ketenangan Pikiran)'
  },
  {
    icon: LineChart,
    title: 'Multi-Channel Cuan Engine & Stock Submission Tracker',
    headline: '"Prinsip \'Buat Sekali, Cuan Berulang Kali\' di Berbagai Marketplace Musik Dunia."',
    desc: 'Satu karya, banyak sumber pemasukan! Cuan Hub memandu Anda mengunggah lagu ke berbagai marketplace stock audio (Pond5, AudioJungle, dll). Terapkan strategi "Buat Sekali, Jual Berkali-kali" secara global.',
    checklists: [
      'Channel Matcher AI',
      'Pelacak Upload ke Pond5/BeatStars',
      'Strategi Make Once Sell Everywhere'
    ],
    benefit: 'Modul kecerdasan yang merekomendasikan kanal monetisasi terbaik sesuai karakter lagu Anda, <strong className="text-white">dipadu dengan papan pelacak Multi-Kanal.</strong>',
    emotion: 'Berdaya & Skalabel'
  },
  {
    icon: KanbanSquare,
    title: 'Client CRM & Revenue Dashboard (dengan Efek AI MUSIK STUDIO Pulse)',
    headline: '"Kelola Pesanan Klien Bak Bisnis Musik Profesional dan Pantau Arus Kas Anda Real-Time!"',
    desc: 'Ubah hobi jadi Bisnis elit. Pantau pesanan klien via Kanban CRM, dan rasakan sensasi kepuasan (AI MUSIK STUDIO Hit) tiap kali melihat grafik Revenue Dashboard melonjak naik dari transaksi baru!',
    checklists: [
      'Papan Kanban B2B 4 Kolom',
      'Grafik Arus Kas Real-Time',
      'Indikator Visual AI MUSIK STUDIO Hit'
    ],
    benefit: 'Papan Kanban terstruktur untuk mengelola pesanan klien B2B, <strong className="text-white">terintegrasi dengan Revenue Dashboard berindikator visual pulse/glow.</strong>',
    emotion: 'Bangga & Sensasi AI MUSIK STUDIO'
  }
];

const secondaryFeatures = [
  {
    title: '1. Rights Checklist & Copyright Verifier',
    desc: 'Validator 4 variabel kelayakan hukum untuk memastikan lagu Anda aman dari klaim hak cipta dan siap dimonetisasi.'
  },
  {
    title: '2. Channel Matcher (Rekomendasi Kanal Cuan)',
    desc: 'Kuis analisis 2 pertanyaan yang langsung merekomendasikan 2–3 jalur monetisasi paling menguntungkan sesuai jenis lagu Anda.'
  },
  {
    title: '3. Gig Kit Generator (Fiverr/Upwork Ready)',
    desc: 'Pembuat otomatis etalase jualan jasa lagu custom untuk marketplace internasional, lengkap dengan 3 tingkatan paket harga ($25–$300).'
  },
  {
    title: '4. YouTube Package Generator',
    desc: 'Otomatis buatkan draf teks disclosure AI resmi, deskripsi video SEO-friendly, dan informasi proyeksi RPM kanal Anda.'
  },
  {
    title: '5. Stock Submission Tracker',
    desc: 'Papan manajemen pelacak pengiriman stok musik ke platform Pond5, AudioJungle, BeatStars, dan marketplace global lainnya.'
  },
  {
    title: '6. Client CRM (Papan Kanban 4 Kolom)',
    desc: 'Papan kelola pesanan lagu personal atau B2B agar proyek Anda rapi dari terima brief hingga diserahterimakan ke klien.'
  },
  {
    title: '7. Revenue Dashboard dengan Efek AI MUSIK STUDIO Pulse',
    desc: 'Pencatatan pendapatan terpadu dari berbagai kanal monetisasi dengan visualisasi grafik pertumbuhan finansial Anda.'
  }
];

export default function Pillar5() {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden" id="pillar-5">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <DollarSign className="w-4 h-4" /> PILAR 5: MONETIZATION HUB
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Jangan Biarkan Karya Mengendap di Laptop.<br/>
            <span className="text-green-500">Ubah Audio AI Jadi Aset Passive Income.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
          >
            <strong className="text-white">Sistem Navigasi Hukum dan Operasional Bisnis</strong> yang Memandu Anda Menerbitkan, Menjual, dan Memonetisasi Musik di YouTube, Marketplace Stock Audio Global, hingga Jasa B2B.
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
                className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden hover:border-green-500/30 transition-all duration-300 group flex flex-col h-full shadow-2xl"
              >
                <div className="p-8 flex-grow">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner group-hover:border-green-500/50 transition-colors">
                    <Icon className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-r-xl mb-6">
                    <p className="text-green-500 font-medium italic text-sm leading-relaxed">
                      {feature.headline}
                    </p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.checklists.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-zinc-300 text-sm font-medium leading-tight pt-0.5">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-start gap-3 pt-6 border-t border-white/5">
                      <Zap className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-bold text-sm mb-1">Manfaat Nyata:</span>
                        <span className="text-zinc-400 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.benefit }}></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 py-4 px-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Emosi Anda:</span>
                  <span className="text-sm text-green-500 font-bold">{feature.emotion}</span>
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
            <h3 className="text-2xl font-bold text-white mb-3">7 Fitur Pendukung Super (Engine Specs)</h3>
            <p className="text-zinc-400 text-sm">Menjamin infrastruktur operasional bisnis dan perlindungan hukum untuk aset digital Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {secondaryFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
