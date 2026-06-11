/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { galleryImages } from '../../data';
import { Star, Camera, X, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import SEOHead from '../SEOHead';

interface GalleryViewProps {
  onNavigate: (path: string) => void;
}

export default function GalleryView({ onNavigate }: GalleryViewProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bromo' | 'tumpak-sewu' | 'kawah-ijen'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images based on simple title keyword matching
  const filteredImages = galleryImages.filter((img) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bromo') return img.caption.toLowerCase().includes('bromo');
    if (activeFilter === 'tumpak-sewu') return img.caption.toLowerCase().includes('tumpak sewu') || img.caption.toLowerCase().includes('sewu');
    if (activeFilter === 'kawah-ijen') return img.caption.toLowerCase().includes('ijen') || img.caption.toLowerCase().includes('biru');
    return true;
  });

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(nextIdx);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(prevIdx);
  };

  return (
    <div id="gallery-container" className="animate-fade-in text-gray-200">
      <SEOHead
        title="Galeri Foto Keindahan Bromo, Ijen, &amp; Tumpak Sewu | Bromo Panca"
        description="Lihat galeri dokumentasi real trip pariwisata premium Bromo Panca. Dokumentasi Jeep 4x4, sunrise Penanjakan, api biru Ijen, dan dasar Tumpak Sewu."
        canonicalUrl="https://bromopanca.com/galeri.html"
      />

      {/* 1. Hero Title */}
      <section className="bg-forest-900 border-b border-gold-400/10 pt-32 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
            EXPLORE IN PICTURES
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-gold-100 uppercase">
            Galeri Dokumentasi Kamera
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto font-light">
            Saksikan foto-foto orisinal tangkapan lensa dari tamu-tamu istimewa Bromo Panca selama menjelajahi pesona kaldera vulkanik dan keajaiban semesta Jawa Timur.
          </p>
        </div>
      </section>

      {/* 2. Masonry Gallery with lightbox and filter */}
      <section className="py-16 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {(['all', 'bromo', 'tumpak-sewu', 'kawah-ijen'] as const).map((id) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`px-4.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                  activeFilter === id
                    ? 'bg-gold-300 border-gold-300 text-forest-950 font-bold'
                    : 'bg-forest-900 border-gold-400/10 text-gray-400 hover:border-gold-404/40 hover:text-gold-200'
                }`}
              >
                {id.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative overflow-hidden rounded-2xl border border-gold-400/15 bg-forest-900 shadow-xl cursor-pointer"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={img.url}
                    alt={img.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="flex items-center gap-1 text-[9px] font-mono text-gold-300 uppercase tracking-widest mb-1.5">
                      <Camera className="w-3.5 h-3.5" /> Bromo Panca Lens
                    </span>
                    <h3 className="font-serif font-semibold text-xs sm:text-sm text-gold-100 leading-snug">
                      {img.caption}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Lightbox Interactive Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-forest-950/98 backdrop-blur-md flex flex-col justify-center items-center p-4"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white bg-forest-900/60 p-2 rounded-full border border-gold-400/20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox slide */}
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Prev image */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-300 hover:text-white bg-forest-900/80 p-3 rounded-full border border-gold-400/10 cursor-pointer select-none"
            >
              &#10094;
            </button>

            {/* Current Image */}
            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].caption}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] object-contain rounded-xl border border-gold-400/25 shadow-2xl"
            />

            {/* Next image */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-300 hover:text-white bg-forest-900/80 p-3 rounded-full border border-gold-400/10 cursor-pointer select-none"
            >
              &#10095;
            </button>

            {/* Caption */}
            <p className="mt-4 font-serif text-sm font-medium text-gold-200 text-center uppercase tracking-wide">
              {filteredImages[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}

      {/* 4. Inquiry Hook */}
      <section className="py-20 bg-forest-900 border-t border-gold-400/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[10px] font-mono text-gold-300 uppercase block mb-1">INTERESTED IN TAKING THESE PHOTOS?</span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gold-100">Dapatkan Album Foto Eksklusif Anda Sendiri</h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed max-w-lg mx-auto font-light">
            Setiap paket privat kami sudah termasuk pengarahan spot-spot foto terbaik oleh driver berlisensi kami. Hubungi layanan admin di WhatsApp hari ini.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Bromo%20Panca%2C%20saya%20melihat%20galeri%20foto%20dan%20tertarik%20untuk%20booking%20trip%20hari%2520ini."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs px-6 py-3 rounded-full"
            >
              <MessageSquare className="w-4 h-4 fill-white" /> Inquire Photo Spots via WA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
