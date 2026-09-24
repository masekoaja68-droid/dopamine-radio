import { motion } from 'motion/react';
import { 
  Scissors, 
  Image as ImageIcon, 
  FileText, 
  PlayCircle, 
  CheckCircle2, 
  Zap
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Scissors,
    title: 'Browser Studio Audio (Trim, Fade & Quality Inspector)',
    headline: '"Edit dan Rapikan Audio Hasil AI Langsung di Browser, Tanpa Perlu Software DAW Rumit!"',
    desc: 'Lagu AI sering menyisakan jeda kosong atau mati mendadak di akhir? Lewat Browser Studio, langsung potong (trim) bagian tak perlu, tambahkan efek fade in/out mulus, dan periksa kualitas audio dalam hitungan detik. Tanpa instal software tambahan!',
    checklists: [
      'Potong Jeda Kosong Otomatis',
      'Pembuat Efek Fade In/Out',
      'Detektor Audio Pecah/Clipping'
    ],
    benefit: 'Studio penyunting audio built-in langsung di browser yang otomatis memvisualisasikan gelombang suara, mendeteksi puncak suara yang pecah, <strong className="text-white">serta memotong jeda hening berlebih.</strong>',
    emotion: 'Lega & Hemat Waktu'
  },
  {
    icon: ImageIcon,
    title: 'Prompt Cover Art Generator AI',
    headline: '"Bikin Sampul Album (Cover Art) yang Estetik dan Sesuai Nuansa Lagu Secara Otomatis."',
    desc: 'Audio bagus butuh visual memikat. Sistem otomatis menganalisis emosi lagu dan meracik prompt visual estetik. Dapatkan ide Cover Art siap pakai untuk Spotify, YouTube, atau portofolio jualan Anda seketika!',
    checklists: [
      'Analisis Emosi & Genre Lagu',
      'Rakitan Prompt Visual Estetik',
      'Standar Resolusi Album Spotify'
    ],
    benefit: 'Generator prompt gambar visual yang secara cerdas membaca nuansa emosi, genre, dan lirik lagu Anda, <strong className="text-white">lalu merakit instruksi prompt visual otomatis.</strong>',
    emotion: 'Bangga & Kreatif'
  },
  {
    icon: FileText,
    title: 'Release Asset Generator & Lembar Metadata Distributor',
    headline: '"Paket Rilis Lengkap: Dari Biografi Artis Sampai Lembar Metadata Siap Setor ke Spotify & DistroKid."',
    desc: 'Jangan biarkan mahakarya mengendap di laptop! Fitur ini menyusun draf biografi artis (EPK) dan lembar metadata rilis resmi otomatis. Tinggal salin-tempel ke TuneCore/DistroKid, lagu Anda siap mengudara secara profesional!',
    checklists: [
      'Pembuat Teks Biografi/EPK',
      'Penyusun Metadata Rilis Baku',
      'Format Siap Setor ke TuneCore'
    ],
    benefit: 'Pembuat otomatis draf Biografi Artis (EPK), deskripsi rilis resmi, dan <strong className="text-white">lembar rincian metadata berformat baku yang siap di-copy-paste</strong> ke distributor global.',
    emotion: 'Percaya Diri & Otoritas'
  }
];

const secondaryFeatures = [
  {
    title: '1. Web Audio Player & Waveform Visualizer',
    desc: 'Pemutar audio interaktif dengan tampilan grafik bentuk gelombang suara (waveform) real-time langsung di browser Anda.'
  },
  {
    title: '2. Audio Quality Inspector',
    desc: 'Pemindai otomatis yang memberi tahu Anda jika ada gelombang audio yang terlalu keras (clipping) atau ada jeda hening (silence) berlebih.'
  },
  {
    title: '3. Trim & Fade Engine',
    desc: 'Alat pemotong durasi lagu serta pengatur efek suara muncul perlahan (fade-in) atau mengecil perlahan (fade-out).'
  },
  {
    title: '4. Prompt Cover Art Generator',
    desc: 'Generator instruksi gambar AI otomatis berdasarkan tema dan mood lagu untuk pembuatan gambar sampul album.'
  },
  {
    title: '5. EPK & Bio Generator',
    desc: 'Pembuat draf teks Press Kit dan biografi panggung artis untuk memperkuat nilai branding karya Anda.'
  },
  {
    title: '6. Lembar Metadata Distributor',
    desc: 'Format ringkasan data lagu (judul, genre, kredit pencipta) yang siap di-copy-paste ke platform agregator rilis musik.'
  }
];

export default function Pillar4() {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden" id="pillar-4">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <PlayCircle className="w-4 h-4" /> PILAR 4: PRODUCTION HUB
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Jangan Berhenti di File Audio Mentah.<br/>
            <span className="text-yellow-500">Sulap jadi Paket Rilis Siap Cuan.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
          >
            Rapikan Audio, Potong Jeda Kosong, Buat Cover Art AI, dan Susun Metadata Rilis Otomatis <strong className="text-white">Tanpa Perlu Pusing Belajar Software Edit Audio yang Rumit.</strong>
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
                className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden hover:border-yellow-500/30 transition-all duration-300 group flex flex-col h-full shadow-2xl"
              >
                <div className="p-8 flex-grow">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner group-hover:border-yellow-500/50 transition-colors">
                    <Icon className="w-7 h-7 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-xl mb-6">
                    <p className="text-yellow-500 font-medium italic text-sm leading-relaxed">
                      {feature.headline}
                    </p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.checklists.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" />
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
                  <span className="text-sm text-yellow-500 font-bold">{feature.emotion}</span>
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
            <p className="text-zinc-400 text-sm">Menyiapkan aset karya Anda dari sekadar file audio mentah menjadi produk rilis utuh.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {secondaryFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
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
