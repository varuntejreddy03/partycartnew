import { motion } from 'framer-motion';
import { Sparkles, Heart, Shield, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const shorts = [
  {
    id: 0,
    src: "/partycart_yumzy_1768824322_3813494764034298090_74839252118.mp4",
    title: "Heritage",
    tag: "Authentic"
  },
  {
    id: 1,
    src: "/partycart_yumzy_1770100660_3824201680783904568_74839252118.mp4",
    title: "The Craft",
    tag: "Mastery"
  },
  {
    id: 2,
    src: "/partycart_yumzy_1770807016_3830127896187612625_74839252118.mp4",
    title: "The Spirit",
    tag: "Passion"
  }
];

export default function AboutExperience() {
  const [activeId, setActiveId] = useState<number | null>(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        video.muted = isMuted;
        if (activeId === idx) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              console.log("Autoplay prevented");
            });
          }
        } else {
          video.pause();
        }
      }
    });
  }, [activeId, isMuted]);

  const handleVideoClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <section className="bg-bg-primary py-20 px-6 overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-3 mb-6"
           >
             <Sparkles className="text-accent-gold" size={18} />
             <span className="micro-label text-accent-gold font-bold">The Archives</span>
           </motion.div>
           <h2 className="font-brand text-3xl md:text-5xl lg:text-7xl text-text-primary mb-8 leading-tight">
              Behind the Scenes: <span className="font-accent italic text-accent-gold decoration-accent-gold/20 underline underline-offset-8">Witness</span> the Craft.
           </h2>
           <p className="font-body text-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Select any chapter below to immerse yourself in our culinary journey.
           </p>

           <button 
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-3 bg-white px-8 py-3 rounded-full border border-border-warm text-accent-gold font-body font-bold text-xs uppercase tracking-widest hover:bg-accent-gold hover:text-white transition-all shadow-xl active:scale-95"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {isMuted ? 'Unmute Experience' : 'Mute Sound'}
           </button>
        </div>

        {/* Separated 3-Video Layout: Swipeable on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 lg:gap-10 pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory -mx-6 px-6">
           {shorts.map((short, i) => (
             <motion.div
               key={short.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2, duration: 0.8 }}
               className="relative w-[85vw] md:w-full flex-shrink-0 snap-center overflow-hidden group cursor-pointer"
               onClick={() => handleVideoClick(short.id)}
             >
                <div className={`aspect-video rounded-2xl overflow-hidden border-[4px] transition-all duration-700 relative ${activeId === i ? 'border-accent-gold shadow-[0_0_50px_rgba(200,134,26,0.25)]' : 'border-white shadow-2xl grayscale-[0.4] group-hover:grayscale-0'}`}>
                  <video 
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={short.src} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    loop 
                    muted={isMuted} 
                    playsInline 
                  />
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${activeId === i ? 'opacity-0' : 'opacity-100'}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-6 left-6">
                     <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl transition-all duration-500 ${activeId === i ? 'bg-accent-gold text-white' : 'bg-white/20 backdrop-blur-md text-white'}`}>
                        {short.tag}
                     </span>
                  </div>

                  {/* Play/Pause Center Indicator */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${activeId === i ? 'opacity-0 scale-150' : 'opacity-100 scale-100 group-hover:scale-110'}`}>
                     <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white">
                        {activeId === i ? <Pause fill="white" size={20} /> : <Play fill="white" size={20} />}
                     </div>
                  </div>
                </div>

                <div className="mt-5 text-center px-4 flex flex-col items-center">
                   <h4 className={`text-base font-semibold transition-colors duration-500 mb-2 ${activeId === i ? 'text-accent-gold' : 'text-text-primary group-hover:text-accent-gold'}`}>
                      {short.title}
                   </h4>
                   <div className={`h-[1px] bg-accent-gold/40 transition-all duration-500 ${activeId === i ? 'w-20' : 'w-10 group-hover:w-20'}`} />
                </div>
             </motion.div>
           ))}
        </div>

        {/* Global Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center gap-10"
        >
           <div className="flex items-center gap-2 text-text-muted font-body font-bold text-xs uppercase tracking-widest">
              <Heart className="text-accent-gold" size={16} /> Authenticity
           </div>
           <div className="flex items-center gap-2 text-text-muted font-body font-bold text-xs uppercase tracking-widest">
              <Shield className="text-accent-gold" size={16} /> Quality Checked
           </div>
           <div className="flex items-center gap-2 text-text-muted font-body font-bold text-xs uppercase tracking-widest">
              <Sparkles className="text-accent-gold" size={16} /> Heritage
           </div>
        </motion.div>
      </div>
    </section>
  );
}
