import { motion } from 'motion/react';
import { 
  Rocket, 
  MapPin, 
  MessageSquare, 
  FastForward, 
  CheckCircle2, 
  Zap
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Rocket,
    title: '🚀 Demo Reel Generator 1-Klik (Portofolio Instan Hari Ke-1)',
    headline: '"Punya Portofolio Audio Profesional di Hari Pertama Tanpa Perlu Menunggu Berbulan-bulan!"',
    desc: 'Belum punya portofolio? Tekan "Demo Reel Generator" dan sistem akan langsung membuat 5 sampel audio profesional lintas genre. Punya etalase karya siap pajang di hari pertama bergabung!',
    checklists: [
      'Buat 5 Klip Audio Otomatis',
      'Portofolio Lintas Genre',
      'Etalase Siap Pajang Hari Ke-1'
    ],
    benefit: 'Satu tombol yang secara otomatis membuatkan 5 klip portofolio audio pendek. <strong className="text-white">Anda tidak perlu lagi ragu atau menunda jualan hanya karena "belum punya contoh karya".</strong>',
    emotion: 'Percaya Diri & Siap Aksi'
  },
  {
    icon: MapPin,
    title: '🇮🇩 Mode Pasar Lokal Indonesia (Jualan Ramah Tanpa Friksi)',
    headline: '"Aktifkan Mode Pasar Lokal: Jualan Jasa Musik Langsung Pakai Rupiah dan Pembayaran Digital!"',
    desc: 'Targetkan klien Indonesia tanpa hambatan! Mode Pasar Lokal otomatis mengubah format ke Rupiah (IDR), menyusun materi promo lokal, dan alur pembayaran digital yang akrab. Jualan jadi super mudah!',
    checklists: [
      'Patokan Harga Rupiah (IDR)',
      'Alur Transaksi Domestik',
      'Bebas Urusan Bahasa Asing'
    ],
    benefit: 'Toggle sekali klik yang menyesuaikan seluruh format penawaran, <strong className="text-white">patokan harga Rupiah (IDR), dan alur transaksi lokal yang ramah tanpa perlu pusing.</strong>',
    emotion: 'Lega & Mudah (Frictionless)'
  },
  {
    icon: MessageSquare,
    title: '💬 Kit Tanya-Jawab Klien (Client Objection Kit Siap-Salin)',
    headline: '"Tinggal Copy-Paste! Balas Pertanyaan Calon Klien dengan Percaya Diri Tanpa Canggung."',
    desc: 'Bingung jawab klien soal lisensi dan harga? Client Objection Kit berisi draf jawaban siap-salin (copy-paste) untuk pertanyaan tersulit. Tetap tampil responsif, meyakinkan, dan profesional!',
    checklists: [
      'Bank Jawaban Terstruktur',
      'Skrip Hadapi Pertanyaan Sulit',
      'Nada Percaya Diri & Jujur'
    ],
    benefit: 'Bank jawaban terstruktur untuk mengatasi pertanyaan paling sering calon pembeli ("Ini pakai AI ya?", "Bisa revisi?") <strong className="text-white">yang ditulis dengan nada percaya diri dan jujur.</strong>',
    emotion: 'Tenang & Berdaya'
  }
];

const secondaryFeatures = [
  {
    title: '1. Opportunity Radar (Peluang Cepat Musiman)',
    desc: 'Kalender momentum musiman (Hari Ibu, Musim Wisuda, Wedding Season) yang memberi tahu Anda apa yang paling laku dijual minggu ini.'
  },
  {
    title: '2. Peta 30 Hari Cuan Pertama',
    desc: 'Checklist interaktif 5 fase (Fondasi → Etalase → Promosi → Transaksi Pertama → Evaluasi) yang memandu langkah harian Anda.'
  },
  {
    title: '3. Generator Konten Promosi',
    desc: 'Draf caption otomatis dalam 3 tone (Santai, Emosional, Profesional) dan format ide konten Before/After untuk sosial media Anda.'
  },
  {
    title: '4. Mesin Repeat & Referral',
    desc: 'Pengingat otomatis anniversary 11 bulan untuk pesanan momen khusus dan template diskon referral untuk mengubah pembeli lama menjadi langganan.'
  }
];

export default function Pillar6() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden" id="pillar-6">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <FastForward className="w-4 h-4" /> PILAR 6: AKSELERATOR CUAN PEMULA (FRICTIONLESS FAST-TRACK)
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Nol Portofolio dan Bingung Cara Jualan? Dapatkan Transaksi Pertama Anda <span className="text-orange-500">Tanpa Perlu Pengalaman Bisnis!</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
          >
            Akselerator Fast-Track yang <strong className="text-white">Menyediakan Portofolio Instan, Peta Jalan 30 Hari, hingga Skrip Obrolan Klien Siap-Salin.</strong>
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
                className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-300 group flex flex-col h-full shadow-2xl"
              >
                <div className="p-8 flex-grow">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner group-hover:border-orange-500/50 transition-colors">
                    <Icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r-xl mb-6">
                    <p className="text-orange-500 font-medium italic text-sm leading-relaxed">
                      {feature.headline}
                    </p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.checklists.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                        <span className="text-zinc-300 text-sm font-medium leading-tight pt-0.5">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-start gap-3 pt-6 border-t border-white/5">
                      <Zap className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-bold text-sm mb-1">Manfaat Nyata:</span>
                        <span className="text-zinc-400 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.benefit }}></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 py-4 px-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Emosi Anda:</span>
                  <span className="text-sm text-orange-500 font-bold">{feature.emotion}</span>
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
            <h3 className="text-2xl font-bold text-white mb-3">4 Fitur Pendukung Super (Engine Specs)</h3>
            <p className="text-zinc-400 text-sm">Alat bantu siap pakai untuk menunjang aktivitas jualan Anda dari hari pertama hingga pesanan repeat order.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {secondaryFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
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
