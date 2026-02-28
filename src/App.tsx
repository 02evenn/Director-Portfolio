/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MessageSquare,
  ChevronRight, 
  ArrowUpRight,
  Menu,
  X,
  Calendar,
  GraduationCap,
  User,
  ExternalLink,
  Maximize2,
  Download
} from 'lucide-react';
import { PROJECTS, CATEGORIES } from './constants';
import { Project, ProjectCategory } from './types';

const optimizeImage = (url: string, width?: number, quality: number = 80) => {
  if (!url || !url.startsWith('http')) return url;
  const baseUrl = 'https://images.weserv.nl/?url=';
  let optimizedUrl = `${baseUrl}${encodeURIComponent(url)}&output=webp&q=${quality}`;
  if (width) {
    optimizedUrl += `&w=${width}`;
  }
  return optimizedUrl;
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | '全部'>('全部');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewingFullImage, setViewingFullImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = selectedCategory === '全部' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-accent selection:text-white relative overflow-x-hidden">
      {/* Reference-inspired Gradient Background with Light Flow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 no-print">
        {/* Sharper Grain Overlay (Background only) */}
        <div className="bg-particles opacity-[0.1]" />
        
        {/* Vibrant Blobs - Inspired by the reference posters */}
        <motion.div 
          className="absolute w-[60vw] h-[60vw] -top-[10%] -left-[10%] rounded-full opacity-30 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #F08028 0%, #FF4B2B 50%, transparent 100%)',
          }}
          animate={{
            x: [-20, 20, -20],
            y: [-30, 30, -30],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className="absolute w-[50vw] h-[50vw] top-[20%] -right-[5%] rounded-full opacity-25 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #487098 0%, #386080 50%, transparent 100%)',
          }}
          animate={{
            x: [30, -30, 30],
            y: [20, -20, 20],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dynamic Light Flow Streaks */}
        <motion.div 
          className="absolute w-[150%] h-[400px] top-1/4 -left-[25%] opacity-20 blur-[100px] rotate-[-15deg]"
          style={{
            background: 'linear-gradient(90deg, transparent, #487098, #487098, transparent)',
          }}
          animate={{
            x: ['-20%', '20%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div 
          className="absolute w-[100%] h-[1px] top-1/3 left-0 bg-white/40 blur-[1px]"
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div 
          className="absolute w-[45vw] h-[45vw] bottom-[10%] left-[15%] rounded-full opacity-20 blur-[110px]"
          style={{
            background: 'radial-gradient(circle, #F08028 0%, #C0B898 60%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className="absolute w-[40vw] h-[40vw] top-[40%] left-[30%] rounded-full opacity-[0.12] blur-[130px]"
          style={{
            background: 'radial-gradient(circle, #182868 0%, transparent 70%)',
          }}
          animate={{
            x: [-50, 50, -50],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm border-b border-brand-accent/10' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-xl font-serif font-bold tracking-tight text-brand-deep"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Nevaeh's <span className="text-brand-accent italic">Personal Portfolio</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            {[
              { name: '关于我', id: 'about' },
              { name: '作品展示', id: 'works' },
              { name: '联系合作', id: 'contact' }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-sm tracking-widest font-bold text-brand-deep/70 hover:text-brand-accent transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full" />
              </a>
            ))}
            {/* Download PDF Button */}
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 bg-brand-accent text-white rounded-full text-xs font-bold hover:bg-brand-deep transition-all shadow-lg shadow-brand-accent/20 no-print"
            >
              <Download size={14} />
              导出 PDF
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-deep p-2 bg-brand-accent/10 rounded-lg no-print" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-30 bg-brand-cream flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {[
              { name: '关于我', id: 'about' },
              { name: '作品展示', id: 'works' },
              { name: '联系合作', id: 'contact' }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif font-bold text-brand-deep hover:text-brand-accent"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => window.print(), 300);
              }}
              className="mt-4 flex items-center gap-3 px-8 py-4 bg-brand-accent text-white rounded-full text-lg font-bold shadow-xl shadow-brand-accent/20"
            >
              <Download size={24} />
              导出 PDF 格式
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero Section (About Me) */}
        <section id="about" className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-24 pb-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Side: Info Stack */}
            <motion.div
              className="lg:col-span-7 flex flex-col gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-2">
                <h1 className="text-6xl md:text-9xl font-serif font-bold text-brand-deep leading-none">
                  林安琪
                </h1>
                <p className="text-4xl md:text-6xl font-serif text-brand-accent italic font-light">
                  Nevaeh
                </p>
                <p className="text-2xl md:text-3xl text-brand-deep/40 font-medium">
                  임앤기
                </p>
              </div>

              <div className="w-20 h-1 bg-brand-accent rounded-full" />

              <div className="space-y-8">
                {/* Personal Info */}
                <div className="flex flex-col md:flex-row items-start md:items-start gap-4 md:gap-6">
                  <div className="p-3 md:p-4 bg-brand-deep text-white rounded-2xl shadow-lg shadow-brand-deep/20">
                    <User size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-white px-3 py-1 bg-brand-deep rounded-lg mb-2 inline-block shadow-sm whitespace-nowrap">个人信息 / Profile</h3>
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-xl md:text-2xl font-bold text-brand-deep whitespace-nowrap">2004年5月出生</p>
                      <p className="text-lg md:text-xl font-medium text-brand-accent whitespace-nowrap">MBTI: INTJ</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="flex flex-col md:flex-row items-start md:items-start gap-4 md:gap-6">
                  <div className="p-3 md:p-4 bg-brand-blue-mid text-white rounded-2xl shadow-lg shadow-brand-blue-mid/20">
                    <GraduationCap size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-white px-3 py-1 bg-brand-deep rounded-lg mb-2 inline-block shadow-sm whitespace-nowrap">教育背景 / Education</h3>
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-xl md:text-2xl font-bold text-brand-deep whitespace-nowrap">厦门理工学院</p>
                      <p className="text-lg md:text-xl font-medium text-brand-blue-dark whitespace-nowrap">影视摄影与制作专业本科</p>
                      <p className="text-xs md:text-sm font-black text-white px-3 py-1 bg-brand-blue-dark rounded-lg mt-1 inline-block shadow-sm whitespace-nowrap">2026年6月毕业</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 no-print">
                <a href="#works" className="group inline-flex items-center gap-3 px-10 py-5 bg-brand-deep text-brand-cream rounded-full font-bold hover:bg-brand-accent transition-all shadow-2xl shadow-brand-deep/20">
                  查看作品集 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Side: Portrait */}
            <motion.div 
              className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="w-full max-w-[320px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(24,40,104,0.2)] relative z-10 border-[8px] md:border-[12px] border-white">
                <img 
                  src={optimizeImage("https://cdn.jsdelivr.net/gh/02evenn/images@main/%E8%AF%81%E4%BB%B6%E7%85%A7.jpg", 640)} 
                  alt="林安琪 Nevaeh" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Background Elements */}
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-brand-accent rounded-full -z-10 blur-[100px] opacity-20" />
              <div className="absolute -top-12 -left-12 w-60 h-60 bg-brand-blue-mid rounded-full -z-10 blur-[80px] opacity-15" />
            </motion.div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold tracking-widest uppercase">
                Portfolio
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-deep">作品展示</h2>
              <p className="text-brand-blue-dark max-w-md text-base md:text-lg">
                点击作品图片查看详情定帧及创作说明。
              </p>
            </div>
            
            {/* Filter */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-start md:justify-end no-print">
              <button 
                onClick={() => setSelectedCategory('全部')}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${selectedCategory === '全部' ? 'bg-brand-accent text-white shadow-xl shadow-brand-accent/30' : 'bg-white text-brand-deep hover:bg-brand-accent/10 border border-brand-accent/10'}`}
              >
                全部
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-brand-accent text-white shadow-xl shadow-brand-accent/30' : 'bg-white text-brand-deep hover:bg-brand-accent/10 border border-brand-accent/10'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col"
                >
                  {/* Image Container with Click for Modal */}
                  <div 
                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-2xl bg-white p-2 cursor-zoom-in group-hover:shadow-brand-accent/20 transition-all duration-500"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                      {/* Blurred Background Layer */}
                      <img 
                        src={optimizeImage(project.imageUrl, 100, 20)} 
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      {/* Main Image Layer */}
                      <img 
                        src={optimizeImage(project.imageUrl, 800)} 
                        alt={project.title} 
                        className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 z-20 bg-brand-deep/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                          <Maximize2 size={32} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-6 left-6 z-30 px-4 py-2 bg-brand-accent text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {project.category}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-2 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-bold text-brand-deep group-hover:text-brand-accent transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <span className="text-sm font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-lg">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-brand-blue-dark font-bold mb-4 flex items-center gap-2">
                      <span className="w-4 h-0.5 bg-brand-accent rounded-full" />
                      {project.role}
                    </p>
                    
                    <p className="text-white bg-brand-deep/90 p-4 rounded-2xl text-sm leading-relaxed mb-6 shadow-lg h-fit">
                      {project.description}
                    </p>

                    {/* Action Button */}
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-2 w-full py-4 bg-brand-deep/5 hover:bg-brand-accent hover:text-white text-brand-deep rounded-2xl font-bold transition-all group/btn no-print"
                    >
                      点击查看详情
                      <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12 bg-brand-deep/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-brand-cream w-full max-w-6xl max-h-full overflow-y-auto rounded-[2rem] md:rounded-[3rem] shadow-2xl relative"
                onClick={e => e.stopPropagation()}
              >
                <div className="sticky top-0 right-0 w-full flex justify-end p-4 md:p-8 pt-24 md:pt-8 z-50 pointer-events-none">
                  <button 
                    className="p-3 md:p-4 bg-brand-deep text-white rounded-full hover:bg-brand-accent transition-colors shadow-xl pointer-events-auto"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X size={20} className="md:w-6 md:h-6" />
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 -mt-16 md:-mt-24">
                  {/* Image/Frame Display */}
                  <div className="space-y-6">
                    {selectedProject.iframeUrl ? (
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-brand-accent uppercase tracking-widest flex items-center gap-2">
                          <span className="w-4 h-0.5 bg-brand-accent rounded-full" />
                          作品播放 / Playback
                        </h4>
                        <div className="aspect-video rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-black">
                          <iframe 
                            src={selectedProject.iframeUrl} 
                            allowFullScreen 
                            allow="fullscreen"
                            className="w-full h-full border-none"
                          />
                        </div>
                      </div>
                    ) : selectedProject.videoUrl ? (
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-brand-accent uppercase tracking-widest flex items-center gap-2">
                          <span className="w-4 h-0.5 bg-brand-accent rounded-full" />
                          预告片 / Trailer
                        </h4>
                        <div className="aspect-video rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-black">
                          <video 
                            src={selectedProject.videoUrl} 
                            controls 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ) : (
                      <div 
                        className="aspect-video rounded-[2rem] overflow-hidden shadow-xl border-4 border-white cursor-zoom-in group/img relative"
                        onClick={() => setViewingFullImage(selectedProject.imageUrl)}
                      >
                        <img 
                          src={optimizeImage(selectedProject.imageUrl, 1200)} 
                          alt={selectedProject.title} 
                          className="w-full h-full object-contain bg-brand-sand/5"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="text-white" size={32} />
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.groupedImages ? (
                        <div className="col-span-2 space-y-8">
                          {selectedProject.groupedImages.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-4">
                              <h5 className="text-sm font-bold text-brand-deep/60 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-brand-accent/20" />
                                {group.title}
                              </h5>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {group.images.map((img, iIdx) => (
                                  <div 
                                    key={iIdx} 
                                    className="aspect-square rounded-xl overflow-hidden bg-brand-sand/20 cursor-zoom-in group/img relative"
                                    onClick={() => setViewingFullImage(img)}
                                  >
                                    <img 
                                      src={optimizeImage(img, 400)} 
                                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                                      referrerPolicy="no-referrer" 
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                      <Maximize2 className="text-white" size={16} />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : selectedProject.detailImages && selectedProject.detailImages.length > 0 ? (
                        selectedProject.detailImages.map((img, idx) => (
                          <div 
                            key={idx} 
                            className="aspect-video rounded-2xl overflow-hidden bg-brand-sand/20 cursor-zoom-in group/img relative"
                            onClick={() => setViewingFullImage(img)}
                          >
                            <img 
                              src={optimizeImage(img, 800)} 
                              className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" 
                              referrerPolicy="no-referrer" 
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                              <Maximize2 className="text-white" size={20} />
                            </div>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="aspect-video rounded-2xl overflow-hidden bg-brand-sand/20">
                            <img src={`https://picsum.photos/seed/${selectedProject.id}1/600/400`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                          </div>
                          <div className="aspect-video rounded-2xl overflow-hidden bg-brand-sand/20">
                            <img src={`https://picsum.photos/seed/${selectedProject.id}2/600/400`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Details Stack */}
                  <div className="flex flex-col justify-start">
                    <div className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                      {selectedProject.category}
                    </div>
                    <h2 className="text-5xl font-serif font-bold text-brand-deep mb-4 leading-tight">
                      {selectedProject.title}
                    </h2>
                    <div className="flex gap-4 mb-8">
                      <span className="px-3 py-1 bg-brand-deep text-white rounded-lg text-sm font-bold">{selectedProject.year}</span>
                      <span className="px-3 py-1 border border-brand-deep/20 text-brand-deep rounded-lg text-sm font-bold">{selectedProject.role}</span>
                    </div>
                    
                    <div className="space-y-6 mb-12">
                      <h4 className="text-lg font-bold text-brand-deep flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-brand-accent rounded-full" />
                        创作说明 / Concept
                      </h4>
                      <p className="text-white bg-brand-deep p-8 rounded-[2rem] text-lg leading-relaxed shadow-xl">
                        {selectedProject.concept || selectedProject.description}
                      </p>
                      {selectedProject.awards && (
                        <div className="p-6 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl">
                          <p className="text-brand-accent font-bold flex items-center gap-2">
                            🏆 获奖情况：{selectedProject.awards}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {selectedProject.link && (
                        <a 
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-deep transition-all shadow-xl shadow-brand-accent/20 flex-1 min-w-[200px]"
                        >
                          {selectedProject.category === '微电影' ? '在新片场app查看完整作品' : (selectedProject.category === '综艺' ? '百度网盘链接' : (selectedProject.category === '策展成果' ? '查看更多' : (selectedProject.extraLinks ? '查看主链接' : '查看详情')))} 
                          <ExternalLink size={20} />
                        </a>
                      )}
                      
                      {selectedProject.extraLinks?.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-deep/5 hover:bg-brand-accent hover:text-white text-brand-deep rounded-full font-bold transition-all flex-1 min-w-[200px]"
                        >
                          {link.label} <ExternalLink size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="bg-brand-deep rounded-[2rem] md:rounded-[4rem] p-6 md:p-24 text-white relative overflow-hidden shadow-2xl shadow-brand-deep/40">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] no-print" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-blue-mid/10 rounded-full blur-[100px] no-print" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                  Collaboration
                </div>
                <h2 className="text-3xl md:text-8xl font-serif font-bold mb-10 leading-[1.1] whitespace-nowrap">
                  期待与您的 <br />
                  <span className="text-brand-accent italic">精彩合作</span>
                </h2>
                <p className="text-white/60 text-xl mb-12 max-w-lg leading-relaxed mx-auto lg:mx-0">
                  永葆初心，向上向前。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                  <a 
                    href="mailto:15880690861@163.com" 
                    className="flex items-center gap-4 md:gap-6 p-4 md:p-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand-accent text-white flex items-center justify-center shadow-lg">
                      <Mail size={32} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">电子邮箱</p>
                      <p className="text-sm md:text-xl font-bold">15880690861@163.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* WeChat QR Code Section */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="bg-white p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl transform rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-[280px] md:max-w-[320px] mx-auto lg:mx-0">
                  <div className="flex flex-col items-center gap-4 md:gap-6">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-brand-cream rounded-2xl flex items-center justify-center border-2 border-dashed border-brand-accent/20 relative overflow-hidden">
                      <img 
                        src={optimizeImage("https://cdn.jsdelivr.net/gh/02evenn/images@main/%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%811.jpg", 512)} 
                        alt="WeChat QR Code" 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 text-brand-accent mb-1">
                        <MessageSquare size={18} />
                        <span className="font-bold uppercase tracking-widest text-xs">WeChat ID</span>
                      </div>
                      <p className="text-2xl font-serif font-bold text-brand-deep">AN27</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Full Image Lightbox */}
      <AnimatePresence>
        {viewingFullImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setViewingFullImage(null)}
          >
            <button 
              className="absolute top-8 right-8 p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors z-10"
              onClick={() => setViewingFullImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={viewingFullImage} 
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-brand-accent/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-2xl font-serif font-bold text-brand-deep">Nevaeh's <span className="text-brand-accent">Portfolio</span></h3>
            <p className="text-sm text-brand-sand font-bold tracking-widest uppercase">
              © {new Date().getFullYear()} 林安琪. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-12">
            <a href="#about" className="text-xs uppercase tracking-widest font-bold hover:text-brand-accent transition-colors">关于我</a>
            <a href="#works" className="text-xs uppercase tracking-widest font-bold hover:text-brand-accent transition-colors">作品展示</a>
            <a href="#contact" className="text-xs uppercase tracking-widest font-bold hover:text-brand-accent transition-colors">联系合作</a>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 rounded-full bg-brand-accent text-white flex items-center justify-center hover:bg-brand-deep transition-all shadow-xl shadow-brand-accent/20"
          >
            <ArrowUpRight className="-rotate-45" size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
}
