/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mountain, Star, ShieldCheck, Compass, HeartHandshake, ArrowRight, MessageSquare, BookOpen, Quote, Smile, CheckCircle2 } from 'lucide-react';
import { tourPackages, blogArticles, galleryImages, travelStats } from '../../data';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const handlePackageClick = (slug: string) => {
    onNavigate(`/${slug}.html`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bromoArticles = blogArticles.slice(0, 3);

  return (
    <div id="home-view-container" className="animate-fade-in text-gray-200">
      {/* 1. Luxury Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center bg-forest-900 overflow-hidden pt-20">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/sunrise-gunung-bromo.png"
            alt="Gunung Bromo Sunrise"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/40"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-950 to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-300/30 px-3.5 py-1.5 rounded-full text-gold-300 text-[11px] font-mono tracking-widest uppercase mb-6 animate-pulse">
            <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            Voted #1 Premium Travel Agency East Java 2026
          </div>
          
          <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-gold-100 tracking-tight leading-tight max-w-4xl">
            Rasakan Kemegahan <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">Gunung Bromo</span> &amp; Jawa Timur Secara Eksklusif
          </h1>
          
          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl font-light leading-relaxed">
            Dari golden sunrise Penanjakan menembus awan hingga nyala api biru abadi Kawah Ijen dan indahnya tirai air terjun Tumpak Sewu. Liburan premium, aman, fleksibel, dan tak terlupakan bersama pakar lokal tepercaya.
          </p>

          {/* Core action CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleLinkClick('/paket-wisata-bromo.html')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-b from-gold-300 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-sans font-bold text-sm px-8 py-4 rounded-xl shadow-2xl transition-all duration-200 hover:scale-[1.03]"
            >
              Cari Paket Populer
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/6285211639430?text=Halo%20Bromo%20Panca%2C%20saya%20tertarik%20tanya%20paket%20wisata%20ke%20Bromo%20hari%20ini."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gold-400/40 hover:bg-gold-400/10 text-gold-300 font-sans font-semibold text-sm px-7 py-4 rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-gold-300" />
              Chat WhatsApp (Gratis)
            </a>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-500 font-mono mt-6 tracking-wide uppercase">
            ⚡ Jaminan 100% Berangkat Tanpa Minimal Kuota untuk Open Trip
          </p>
        </div>
      </section>

      {/* 2. Statistical Highlights */}
      <section className="bg-forest-950 border-t border-b border-gold-400/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {travelStats.map((stat, idx) => (
              <div key={idx} className="p-4 border-r border-gold-400/10 last:border-0">
                <span className="font-display font-bold text-xl sm:text-3xl md:text-4xl text-gold-300 block">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 block mt-1.5 uppercase font-sans tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Destinations (Teaser) */}
      <section className="py-20 bg-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
              DESTINASI UTAMA JAWA TIMUR
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gold-100 uppercase">
              Tiga Landmark Alami Terpopuler di Dunia
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light">
              Mulai ekspedisi petualangan luar biasa Anda menyusuri keindahan bentang alam liar terindah di belahan bumi timur Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Bromo */}
            <div className="border border-gold-400/10 rounded-2xl overflow-hidden bg-forest-950/40 relative group shadow-lg">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="/sunrise-gunung-bromo.png"
                  alt="Lautan Pasir Bromo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 duration-300"
                />
                <div className="absolute top-4 left-4 bg-forest-900 border border-gold-400/30 px-2.5 py-1 rounded text-[10px] font-mono uppercase text-gold-300">
                  POPULER
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-lg text-gold-200">Gunung Vulkanik Bromo</h3>
                <p className="text-xs text-gray-450 mt-2 leading-relaxed">
                  Terkenal dengan kaldera laut pasir vulkanik seluas 10 kilometer persegi, matahari terbit keemasan Penanjakan, dan sensasi menapaki kaki kawah meletus aktif.
                </p>
                <button onClick={() => handlePackageClick('paket-wisata-bromo')} className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold-300 hover:text-gold-200 cursor-pointer">
                  Lihat Paket Wisata Bromo <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 2: Tumpak Sewu */}
            <div className="border border-gold-400/10 rounded-2xl overflow-hidden bg-forest-950/40 relative group shadow-lg">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="tumpak-sewu-waterfall.png"
                  alt="Tumpak Sewu"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 duration-300"
                />
                <div className="absolute top-4 left-4 bg-forest-900 border border-gold-400/30 px-2.5 py-1 rounded text-[10px] font-mono uppercase text-gold-300">
                  TRENDING
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-lg text-gold-200">Air Terjun Tumpak Sewu</h3>
                <p className="text-xs text-gray-450 mt-2 leading-relaxed">
                  Tirai air terjun setengah lingkaran yang menyerupai Niagara di perbatasan Lumajang. Menyuguhkan petualangan menuruni ngarai tebing Gua Tetes ikonik.
                </p>
                <button onClick={() => handlePackageClick('paket-bromo-tumpak-sewu')} className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold-300 hover:text-gold-200 cursor-pointer">
                  Lihat Paket Bromo Tumpak Sewu <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 3: Ijen */}
            <div className="border border-gold-400/10 rounded-2xl overflow-hidden bg-forest-950/40 relative group shadow-lg">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="kawah-ijen-blue-fire.png"
                  alt="Kawah Ijen Blue Fire"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 duration-300"
                />
                <div className="absolute top-4 left-4 bg-forest-900 border border-gold-400/30 px-2.5 py-1 rounded text-[10px] font-mono uppercase text-gold-300">
                  TRENDING
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-lg text-gold-200">Kawah Ijen Banyuwangi</h3>
                <p className="text-xs text-gray-450 mt-2 leading-relaxed">
                  Menawarkan pengalaman berburu fenomena magis gas alam Blue Fire (Api Biru) abadi berpendar mistis di kegelapan kawah vulkanis terbesar dunia.
                </p>
                <button onClick={() => handlePackageClick('paket-bromo-ijen')} className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold-300 hover:text-gold-200 cursor-pointer">
                  Lihat Paket Bromo Ijen <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Popular Tour Packages Section */}
      <section className="py-20 bg-forest-950 border-t border-gold-400/10 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
                BEST SELLER PROGRAMS
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gold-100">
                Pilihan Paket Wisata Bromo Unggulan
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => handleLinkClick('/faq.html')}
                className="inline-flex items-center gap-1 text-xs text-gold-300 hover:text-gold-200 font-semibold cursor-pointer border border-gold-300/20 px-4 py-2 rounded-lg"
              >
                Pertanyaan Yang Sering Diajukan <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tourPackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => handlePackageClick(pkg.slug)}
                className="group cursor-pointer bg-forest-900 border border-gold-300/15 hover:border-gold-300/35 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col md:flex-row"
              >
                {/* Package Image */}
                <div className="w-full md:w-2/5 h-56 md:h-auto overflow-hidden relative">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 duration-300"
                  />
                  {pkg.pricePromo && (
                    <div className="absolute top-3 left-3 bg-red-600 border border-red-500 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                      Eksklusif Promo
                    </div>
                  )}
                </div>

                {/* Package details */}
                <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-gold-300 uppercase">
                      <span>⏱️ {pkg.duration}</span>
                      <span className="flex items-center gap-0.5 text-yellow-400">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        {pkg.rating} ({pkg.reviewsCount} Ulasan)
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-gold-150 mt-3 group-hover:text-gold-300 duration-200">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 md:line-clamp-3">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="border-t border-gold-400/10 pt-4 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-mono block">Mulai Dari</span>
                      <div className="flex items-baseline gap-1.5">
                        {pkg.pricePromo ? (
                          <>
                            <span className="font-display font-medium text-lg text-gold-300">
                              Rp {pkg.pricePromo.toLocaleString('id-ID')}
                            </span>
                            <span className="text-[10px] line-through text-gray-500">
                              Rp {pkg.priceFrom.toLocaleString('id-ID')}
                            </span>
                          </>
                        ) : (
                          <span className="font-display font-medium text-lg text-gold-300">
                            Rp {pkg.priceFrom.toLocaleString('id-ID')}
                          </span>
                        )}
                        <span className="text-[10px] text-gray-400">/pax</span>
                      </div>
                    </div>
                    
                    <span className="bg-forest-950 px-3.5 py-2 rounded-lg border border-gold-400/20 text-xs font-bold text-gold-200 group-hover:bg-gold-550/20 group-hover:border-gold-400 text-center transition-all">
                      Pesan Sekarang
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Bromo Panca Travel */}
      <section className="py-20 bg-forest-900 border-b border-gold-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
              BROMO PANCA COMFORT ADVANTAGE
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gold-100">
              Kenapa Memilih Layanan Bromo Panca?
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light">
              Kami menggabungkan kenyamanan transportasi berkelas, keselamatan tinggi, koordinasi 100% digital, dan driver lokal asli berlisensi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gold-400/10 bg-forest-950 p-6 rounded-2xl">
              <div className="bg-gold-400/10 p-3 rounded-xl inline-block text-gold-300 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-gold-200">100% Jaminan Keamanan</h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Asuransi perjalanan pariwisata penuh, driver bersertifikat, dan penggunaan kelengkapan masker belerang standar militer di Ijen secara cuma-cuma.
              </p>
            </div>

            <div className="border border-gold-400/10 bg-forest-950 p-6 rounded-2xl">
              <div className="bg-gold-400/10 p-3 rounded-xl inline-block text-gold-300 mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-gold-200">Armada Jeep 4x4 Milik Sendiri</h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Kami memiliki paguyuban jeep berlisensi dengan mobil Land Cruiser premium yang dirawat berkala. Bebas calo dan jaminan pasti dijemput on-time.
              </p>
            </div>

            <div className="border border-gold-400/10 bg-forest-950 p-6 rounded-2xl">
              <div className="border border-transparent bg-gold-400/10 p-3 rounded-xl inline-block text-gold-300 mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-gold-200">Pemandu Lokal Berlisensi</h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Dipandu oleh ranger asli suku Tengger dan Banyuwangi yang berpengalaman, menguasai teknik fotografi HP yang elegan, dan mengerti spot-spot sepi turis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials */}
      <section className="py-20 bg-forest-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
              CUSTOMER REVIEWS
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gold-100">
              Apa Kata Ribuan Petualang Teman Bromo Panca?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-forest-900 border border-gold-300/15 p-6 rounded-2xl shadow-luxury relative">
              <Quote className="w-10 h-10 text-gold-400/10 absolute top-4 right-4" />
              <div className="flex gap-1.5 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-xs sm:text-sm text-gray-350 italic leading-relaxed">
                "Ikut open trip midnight dari Malang dengan Bromo Panca beneran best decision! Saya daftar sendirian h-1 malam, langsung dimasukkan grup koordinasi WA. Pelayanannya ramah banget, driver asik merangkap jadi seksi dokumentasi teruji."
              </p>
              <div className="border-t border-gold-400/10 pt-4 mt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-gold-200">Muhammad Bagaskara</h4>
                  <span className="text-[10px] text-gray-400 block mt-0.5">Solo Traveler - Jakarta</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                  <Smile className="w-3.5 h-3.5" /> Terverifikasi
                </div>
              </div>
            </div>

            <div className="bg-forest-900 border border-gold-300/15 p-6 rounded-2xl shadow-luxury relative">
              <Quote className="w-10 h-10 text-gold-400/10 absolute top-4 right-4" />
              <div className="flex gap-1.5 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-xs sm:text-sm text-gray-350 italic leading-relaxed">
                "We booked a private Bromo Ijen tour 3 days 2 nights. Exceeded expectations. The hotel selected near Bromo had perfect views. Special mention to Hanif, our guide in Ijen, who carried spare batteries and showed us the best safe places near the Blue Fire!"
              </p>
              <div className="border-t border-gold-400/10 pt-4 mt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-gold-200">Sophia &amp; Eric</h4>
                  <span className="text-[10px] text-gray-400 block mt-0.5">Custom Private Trip - Berlin, Germany</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                  <Smile className="w-3.5 h-3.5" /> Terverifikasi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Gallery Preview (Masonry-like Style) */}
      <section className="py-20 bg-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
                LENS AND CAPTURES
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gold-100">
                Dokumentasi Real-Time Perjalanan
              </h2>
            </div>
            <div className="mt-4 sm:mt-0">
              <button
                onClick={() => handleLinkClick('/galeri.html')}
                className="text-xs text-gold-300 hover:text-gold-200 font-bold flex items-center gap-1.5 cursor-pointer"
              >
                Lihat Seluruh Galeri <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 3).map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl border border-gold-400/10">
                <img
                  src={img.url}
                  alt={img.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[10px] text-gold-300 font-mono tracking-widest uppercase">Spot Foto Ikonik</p>
                  <p className="text-xs text-white font-serif mt-1">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Recent Blog Articles - Dynamic Links */}
      <section className="py-20 bg-forest-950 border-t border-b border-gold-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
              TRAVEL NEWS AND EDUCATION
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-gold-100">
              Artikel &amp; Panduan Wisata Terbaru
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 font-light">
              Dapatkan informasi tiket, cuaca, tips trekking malam, dan rute terlengkap dari ahlinya sebelum Anda berlibur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bromoArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => handleLinkClick(`/${art.slug}.html`)}
                className="group cursor-pointer bg-forest-900 border border-gold-300/15 hover:border-gold-300/35 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={art.featuredImage}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-xs text-gold-300 font-mono text-[9px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {art.category}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono text-gold-400 block mb-2">{art.date} • ⏱️ {art.readTime}</span>
                  <h3 className="font-serif font-bold text-base text-gold-150 group-hover:text-gold-300 transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                    {art.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-gold-300 font-bold mt-4 cursor-pointer group-hover:text-gold-200">
                    Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-900 relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/5 blur-3xl rounded-full"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
            EXOTIC EAST JAVA EXPEDITIONS
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-gold-100">
            Siap Mengukir Petualangan Abadi?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto font-light">
            Hubungi penasihat perjalanan kami sekarang. Atur tanggal keberangkatan Anda sendiri (Private Trip) atau bergabungkan bersama rombongan asyik (Open Trip). Diskon promo berlaku terbatas!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              id="home-final-whatsapp-button"
              href="https://wa.me/6285211639430?text=Halo%2520Bromo%2520Panca%252C%2520saya%2520ingin%2520pesan%2520paket%2520wisata."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-b from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-sans font-bold text-sm px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5 fill-white text-white" />
              Inquire via WhatsApp (Fast Response)
            </a>
            <button
              onClick={() => handleLinkClick('/kontak.html')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border border-gold-400/30 hover:bg-gold-400/10 text-gold-300 text-sm font-semibold px-7 py-4 rounded-xl transition-colors cursor-pointer"
            >
              Hubungi Kontak Kami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
