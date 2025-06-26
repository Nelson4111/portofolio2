import React, { useState } from 'react';
import { Code2, Palette, Database, Globe, Zap, Layers } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Pengembangan Frontend',
      icon: <Globe className="text-purple-400" size={24} />,
      skills: [
        { name: 'HTML5', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-orange-500' },
        { name: 'React', level: 75, color: 'from-cyan-500 to-blue-500' },
        { name: 'TypeScript', level: 70, color: 'from-blue-600 to-indigo-600' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-500 to-cyan-500' }
      ]
    },
    backend: {
      title: 'Backend & Database',
      icon: <Database className="text-purple-400" size={24} />,
      skills: [
        { name: 'Node.js', level: 70, color: 'from-green-500 to-emerald-500' },
        { name: 'Python', level: 75, color: 'from-blue-500 to-yellow-500' },
        { name: 'MySQL', level: 65, color: 'from-blue-600 to-cyan-600' },
        { name: 'MongoDB', level: 60, color: 'from-green-600 to-teal-600' },
        { name: 'REST APIs', level: 70, color: 'from-purple-500 to-pink-500' }
      ]
    },
    tools: {
      title: 'Tools & Teknologi',
      icon: <Zap className="text-purple-400" size={24} />,
      skills: [
        { name: 'Git & GitHub', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-purple-500' },
        { name: 'Figma', level: 70, color: 'from-purple-500 to-pink-500' },
        { name: 'Vite', level: 75, color: 'from-yellow-500 to-purple-500' },
        { name: 'npm/yarn', level: 80, color: 'from-red-500 to-pink-500' }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Keahlian Teknis
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mahir dalam teknologi web modern dan tools pengembangan
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 scroll-smooth-btn ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-500/20'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm scroll-reveal">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left animate-skill-bar`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 scroll-reveal">
            <Code2 className="text-purple-400 mx-auto mb-4" size={32} />
            <h4 className="text-xl font-semibold text-white mb-2">Kode Bersih</h4>
            <p className="text-gray-300">Menulis kode yang maintainable dan scalable mengikuti best practices</p>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 scroll-reveal">
            <Palette className="text-purple-400 mx-auto mb-4" size={32} />
            <h4 className="text-xl font-semibold text-white mb-2">Desain UI/UX</h4>
            <p className="text-gray-300">Menciptakan antarmuka pengguna yang indah dan intuitif</p>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 scroll-reveal">
            <Layers className="text-purple-400 mx-auto mb-4" size={32} />
            <h4 className="text-xl font-semibold text-white mb-2">Full Stack</h4>
            <p className="text-gray-300">Pengembangan end-to-end dari frontend hingga backend</p>
          </div>
        </div>
      </div>
    </section>
  );
}