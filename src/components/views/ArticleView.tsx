/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { blogArticles, tourPackages } from '../../data';
import { Clock, User, ArrowRight, Table, MessageSquare, ArrowLeft, Star, Share2, Facebook, Twitter, Link2, CheckCircle2 } from 'lucide-react';
import InquiryForm from '../InquiryForm';
import SEOHead from '../SEOHead';

interface ArticleViewProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function ArticleView({ slug, onNavigate }: ArticleViewProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const currentArt = blogArticles.find((art) => art.slug === slug) || blogArticles[0];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find the target tour package based on the Silo strategy linkage!
  const targetPackage = tourPackages.find((pkg) => pkg.slug === currentArt.targetPackageSlug);

  // Suggested other articles in the same category
  const relatedArticles = blogArticles
    .filter((art) => art.category === currentArt.category && art.slug !== currentArt.slug)
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://bromopanca.com/' },
    { name: 'Blog', url: 'https://bromopanca.com/blog.html' },
    { name: currentArt.category.replace('-', ' ').toUpperCase(), url: `https://bromopanca.com/category-${currentArt.category}.html` },
    { name: currentArt.title, url: `https://bromopanca.com/${currentArt.slug}.html` }
  ];

  return (
    <div id="article-reader-container" className="animate-fade-in text-gray-200">
      {/* Dynamic Article & FAQ Schema injection */}
      <SEOHead
        title={currentArt.seoTitle}
        description={currentArt.metaDesc}
        canonicalUrl={`https://bromopanca.com/${currentArt.slug}.html`}
        type="article"
        image={currentArt.featuredImage}
        articleData={currentArt}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Breadcrumbs Nav */}
      <div className="bg-forest-950 pt-24 pb-4 border-b border-gold-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs text-gray-400 font-mono">
            <button onClick={() => onNavigate('/')} className="hover:text-gold-300">HOME</button>
            <span className="mx-2">&gt;</span>
            <button onClick={() => onNavigate('/blog.html')} className="hover:text-gold-300">BLOG</button>
            <span className="mx-2">&gt;</span>
            <button
              onClick={() => onNavigate(`/category-${currentArt.category}.html`)}
              className="hover:text-gold-300 uppercase"
            >
              {currentArt.category.replace('-', ' ')}
            </button>
            <span className="mx-2">&gt;</span>
            <span className="text-gold-300 font-semibold truncate uppercase">{currentArt.title}</span>
          </nav>
        </div>
      </div>

      {/* 2. Main Article Section */}
      <section className="py-12 sm:py-16 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <button
            onClick={() => handleLinkClick('/blog.html')}
            className="inline-flex items-center gap-1.5 text-xs text-gold-300 hover:text-gold-200 mb-6 font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali Ke Portal Blog
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Article Body */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Header Details */}
              <div>
                <span className="inline-block bg-gold-400/10 border border-gold-300/30 text-gold-300 font-mono text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider mb-4">
                  Silo Pendukung: {currentArt.category.toUpperCase()}
                </span>
                
                <h1 className="font-serif font-bold text-xl sm:text-3xl md:text-4xl text-gold-100 tracking-tight leading-tight mb-4">
                  {currentArt.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 border-b border-gold-400/15 pb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-gold-400" /> By {currentArt.author.name}
                  </span>
                  <span>•</span>
                  <span>🗓️ {currentArt.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-400" /> {currentArt.readTime}
                  </span>
                </div>
              </div>

              {/* Large Featured Image */}
              <div className="overflow-hidden rounded-2xl border border-gold-400/10">
                <img
                  src={currentArt.featuredImage}
                  alt={currentArt.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              {/* Table of Contents Box */}
              <div id="table-of-contents" className="bg-forest-900 border border-gold-400/10 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Table className="w-4 h-4 text-gold-400" />
                  <h4 className="font-serif font-bold text-sm text-gold-200">Daftar Isi Panduan / Outline</h4>
                </div>
                <ul className="space-y-2 text-xs">
                  {currentArt.contentSections.map((sec, idx) => (
                    <li key={idx}>
                      <a href={`#section-${idx}`} className="text-gray-350 hover:text-gold-300 duration-150 block truncate">
                        {idx + 1}. {sec.heading}
                      </a>
                    </li>
                  ))}
                  {currentArt.faqs && currentArt.faqs.length > 0 && (
                    <li>
                      <a href="#section-faq" className="text-gray-350 hover:text-gold-300 duration-150 font-medium">
                        FAQ &amp; Lembar Tanya Jawab
                      </a>
                    </li>
                  )}
                  {targetPackage && (
                    <li>
                      <a href="#section-recom-pkg" className="text-gray-350 hover:text-gold-300 font-bold block">
                        📍 Rekomendasi Paket Terkait ({targetPackage.keyword})
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              {/* Article Content Render */}
              <div className="space-y-8 text-sm sm:text-base leading-relaxed font-light text-gray-300">
                {/* Introduction section */}
                <p className="text-gray-200 font-normal leading-relaxed text-sm sm:text-base">
                  Mengeksplorasi pariwisata alam Jawa Timur membutuhkan panduan yang tepat agar Anda mendapatkan waktu liburan terbaik tanpa repot. Di bawah ini, tim travel planner Bromo Panca menyusun rincian terperinci untuk kenyamanan persiapan Anda.
                </p>

                {currentArt.contentSections.map((sec, idx) => (
                  <div key={idx} id={`section-${idx}`} className="scroll-mt-24 space-y-3">
                    <h2 className="font-serif font-bold text-lg sm:text-xl text-gold-200 border-b border-gold-400/5 pb-2 pt-4">
                      {sec.heading}
                    </h2>
                    
                    {sec.subHeadingCallout && (
                      <blockquote className="border-l-4 border-gold-400 bg-forest-900 p-4 rounded-r-xl text-xs italic text-gold-200 my-3">
                        "{sec.subHeadingCallout}"
                      </blockquote>
                    )}
                    
                    <p className="text-xs sm:text-sm text-gray-350">
                      {sec.body}
                    </p>

                    {sec.listItems && sec.listItems.length > 0 && (
                      <ul className="space-y-2 pl-5 list-disc text-xs sm:text-sm text-gray-400 py-2">
                        {sec.listItems.map((item, listIdx) => (
                          <li key={listIdx} className="font-light">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Sharing */}
              <div className="border-t border-b border-gold-400/10 py-4 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1 text-gold-400 font-semibold uppercase font-mono text-[10px]">
                  <Share2 className="w-3.5 h-3.5" /> Share This Page
                </span>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 hover:text-white transition-colors bg-forest-900 p-1.5 px-3 rounded-lg border border-gold-400/5 cursor-pointer">
                    <Facebook className="w-3.5 h-3.5 fill-current" /> Facebook
                  </button>
                  <button className="flex items-center gap-1 hover:text-white transition-colors bg-forest-900 p-1.5 px-3 rounded-lg border border-gold-400/5 cursor-pointer">
                    <Twitter className="w-3.5 h-3.5 fill-current" /> Twitter
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1 hover:text-white transition-colors bg-forest-900 p-1.5 px-3 rounded-lg border border-gold-400/5 cursor-pointer"
                  >
                    <Link2 className="w-3.5 h-3.5" /> {copiedLink ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>
              </div>

              {/* Author Bio Box */}
              <div id="author-box" className="bg-forest-900/60 border border-gold-400/10 p-6 rounded-2xl flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                <img
                  src={currentArt.author.avatar}
                  alt={currentArt.author.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0 border border-gold-400/20"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-serif font-bold text-gold-250 text-sm">Oleh: {currentArt.author.name}</h4>
                  <p className="text-[10px] font-mono text-gray-500 uppercase mt-0.5">{currentArt.author.role}</p>
                  <p className="text-xs text-gray-400 mt-2 font-light">
                    {currentArt.author.bio}
                  </p>
                </div>
              </div>

              {/* Dynamic Related Tours recommendation card based on Silo Linkage */}
              {targetPackage && (
                <div id="section-recom-pkg" className="scroll-mt-24 bg-gradient-to-br from-forest-900 to-forest-950 border border-gold-400/30 rounded-2xl p-6 sm:p-8 shadow-xl">
                  <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase block mb-1">
                    🎯 CORRESPONDING CONTENT SILO
                  </span>
                  
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-gold-150 leading-snug">
                    Rekomendasi Paket Utama: {targetPackage.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 mt-2 font-light">
                    Kunjungi langsung kawah Bromo dan nikmati golden sunrise Penanjakan menggunakan paket tur private berfasilitas premium. Klik di bawah untuk melihat rincian detail itinerary, inclusions, dan harga promonya.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-forest-950 p-4 rounded-xl border border-gold-400/10 gap-4">
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] font-mono text-gray-500 uppercase">Tarif Promo Eksklusif</span>
                      <p className="font-display font-bold text-lg text-gold-300">
                        Rp {(targetPackage.pricePromo || targetPackage.priceFrom).toLocaleString('id-ID')}
                        <span className="text-xs font-normal text-gray-400"> / Pax</span>
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleLinkClick(targetPackage.slug)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-gold-400 hover:bg-gold-500 text-forest-950 font-bold text-xs py-2.5 px-5 rounded-lg cursor-pointer"
                    >
                      Lihat Detail Paket <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Article FAQs Section */}
              {currentArt.faqs && currentArt.faqs.length > 0 && (
                <div id="section-faq" className="scroll-mt-24 bg-forest-900 border border-gold-400/10 p-6 sm:p-8 rounded-2xl">
                  <h3 className="font-serif font-bold text-gold-200 text-base border-b border-gold-400/5 pb-2 mb-4">
                    Pertanyaan Seputar Topik {currentArt.title}
                  </h3>
                  <div className="space-y-4">
                    {currentArt.faqs.map((f, i) => (
                      <div key={i} className="bg-forest-950/40 p-4 rounded-xl border border-gold-400/5 text-xs text-gray-350">
                        <p className="font-semibold text-gold-300">Q: {f.question}</p>
                        <p className="mt-2 font-light text-gray-400 leading-relaxed">A: {f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right: Sidebar CTAs & Related Articles */}
            <div className="space-y-8">
              
              <div className="sticky top-24 space-y-8">
                
                {/* Micro inquiry generator form */}
                <InquiryForm initialPackageSlug={currentArt.targetPackageSlug} />

                {/* Related Articles list */}
                {relatedArticles.length > 0 && (
                  <div className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 shadow-xl">
                    <h3 className="font-serif font-bold text-xs tracking-widest text-gold-300 uppercase mb-4 border-l-2 border-gold-400 pl-3">
                      Artikel Terkait Kategori
                    </h3>
                    <div className="space-y-4">
                      {relatedArticles.map((art) => (
                        <div
                          key={art.id}
                          onClick={() => handleLinkClick(art.slug)}
                          className="flex gap-3 cursor-pointer group"
                        >
                          <img
                            src={art.featuredImage}
                            alt={art.title}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded object-cover flex-shrink-0"
                          />
                          <div>
                            <h4 className="text-xs font-semibold text-gray-200 group-hover:text-gold-300 border-l border-transparent duration-200 line-clamp-2 leading-tight">
                              {art.title}
                            </h4>
                            <span className="text-[9px] font-mono text-gray-500 block mt-1">
                              🕒 {art.readTime}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
