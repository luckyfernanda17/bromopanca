/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Video, Youtube, MessageSquare } from 'lucide-react';
import { blogArticles } from '../data';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenExporter?: () => void;
}

export default function Footer({ onNavigate, onOpenExporter }: FooterProps) {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get 2 latest articles to show in footer dynamically
  const latestArticles = blogArticles.slice(0, 2);

  const whatsappUrl = 'https://wa.me/6285211639430?text=Halo%20Bromo%20Panca%2C%20saya%20tertarik%20untuk%20booking%20paket%20wisata%20di%20East%20Java.';

  return (
    <footer id="global-footer" className="bg-forest-950 text-gray-300 border-t border-gold-400/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Bio */}
          <div>
            <div onClick={() => handleLinkClick('/')} className="flex items-center gap-2 cursor-pointer mb-5 group">
              <div className="bg-gold-400 p-2 rounded-lg transition-transform group-hover:rotate-12 duration-300">
                <Mountain className="w-5 h-5 text-forest-950" />
              </div>
              <span className="font-display font-bold text-lg text-gold-100 tracking-wider">BROMO PANCA</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Agen perjalanan wisata luxury & premium terpercaya di Jawa Timur. Spesialisasi petualangan Gunung Bromo, Air Terjun Tumpak Sewu, dan Danau Kawah Ijen Blue Fire dengan kualitas pelayanan bintang lima.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/bromopanca" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-forest-900 border border-gold-400/20 flex items-center justify-center hover:bg-gold-400 hover:text-forest-950 hover:scale-110 transition-all text-gold-300" title="Follow Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/bromopanca" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-forest-900 border border-gold-400/20 flex items-center justify-center hover:bg-gold-400 hover:text-forest-950 hover:scale-110 transition-all text-gold-300" title="Like Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://tiktok.com/@bromopanca" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-forest-900 border border-gold-400/20 flex items-center justify-center hover:bg-gold-400 hover:text-forest-950 hover:scale-110 transition-all text-gold-300" title="Follow TikTok">
                <Video className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/bromopanca" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-forest-900 border border-gold-400/20 flex items-center justify-center hover:bg-gold-400 hover:text-forest-950 hover:scale-110 transition-all text-gold-300" title="Subscribe YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Popular Tours */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest text-gold-300 uppercase mb-5 border-l-2 border-gold-400 pl-3">
              Popular Tours
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('/paket-wisata-bromo.html')} className="hover:text-gold-300 hover:translate-x-1 duration-200 cursor-pointer block text-left">
                  Premium Private Tour Bromo
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/open-trip-bromo.html')} className="hover:text-gold-300 hover:translate-x-1 duration-200 cursor-pointer block text-left">
                  Open Trip Midnight Bromo
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/paket-bromo-tumpak-sewu.html')} className="hover:text-gold-300 hover:translate-x-1 duration-200 cursor-pointer block text-left">
                  Paket Bromo Tumpak Sewu
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/paket-bromo-ijen.html')} className="hover:text-gold-300 hover:translate-x-1 duration-200 cursor-pointer block text-left">
                  Paket Bromo Kawah Ijen
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Latest Articles */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest text-gold-300 uppercase mb-5 border-l-2 border-gold-400 pl-3">
              Latest Articles
            </h3>
            <div className="space-y-4">
              {latestArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleLinkClick(`/${art.slug}.html`)}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <img
                    src={art.featuredImage}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity border border-gold-400/10"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-gray-200 group-hover:text-gold-300 duration-200 line-clamp-2">
                      {art.title}
                    </h4>
                    <span className="text-[10px] font-mono text-gold-400 block mt-1">
                      {art.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest text-gold-300 uppercase mb-5 border-l-2 border-gold-400 pl-3">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Ahmad Yani 111 Malang, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>booking@bromopanca.com</span>
              </li>
              <li className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-1.5 px-3.5 rounded-full text-xs shadow-md cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  Chat Admin (Online)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-gold-400/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            <p id="copyright-notice">
              &copy; 2026 Bromo Panca Travel Agency. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <button onClick={() => handleLinkClick('/faq.html')} className="hover:text-gold-300 cursor-pointer">
              FAQ
            </button>
            <button onClick={() => handleLinkClick('/tentang-kami.html')} className="hover:text-gold-300 cursor-pointer">
              Terms &amp; Conditions
            </button>
            <button onClick={() => handleLinkClick('/kontak.html')} className="hover:text-gold-300 cursor-pointer">
              Privacy Policy
            </button>
            <a href="/sitemap.xml" target="_blank" className="hover:text-gold-300">
              XML Sitemap
            </a>
            <a href="/robots.txt" target="_blank" className="hover:text-gold-300">
              Robots.txt
            </a>
            {onOpenExporter && (
              <button
                onClick={onOpenExporter}
                className="text-gold-300 hover:text-gold-200 border border-gold-400/30 px-2.5 py-0.5 rounded cursor-pointer transition-all hover:bg-gold-400/10"
              >
                🛠️ SEO Exporter Hub
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
