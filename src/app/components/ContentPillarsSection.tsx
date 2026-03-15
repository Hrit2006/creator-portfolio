import { Sparkles, Camera, ShoppingBag, Stars } from 'lucide-react';

export function ContentPillarsSection() {
  const pillars = [
    {
      icon: ShoppingBag,
      emoji: '👗',
      title: 'Fashion & Beauty',
      description: 'Styling, traditional wear, and makeup aesthetics through a modern lens.',
      gradient: 'from-pink-500 to-rose-400',
      glowColor: 'group-hover:shadow-pink-500/20'
    },
    {
      icon: Sparkles,
      emoji: '✨',
      title: 'Lifestyle',
      description: 'Daily life in Kolkata, relatable Gen Z humor, and trending cultural narratives.',
      gradient: 'from-purple-500 to-indigo-400',
      glowColor: 'group-hover:shadow-purple-500/20'
    },
    {
      icon: Camera,
      emoji: '📸',
      title: 'UGC',
      description: 'Authentic product integration that feels like a natural part of the daily routine.',
      gradient: 'from-blue-500 to-cyan-400',
      glowColor: 'group-hover:shadow-blue-500/20'
    }
  ];

  return (
    <section className="relative py-28 px-6 bg-[#030303] overflow-hidden">
      
      {/* --- DYNAMIC NEON BACKGROUND --- */}
      {/* These orbs provide the "vibe" without washing out the text */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Pattern for Technical Depth */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[grid_1fr_1fr] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pink-400">
            <Stars className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Aesthetic</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">Pillars</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto italic">
            "Merging authentic storytelling with high-end digital aesthetics."
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index} 
                className={`group relative p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:border-white/20 shadow-2xl ${pillar.glowColor}`}
              >
                {/* Glowing Icon Orb */}
                <div className="relative mb-8 flex justify-center">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                    <span className="text-4xl filter drop-shadow-md">{pillar.emoji}</span>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[#1a1a1a] p-2 rounded-xl border border-white/10 shadow-xl">
                    <Icon className="w-4 h-4 text-white/70" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {pillar.title}
                  </h3>
                  <div className="w-8 h-1 bg-white/5 mx-auto mb-4 rounded-full group-hover:w-16 group-hover:bg-pink-500/50 transition-all duration-500" />
                  <p className="text-gray-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Corner Decorative Accents - Only visible on hover */}
                <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-pink-500/30 transition-all duration-700 rounded-tl-lg" />
                <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-pink-500/30 transition-all duration-700 rounded-br-lg" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}