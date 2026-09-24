import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Freelancer Digital',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
    text: 'AI MUSIK STUDIO benar-benar game changer! Fitur Mode Pasar Lokal sangat membantu saya mendapatkan klien B2B untuk jingle usaha mereka. Klien puas dengan kualitas vokalnya yang nggak kaku sama sekali. Closing Rp 1.5 Juta dari 3 jingle UMKM di minggu pertama, modal langsung balik!',
  },
  {
    name: 'Siti Rahma',
    role: 'Ibu Rumah Tangga',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    text: 'Saya awalnya gaptek banget soal musik. Tapi berkat Lyric Coach dan Smart Control, saya bisa bikin lagu anak-anak yang aman dan sekarang channel animasi saya tembus monetisasi bulan ke-2 tanpa repot mikirin copyright. Penghasilan tambahan yang lumayan banget dari rumah.',
  },
  {
    name: 'Andi Pratama',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    text: 'Dulu pusing cari BGM yang aman dari strike. Sekarang bikin sendiri pake AI MUSIK STUDIO. Rights Checklist-nya bikin tenang, dan audionya kerasa banget jiwanya! Bener-bener beda dari AI gratisan.',
  },
  {
    name: 'Rina Wijaya',
    role: 'Pemilik Brand Lokal',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    text: 'Saya pakai fitur Generator Promo & Jingle untuk campaign brand skincare saya. Hasilnya? Engagement naik drastis! Musiknya terdengar sangat profesional dan mahal, padahal saya bikinnya cuma modal klik-klik aja.',
  },
  {
    name: 'Kevin Julian',
    role: 'Video Editor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    text: 'Sering kewalahan cari soundtrack cinematic yang pas buat klien video wedding. AI MUSIK STUDIO nyelamatin hidup saya! Tinggal set mood, exclude vokal, langsung jadi skor sinematik yang epik. Klien sering nanya saya sewa komposer dari mana haha.',
  },
  {
    name: 'Dinda Lestari',
    role: 'Mahasiswi',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop',
    text: 'Berawal dari iseng bikin lagu kado ulang tahun buat temen, malah jadi bisnis! Sekarang buka jasa bikin lagu personal pake Mode Pasar IDR. Sudah jualan 12 lagu kado bulan ini, margin 100%!',
  },
  {
    name: 'Faisal Hakim',
    role: 'Bisnis Digital',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop',
    text: 'Client CRM dan Mode Profesional Invoicing Kustom di OS ini luar biasa. Saya bisa kelola puluhan pesanan jingle klien tanpa ketahuan pakai AI. Auto-generate invoice-nya juga bikin kerjaan rapi. Very recommended!',
  },
  {
    name: 'Agus Setiawan',
    role: 'Podcaster',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=150&auto=format&fit=crop',
    text: 'Butuh intro & outro unik yang 100% hak ciptanya punya saya. AI MUSIK STUDIO ngasih solusi instan. Gak perlu lagi langganan stock audio mahal tiap bulan. Sekali beli OS ini, untung seumur hidup.',
  },
  {
    name: 'Nadia Putri',
    role: 'Musisi Indie',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
    text: 'Awalnya skeptis sama AI musik. Tapi fitur Smart Control Sadar-Genre dan Kamus Vokal 5-Dimensi mengubah pandangan saya. Vokalnya ada napasnya, ada bisikannya. Saya pakai untuk demo lagu sebelum masuk studio beneran. Sangat hemat waktu produksi.',
  },
  {
    name: 'Hendra Saputra',
    role: 'Game Developer',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=150&auto=format&fit=crop',
    text: 'Bikin game indie butuh banyak soundtrack background. Bayar komposer mahal banget. Pakai platform ini, saya bikin belasan BGM tanpa takut kena copyright issue. Fitur Waveform & Trim-nya juga ngebantu banget buat bikin looping audio.',
  },
  {
    name: 'Lisa Monica',
    role: 'Affiliate Marketer',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop',
    text: 'Bikin video review produk di TikTok sekarang makin gampang. Pake lagu viral sering kena takedown, jadi saya bikin lagu unik sendiri pake AI MUSIK STUDIO. Konversi jualan naik karena audionya beda dari yang lain!',
  },
  {
    name: 'Reza Pahlevi',
    role: 'Event Organizer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
    text: 'Menawarkan paket event lengkap dengan "Original Theme Song" sekarang jadi USP Bisnis saya. Profit margin jadi sangat tebal berkat AI MUSIK STUDIO. Sistemnya gampang dimengerti sama tim saya.',
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            200+ Orang Telah Terbantu Oleh <span className="text-gradient-gold">AI MUSIK STUDIO</span>
          </motion.h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Mereka telah menggunakan OS kami untuk kebutuhan bisnis, konten, dan klien mereka. Ini kata mereka, bukan kata kami.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testi, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative break-inside-avoid border border-white/5 hover:border-yellow-500/20 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-zinc-300 leading-relaxed mb-8 italic">"{testi.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testi.image} 
                  alt={testi.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-white">{testi.name}</h4>
                  <span className="text-sm text-zinc-500">{testi.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
