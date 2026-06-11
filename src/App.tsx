/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { blogArticles as initialArticles } from './data';
import { BlogArticle } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/views/HomeView';
import PackageView from './components/views/PackageView';
import BlogHubView from './components/views/BlogHubView';
import ArticleView from './components/views/ArticleView';
import GalleryView from './components/views/GalleryView';
import StaticViews from './components/views/StaticViews';
import AdminPanel from './components/AdminPanel';
import SEOHead from './components/SEOHead';
import { Sparkles } from 'lucide-react';

export default function App() {
  // Reactive articles list that allows the owner to publish live articles
  const [articles, setArticles] = useState<BlogArticle[]>(initialArticles);
  const [currentPath, setCurrentPath] = useState('/');
  const [adminOpen, setAdminOpen] = useState(false);

  // Sync active view with address path
  useEffect(() => {
    const handleLocationChange = () => {
      // Decode pathname like %20 or others if any
      const path = decodeURIComponent(window.location.pathname);
      setCurrentPath(path || '/');
    };

    // Listen to popstate (back/forward history action)
    window.addEventListener('popstate', handleLocationChange);
    // Execute initially
    handleLocationChange();

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Custom navigation callback that avoids full browser reloads for maximum Core Web Vitals performance
  const handleNavigate = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddLiveArticle = (newArt: BlogArticle) => {
    // Add new article to beginning of list so it is immediately "Featured Guide"
    setArticles([newArt, ...articles]);
  };

  // Route resolver helper
  const renderView = () => {
    // A. Main packages
    if (currentPath === '/paket-wisata-bromo.html') {
      return <PackageView slug="paket-wisata-bromo" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/open-trip-bromo.html') {
      return <PackageView slug="open-trip-bromo" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/paket-bromo-tumpak-sewu.html') {
      return <PackageView slug="paket-bromo-tumpak-sewu" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/paket-bromo-ijen.html') {
      return <PackageView slug="paket-bromo-ijen" onNavigate={handleNavigate} />;
    }

    // B. Static layouts
    if (currentPath === '/galeri.html') {
      return <GalleryView onNavigate={handleNavigate} />;
    }
    if (currentPath === '/tentang-kami.html') {
      return <StaticViews viewType="about" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/kontak.html') {
      return <StaticViews viewType="contact" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/faq.html') {
      return <StaticViews viewType="faq" onNavigate={handleNavigate} />;
    }

    // C. Blog Main Hub
    if (currentPath === '/blog.html') {
      return <BlogHubView categoryFilter="all" onNavigate={handleNavigate} />;
    }

    // D. Category landings
    if (currentPath === '/category-bromo.html') {
      return <BlogHubView categoryFilter="bromo" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/category-tumpak-sewu.html') {
      return <BlogHubView categoryFilter="tumpak-sewu" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/category-kawah-ijen.html') {
      return <BlogHubView categoryFilter="kawah-ijen" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/category-travel-tips.html') {
      return <BlogHubView categoryFilter="travel-tips" onNavigate={handleNavigate} />;
    }

    // E. Match individual blog article slugs dynamically!
    const articleMatch = articles.find((art) => `/${art.slug}.html` === currentPath);
    if (articleMatch) {
      return <ArticleView slug={articleMatch.slug} onNavigate={handleNavigate} />;
    }

    // Default to Home View
    return <HomeView onNavigate={handleNavigate} />;
  };

  return (
    <div className="bg-forest-950 min-h-screen flex flex-col font-sans select-none relative selection:bg-gold-400 selection:text-forest-950">
      
      {/* Fallback Core SEO Tags on initial load (will be overridden by nested views) */}
      <SEOHead
        title="Agent Tour Bromo, Ijen, &amp; Tumpak Sewu Terpercaya | Bromo Panca"
        description="Pilihan Paket Wisata Bromo Private &amp; Open Trip Midnight terlengkap berangkat setiap hari. Nikmati keindahan East Java bersama Bromo Panca Travel."
        canonicalUrl="https://bromopanca.com/"
      />

      {/* Identical Floating Header across all views */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Dynamic Viewport */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Identical Global Footer with SEO Sitemap Access */}
      <Footer onNavigate={handleNavigate} onOpenExporter={() => setAdminOpen(true)} />

      {/* Tiny Notification Pill prompting the owner/developer to click the Exporter Hub */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <button
          onClick={() => setAdminOpen(true)}
          className="flex items-center gap-2 bg-forest-900 border border-gold-300/40 text-gold-300 hover:text-forest-950 hover:bg-gold-300 px-4 py-2 rounded-full text-xs font-semibold shadow-2xl transition-all cursor-pointer animate-bounce"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>SEO &amp; Blog Publishing Panel</span>
        </button>
      </div>

      {/* Modals/Admin Panel Overlay */}
      {adminOpen && (
        <AdminPanel
          onClose={() => setAdminOpen(false)}
          onAddArticle={handleAddLiveArticle}
          articlesCount={articles.length}
        />
      )}
    </div>
  );
}
