import React from 'react';
import { Github, Instagram, Mail, MessageCircle } from 'lucide-react';

export function SocialMedia() {
  const socialLinks = [
    {
      name: 'GitHub',
      username: 'Nelson4111',
      url: 'https://github.com/Nelson4111',
      icon: <Github size={32} />,
      color: 'hover:bg-gray-700',
      description: 'Lihat repositori kode saya'
    },
    {
      name: 'Instagram',
      username: '@nelson_randanan',
      url: 'https://instagram.com/nelson_randanan',
      icon: <Instagram size={32} />,
      color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600',
      description: 'Ikuti update harian saya'
    },
    {
      name: 'WhatsApp',
      username: '+62 812 4110 0804',
      url: 'https://wa.me/6281241100804',
      icon: <MessageCircle size={32} />,
      color: 'hover:bg-green-600',
      description: 'Kirim pesan langsung'
    },
    {
      name: 'Email',
      username: 'nelsonrandanan@gmail.com',
      url: 'mailto:nelsonrandanan@gmail.com',
      icon: <Mail size={32} />,
      color: 'hover:bg-blue-600',
      description: 'Kirim email kepada saya'
    }
  ];

  return (
    <section id="social" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Media Sosial
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Terhubung dengan saya di berbagai platform dan ikuti perjalanan saya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gray-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 text-purple-400 mb-4 transition-all duration-300 group-hover:text-white ${social.color}`}>
                  {social.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{social.name}</h3>
                <p className="text-purple-400 font-medium mb-2">{social.username}</p>
                <p className="text-gray-400 text-sm">{social.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 max-w-3xl mx-auto scroll-reveal">
            <h3 className="text-2xl font-bold text-white mb-4">Mari Membangun Sesuatu yang Luar Biasa Bersama!</h3>
            <p className="text-gray-300 mb-6">
              Saya selalu senang terhubung dengan sesama developer, berkolaborasi dalam proyek, 
              dan berbagi pengetahuan. Baik Anda mencari rekan tim, ingin mendiskusikan tren teknologi terbaru, 
              atau sekadar ingin menyapa, saya akan senang mendengar dari Anda!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Nelson4111"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Github size={20} />
                <span>Ikuti di GitHub</span>
              </a>
              <a
                href="https://instagram.com/nelson_randanan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Instagram size={20} />
                <span>Ikuti di Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}