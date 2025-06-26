import React from 'react';
import { MapPin, Building, Navigation } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Lokasi Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Berdomisili di Makassar, Sulawesi Selatan, Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 scroll-reveal">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg flex-shrink-0">
                  <Building className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Universitas</h3>
                  <p className="text-gray-300">Universitas DIPA Makassar</p>
                  <p className="text-gray-400">Teknik Informatika</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 scroll-reveal">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg flex-shrink-0">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Kota</h3>
                  <p className="text-gray-300">Makassar, Sulawesi Selatan</p>
                  <p className="text-gray-400">Indonesia</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/20 scroll-reveal">
              <div className="flex items-center space-x-2 mb-4">
                <Navigation className="text-purple-400" size={20} />
                <h3 className="text-lg font-semibold text-white">Tersedia untuk</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Kolaborasi remote</li>
                <li>• Meetup dan acara lokal</li>
                <li>• Peluang magang</li>
                <li>• Proyek akademik</li>
              </ul>
            </div>
          </div>

          <div className="relative scroll-reveal">
            <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-500/20 overflow-hidden">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1986.8979308429186!2d119.47306888803877!3d-5.136544974674364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1750928951888!5m2!1sid!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Lokasi Nelson di Makassar"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}