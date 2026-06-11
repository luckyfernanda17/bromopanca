/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { tourPackages } from '../../data';
import { Star, Check, X, Clock, HelpCircle, ArrowRight, MessageSquare, ShieldAlert, Award, Footprints } from 'lucide-react';
import { TourPackage } from '../../types';
import InquiryForm from '../InquiryForm';
import SEOHead from '../SEOHead';

interface PackageViewProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function PackageView({ slug, onNavigate }: PackageViewProps) {
  const currentPkg = tourPackages.find((pkg) => pkg.slug === slug) || tourPackages[0];
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleTourClick = (targetSlug: string) => {
    onNavigate(`/${targetSlug}.html`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find other packages for Related Tours section
  const relatedTours = tourPackages.filter((pkg) => pkg.slug !== currentPkg.slug).slice(0, 2);

  // Generate breadcrumbs for schema & display
  const breadcrumbs = [
    { name: 'Home', url: 'https://bromopanca.com/' },
    { name: 'Tour Packages', url: 'https://bromopanca.com/#tours' },
    { name: currentPkg.title, url: `https://bromopanca.com/${currentPkg.slug}.html` }
  ];

  // Specific WhatsApp prefill text
  const encodedMsg = encodeURIComponent(
    `Halo Bromo Panca, saya tertarik untuk bertanya dan order paket tur premium pariwisata: *${currentPkg.title}* (${currentPkg.duration}).`
  );
  const stickyWAUrl = `https://wa.me/6285211639430?text=${encodedMsg}`;

  return (
    <div id="package-detail-container" className="animate-fade-in text-gray-200">
      {/* 0. SEO Injection */}
      <SEOHead
        title={currentPkg.seoTitle}
        description={currentPkg.metaDesc}
        canonicalUrl={`https://bromopanca.com/${currentPkg.slug}.html`}
        type="product"
        image={currentPkg.heroImage}
        packageData={currentPkg}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Breadcrumb UI display */}
      <div className="bg-forest-950 pt-24 pb-4 border-b border-gold-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs text-gray-400 font-mono">
            <button onClick={() => onNavigate('/')} className="hover:text-gold-300">HOME</button>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-500">PACKAGES</span>
            <span className="mx-2">&gt;</span>
            <span className="text-gold-300 font-semibold truncate uppercase">{currentPkg.keyword}</span>
          </nav>
        </div>
      </div>

      {/* 2. Luxury Hero Banner */}
      <section className="relative h-[65vh] flex items-center justify-center bg-forest-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentPkg.heroImage}
            alt={currentPkg.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-gold-400/10 border border-gold-300/30 px-3 py-1 rounded-full text-gold-300 text-[10px] font-mono tracking-widest uppercase mb-4">
            🔥 HOT TOURIST KEYWORD: {currentPkg.keyword}
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-4xl md:text-5xl text-gold-100 tracking-tight leading-tight">
            {currentPkg.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-300 italic max-w-2xl mx-auto">
            "{currentPkg.tagline}"
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-gray-300">
            <span className="flex items-center gap-1 bg-forest-950/80 px-3 py-1.5 rounded-full border border-gold-300/20">
              ⏱️ {currentPkg.duration}
            </span>
            <span className="flex items-center gap-1 bg-forest-950/80 px-3 py-1.5 rounded-full border border-gold-300/20 text-yellow-400">
              ★ {currentPkg.rating} ({currentPkg.reviewsCount} Verified Reviews)
            </span>
          </div>
        </div>
      </section>

      {/* 3. Package Main Layout split body */}
      <section className="py-16 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Complete Info */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Package Overview */}
              <div id="overview-section" className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 sm:p-8">
                <h2 className="font-serif font-bold text-lg sm:text-xl text-gold-200 border-b border-gold-400/10 pb-3 mb-4">
                  Deskripsi &amp; Tinjauan Paket
                </h2>
                <p className="text-sm text-gray-350 leading-relaxed font-light">
                  {currentPkg.description}
                </p>
                
                {/* Visual Indicators */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 bg-forest-950/60 p-4 rounded-xl border border-gold-400/5">
                    <Award className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-gray-200">Mitra Berlisensi</h4>
                      <p className="text-[10px] text-gray-400">Taman Nasional Tengger &amp; Ijen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-forest-950/60 p-4 rounded-xl border border-gold-400/5">
                    <Footprints className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-gray-200">Ramah Petualang</h4>
                      <p className="text-[10px] text-gray-400">Tersedia alternatif transportasi lokal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Destination Highlights */}
              <div id="highlights-section" className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 sm:p-8">
                <h2 className="font-serif font-bold text-lg sm:text-xl text-gold-200 border-b border-gold-400/10 pb-3 mb-4">
                  Destinasi Spesial &amp; Highlights Tambahan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentPkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 font-light">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Itinerary Timeline */}
              <div id="itinerary-section" className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 sm:p-8">
                <h2 className="font-serif font-bold text-lg sm:text-xl text-gold-200 border-b border-gold-400/10 pb-3 mb-6">
                  Itinerary Detail Perjalanan (Terjadwal Rinci)
                </h2>
                <div className="space-y-6 relative border-l-2 border-gold-400/25 ml-4 pl-6">
                  {currentPkg.itinerary.map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline Dot Marker */}
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gold-400 border-4 border-forest-900"></span>
                      
                      <div className="text-xs font-mono font-bold tracking-wider text-gold-400">
                        {item.time}
                      </div>
                      
                      <h3 className="text-sm sm:text-base font-serif font-semibold text-gold-150 mt-1.5">
                        {item.activity}
                      </h3>
                      
                      {item.details && (
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed font-light">
                          {item.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Grid details */}
              <div id="pricing-section" className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 sm:p-8">
                <h2 className="font-serif font-bold text-lg sm:text-xl text-gold-200 border-b border-gold-400/10 pb-3 mb-4">
                  Rincian Penawaran Harga Wisata
                </h2>
                <div className="p-4 bg-forest-950 border border-gold-400/20 rounded-xl mb-4 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-400">Harga Promo Terbatas</span>
                    <p className="font-display font-bold text-xl sm:text-2xl text-gold-300 mt-1">
                      Rp {(currentPkg.pricePromo || currentPkg.priceFrom).toLocaleString('id-ID')}
                      <span className="text-xs font-sans text-gray-400 font-normal"> / Pax</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs block text-gray-500 line-through">
                      Rp {currentPkg.priceFrom.toLocaleString('id-ID')}
                    </span>
                    <span className="inline-block bg-red-500/10 border border-red-500/30 text-red-400 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full mt-1">
                      DISKON PROMO AKTIF
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-450 italic leading-relaxed">
                  * Harga bersifat fleksibel bergantung pada musim kunjungan (High Season / Low Season) dan jumlah peserta terdaftar. Diskon khusus rombongan korporat tersedia melalui kontak admin.
                </p>
              </div>

              {/* Inclusions & Exclusions */}
              <div id="inclusions-exclusions" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Inclusions */}
                <div className="bg-forest-900 border border-emerald-500/15 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4 border-b border-emerald-500/10 pb-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <h3 className="font-serif font-semibold text-sm sm:text-base text-gray-100">Fasilitas Termasuk (Include)</h3>
                  </div>
                  <ul className="space-y-3">
                    {currentPkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-forest-900 border border-red-500/15 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4 border-b border-red-500/10 pb-2">
                    <X className="w-5 h-5 text-red-400" />
                    <h3 className="font-serif font-semibold text-sm sm:text-base text-gray-100">Tidak Termasuk (Exclude)</h3>
                  </div>
                  <ul className="space-y-3">
                    {currentPkg.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs Accordion */}
              <div id="faq-accordions" className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 sm:p-8">
                <h2 className="font-serif font-bold text-lg sm:text-xl text-gold-200 border-b border-gold-400/10 pb-4 mb-4">
                  FAQ - Pertanyaan Terkait Paket Ini
                </h2>
                <div className="space-y-3">
                  {currentPkg.faq.map((item, idx) => (
                    <div key={idx} className="border border-gold-400/10 rounded-xl overflow-hidden bg-forest-950/20">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex justify-between items-center p-4 text-left font-sans text-xs sm:text-sm font-semibold text-gray-200 hover:text-gold-300 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-gold-400" />
                          {item.question}
                        </span>
                        <span>{activeFaq === idx ? '−' : '+'}</span>
                      </button>
                      
                      {activeFaq === idx && (
                        <div className="p-4 border-t border-gold-400/5 text-xs text-gray-400 leading-relaxed font-light">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Reviews Testimonial */}
              <div id="guest-reviews-box" className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 sm:p-8">
                <h2 className="font-serif font-bold text-lg sm:text-xl text-gold-200 border-b border-gold-400/10 pb-3 mb-6">
                  Ulasan Tamu Nyata
                </h2>
                <div className="space-y-6">
                  {currentPkg.reviews.map((rev, idx) => (
                    <div key={idx} className="border-b border-gold-400/10 last:border-0 pb-6 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-semibold text-gold-200">{rev.author}</h4>
                          <span className="text-[10px] text-gray-400 block">{rev.location} • {rev.date}</span>
                        </div>
                        <div className="flex text-yellow-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-350 italic mt-3 leading-relaxed">
                        "{rev.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Booking Form Container */}
            <div className="space-y-8">
              
              {/* Sticky Inquiry form */}
              <div className="sticky top-24">
                <InquiryForm initialPackageSlug={currentPkg.slug} />
                
                {/* Emergency Hotline Contact */}
                <div className="mt-4 bg-forest-900 border border-gold-400/10 p-4 rounded-xl text-center text-xs">
                  <p className="text-gray-300">WhatsApp Hotline Call 24 Jam:</p>
                  <p className="font-mono font-bold text-gold-300 text-sm mt-1">+62 812-3456-7890</p>
                  <p className="text-[9px] text-gray-500 mt-1">Sertifikat Resmi &amp; Lisensi Pariwisata Terakreditasi</p>
                </div>
              </div>

            </div>
          </div>

          {/* 4. Related Tours internal link Section */}
          <div className="border-t border-gold-400/10 pt-16 mt-16 text-center lg:text-left">
            <h3 className="font-serif font-bold text-xl text-gold-100 mb-8 max-w-lg">
              Saran Paket Wisata Jawa Timur Terkait
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedTours.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => handleTourClick(pkg.slug)}
                  className="group cursor-pointer bg-forest-900 border border-gold-300/15 hover:border-gold-300/35 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 p-5 shadow-lg flex items-center justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={pkg.heroImage}
                      alt={pkg.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-gold-150 group-hover:text-gold-300 duration-200">
                        {pkg.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-mono mt-1">{pkg.duration}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gold-400 group-hover:translate-x-1 duration-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sticky Floating Call-to-action WhatsApp Button for Mobiles */}
      <div className="fixed bottom-6 right-6 z-40 group xl:hidden">
        <a
          id="sticky-whatsapp-floating"
          href={stickyWAUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          title="Butuh Bantuan? Chat WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>
        <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-forest-900 border border-gold-400/20 px-3 py-1.5 rounded-lg text-xs font-semibold text-gold-300 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Konsultasi Gratis via WA
        </div>
      </div>
    </div>
  );
}
