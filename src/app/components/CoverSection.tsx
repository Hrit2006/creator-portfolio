import { Instagram, Sparkles, MapPin, ChevronDown, Zap } from 'lucide-react';

interface CoverSectionProps {
  profileImage: string;
}

export function CoverSection({ profileImage }: CoverSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
      
      {/* --- NEON AMBIENT BACKGROUND --- */}
      {/* Intense spotlight behind the profile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      {/* Floating accent orbs for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid - White lines at low opacity look silver/metallic on black */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, 
             backgroundSize: '40px 40px' 
           }} />

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        {/* Profile Image with "Glow Halo" */}
        <div className="relative mb-14 group">
          {/* Animated gradient ring */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-md opacity-40 group-hover:opacity-100 transition duration-700 animate-spin-slow" />
          
          <div className="relative p-1.5 bg-[#0a0a0a] rounded-full border border-white/10 shadow-2xl">
            <img 
              src={profileImage} 
              alt="Debarati Dey" 
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 border border-white/5"
            />
            
            {/* Top-Right Sparkle */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/20 shadow-xl animate-bounce">
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
               <Zap className="w-4 h-4 text-pink-500 fill-pink-500/20" />
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Official Media Kit</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.8]">
              DEBARATI <span className="text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-purple-600 italic">DEY</span>
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-400 font-bold tracking-[0.3em] uppercase text-[10px]">
              <span className="hover:text-pink-400 transition-colors cursor-default">Lifestyle</span>
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="hover:text-purple-400 transition-colors cursor-default">Fashion</span>
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="hover:text-indigo-400 transition-colors cursor-default">Beauty</span>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-snug">
            Crafting <span className="text-white font-medium italic underline decoration-pink-500/50 underline-offset-4">visual narratives</span> that celebrate the vibrant soul of Kolkata.
          </p>

          {/* Glassmorphism CTA Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
            <a 
              href="https://instagram.com/liaaacoree_" 
              target="_blank" 
              className="group relative flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-black uppercase text-xs tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Instagram className="relative w-5 h-5 group-hover:text-white transition-colors" />
              <span className="relative group-hover:text-white transition-colors">@liaaacoree_</span>
            </a>
            
            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              <MapPin className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-bold text-gray-300 tracking-tighter uppercase">Kolkata, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}