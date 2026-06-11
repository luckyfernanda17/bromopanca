/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { blogArticles } from '../../data';
import { Search, ArrowRight, BookOpen, Clock, Calendar, MessageSquare, Mail, Tag } from 'lucide-react';
import SEOHead from '../SEOHead';

interface BlogHubViewProps {
  categoryFilter?: 'bromo' | 'tumpak-sewu' | 'kawah-ijen' | 'travel-tips' | 'all';
  onNavigate: (path: string) => void;
}

export default function BlogHubView({ categoryFilter = 'all', onNavigate }: BlogHubViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'bromo' | 'tumpak-sewu' | 'kawah-ijen' | 'travel-tips'>(categoryFilter);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleArticleClick = (slug: string) => {
    onNavigate(`/${slug}.html`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryTabClick = (category: typeof activeCategory) => {
    setActiveCategory(category);
    if (category === 'all') {
      onNavigate('/blog.html');
    } else {
      onNavigate(`/category-${category}.html`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterEmail('');
    setNewsletterSubscribed(true);
    setTimeout(() => setNewsletterSubscribed(false), 4000);
  };

  // Filter blog posts based on search and active category
  const filteredArticles = blogArticles.filter((art) => {
    const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Featured Post is the first one in the list (most recent/updated)
  const featuredArticle = blogArticles[0];
  const popularArticles = blogArticles.slice(1, 4);

  // SEO Titles and description based on category
  const getCategorySEO = () => {
    switch (activeCategory) {
      case 'bromo':
        return {
          title: 'Artikel & Panduan Wisata Gunung Bromo Terkini',
          desc: 'Kumpulan ulasan, tarif tiket resmi, rute pendakian, spot foto rahasia, & checklist perjalanan ke Gunung Bromo dari Surabaya/Malang.',
          canon: 'https://bromopanca.com/category-bromo.html'
        };
      case 'tumpak-sewu':
        return {
          title: 'Tips & Panduan Wisata Air Terjun Tumpak Sewu',
          desc: 'Baca tips trekking, perlengkapan hiking, ketersediaan ranger pemandu, dan estimasi waktu terbaik ke Air Terjun Tumpak Sewu Jawa Timur.',
          canon: 'https://bromopanca.com/category-tumpak-sewu.html'
        };
      case 'kawah-ijen':
        return {
          title: 'Ulasan & Panduan Kawah Ijen Blue Fire Banyuwangi',
          desc: 'Panduan lengkap mendaki malam Kawah Ijen, cara sewa masker respirator gas, info penambang tradisional, & waktu terbaik menyaksikan Api Biru.',
          canon: 'https://bromopanca.com/category-kawah-ijen.html'
        };
      case 'travel-tips':
        return {
          title: 'Petunjuk & Tips Liburan Hemat | Bromo Panca Blog',
          desc: 'Hemat biaya dengan bergabung open trip kami. Pelajari tips solo traveling, checklist packing perlengkapan Bromo, dan rute hemat.',
          canon: 'https://bromopanca.com/category-travel-tips.html'
        };
      default:
        return {
          title: 'Blog Portal Panduan Wisata Bromo & Jawa Timur',
          desc: 'Temukan ratusan tips, panduan hiking, info herg-tiket, sitemap, & berita keindahan Bromo, Ijen, serta Tumpak Sewu dari Bromo Panca.',
          canon: 'https://bromopanca.com/blog.html'
        };
    }
  };

  const seoInfo = getCategorySEO();

  const categoriesList: { id: typeof activeCategory; name: string }[] = [
    { id: 'all', name: 'Semua Artikel' },
    { id: 'bromo', name: 'Mount Bromo' },
    { id: 'tumpak-sewu', name: 'Tumpak Sewu' },
    { id: 'kawah-ijen', name: 'Kawah Ijen' },
    { id: 'travel-tips', name: 'Travel Tips' }
  ];

  return (
    <div id="blog-hub-container" className="animate-fade-in text-gray-200">
      {/* Dynamic SEO Headers Mapping */}
      <SEOHead
        title={seoInfo.title}
        description={seoInfo.desc}
        canonicalUrl={seoInfo.canon}
        type="website"
        image={featuredArticle?.featuredImage}
      />

      {/* 1. Header Hero Banner */}
      <section className="bg-forest-900 border-b border-gold-400/10 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-400/5 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
            BROMO PANCA DIGITAL ECOSYSTEM
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-gold-100 uppercase">
            {activeCategory === 'all' ? 'Portal Edukasi & Travel Blog' : `Kategori: ${activeCategory.replace('-', ' ').toUpperCase()}`}
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Ecosystem konten terlengkap pendukung topical authority untuk memudahkan perencana liburan alam berkualitas tinggi di Jawa Timur.
          </p>

          {/* Search box tool */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400" />
            <input
              type="text"
              placeholder="Cari info tiket, tips mendaki Bromo, Ijen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-forest-950 border border-gold-400/20 hover:border-gold-400/40 focus:border-gold-400 rounded-full py-3.5 pl-11 pr-5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none transition-colors shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16 bg-forest-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs list */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryTabClick(cat.id)}
                className={`px-4.5 py-2 rounded-full text-xs font-semibold cursor-pointer border tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gold-400 border-gold-400 text-forest-950 shadow-md font-bold'
                    : 'bg-forest-900 border-gold-400/10 text-gray-400 hover:border-gold-404/40 hover:text-gold-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Highlight Featured Article (Only show on 'all' view with no search filter) */}
              {activeCategory === 'all' && searchQuery === '' && featuredArticle && (
                <div
                  onClick={() => handleArticleClick(featuredArticle.slug)}
                  className="group cursor-pointer bg-forest-900 border border-gold-300/15 rounded-2xl overflow-hidden transition-all hover:border-gold-300/30 shadow-2xl"
                >
                  <div className="h-72 sm:h-96 relative overflow-hidden">
                    <img
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-101 duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-gold-400 text-forest-950 font-mono text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                      Featured Guide
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <span className="text-[10px] font-mono text-gold-400 block mb-3">
                      🗓️ {featuredArticle.date} • ⏱️ {featuredArticle.readTime} • PENULIS: {featuredArticle.author.name}
                    </span>
                    
                    <h2 className="font-serif font-bold text-lg sm:text-2xl text-gold-150 group-hover:text-gold-300 transition-colors leading-tight">
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed font-light">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="mt-5 pt-5 border-t border-gold-400/10 flex items-center justify-between">
                      <span className="text-xs text-gold-300 font-bold group-hover:text-gold-250 flex items-center gap-1">
                        Lanjut Membaca <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[10px] font-mono text-gray-500 uppercase">#SiloSuhuBromo</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Latest articles list / search result */}
              <div className="space-y-6">
                <h3 className="font-serif font-bold text-lg text-gold-200 border-b border-gold-400/10 pb-2 mb-6">
                  {searchQuery !== '' ? `Hasil Pencarian (${filteredArticles.length})` : 'Daftar Artikel Terbaru'}
                </h3>

                {filteredArticles.length === 0 ? (
                  <div className="bg-forest-900/40 p-12 rounded-xl text-center border border-gold-400/10">
                    <p className="text-sm text-gray-400">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Exclude featured article if shown at top */}
                    {filteredArticles
                      .filter((art) => activeCategory !== 'all' || searchQuery !== '' || art.id !== featuredArticle?.id)
                      .map((art) => (
                        <div
                          key={art.id}
                          onClick={() => handleArticleClick(art.slug)}
                          className="group cursor-pointer bg-forest-900 border border-gold-300/15 hover:border-gold-300/35 rounded-xl overflow-hidden transition-all hover:-translate-y-1 shadow-lg"
                        >
                          <div className="h-48 overflow-hidden relative">
                            <img
                              src={art.featuredImage}
                              alt={art.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 duration-300"
                            />
                            <div className="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-xs text-gold-300 font-mono text-[9px] font-semibold px-2.5 py-0.5 rounded uppercase">
                              {art.category}
                            </div>
                          </div>
                          <div className="p-5">
                            <span className="text-[10px] font-mono text-gold-400 block mb-2">
                              {art.date} • ⏱️ {art.readTime}
                            </span>
                            <h4 className="font-serif font-bold text-sm sm:text-base text-gray-250 group-hover:text-gold-300 transition-colors line-clamp-2 leading-snug">
                              {art.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-2 line-clamp-2 font-light">
                              {art.excerpt}
                            </p>
                            <span className="inline-flex items-center gap-1 text-xs text-gold-300 font-bold mt-4 cursor-pointer group-hover:text-gold-200">
                              Baca Artikel <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="space-y-10">
              
              {/* Popular Articles Sidebar Widget */}
              <div className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 shadow-xl">
                <h3 className="font-serif font-bold text-sm tracking-widest text-gold-300 uppercase mb-5 border-l-2 border-gold-400 pl-3">
                  Paling Banyak Dibaca
                </h3>
                <div className="space-y-4">
                  {popularArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => handleArticleClick(art.slug)}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <img
                        src={art.featuredImage}
                        alt={art.title}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0 border border-gold-100/10 group-hover:opacity-80 transition-opacity"
                      />
                      <div>
                        <h4 className="text-xs font-semibold text-gray-200 group-hover:text-gold-300 duration-250 line-clamp-2 leading-tight">
                          {art.title}
                        </h4>
                        <span className="text-[9px] font-mono text-gold-400 block mt-1">
                          ⏱️ {art.readTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscriptions widget */}
              <div className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 shadow-xl">
                <h3 className="font-serif font-bold text-sm tracking-widest text-gold-300 uppercase mb-3 text-center sm:text-left">
                  Buku Panduan PDF Gratis
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 text-center sm:text-left font-light">
                  Berlangganan newsletter mingguan kami dan dapatkan file PDF "Checklist Lengkap Packing &amp; Trekking Malam Bromo Ijen" gratis langsung ke email Anda.
                </p>
                {newsletterSubscribed ? (
                  <div className="bg-gold-550/10 border border-gold-400/30 p-4 rounded-xl text-center text-xs">
                    <p className="text-gold-300 font-semibold mb-1">✓ Berhasil Berlangganan!</p>
                    <p className="text-gray-400">Silakan cek inbox email dalam 60 detik untuk download PDF gratis dari kami.</p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                    <input
                      type="email"
                      placeholder="Masukkan alamat email Anda"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full bg-forest-950 border border-gold-400/20 rounded-xl p-3 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-gold-300 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-sans font-bold text-xs py-3 rounded-xl transition-all cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Kirim PDF Ke Email saya
                    </button>
                  </form>
                )}
              </div>

              {/* High converting prompt for direct consult */}
              <div className="bg-gradient-to-br from-forest-900 to-forest-950 border-2 border-gold-400/15 rounded-2xl p-6 text-center">
                <span className="text-[10px] font-mono text-gold-300 uppercase block mb-1">RAGU MENENTUKAN RENCANA?</span>
                <h4 className="font-serif font-bold text-gold-100 text-base leading-tight">Minta Admin Buatkan Itinerary Custom</h4>
                <p className="text-[11px] text-gray-405 leading-relaxed mt-2 font-light">
                  Semua paket kami bisa disesuaikan on-the-spot gratis s.d H-3. Hubungi Travel Advokat kami via WA chat.
                </p>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Bromo%20Panca.%20Saya%20baca%20travel%20blog%20dan%20ingin%20minta%20rekomendasi%20rute%20custom."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs px-4 py-2.5 rounded-full shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  Chat Konsultasi Gratis
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
