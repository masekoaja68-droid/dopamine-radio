import { motion } from 'motion/react';
import { 
  Settings, 
  Globe, 
  LockOpen, 
  SlidersHorizontal, 
  CheckCircle2, 
  Zap,
  Music,
  Disc3,
  Radio
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Globe,
    title: 'Profil Kontrol Tradisional & Etnik',
    headline: '"Musik Etnik & Nusantara yang Benar-Benar Otentik, Bukan Tangga Nada Pop yang Dipaksa!"',
    desc: 'AI generik sering merusak harmoni musik Etnik. Di sini, saat Anda pilih genre tradisional, sistem otomatis menyajikan Selector Skala Nada Otentik (Pelog, Slendro, Maqam). Hasilnya? 100% otentik, bernyawa, dan berkelas!',
    image: 'https://dopfs.com/wp-content/uploads/2026/08/Profil-Kontrol-Tradisional-Etnik.jpg',
    checklists: [
      'Selector Skala Nada Otentik (Pelog/Slendro)',
      'Tanpa Paksaan Tangga Nada Pop Barat',
      'Menjaga Keaslian Bunyi Kultural'
    ],
    benefit: 'AI tidak akan pernah memaksa tangga nada pop Barat ke dalam instrumen etnik, <strong className="text-white">menjaga keaslian bunyi kultural karya Anda.</strong>',
    emotion: 'Bangga & Otentik'
  },
  {
    icon: LockOpen,
    title: 'Dual-Layer Master Control',
    headline: '"Serahkan ke AI dengan Satu Klik, atau Pegang Kendali Manual Sesuai Selera Anda."',
    desc: 'Bingung atur teknis audio? Gunakan "Mode Otomatis". Ingin kustomisasi spesifik? Cukup buka ikon gembok di slider (misal: Kekuatan Hook), dan biarkan sisa teknisnya diurus AI. Cerdas, fleksibel, dan super praktis!',
    image: 'https://dopfs.com/wp-content/uploads/2026/08/Dual-Layer-Master-Control.jpg',
    checklists: [
      'Mode Pasrah 1-Klik (Auto-Suggest)',
      'Sistem Pengunci Gembok per-Slider',
      'Bypass AI untuk Kontrol Manual Profesional'
    ],
    benefit: 'Pemula bisa membiarkan slider terkunci (auto-suggest), sementara <strong className="text-white">kreator berpengalaman bisa membuka gembok slider mana pun</strong> yang ingin diatur manual.',
    emotion: 'Lega & Kontrol Penuh'
  },
  {
    icon: SlidersHorizontal,
    title: '4 Pilar Kualitas sebagai Smart Slider Taktil',
    headline: '"Geser Slider Emosi & Karakter Vokal Sesuka Hati Tanpa Takut Merusak Nuansa Lagu."',
    desc: 'Mau vokal mentah organik atau bersih ala studio rekaman? Cukup geser slider 4 Pilar Kualitas. Sistem otomatis meracik instruksi vokal dan dinamika emosi sesuai karakter genre lagu Anda!',
    image: 'https://dopfs.com/wp-content/uploads/2026/08/4-Pilar-Kualitas-sebagai-Smart-Slider-Taktil.jpg',
    checklists: [
      'Slider Jiwa, Release, Style & Hook, Vokal',
      'Otomatis Beradaptasi dengan Genre',
      'Batas Pengaman Anti-Liar'
    ],
    benefit: 'Slider taktil yang otomatis beradaptasi dengan genre dan <strong className="text-white">memiliki batas pengaman</strong> (misalnya lagu anak dikunci agar tidak bisa diset liar atau gelap).',
    emotion: 'Tenang & Puas'
  }
];

const secondaryFeatures = [
  {
    title: '1. Dual-Layer Master Control Engine',
    desc: 'Master toggle "Mode Otomatis vs Lanjutan" dengan ikon gembok per-slider untuk menjaga aplikasi tetap ramah pemula namun bertenaga bagi profesional.'
  },
  {
    title: '2. Profil Kontrol Vokal Pop / Modern (27 Jenis Musik)',
    desc: 'Slider khusus genre Pop, Rock, Dangdut, K-Pop, Hip-Hop dengan rentang BPM (60–160), Register Vokal, dan Pengatur Kekuatan Hook Chorus.'
  },
  {
    title: '3. Profil Kontrol Instrumental & Fungsional (6 Jenis Musik)',
    desc: 'Slider adaptif untuk Lo-Fi, Ambient, dan BGM YouTube yang berfokus pada pengaturan Tekstur Latar, Ruang Kosong (space), dan Motif Berulang.'
  },
  {
    title: '4. Profil Kontrol Klasik & Orkestral',
    desc: 'Slider dengan istilah tempo klasik otentik (Largo hingga Presto), pengatur Leitmotif (Tema Utama), dan Selector Seksi Orkestra Dominan (Strings/Brass/Woodwinds).'
  },
  {
    title: '5. Profil Kontrol Tradisional & Etnik Dunia',
    desc: 'Pengatur pola siklikal (colotomic) dan instrumen pemimpin daerah (Gamelan, Keroncong, Timur Tengah, India) tanpa paksaan tangga nada Barat.'
  },
  {
    title: '6. Profil Kontrol EDM & Dance',
    desc: 'Slider khusus pengatur intensitas Build-Drop, kedalaman Sub-bass, dan warna Lead Synth untuk menjamin ledakan energi lagu.'
  },
  {
    title: '7. Profil Kontrol Anak & Keluarga (Safety Locked)',
    desc: 'Sistem proteksi bawaan yang membatasi BPM (70–130), mengunci Skala Mayor, serta menutup rentang slider emosi kelam agar lagu selalu ceria dan ramah anak.'
  },
  {
    title: '8. Integrated 4-Pilar Dynamic Sliders',
    desc: 'Pengatur taktil Jiwa, Release, Hook, dan Vokal yang terhubung langsung ke Lyric Coach dan Structural Tagging Engine.'
  }
];

const genreTaxonomy = [
  { group: "Populer Global", genres: ["Pop", "Rock", "Indie", "Metal", "Punk", "Folk", "Country", "Blues", "Jazz", "Soul / R&B", "Hip-Hop", "EDM", "Reggae", "Disco", "Latin", "Gospel"] },
  { group: "Instrumental & Konten", genres: ["Instrumental Solo", "Cinematic / Score", "Ambient / Chill", "Klasik / Orkestral", "New Age / Meditasi"] },
  { group: "Musik Indonesia", genres: ["Pop Indo", "Dangdut", "Keroncong", "Campursari", "Indie/Folk Indo", "Melayu", "Religi/Islami", "Gamelan / Daerah", "Hip-Hop Indo", "Rock/Metal Indo"] },
  { group: "Musik Asia & Dunia", genres: ["K-Pop", "J-Pop", "C-Pop", "Musik India", "Musik Thailand", "Afrobeat", "Timur Tengah", "Eropa Etnik", "Karibia"] },
  { group: "Niche & Retro", genres: ["Retro / Nostalgia", "Musik Anak & Keluarga", "Avant-Garde", "Retro-Tech (8-bit)"] }
];

export default function Pillar2() {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden" id="pillar-2">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
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
            <Settings className="w-4 h-4" /> PILAR 2: SMART CONTROL & SADAR-GENRE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Beda Genre, Beda Perlakuan Khusus.<br/>
            <span className="text-yellow-500">Kontrol Presisi dari EDM, Lo-Fi, Hingga Etnik.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
          >
            Kendalikan Parameter Musik <strong className="text-yellow-500">Secara Presisi Tanpa Ribet</strong>. Sistem Cerdas Kami <strong className="text-white">Otomatis Menyesuaikan Slider-nya</strong> Sesuai Genre yang Anda Pilih.
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
                  
                  {feature.image && (
                    <div className="mb-6 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  )}
                  
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

        {/* Database Genre Terlengkap Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Database Genre Terlengkap: <span className="text-yellow-500">45+ Jenis, 280+ Sub-Aliran</span>
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Dikelompokkan dalam <strong className="text-white">6 Profil Kontrol Sadar-Genre</strong>. Dari Lo-Fi YouTube, Dangdut UMKM, hingga Cinematic Orchestra—sistem siap meraciknya akurat sesuai kebutuhan pasar Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genreTaxonomy.map((category, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-white/10">
                    <Disc3 className="w-5 h-5 text-zinc-400" />
                  </div>
                  <h4 className="text-white font-bold">{category.group}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.genres.map((genre, gIdx) => (
                    <span key={gIdx} className="inline-block px-3 py-1 bg-black border border-white/5 rounded-md text-xs font-medium text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/30 transition-colors cursor-default">
                      {genre}
                    </span>
                  ))}
                  <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-md text-xs font-bold text-yellow-500">
                    + Lebih banyak lagi
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Adaptive Slider Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-8 md:p-12 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <SlidersHorizontal className="w-64 h-64 text-yellow-500" />
          </div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bukti Nyata: <span className="text-yellow-500">1 Slider, Beda Genre, Beda Perilaku</span>
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Lihat bagaimana satu parameter kontrol (misal: "Kekuatan Hook") otomatis mengubah logika musikalnya tergantung pada genre yang Anda kerjakan. Inilah kecerdasan di balik layar AI MUSIK STUDIO.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-black/60 rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <Radio className="w-5 h-5 text-yellow-500" />
                <h4 className="font-bold text-white">Slider: Kekuatan Hook</h4>
              </div>
              <ul className="space-y-4">
                <li>
                  <span className="block text-xs text-zinc-500 font-bold mb-1">JIKA MEMILIH POP/EDM:</span>
                  <span className="block text-sm text-zinc-300">Mengatur intensitas Build-Drop & Hook Chorus (Halus ↔ Meledak).</span>
                </li>
                <li>
                  <span className="block text-xs text-zinc-500 font-bold mb-1">JIKA MEMILIH GAMELAN/ETNIK:</span>
                  <span className="block text-sm text-zinc-300">Berubah mengatur Kompleksitas Pola Siklikal (Sederhana ↔ Berlapis).</span>
                </li>
                <li>
                  <span className="block text-xs text-zinc-500 font-bold mb-1">JIKA MEMILIH KLASIK:</span>
                  <span className="block text-sm text-zinc-300">Menyesuaikan kekuatan penegasan Tema Utama (Leitmotif).</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/60 rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <Settings className="w-5 h-5 text-yellow-500" />
                <h4 className="font-bold text-white">Slider: Skala Emosi</h4>
              </div>
              <ul className="space-y-4">
                <li>
                  <span className="block text-xs text-zinc-500 font-bold mb-1">JIKA MEMILIH POP/ROCK:</span>
                  <span className="block text-sm text-zinc-300">Slider linear standar: Mayor (Senang) ↔ Minor (Sedih).</span>
                </li>
                <li>
                  <span className="block text-xs text-zinc-500 font-bold mb-1">JIKA MEMILIH TIMUR TENGAH:</span>
                  <span className="block text-sm text-zinc-300">Slider hilang, diganti Dropdown Maqam otentik (Hijaz, Rast, Bayati).</span>
                </li>
                <li>
                  <span className="block text-xs text-zinc-500 font-bold mb-1">JIKA MEMILIH MUSIK ANAK:</span>
                  <span className="block text-sm text-zinc-300">Otomatis Terkunci di rentang Mayor demi keamanan konten ramah anak.</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/60 rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <Zap className="w-5 h-5 text-yellow-500" />
                <h4 className="font-bold text-white">Slider: Tempo & Energi</h4>
              </div>
              <ul className="space-y-4">
                <li>
                  <span className="block text-xs text-zinc-500 font-bold mb-1">JIKA MEMILIH VOCAL POP:</span>
                  <span className="block text-sm text-zinc-300">Rentang dinamis lebar: Lambat & Syahdu ↔ Cepat & Meledak (BPM 60-160).</span>
                </li>
                <li>
                  <span className="block text-xs text-zinc-500 font-bold mb-1">JIKA MEMILIH INSTRUMENTAL:</span>
                  <span className="block text-sm text-zinc-300">Rentang tertahan: Sangat Tenang ↔ Bertenaga (BPM 50-140).</span>
                </li>
                <li>
                  <span className="block text-xs text-zinc-500 font-bold mb-1">JIKA MEMILIH KLASIK:</span>
                  <span className="block text-sm text-zinc-300">Istilah teknis disesuaikan menjadi bahasa orkestra: Largo ↔ Presto.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Secondary Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">8 Fitur Pendukung Super (Engine Specs)</h3>
            <p className="text-zinc-400 text-sm">Menyesuaikan setiap detail spesifik sesuai genre agar kualitas musik tak tertandingi.</p>
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
