import { Video, FileText, Package, Award, Sparkles, ArrowUpRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: 'Dedicated Reels',
      tag: 'High Impact',
      description: 'Cinematic, high-retention video storytelling tailored to your brand’s unique identity.',
      color: 'from-pink-500 to-rose-500',
      glow: 'group-hover:shadow-pink-500/10'
    },
    {
      icon: FileText,
      title: 'Story Sequences',
      tag: 'Engagement',
      description: 'Strategic multi-frame campaigns designed to drive clicks and direct audience action.',
      color: 'from-purple-500 to-indigo-500',
      glow: 'group-hover:shadow-purple-500/10'
    },
    {
      icon: Package,
      title: 'UGC Production',
      tag: 'Organic',
      description: 'Authentic user-generated content for your brand’s advertisements and social channels.',
      color: 'from-blue-500 to-cyan-500',
      glow: 'group-hover:shadow-blue-500/10'
    },
    {
      icon: Award,
      title: 'Partnerships',
      tag: 'Long Term',
      description: 'Consistent, authentic representation as a long-term face for your brand’s mission.',
      color: 'from-orange-500 to-amber-500',
      glow: 'group-hover:shadow-orange-500/10'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      
      {/* --- AMBIENT NEON BACKGROUND --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grainy Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-300">Collaboration</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
            Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 italic">Services</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
            High-production content solutions designed for modern brands and premium engagement.
          </p>
        </div>

        {/* Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className={`group relative p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 transition-all duration-700 hover:-translate-y-3 hover:border-white/20 hover:bg-[#0f0f0f] overflow-hidden shadow-2xl ${service.glow}`}
              >
                {/* Accent Corner Glow on Hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
                
                <div className="relative flex flex-col h-full z-10">
                  <div className="flex justify-between items-center mb-10">
                    {/* Icon with Glassmorphism Base */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl group-hover:rotate-[10deg] transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Minimal Tag */}
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
                        {service.tag}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* High-End Number Indicator */}
                  <span className="absolute -bottom-6 -right-2 text-[10rem] leading-none font-black text-white/[0.02] select-none group-hover:text-white/[0.04] transition-all duration-700">
                    {index + 1}
                  </span>
                </div>

                {/* Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-700`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}