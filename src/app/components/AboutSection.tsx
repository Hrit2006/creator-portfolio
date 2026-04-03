import { MapPin, Heart, Sparkles, Instagram, Users, BarChart3, ArrowRight } from 'lucide-react';

export function AboutSection() {
  const howrahBridgeImage = "https://images.unsplash.com/photo-1648440108249-30567222448a?auto=format&fit=crop&q=80&w=1080";

  return (
    <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
      
      {/* --- AMBIENT DARK EFFECTS --- */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle Dot Matrix Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500/20" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">The Creator Behind</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 italic">Debarati</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 opacity-50" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side - Visual Storytelling with Parallax Feel */}
          <div className="relative group">
            {/* The Outer Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-2xl">
              <img 
                src={howrahBridgeImage} 
                alt="Howrah Bridge Kolkata" 
                className="w-full h-[550px] object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition duration-1000 ease-out"
              />
              
              {/* Overlay Gradient for Image Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

              {/* High-End Location Badge */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/60 backdrop-blur-2xl p-5 rounded-[2rem] border border-white/10 flex items-center gap-5 shadow-2xl">
                  <div className="bg-gradient-to-br from-orange-400 to-rose-500 p-3 rounded-2xl shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Production Hub</p>
                    <p className="text-xl font-bold text-white tracking-tight">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Bio */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="text-pink-400 w-6 h-6" />
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  Creative Storyteller
                </h3>
              </div>
              
              <p className="text-2xl text-gray-300 leading-snug font-light italic">
                Specializing in <span className="text-white font-medium underline decoration-purple-500 decoration-2 underline-offset-8">aesthetic lifestyle narratives</span> that bridge heritage and modern trends.
              </p>

              <p className="text-gray-400 leading-relaxed text-lg font-light">
                With a focus on high-engagement short-form video, I help brands connect through authentic, relatable, and visually stunning content. Every frame is crafted to celebrate individuality while maintaining a sophisticated, professional vibe.
              </p>
            </div>

            {/* Quick Stats - Bento Style */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-pink-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-pink-500/5 blur-2xl group-hover:bg-pink-500/10" />
                <BarChart3 className="w-8 h-8 text-pink-500 mb-4 transition-transform group-hover:scale-110" />
                <h4 className="text-4xl font-black text-white tracking-tighter">15K+</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Monthly Reach</p>
              </div>
              
              <div className="group relative p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10" />
                <Users className="w-8 h-8 text-purple-500 mb-4 transition-transform group-hover:scale-110" />
                <h4 className="text-4xl font-black text-white tracking-tighter">200K+</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Total Views</p>
              </div>
            </div>

            {/* Premium CTA */}
            <button className="group relative flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all hover:scale-105 active:scale-95 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Instagram className="relative w-5 h-5 group-hover:text-white transition-colors" />
              <span className="relative group-hover:text-white transition-colors">Start a Collaboration</span>
              <ArrowRight className="relative w-4 h-4 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}