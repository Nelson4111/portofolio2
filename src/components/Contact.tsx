import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="text-purple-400" size={24} />,
      label: "WhatsApp",
      value: "+62 812 4110 0804",
      href: "https://wa.me/6281241100804",
      description: "Kirim pesan WhatsApp kepada saya"
    },
    {
      icon: <Mail className="text-purple-400" size={24} />,
      label: "Email",
      value: "nelsonrandanan@gmail.com",
      href: "mailto:nelsonrandanan@gmail.com",
      description: "Kirim email kapan saja"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-pink-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Hubungi Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi saya untuk kolaborasi, peluang, atau sekadar menyapa!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.label}</h3>
                  <p className="text-gray-400 mb-3">{item.description}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                  >
                    <span>{item.value}</span>
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto scroll-reveal">
            <h3 className="text-2xl font-bold text-white mb-4">Mari Terhubung!</h3>
            <p className="text-gray-300 mb-6">
              Saya selalu terbuka untuk mendiskusikan peluang baru, proyek menarik, atau sekadar mengobrol tentang teknologi.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://wa.me/6281241100804"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp Saya
              </a>
              <a
                href="mailto:nelsonrandanan@gmail.com"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}