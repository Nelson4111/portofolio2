import React from 'react';
import { Heart, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 py-12 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Dibuat dengan</span>
            <Heart className="text-red-500 fill-current animate-pulse" size={16} />
            <span>dan</span>
            <Code className="text-purple-400" size={16} />
            <span>oleh Nelson Randanan</span>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nelson Randanan
            </h3>
            <p className="text-gray-400">
              Mahasiswa Teknik Informatika di Universitas DIPA Makassar
            </p>
          </div>

          <div className="pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Nelson Randanan. Semua hak dilindungi.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Dibangun dengan React, TypeScript, dan Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}