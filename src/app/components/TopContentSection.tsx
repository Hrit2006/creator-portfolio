import { Eye, Share2, TrendingUp, Sparkles } from 'lucide-react';

interface TopContentSectionProps {
  image1: string;
  image2: string;
}

export function TopContentSection({ image1, image2 }: TopContentSectionProps) {
  const topReels = [
    {
      image: image1,
      views: '44K',
      title: 'Plot k liye school mein kand...',
      insight: 'Strategic use of relatable storytelling and trending audio hooks.',
      category: 'Viral Humor',
      accent: 'from-pink-500 to-rose-500',
      glow: 'group-hover:shadow-pink-500/20'
    },
    {
      image: image2,
      views: '25K',
      title: 'Red Outfit Aesthetic',
      insight: 'High-production fashion visuals driving premium brand engagement.',
      category: 'Lifestyle',
      accent: 'from-purple-500 to-indigo-500',
      glow: 'group-hover:shadow-purple-500/20'
    }
  ];

  return (
    <section className="relative py-28 px-6 bg-[#080808] overflow-hidden">
      
      {/* --- HIGH-CONTRAST AMBIENT BACKGROUND --- */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtlest Grid Overlay for Depth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-pink-500/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-pink-400" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500/80">Performance Analytics</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85]">
              Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 italic">Content</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg font-light md:text-right max-w-xs border-l-2 md:border-l-0 md:border-r-2 border-pink-500/30 pl-4 md:pr-4">
            A deep dive into the metrics behind recent high-performance reels.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {topReels.map((reel, index) => (
            <div key={index} className="group relative flex flex-col">
              
              {/* Image Container */}
              <div className={`relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 transition-all duration-500 ${reel.glow} hover:border-white/20`}>
                <img 
                  src={reel.image} 
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
                
                {/* Overlay Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                {/* Vertical Category Label */}
                <div className="absolute top-10 left-0 py-2 px-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-r-full shadow-xl">
                   {reel.category}
                </div>

                {/* Floating Stats Bar */}
                <div className="absolute bottom-8 left-6 right-6 p-5 rounded-[2rem] bg-black/60 backdrop-blur-2xl border border-white/10 flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${reel.accent} shadow-lg`}>
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Total Views</p>
                      <p className="text-2xl font-black text-white leading-none tracking-tight">{reel.views}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 text-pink-400 mb-1">
                      <Share2 className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-tighter">Engagement</span>
                    </div>
                    <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                       <div className={`h-full bg-gradient-to-r ${reel.accent} w-[85%]`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Info Below Image */}
              <div className="mt-10 px-4">
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Case Study 0{index + 1}</span>
                </div>
                <h3 className="text-4xl font-black text-white mb-4 tracking-tighter group-hover:text-pink-400 transition-colors duration-300">
                  {reel.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-xl">
                  {reel.insight}
                </p>
              </div>

              {/* Background Glow Shadow (Visible on Hover) */}
              <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${reel.accent} opacity-0 group-hover:opacity-5 blur-[100px] transition-opacity duration-700`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}