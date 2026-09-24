import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Postscript() {
  return (
    <section className="py-16 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[50px]"></div>
          <p className="text-xl md:text-2xl font-bold text-white mb-6">
            P.S. (Bagi Anda yang scroll cepat ke bawah)
          </p>
          <div className="space-y-4 text-zinc-300 font-medium leading-relaxed mb-8">
            <p>
              Intinya: <strong className="text-white">AI MUSIK STUDIO</strong> adalah Ekosistem Bisnis Audio In-A-Box. Anda akan mendapatkan sistem lengkap yang membimbing Anda mengubah ide menjadi lagu komersial berkualitas studio, lalu menjualnya ke klien atau mencetak royalti pasif.
            </p>
            <p>
              Harga promo HARI INI sangat terjangkau, mulai dari <strong className="text-green-400 text-lg">Rp 99.000 (Akses 1 Bulan)</strong>, paket populer <strong className="text-yellow-400 text-lg">Rp 199.000 (Akses 6 Bulan)</strong>, hingga paket paling hemat & lengkap <strong className="text-amber-400 text-xl">Rp 299.000 (Akses 1 Tahun Penuh)</strong>.
            </p>
            <p>
              Risiko nol. Ada <strong className="text-white">100% Garansi Uang Kembali (Berlaku 7 hari sejak pembelian)</strong>. Jika Anda merasa sistem ini tidak bisa menghasilkan aset yang layak jual, saya kembalikan uang Anda. Titik.
            </p>
            <p>
              Waktu terus berjalan, dan harga diskon 76% ini tidak akan bertahan selamanya. Jangan sampai menyesal karena menunda.
            </p>
          </div>
          
          <a 
            href="#pricing"
            className="inline-flex items-center gap-2 text-yellow-500 font-bold hover:text-yellow-400 transition-colors uppercase tracking-wider text-sm border-b-2 border-yellow-500/30 hover:border-yellow-400 pb-1"
          >
            YA, SAYA INGIN KUNCI DISKON 76% SAYA SEKARANG
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
