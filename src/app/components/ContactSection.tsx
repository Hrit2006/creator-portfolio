import { Mail, Instagram, MapPin, Sparkles, Code2, ExternalLink, Phone, Globe } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-[#030303] overflow-hidden">
      
      {/* --- CINEMATIC BACKGROUND EFFECTS --- */}
      {/* Pulsing Neon Orbs */}
      <div className="absolute top-0 right-0 w-[60%] h-[50%] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Vertical Scanlines - adds a high-tech feel */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 100%' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-pink-400 text-[10px] font-black uppercase tracking-[0.4em]">
            <Sparkles className="w-3 h-3 animate-spin-slow" />
            <span>Ready for the spotlight</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">
            Let's create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 italic">the next trend</span>
          </h2>
        </div>

        {/* High-Contrast Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          
          {/* Email Card - Colorized Icon */}
          <a 
            href="mailto:collab.debarati@gmail.com"
            className="group relative flex flex-col items-center p-12 rounded-[3rem] bg-[#0a0a0a] border border-white/5 hover:border-pink-500/50 transition-all duration-700 hover:-translate-y-4"
          >
            <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 rounded-[3rem] transition-opacity duration-700" />
            
            {/* --- COLORIZED MAIL ICON --- */}
            <div className="relative mb-8 p-5 rounded-2xl bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-500">
              <Mail className="w-8 h-8" />
            </div>
            
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-3">Email Inquiries</p>
            <span className="text-white font-bold break-all text-center tracking-tight">collab.debarati@gmail.com</span>
          </a>

          {/* Instagram Card - Colorized Icon */}
          <a 
            href="https://instagram.com/liaaacoree_"
            target="_blank"
            className="group relative flex flex-col items-center p-12 rounded-[3rem] bg-[#0a0a0a] border border-white/5 hover:border-purple-500/50 transition-all duration-700 hover:-translate-y-4 shadow-2xl"
          >
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 rounded-[3rem] transition-opacity duration-700" />
            
            {/* --- COLORIZED INSTAGRAM ICON --- */}
            <div className="relative mb-8 p-5 rounded-2xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-500">
              <Instagram className="w-8 h-8" />
            </div>
            
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-3">Instant DM</p>
            <span className="text-white font-bold flex items-center gap-2 tracking-tight">
              @liaaacoree_ <ExternalLink className="w-4 h-4 opacity-40" />
            </span>
          </a>

          {/* Location Card */}
          <div className="relative flex flex-col items-center p-12 rounded-[3rem] bg-[#0a0a0a] border border-white/5 group overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
             <div className="mb-8 p-5 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform duration-500">
              <MapPin className="w-8 h-8" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-3">Production Base</p>
            <span className="text-white font-bold text-center tracking-tight">Kolkata, West Bengal</span>
          </div>
        </div>

        {/* --- LUXURY DEVELOPER CREDIT --- */}
        <div className="relative pt-20 border-t border-white/5">
          {/* Subtle Glow beneath credit */}
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          
          <div className="flex flex-col items-center group">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-white/10" />
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-pink-500/50 transition-colors">
                <Code2 className="w-5 h-5 text-gray-400 group-hover:text-pink-400" />
              </div>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>

            <div className="text-center space-y-2 mb-10">
              <p className="text-[10px] uppercase tracking-[0.6em] text-gray-600 font-black">Digital Architecture By</p>
              <h3 className="text-5xl md:text-7xl font-black tracking-[calc(-0.05em)] text-white">
                HRIT <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600">MAULIK</span>
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <a 
                href="tel:+918697574846" 
                className="group flex items-center gap-3 px-8 py-3 bg-[#0d0d0d] rounded-full border border-white/10 hover:border-pink-500/40 transition-all shadow-xl"
              >
                <div className="p-1.5 bg-pink-500/10 rounded-md">
                   <Phone className="w-4 h-4 text-pink-500" />
                </div>
                <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">+91 8697574846</span>
              </a>

              <div className="flex items-center gap-3 px-8 py-3 bg-white/5 rounded-full border border-white/5">
                <Globe className="w-4 h-4 text-gray-600" />
                <p className="text-[11px] text-gray-500 font-black uppercase tracking-[0.2em]">
                  © 2026 • Engineered in Kolkata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}