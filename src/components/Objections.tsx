import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  MessageCircleQuestion, 
  ShieldAlert, 
  CheckCircle,
  Lightbulb,
  Music,
  PlayCircle,
  ChevronDown
} from 'lucide-react';

const objections = [
  {
    q: '"Saya tidak mengerti musik sama sekali, apa bisa hasilkan uang?"',
    a: 'Sangat bisa! AI MUSIK STUDIO khusus untuk pemula. Ketik cerita Anda, dan sistem merakit arsitektur musik komersialnya secara otomatis.'
  },
  {
    q: '"Lagu AI biasanya kaku dan terdengar seperti robot."',
    a: 'Itu terjadi jika pakai prompt generik. Kamus Vokal 5-Dimensi kami menyuntikkan tekstur vokal manusia nyata (napas, bisikan, emosi klimaks).'
  },
  {
    q: '"Bagaimana cara menjual lagu yang sudah dibuat?"',
    a: 'Modul Cuan Hub memandu Anda step-by-step untuk monetisasi di AdSense, marketplace Stock Audio, hingga klien B2B lokal.'
  },
  {
    q: '"Apakah lagu buatan AI aman dari klaim hak cipta?"',
    a: 'Blueprint lagu 100% aman dan unik. Selama Anda merendernya dengan paket berbayar di AI (seperti Suno Pro), Anda aman dari strike YouTube/Spotify.'
  },
  {
    q: '"Saya belum punya portofolio untuk mencari klien."',
    a: 'Tekan "Demo Reel Generator 1-Klik", sistem akan mencetak etalase 5 lagu profesional lintas genre untuk Anda di hari pertama.'
  },
  {
    q: '"Apakah saya harus paham software edit audio yang rumit?"',
    a: 'Sama sekali tidak. Studio Pasca-Produksi kami ada di browser. Potong (trim) dan fade audio semudah menggeser mouse.'
  }
];

const faqs = [
  {
    q: 'Apakah aplikasi ini cuma sebatas "Pembuat Prompt" untuk Suno?',
    a: 'Sama sekali TIDAK. Jika Suno diibaratkan sebagai "Mesin Cetak", AI MUSIK STUDIO adalah "Studio Arsiteknya". Mencetak lagu itu mudah, tapi merancang lagu yang tidak berhalusinasi, punya struktur komersial yang jelas (Verse, Chorus, Hook), lulus uji rima, serta aman hak ciptanya membutuhkan resep arsitektur yang sangat presisi. AI MUSIK STUDIO memastikan hasil audio Anda berstandar industri komersial, bukan sekadar ketikan prompt acak.',
  },
  {
    q: 'Laptop saya spesifikasinya rendah (kentang), apakah sistem ini berat?',
    a: 'TIDAK. AI MUSIK STUDIO adalah Aplikasi Web (Web-App) 100% berbasis cloud. Anda bahkan bisa mengakses sistem kami dari HP Anda untuk mencari ide kapan saja, namun kami sangat menyarankan penggunaan Laptop/PC untuk proses produksi akhir (download/upload) yang jauh lebih ngebut dan nyaman.',
  },
  {
    q: 'Bagaimana sistem pembayaran dan apakah ada perpanjangan otomatis terselubung?',
    a: 'TIDAK ADA tagihan terselubung atau perpanjangan otomatis (auto-debit) tanpa persetujuan Anda. Anda membayar sesuai periode akses yang Anda pilih: 1 Bulan, 6 Bulan, atau 1 Tahun. Setelah masa aktif selesai, Anda bebas memutuskan apakah ingin memperpanjang akses atau tidak. Sistem kami juga bekerja dengan metode BYOK (Bring Your Own Key) untuk AI model, sehingga Anda memiliki kendali penuh atas penggunaan tanpa biaya markup dari kami. Sedangkan untuk mesin render audio seperti Suno/Udio, Anda bebas menggunakan paket gratis maupun berbayar mereka sesuai kebutuhan komersial Anda.',
  },
  {
    q: 'Apa perbedaan paket akses 1 Bulan, 6 Bulan, dan 1 Tahun?',
    a: 'Semua paket memberikan akses ke ekosistem inti AI MUSIK STUDIO. Paket 1 BULAN (Rp 99.000) sangat ideal untuk eksplorasi dan kebutuhan proyek kilat. Paket 6 BULAN (Rp 199.000) adalah pilihan populer bagi kreator yang ingin konsisten membangun portofolio dan melayani klien B2B (termasuk CRM & Invoicing). Sedangkan Paket 1 TAHUN (Rp 299.000) adalah pilihan PALING HEMAT (Best Value) dengan biaya per bulan paling murah (~Rp 24.900/bulan), fitur bisnis terlengkap (CRM Klien, Invoicing, Akademi Sertifikasi Song Architect), update fitur sepanjang tahun, serta garansi uang kembali 7 hari.',
  },
  {
    q: 'Apakah saya bisa upgrade dari paket 1 Bulan ke 6 Bulan atau 1 Tahun di kemudian hari?',
    a: 'Tentu saja bisa! Kapan saja selama masa aktif atau setelahnya, Anda dapat meng-upgrade paket akses Anda ke periode yang lebih panjang (6 Bulan atau 1 Tahun) untuk menikmati efisiensi biaya yang jauh lebih hemat serta fitur bisnis terlengkap.',
  },
  {
    q: 'Berapa lama waktu yang saya butuhkan setiap harinya?',
    a: 'Karena mesin AI kami yang bekerja keras, Anda hanya butuh 15-30 menit per hari. Sisanya, biarkan aset digital Anda berputar menghasilkan uang sementara Anda bekerja, tidur, atau liburan.',
  },
  {
    q: 'Apakah hak cipta lagu 100% milik saya dan aman untuk AdSense?',
    a: 'Untuk struktur Blueprint lirik dan konsep lagu yang dihasilkan oleh AI MUSIK STUDIO, 100% menjadi hak Anda. Namun untuk hak cipta file audio (MP3/WAV) yang sudah di-render, itu SEPENUHNYA mengikuti kebijakan platform AI yang Anda gunakan (contoh: Suno mewajibkan paket Pro/Premier untuk hak komersialisasi). Selama Anda mengikuti syarat platform render-nya, aset Anda sah dan aman untuk monetisasi AdSense/Spotify.',
  },
];

export default function Objections() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden" id="faq-objections">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Audio Proof / Quality Gap Visualization */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-black text-white mb-4"
            >
              Bedanya AI Acak vs <span className="text-yellow-500">AI MUSIK STUDIO Blueprint</span>
            </motion.h2>
            <p className="text-zinc-400">Masih ragu kenapa Anda butuh arsitek? Inilah perbedaannya ketika Anda hanya memakai prompt biasa vs menggunakan racikan arsitektur kami.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
            {/* The Bad Prompt */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-950/20 border border-red-500/20 rounded-2xl p-4 md:p-8 flex flex-col h-full"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 border-b border-red-500/20 pb-3 sm:pb-4">
                <Music className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 shrink-0" />
                <h3 className="font-bold text-red-400 text-sm md:text-base leading-tight">Lagu AI (Prompt Biasa)</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2 text-zinc-300 text-[10px] sm:text-sm leading-tight"><span className="text-red-500 shrink-0">❌</span> Vokal kaku seperti robot</li>
                <li className="flex items-start gap-2 text-zinc-300 text-[10px] sm:text-sm leading-tight"><span className="text-red-500 shrink-0">❌</span> Melodi monoton dari awal ke akhir</li>
                <li className="flex items-start gap-2 text-zinc-300 text-[10px] sm:text-sm leading-tight"><span className="text-red-500 shrink-0">❌</span> Rima lirik seperti pantun anak SD</li>
              </ul>
              <div className="bg-black/50 p-3 sm:p-4 rounded-xl border border-white/5 relative group cursor-not-allowed mt-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-[9px] sm:text-xs text-zinc-500 font-bold mb-1">Simulasi Hasil:</p>
                    <p className="text-[10px] sm:text-sm text-zinc-400 italic leading-tight">"Terdengar palsu, klien menolak."</p>
                  </div>
                  <PlayCircle className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-600 shrink-0" />
                </div>
              </div>
            </motion.div>

            {/* The AI MUSIK STUDIO Blueprint */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 md:p-8 relative overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.1)] flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 border-b border-yellow-500/30 pb-3 sm:pb-4 relative z-10">
                <Music className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 shrink-0" />
                <h3 className="font-bold text-yellow-500 text-sm md:text-base leading-tight">Lagu AI (AI MUSIK STUDIO Blueprint)</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 relative z-10 flex-grow">
                <li className="flex items-start gap-2 text-white font-medium text-[10px] sm:text-sm leading-tight"><CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 shrink-0 mt-0.5" /> Nafas & bisikan vokal tereksekusi natural</li>
                <li className="flex items-start gap-2 text-white font-medium text-[10px] sm:text-sm leading-tight"><CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 shrink-0 mt-0.5" /> Hook / Reff menghentak & bikin candu</li>
                <li className="flex items-start gap-2 text-white font-medium text-[10px] sm:text-sm leading-tight"><CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 shrink-0 mt-0.5" /> Struktur lagu komersial standar Spotify</li>
              </ul>
              <div className="bg-black/50 p-3 sm:p-4 rounded-xl border border-yellow-500/30 relative z-10 cursor-pointer hover:border-yellow-500/60 transition-colors group mt-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-[9px] sm:text-xs text-yellow-500/70 font-bold mb-1">Simulasi Hasil:</p>
                    <p className="text-[10px] sm:text-sm text-zinc-200 italic font-medium leading-tight">"Klien suka, royalti mengalir."</p>
                  </div>
                  <PlayCircle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 group-hover:scale-110 transition-transform shrink-0" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-sm font-bold tracking-widest uppercase mb-6"
          >
            <ShieldAlert className="w-4 h-4" /> KAMI PAHAM KERAGUAN ANDA
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
          >
            Buang Jauh-Jauh <span className="text-yellow-500">Ketakutan Anda</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 font-medium"
          >
            Jika Anda pernah kecewa dengan AI musik sebelumnya, atau merasa kurang berbakat, mari kita luruskan faktanya.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {objections.slice(0, 3).map((item, idx) => (
              <div key={idx} className="bg-zinc-900/40 p-6 rounded-2xl border border-white/5">
                <div className="flex items-start gap-4 mb-4">
                  <MessageCircleQuestion className="w-6 h-6 text-zinc-500 shrink-0 mt-1" />
                  <h4 className="text-lg font-bold text-white italic">{item.q}</h4>
                </div>
                <div className="flex items-start gap-4 pl-4 border-l-2 border-yellow-500/30 ml-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {objections.slice(3, 6).map((item, idx) => (
              <div key={idx} className="bg-zinc-900/40 p-6 rounded-2xl border border-white/5">
                <div className="flex items-start gap-4 mb-4">
                  <MessageCircleQuestion className="w-6 h-6 text-zinc-500 shrink-0 mt-1" />
                  <h4 className="text-lg font-bold text-white italic">{item.q}</h4>
                </div>
                <div className="flex items-start gap-4 pl-4 border-l-2 border-yellow-500/30 ml-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* FAQ Section Integrated */}
        <div className="max-w-3xl mx-auto pt-12 border-t border-white/10">
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Pertanyaan Teknis Sering Diajukan (FAQ)
            </motion.h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-zinc-200 pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-yellow-500 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
