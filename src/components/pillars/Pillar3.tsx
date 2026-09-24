import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Mic, 
  Search, 
  Code2, 
  CheckCircle2, 
  Zap
} from 'lucide-react';

const mainFeatures = [
  {
    icon: ShieldCheck,
    title: 'Purpose-Based Exclude Protection System',
    headline: '"Garansi Hasil Akurat: Sistem Pengunci Otomatis Mencegah Vokal Tiba-Tiba Bocor di Musik Instrumental!"',
    desc: 'Kesal vokal AI tiba-tiba muncul di musik instrumental? Purpose-Based Exclude System adalah perisai cerdas Anda. Bikin BGM? Sistem otomatis mengunci "No Vocals". Bikin Jingle? Mengunci "No Long Intro". Hasil akhir 100% presisi, tanpa bocor!',
    checklists: [
      'Perisai Vokal Bocor di Instrumental',
      'Pemblokir Autotune pada Lagu Mentah',
      'Auto-Cut Intro Panjang (Jingle)'
    ],
    benefit: 'Sistem pengaman otomatis yang mengunci kata-kata negative prompt (Exclude) berdasarkan tujuan lagu Anda. <strong className="text-white">Menghilangkan kecemasan akibat bug Suno dan menjamin kuota AI Anda tidak terbuang sia-sia.</strong>',
    emotion: 'Lega & Tenang'
  },
  {
    icon: Mic,
    title: 'Kamus Vokal 5-Dimensi & Jeda Napas Otomatis',
    headline: '"Bikin Vokal AI Bernapas dan Berbisik Lembut Seperti Penyanyi Sungguhan!"',
    desc: 'Sering dengar vokal AI yang nyanyi ngebut tanpa henti? Kamus Vokal 5-Dimensi menyuntikkan instruksi tekstur manusiawi (bisikan, serak), lalu otomatis menyisipkan jeda napas (...) di akhir kalimat. Vokal jadi terdengar intim, natural, dan bernyawa!',
    checklists: [
      'Bank Tekstur Vokal Terkontrol',
      'Injeksi Nafas Manusiawi (Elipsis)',
      'Emosi Dinamis per Bagian Lagu'
    ],
    benefit: 'Bank kata terstruktur 5 dimensi yang secara dinamis menyuntikkan tag vokal manusiawi per bagian lagu, <strong className="text-white">dikombinasikan dengan slider Densitas Jeda Napas.</strong>',
    emotion: 'Sensasi Manusiawi & Kagum'
  },
  {
    icon: Search,
    title: 'Panel Transparansi "Jejak Asal" (Source Trace)',
    headline: '"Panel Source Trace: Lacak Logika AI dan Pastikan Setiap Detail Lagu Sesuai Perintah Anda."',
    desc: 'Tinggalkan prompt "tebak-tebakan". Panel Source Trace membongkar asal-usul setiap instruksi vokal dan instrumen. Anda punya transparansi 100% untuk memverifikasi bahwa AI menerjemahkan ide Anda menjadi skrip musik yang logis dan akurat!',
    checklists: [
      'Pelacak Asal-Usul Logika AI',
      'Garansi Tanpa Tebak-Tebakan Acak',
      'Transparansi Prompt Sepenuhnya'
    ],
    benefit: 'Panel transparansi yang menampilkan asal-usul setiap tag musik dan vokal yang dirakit oleh AI. <strong className="text-white">Merekam kepastian logika (predictable output).</strong>',
    emotion: 'Percaya Diri & Kontrol Penuh'
  }
];

const secondaryFeatures = [
  {
    title: '1. Suno Grammar Assembly v2.0',
    desc: 'Perakitan skrip kode baku per bagian lagu ([Section Tag] + [Instrumental Tag] + [Vocal Tag] + &lt;Lirik&gt; + [End]) yang 100% dipahami oleh algoritma Suno.'
  },
  {
    title: '2. Kamus Vokal 5-Dimensi (Tekstur, Energi, Register, Emosi, Artikulasi)',
    desc: 'Bank kata terkontrol untuk memberi tekstur vokal spesifik di setiap bagian lagu (dari bisikan lembut, vokal serak gritty, hingga head-voice yang melengking).'
  },
  {
    title: '3. Tag Instrumental Dinamatis',
    desc: 'Penyelip tag instrumen otomatis hanya pada Intro, transisi ekstrem, dan klimaks Chorus untuk menjaga lagu tetap dinamis tanpa berisik berlebihan.'
  },
  {
    title: '4. Slider Densitas Jeda Napas Otomatis',
    desc: 'Slider taktil pengatur kerapatan tanda ... di batas klausa lirik untuk memberi ruang bernapas alami bagi penyanyi virtual.'
  },
  {
    title: '5. Purpose-Based Exclude System',
    desc: 'Perisai otomatis yang membuang efek Autotune pada lagu mentah, membuang vokal pada lagu instrumental, dan memotong intro panjang pada Jingle.'
  },
  {
    title: '6. Panel Transparansi Source Trace',
    desc: 'Pelacak logika transparan yang memperlihatkan bagaimana cerita dan slider emosi Anda diracik menjadi tag musik nyata.'
  }
];

export default function Pillar3() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden" id="pillar-3">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <Code2 className="w-4 h-4" /> PILAR 3: EXECUTION ENGINE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Platform AI Musik Biasa Cuma Tebak-Tebakan Teks. AI MUSIK STUDIO Punya <span className="text-red-500">Engine Bahasa Musik</span> Yang Mengunci Kualitas.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
          >
            Rakit Parameter Audio AI Otomatis Berformat Baku <strong className="text-white">Tanpa Bug Vokal Bocor, Tanpa Suara Robotic</strong>, dan 100% Mengerti Keinginan Musik Anda.
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
                className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden hover:border-red-500/30 transition-all duration-300 group flex flex-col h-full shadow-2xl"
              >
                <div className="p-8 flex-grow">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner group-hover:border-red-500/50 transition-colors">
                    <Icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-xl mb-6">
                    <p className="text-red-500 font-medium italic text-sm leading-relaxed">
                      {feature.headline}
                    </p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.checklists.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
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
                  <span className="text-sm text-red-500 font-bold">{feature.emotion}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Algoritma Perakitan Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 p-8 md:p-12 rounded-3xl border border-red-500/20 bg-red-500/5 relative overflow-hidden"
        >
          <div className="text-center mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Anatomi Kode: <span className="text-red-500">Grammar Assembly v2.0</span>
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              AI MUSIK STUDIO tidak sembarangan melempar teks ke AI. Kami merakit setiap section dengan struktur Grammar Baku yang 100% dipahami Algoritma Musik AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-black/60 rounded-2xl p-6 border border-white/5 font-mono text-sm">
              <div className="text-zinc-500 mb-2">{'// Algoritma Perakitan per Section:'}</div>
              <div className="text-blue-400">1. Tulis [Tag Struktur]</div>
              <div className="text-zinc-400 pl-4 mb-2">{'-> misal: [Verse 1] atau [Chorus]'}</div>
              
              <div className="text-purple-400">2. CEK Transisi Instrumental</div>
              <div className="text-zinc-400 pl-4 mb-2">{'-> JIKA terpenuhi: sisipkan [Acoustic guitar picking, slow]'}</div>
              
              <div className="text-yellow-400">3. JIKA bervokal, rakit [Vocal: ...]</div>
              <div className="text-zinc-400 pl-4 mb-2">
                {'-> Ambil dari Kamus 5-Dimensi'}<br/>
                {'-> Modulasi nilai dengan Slider Pilar'}<br/>
                {'-> misal: [Vocal: Soft, breathy, whispering]'}
              </div>
              
              <div className="text-green-400">4. Sisipkan Densitas Jeda Napas (...)</div>
              <div className="text-zinc-400 pl-4">{'-> Hembus... angin malam... membawa pesan...'}</div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <h4 className="text-red-500 font-bold mb-2">Hasil Akhir (Contoh Skrip Verse 1)</h4>
                <div className="bg-black/80 rounded-lg p-3 font-mono text-xs text-zinc-300">
                  <span className="text-blue-400">[Verse 1]</span><br/>
                  <span className="text-yellow-400">[Vocal: Soft, breathy, fragile]</span><br/>
                  Di bawah langit kelabu...<br/>
                  aku masih mencari...<br/>
                  jejak langkahmu... yang perlahan memudar...
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Setiap tag yang dihasilkan bisa <strong className="text-white">ditelusuri balik ke sumbernya (Source Trace)</strong>. [Vocal: fragile] berasal dari input emosi Anda, bukan sekadar tebakan acak AI. Ini memberikan Anda kontrol penuh yang tidak dimiliki alat lain.
              </p>
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
            <h3 className="text-2xl font-bold text-white mb-3">6 Fitur Pendukung Super (Engine Specs)</h3>
            <p className="text-zinc-400 text-sm">Menjamin setiap bait lirik diterjemahkan ke dalam bahasa AI secara sempurna.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {secondaryFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
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
