import { Eye, Users, TrendingUp, MapPin, Sparkles, Activity } from 'lucide-react';

export function AnalyticsSection() {
  const stats = [
    {
      icon: Eye,
      label: '30-Day Reach',
      value: '320K+',
      subtitle: 'Total Views',
      color: 'from-pink-500 via-rose-600 to-indigo-600',
      glowColor: 'group-hover:shadow-[0_0_50px_-10px_rgba(236,72,153,0.3)]',
      bgGlow: 'bg-pink-500/20'
    },
    {
      icon: TrendingUp,
      label: 'Top Performing Reel',
      value: '80K+',
      subtitle: 'Viral Engagement',
      color: 'from-purple-500 via-violet-600 to-blue-600',
      glowColor: 'group-hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]',
      bgGlow: 'bg-purple-500/20'
    },
    {
      icon: Users,
      label: 'Followers',
      value: '1200',
      subtitle: 'Highly Engaged',
      color: 'from-blue-500 via-cyan-600 to-teal-600',
      glowColor: 'group-hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)]',
      bgGlow: 'bg-blue-500/20'
    },
    {
      icon: MapPin,
      label: 'Primary Audience',
      value: '18-24',
      subtitle: 'Women, India',
      color: 'from-orange-500 via-amber-600 to-rose-600',
      glowColor: 'group-hover:shadow-[0_0_50px_-10px_rgba(249,115,22,0.3)]',
      bgGlow: 'bg-orange-500/20'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#030303] overflow-hidden">

      {/* --- ENHANCED NEON AMBIANCE --- */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none animate-pulse transition-all duration-1000" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Activity className="w-3.5 h-3.5 text-green-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Live Insights</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
            Growth & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 italic">Impact</span>
          </h2>
        </div>

        {/* Analytics Grid with Deep Glows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:-translate-y-4 hover:border-white/20 shadow-2xl ${stat.glowColor} overflow-hidden`}
              >
                {/* --- INTENSE BACKGROUND GLOW (Behind the card content) --- */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 ${stat.bgGlow} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className={`absolute -bottom-20 -left-20 w-64 h-64 ${stat.bgGlow} blur-[80px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Color-Rich Icon */}
                  <div className="mb-10 relative inline-block">
                    {/* Pulsing ring around icon */}
                    <div className={`absolute inset-[-8px] bg-gradient-to-r ${stat.color} blur-xl opacity-0 group-hover:opacity-50 transition-all duration-700 rounded-full`} />

                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                      {stat.label}
                    </p>
                    <h3 className="text-5xl font-black text-white tracking-tighter group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">
                      {stat.value}
                    </h3>
                    <p className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors italic">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Corner Indicator */}
                <div className={`absolute top-8 right-8 w-1 h-8 rounded-full bg-gradient-to-b ${stat.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}