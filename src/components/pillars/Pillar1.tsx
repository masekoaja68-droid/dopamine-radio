import { motion } from 'motion/react';
import { 
  Music, 
  Activity, 
  Target, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Sparkles,
    title: 'Lyric Coach (Wizard "Show Don\'t Tell")',
    headline: '"Bingung Merangkai Kata Puitis? Biarkan AI Menyulap Cerita Biasa Anda Jadi Bait Lagu yang Bikin Merinding."',
    desc: 'Tinggalkan lirik AI generik yang kaku. Cukup ketik ide singkat, Lyric Coach akan meraciknya jadi lirik puitis berteknik "Show Don\'t Tell". Hasilnya? Nyawa, emosi, dan lirik yang langsung menyentuh pendengar!',
    image: 'https://dopfs.com/wp-content/uploads/2026/08/1.-Lyric-Coach.jpg',
    checklists: [
      'Filter Anti-Klise Otomatis',
      'Penyusunan Rima & Bait Terstruktur',
      'Injeksi Emosi "Show Don\'t Tell"'
    ],
    benefit: 'Menghilangkan rasa canggung atau takut dibilang "tidak berbakat". <strong className="text-white">Lirik buatan Anda tak lagi terdengar murahan</strong> seperti puisi anak sekolah, tapi berkelas layaknya maestro.',
    emotion: 'Lega & Bebas Minder'
  },
  {
    icon: Activity,
    title: 'Emotional Architecture Wizard',
    headline: '"Atur Naik-Turun Emosi Musik dari Berbisik Sepi Sampai Meledak di Puncak Klimaks."',
    desc: 'Lagu AI sering terdengar datar? Emotional Architecture Wizard memberi Anda kendali penuh atas kurva emosi. Bikin Intro yang intim, lalu ledakkan klimaks emosional yang memukau di bagian Chorus!',
    image: 'https://dopfs.com/wp-content/uploads/2026/08/Emotional-Architecture-Wizard.jpg',
    checklists: [
      'Kontrol Dinamika & Intensitas Lagu',
      'Pengaturan Soundscape Instrumental',
      'Transisi Mulus Antar Bagian Lagu'
    ],
    benefit: 'Berlaku untuk lagu bervokal maupun musik instrumental (Lo-Fi, Cinematic, Ambient). <strong className="text-white">Karya Anda tidak akan pernah lagi terdengar datar dan monoton.</strong>',
    emotion: 'Bangga & Puas'
  },
  {
    icon: Target,
    title: 'Pemeriksa Rima & Pengukur \'Daya Candu\' Lagu (Hook Score)',
    headline: '"Kalkulator Hook Score: Uji Keketatan Rima Agar Reff Lagu Anda \'Nyangkut\' di Kepala Pendengar."',
    desc: 'Takut lagu kurang nendang? Fitur ini memindai rima dan memberi Skor Daya Pikat (0-100). Menjamin lirik Anda tajam, anti-pasaran, dan reff (hook)-nya terus terngiang di telinga pendengar!',
    image: 'https://dopfs.com/wp-content/uploads/2026/08/Pemeriksa-Rima-Pengukur-Daya-Candu.jpg',
    checklists: [
      'Pendeteksi Pola Bunyi & Rima Otomatis',
      'Pengukur Potensi Lagu Menempel di Otak',
      'Skoring Otomatis 0-100'
    ],
    benefit: 'Analisis kecocokan nada dan deteksi rima murahan secara otomatis, <strong className="text-white">memastikan potensi komersial lagu sebelum Anda mulai mencetaknya.</strong>',
    emotion: 'Percaya Diri Tinggi'
  }
];

const secondaryFeatures = [
  {
    title: '1. Song Brief & Concept Generator',
    desc: 'Mulai pembuatan lagu dalam 30 detik. Masukkan cerita nyata, tema, atau konsep instrumental, sistem langsung merancang fondasi musik.'
  },
  {
    title: '2. Style Prompt Builder & Anti-Robotic Engine',
    desc: 'Pilih dari 45 jenis musik dan 280+ sub-kategori dengan pengunci otomatis yang membuang gaya vokal/instrumen kaku.'
  },
  {
    title: '3. Structural Tagging Engine',
    desc: 'Merakit tag format otomatis (<code class="text-yellow-500 bg-yellow-500/10 px-1 rounded font-mono">[Verse]</code>, <code class="text-yellow-500 bg-yellow-500/10 px-1 rounded font-mono">[Chorus]</code>, <code class="text-yellow-500 bg-yellow-500/10 px-1 rounded font-mono">[Solo]</code>) tanpa perlu pusing menghafal kode.'
  },
  {
    title: '4. QA Checklist (4 Pilar Kualitas)',
    desc: 'Pengecekan kualitas otomatis memastikan karya punya "jiwa" sebelum dieksekusi.'
  },
  {
    title: '5. Critique Assistant (Diagnosis Pasca-Dengar)',
    desc: 'Produser pribadi yang menganalisis hasil lagu Anda dan memberi saran revisi parameter presisi jika audio kurang pas.'
  },
  {
    title: '6. Visual Concept & Storyboard Generator',
    desc: 'Bonus rekomendasi visual, palet warna, dan ide konsep video klip per bagian lagu.'
  }
];

export default function Pillar1() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden" id="pillar-1">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <Music className="w-4 h-4" /> PILAR 1: CORE SONG ARCHITECT ENGINE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Stop Bikin Lagu AI Kaku &amp; Monoton.<br/>
            <span className="text-yellow-500">Buat Musik Bernyawa yang Menyentuh Emosi.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
          >
            Ubah Cerita, Curhatan, atau Konsep Sederhana Anda Menjadi Arsitektur Musik Berjiwa, Baik Lagu Bervokal Puitis Maupun Instrumen Emosional, <strong className="text-white">Tanpa Perlu Paham Teori Musik Sepatah Pun.</strong>
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

        {/* Secondary Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">6 Fitur Pendukung Super (Engine Specs)</h3>
            <p className="text-zinc-400 text-sm">Semua bekerja secara otomatis di belakang layar untuk hasil maksimal.</p>
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
