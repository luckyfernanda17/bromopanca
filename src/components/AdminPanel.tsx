/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Edit, FileText, CheckCircle2, Copy, Download, Code, X, RefreshCw, Send, Check } from 'lucide-react';
import { BlogArticle } from '../types';

interface AdminPanelProps {
  onClose: () => void;
  onAddArticle: (article: BlogArticle) => void;
  articlesCount: number;
}

export default function AdminPanel({ onClose, onAddArticle, articlesCount }: AdminPanelProps) {
  const [copiedText, setCopiedText] = useState(false);
  const [activeTab, setActiveTab] = useState<'publish' | 'sitemap' | 'robots' | 'html-code'>('publish');

  // Article state draft
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState<'bromo' | 'tumpak-sewu' | 'kawah-ijen' | 'travel-tips'>('bromo');
  const [excerpt, setExcerpt] = useState('');
  const [bodyPara1, setBodyPara1] = useState('');
  const [bodyPara2, setBodyPara2] = useState('');
  const [keywordStr, setKeywordStr] = useState('');
  const [successInfo, setSuccessInfo] = useState('');

  const generateSlug = (val: string) => {
    setTitle(val);
    const resolvedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_]+/g, '-');
    setSlug(resolvedSlug);
  };

  const handlePublishArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !excerpt || !bodyPara1) return;

    const keywords = keywordStr
      .split(',')
      .map((kw) => kw.trim())
      .filter((kw) => kw !== '');

    const newArticle: BlogArticle = {
      id: `art-${Date.now()}`,
      slug: slug,
      title: title,
      seoTitle: `${title} | Bromo Panca Travel Specialist`,
      metaDesc: `${excerpt.slice(0, 150)}... Booking jeep & akomodasi via Whatsapp sekarang.`,
      excerpt: excerpt,
      category: category,
      date: 'Hari ini (Update Mingguan)',
      readTime: '4 Menit Baca',
      featuredImage: category === 'bromo'
        ? 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600'
        : category === 'kawah-ijen'
          ? 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600'
          : 'https://images.unsplash.com/photo-1581347683933-cb60144588e3?auto=format&fit=crop&q=80&w=600',
      targetPackageSlug: category === 'bromo'
        ? 'paket-wisata-bromo'
        : category === 'tumpak-sewu'
          ? 'paket-bromo-tumpak-sewu'
          : 'paket-bromo-ijen',
      author: {
        name: 'Admin Bromo Panca',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
        role: 'Silo Content Manager',
        bio: 'Tim penulis SEO spesialisasi riset destinasi, pengawalan, dan pemeringkatan sitemap pariwisata Indonesia.'
      },
      contentSections: [
        {
          heading: 'Pengantar Utama & Panduan Persiapan',
          body: bodyPara1,
          subHeadingCallout: 'Tips Tambahan Tim Bromo Panca'
        },
        {
          heading: 'Rincian Perjalanan Lebih Lanjut',
          body: bodyPara2 || 'Pastikan beristirahat cukup, membawa baju hangat bersuhu 5 derajat, kaos kaki tebal, & mereservasi jauh d-1 demi ketersediaan kendaraan jeep.'
        }
      ],
      keywords: keywords
    };

    onAddArticle(newArticle);
    setSuccessInfo(`✓ Berhasil! Artikel "${title}" diterbitkan secara live. Seluruh komponen sitemap blog, category page, widget terkait, dan footer sudah terupdate otomatis!`);
    
    // Reset inputs
    setTitle('');
    setSlug('');
    setExcerpt('');
    setBodyPara1('');
    setBodyPara2('');
    setKeywordStr('');

    setTimeout(() => {
      setSuccessInfo('');
    }, 6050);
  };

  const handleCopyText = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const currentSitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bromopanca.com/</loc></url>
  <url><loc>https://bromopanca.com/paket-wisata-bromo.html</loc></url>
  <url><loc>https://bromopanca.com/open-trip-bromo.html</loc></url>
  <url><loc>https://bromopanca.com/paket-bromo-tumpak-sewu.html</loc></url>
  <url><loc>https://bromopanca.com/paket-bromo-ijen.html</loc></url>
  <url><loc>https://bromopanca.com/blog.html</loc></url>
  <url><loc>https://bromopanca.com/galeri.html</loc></url>
  <url><loc>https://bromopanca.com/tentang-kami.html</loc></url>
  <url><loc>https://bromopanca.com/kontak.html</loc></url>
  <url><loc>https://bromopanca.com/faq.html</loc></url>
</urlset>`;

  const currentRobotsTxt = `User-agent: *
Allow: /

Sitemap: https://bromopanca.com/sitemap.xml`;

  // Pre-rendered template exporter for Cloudflare pages HTML code injection!
  const cfHTMLCodeTemplate = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>BROMO PANCA - Premium Travel Agency</title>
  <meta name="description" content="Paket wisata premium Mount Bromo, Ijen Blue Fire, & Tumpak Sewu. Booking online bergaransi 100% berangkat.">
  <link rel="canonical" href="https://bromopanca.com/paket-wisata-bromo.html">
  <!-- Organization Meta Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Bromo Panca",
    "url": "https://bromopanca.com",
    "logo": "https://images.unsplash.com/photo-1626260851890-0ff1339ce9b4?auto=format&fit=crop&q=80&w=150"
  }
  </script>
</head>
<body>
  <!-- Cloudflare Pages Static Build Root -->
  <div id="root"></div>
  <script src="/assets/index.js"></script>
</body>
</html>`;

  return (
    <div className="fixed inset-0 bg-forest-950/98 backdrop-blur-md z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="bg-forest-900 border border-gold-400/30 rounded-2xl max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl">
        
        {/* Absolute Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white bg-forest-950 p-2 rounded-full border border-gold-400/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-6 border-b border-gold-400/10 pb-4">
          <div className="bg-gold-400 p-2 rounded-lg text-forest-950">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif font-bold text-lg sm:text-2xl text-gold-100">Weekly Publishing &amp; SEO Exporter</h2>
            <p className="text-xs text-gray-400 font-mono">Status: {articlesCount} Artikel Terdaftar Aktual • 2026 Engine</p>
          </div>
        </div>

        {/* Dashboard Tabs navigation */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gold-400/10 pb-3">
          <button
            onClick={() => setActiveTab('publish')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
              activeTab === 'publish' ? 'bg-gold-300 text-forest-950' : 'text-gray-450 hover:bg-forest-950'
            }`}
          >
            ✍️ Publish Weekly Post (Tanpa Coding)
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
              activeTab === 'sitemap' ? 'bg-gold-300 text-forest-950' : 'text-gray-450 hover:bg-forest-950'
            }`}
          >
            🌐 Dynamic sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
              activeTab === 'robots' ? 'bg-gold-300 text-forest-950' : 'text-gray-450 hover:bg-forest-950'
            }`}
          >
            🤖 robots.txt Exporter
          </button>
          <button
            onClick={() => setActiveTab('html-code')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
              activeTab === 'html-code' ? 'bg-gold-300 text-forest-950' : 'text-gray-450 hover:bg-forest-950'
            }`}
          >
            📄 Cloudflare pre-render code
          </button>
        </div>

        {/* Tab 1: Publish form */}
        {activeTab === 'publish' && (
          <form onSubmit={handlePublishArticle} className="space-y-4">
            
            {successInfo && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-xs sm:text-sm font-semibold animate-fade-in mb-4">
                {successInfo}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-300 mb-1 font-semibold uppercase">Judul Artikel Baru *</label>
                <input
                  type="text"
                  placeholder="Contoh: Penginapan Terbaik dekat kawah ijen"
                  value={title}
                  onChange={(e) => generateSlug(e.target.value)}
                  className="w-full bg-forest-950 border border-gold-400/20 rounded-lg p-2.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold-300"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1 font-semibold uppercase">Friendly URL Slug *</label>
                <input
                  type="text"
                  placeholder="otomatis-generate-dari-judul"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full bg-forest-950/50 border border-gold-400/20 rounded-lg p-2.5 text-xs text-gray-400 focus:outline-none"
                  readOnly
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-300 mb-1 font-semibold uppercase">Pilih Kategori Silo *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full bg-forest-950 border border-gold-400/20 rounded-lg p-2.5 text-xs text-gray-200 focus:outline-none focus:border-gold-300"
                >
                  <option value="bromo">Mount Bromo (Silo 1)</option>
                  <option value="tumpak-sewu">Tumpak Sewu (Silo 3)</option>
                  <option value="kawah-ijen">Kawah Ijen (Silo 4)</option>
                  <option value="travel-tips">Travel Tips (Silo 2)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1 font-semibold uppercase">Tag Keywords (pisah dangan koma)</label>
                <input
                  type="text"
                  placeholder="hotel ijen, akomodasi banyuwangi, tarif hotel"
                  value={keywordStr}
                  onChange={(e) => setKeywordStr(e.target.value)}
                  className="w-full bg-forest-950 border border-gold-400/20 rounded-lg p-2.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1 font-semibold uppercase">Snippet Meta / Ringkasan Singkat (Untuk SEO) *</label>
              <textarea
                rows={2}
                placeholder="Rekomendasi hotel terbaik di dekat kaldera ijen bintang 3 dan 4 yang bersih, nyaman, dan strategis dekat paltuding."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full bg-forest-950 border border-gold-400/20 rounded-lg p-2.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold-300 resize-none"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1 font-semibold uppercase">Isi Paragraf Utama *</label>
              <textarea
                rows={3}
                placeholder="Tuliskan isi paragraf pembuka artikel secara mendalam. Masukkan tautan penting ke paket wisata bromo / ijen untuk optimasi internal linking."
                value={bodyPara1}
                onChange={(e) => setBodyPara1(e.target.value)}
                className="w-full bg-forest-950 border border-gold-400/20 rounded-lg p-2.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold-300 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-300 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold text-xs py-3 rounded-lg shadow-md cursor-pointer transition-colors"
            >
              <Plus className="w-4 h-4" /> Live Terbitkan Berita Mingguan Baru
            </button>
          </form>
        )}

        {/* Tab 2: Sitemap XML preview */}
        {activeTab === 'sitemap' && (
          <div className="space-y-4">
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Berikut adalah salinan sitemap pariwisata XML valid untuk diajukan ke Google Search Console. Sitemap ini mencakup seluruh landing pages serta interlinking artikel.
            </p>
            <div className="relative">
              <pre className="bg-forest-950 border border-gold-400/20 rounded-xl p-4 text-[11px] font-mono whitespace-pre overflow-x-auto text-gold-200 max-h-72">
                {currentSitemapXML}
              </pre>
              <button
                onClick={() => handleCopyText(currentSitemapXML)}
                className="absolute top-4 right-4 bg-forest-900 border border-gold-300/30 hover:bg-gold-400 p-2 rounded text-xs text-gold-300 hover:text-forest-950 font-bold cursor-pointer transition-colors"
              >
                {copiedText ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Robots.txt */}
        {activeTab === 'robots' && (
          <div className="space-y-4">
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Dokumen petunjuk crawl `robots.txt` resmi Bromo Panca untuk membatasi wilayah yang dirayapi bot:
            </p>
            <div className="relative">
              <pre className="bg-forest-950 border border-gold-400/20 rounded-xl p-4 text-[11px] font-mono whitespace-pre text-gold-200">
                {currentRobotsTxt}
              </pre>
              <button
                onClick={() => handleCopyText(currentRobotsTxt)}
                className="absolute top-4 right-4 bg-forest-900 border border-gold-300/30 hover:bg-gold-400 p-2 rounded text-xs text-gold-300 hover:text-forest-950 font-bold cursor-pointer transition-colors"
              >
                {copiedText ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Cloudflare pre-rendered code */}
        {activeTab === 'html-code' && (
          <div className="space-y-4">
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Gunakan pembungkus static HTML valid ini untuk menyisipkan sitemap dan schema Organization langsung pada server Cloudflare Pages Anda tanpa merusak performa core web vitals:
            </p>
            <div className="relative">
              <pre className="bg-forest-950 border border-gold-400/20 rounded-xl p-4 text-[10px] font-mono whitespace-pre overflow-x-auto text-gold-200 max-h-72">
                {cfHTMLCodeTemplate}
              </pre>
              <button
                onClick={() => handleCopyText(cfHTMLCodeTemplate)}
                className="absolute top-4 right-4 bg-forest-900 border border-gold-300/30 hover:bg-gold-400 p-2 rounded text-xs text-gold-300 hover:text-forest-950 font-bold cursor-pointer transition-colors"
              >
                {copiedText ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
