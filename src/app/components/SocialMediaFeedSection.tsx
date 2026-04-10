import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Heart, MessageCircle, Play } from 'lucide-react';

const feedItems = [
  {
    id: 1,
    type: 'image',
    src: '/splitsvilla.jpeg',
    likes: '51K',
    comments: 100
  },
  {
    id: 2,
    type: 'video',
    src: '/school-plot-jinia.jpeg',
    likes: '44.1K',
    comments: 35
  },
  {
    id: 3,
    type: 'image',
    src: '/school-plot-jinia.jpeg.jpeg',
    likes: '62K',
    comments: 2000
  },
  {
    id: 4,
    type: 'image',
    src: '/growhair.jpeg',
    likes: '8K',
    comments: 20
  },
  {
    id: 5,
    type: 'video',
    src: '/big_believer.jpeg',
    likes: '4.8K',
    comments: 12
  },
  {
    id: 6,
    type: 'image',
    src: '/bengali.jpeg',
    likes: '80K',
    comments: 23
  }
];

export function SocialMediaFeedSection() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden ring-1 ring-white/5 border-t border-white/5">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full overflow-hidden">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Feed</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl font-light leading-relaxed">
              A curated look into latest fashion drops, lifestyle vlogs, and behind-the-scenes moments.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            </div>
          </div>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="24px">
            {feedItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10"
              >
                {/* Image */}
                <div className="overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={item.src}
                    alt={`Feed content ${item.id}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-50 min-h-[250px]"
                    loading="lazy"
                  />
                </div>

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                  {item.type === 'video' && (
                    <div className="mb-4 bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  )}
                  <div className="flex items-center gap-6 text-white font-bold text-lg drop-shadow-md">
                    <div className="flex items-center gap-2">
                      <Heart className="w-6 h-6 fill-white text-white" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-6 h-6 fill-white text-white" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Top-Right Icon Indicator */}
                <div className="absolute top-4 right-4 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                  {item.type === 'video' ? (
                    <div className="bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://instagram.com/liaaacoree_"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <span className="px-8 py-4 bg-[#0a0a0a] border border-white/20 text-white rounded-full font-bold uppercase text-sm tracking-widest hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-all">
              View Full Feed
            </span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-pink-400 transition-colors">Opens Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
