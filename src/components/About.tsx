import React from 'react';
import { BookOpen, Code2, Lightbulb, Target } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <BookOpen className="text-purple-400" size={24} />,
      title: "Pendidikan",
      description: "Saat ini menempuh pendidikan Teknik Informatika di Universitas DIPA Makassar"
    },
    {
      icon: <Code2 className="text-purple-400" size={24} />,
      title: "Pemrograman",
      description: "Passionate dalam pengembangan perangkat lunak dan teknologi web modern"
    },
    {
      icon: <Lightbulb className="text-purple-400" size={24} />,
      title: "Inovasi",
      description: "Selalu antusias mempelajari teknologi baru dan memecahkan masalah kompleks"
    },
    {
      icon: <Target className="text-purple-400" size={24} />,
      title: "Tujuan",
      description: "Bercita-cita menjadi software engineer yang terampil dan berkontribusi pada proyek inovatif"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 scroll-reveal">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Perjalanan Saya</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sebagai mahasiswa sarjana Teknik Informatika di Universitas DIPA Makassar, 
              saya passionate dalam mengeksplorasi kemungkinan tak terbatas dari teknologi. Perjalanan akademik saya 
              telah membekali saya dengan fondasi yang kuat dalam pemrograman, pengembangan perangkat lunak, dan pemecahan masalah. 
              Saya terus mencari peluang untuk menerapkan pengetahuan saya dalam proyek-proyek dunia nyata dan berkontribusi 
              pada solusi inovatif yang dapat memberikan dampak positif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}