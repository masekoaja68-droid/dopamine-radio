import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Headphones, PlayCircle, Music, X } from 'lucide-react';

const audioDemos = [
  {
    title: 'Hukum Besi',
    videoId: 'QYW_uOjd-gk',
    genre: 'Gansta Rap'
  },
  {
    title: 'Tikus Tanah',
    videoId: 'WZcaDDV1Vh0',
    genre: 'Gansta Rap'
  },
  {
    title: 'Celtic Fantasy',
    videoId: '4ZfgLCB5x4A',
    genre: 'Instrumental'
  },
  {
    title: 'Ambient Deep Thinking Static',
    videoId: 'IW-khkESkM0',
    genre: 'Ambient / Focus'
  },
  {
    title: 'Dark Sci-Fi Glitch & Cinematic',
    videoId: 'oOskvCCFdXM',
    genre: 'Cinematic / Sci-Fi'
  },
  {
    title: 'Harmoni Semesta',
    videoId: 'JR9X3Xd1OJ4',
    genre: 'World / Orchestral'
  },
  {
    title: 'Nadi di Balik Angka',
    videoId: 'ijYYvFFsuXw',
    genre: 'Electronic / Corporate'
  },
  {
    title: 'Ambient Static Sub Bass Hum',
    videoId: '4lcfF3MG1UE',
    genre: 'Minimal / Sub Bass'
  },
  {
    title: 'Stay Awhile 1940s',
    videoId: 'aSTehlnr_T8',
    genre: 'Vintage / Lo-Fi Jazz'
  }
];

const soundcloudDemos = [
  {
    title: 'Sepasang Salah',
    genre: 'Indie Folk, Indonesia Folk, Acoustic Folk',
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2391083583&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    title: "Shollal-Lah-U 'Ala Muhammad",
    genre: 'Acoustic Nasheed, Sufi Meditative Pop',
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2391083571&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    title: 'Viennese Sonata',
    genre: 'Classical, Viennese Orchestral',
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2391083577&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    title: 'Ambient Sleep',
    genre: 'Ambient, Sleep Therapy',
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2391083568&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    title: 'Sumeleh Pasrah',
    genre: 'Gamelan Jawa, Karawitan Klasik',
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2391083580&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  {
    title: 'Wes Ra-Po-Po',
    genre: 'Dangdut, Javanese Koplo',
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2391083574&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  }
];

export default function VideoDemo() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="demo">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-bold tracking-widest uppercase mb-6">
            <Headphones className="w-4 h-4" /> BUKTI NYATA KUALITAS AUDIO
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight font-serif">
            Dengarkan Sendiri <br/> <span className="text-yellow-500">Mahakarya Aplikasinya</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            Bukan sekadar janji. Ini adalah bukti nyata kualitas audio produksi *commercial-grade* yang bisa Anda ciptakan dalam hitungan menit. Jelajahi berbagai *mood* dan *genre*.
          </p>
        </motion.div>

        {/* Featured Video Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black"
        >
          <div className="bg-zinc-950 px-4 py-3 border-b border-white/5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="bg-zinc-900 px-3 py-1 rounded text-[10px] sm:text-xs text-zinc-500 font-mono tracking-widest">
              DEMO PREVIEW - AI MUSIK STUDIO
            </div>
          </div>
          <div className="w-full aspect-video relative">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/_1I8aehCmoE?rel=0&modestbranding=1" 
              title="AI MUSIK STUDIO Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
        
        {/* YouTube Demos */}
        <div className="mb-8 flex items-center justify-center gap-3 text-white font-bold text-xl md:text-2xl">
          <PlayCircle className="w-6 h-6 text-red-500" /> KARYA DARI AI MUSIK STUDIO (YOUTUBE)
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 text-left mb-20">
          {audioDemos.map((demo, idx) => (
            <motion.div 
              key={demo.videoId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#0a0a0a] rounded-xl md:rounded-2xl border border-white/5 overflow-hidden group shadow-2xl hover:border-yellow-500/30 transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setActiveVideo(demo.videoId)}
            >
              <div className="aspect-video relative bg-black shrink-0 overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${demo.videoId}/maxresdefault.jpg`}
                  onError={(e) => {
                    e.currentTarget.src = `https://img.youtube.com/vi/${demo.videoId}/hqdefault.jpg`;
                  }}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-10 h-10 md:w-14 md:h-14 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-yellow-500 group-hover:text-black group-hover:border-yellow-500 transition-all duration-300">
                     <PlayCircle className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black" />
                   </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 md:p-6 flex-grow flex flex-col justify-center">
                <div className="text-[9px] sm:text-xs font-bold text-yellow-500 uppercase tracking-wider mb-1 sm:mb-2">{demo.genre}</div>
                <h3 className="text-xs sm:text-sm md:text-lg font-bold text-white leading-tight md:leading-snug group-hover:text-yellow-400 transition-colors">
                  {demo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SoundCloud Demos */}
        <div className="mb-8 flex items-center justify-center gap-3 text-white font-bold text-xl md:text-2xl mt-10">
          <Music className="w-6 h-6 text-[#ff5500]" /> AUDIO STREAM SHOWCASE (SOUNDCLOUD)
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 text-left mb-16">
          {soundcloudDemos.map((demo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0a0a0a] rounded-xl md:rounded-2xl border border-white/5 p-2 sm:p-4 shadow-2xl hover:border-[#ff5500]/30 transition-all duration-300 flex flex-col"
            >
              <div className="mb-2 md:mb-3 px-1 md:px-2 pt-1 md:pt-2">
                 <h3 className="text-[11px] sm:text-sm md:text-base font-bold text-white mb-1 leading-tight">{demo.title}</h3>
                 <p className="text-[9px] md:text-xs text-[#ff5500] font-bold uppercase tracking-wider leading-tight">{demo.genre}</p>
              </div>
              <div className="w-full aspect-square rounded-lg md:rounded-xl overflow-hidden bg-black mt-auto">
                <iframe 
                  width="100%" 
                  height="100%" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay; encrypted-media" 
                  src={demo.url}
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
           <a 
             href="#pricing"
            className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-white text-black font-black text-sm md:text-lg rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] uppercase tracking-wide"
          >
            SAYA MAU BUAT KARYA SEPERTI INI SEKARANG
          </a>
        </motion.div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white bg-black/50 p-2 rounded-full border border-white/10 z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                className="w-full h-full absolute inset-0"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`} 
                title="Video Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
