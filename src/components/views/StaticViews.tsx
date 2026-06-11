/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, Phone, Mail, MapPin, Compass, Landmark, ShieldCheck, HeartHandshake, Star, ArrowRight } from 'lucide-react';
import { fags } from '../../data';
import InquiryForm from '../InquiryForm';
import SEOHead from '../SEOHead';

interface StaticViewsProps {
  viewType: 'about' | 'contact' | 'faq';
  onNavigate: (path: string) => void;
}

export default function StaticViews({ viewType, onNavigate }: StaticViewsProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  if (viewType === 'faq') {
    return (
      <div id="faq-page-container" className="animate-fade-in text-gray-200">
        <SEOHead
          title="FAQ - Pertanyaan Umum Seputar Wisata Bromo &amp; Ijen | Bromo Panca"
          description="Temukan jawaban lengkap mengenai cara reservasi, akomodasi jeep, refund, cuaca ekstrim, dan persiapan fisik di lereng Bromo Ijen bersama Bromo Panca."
          canonicalUrl="https://bromopanca.com/faq.html"
          faqList={fags}
        />

        {/* Hero */}
        <section className="bg-forest-900 border-b border-gold-400/10 pt-32 pb-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
              HELP AND SUPPORT CENTER
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-5xl text-gold-100 uppercase">
              Frequently Asked Questions (FAQ)
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto font-light">
              Pertanyaan umum mengenai tata cara pemesanan, kebijakan uang muka (DP), penjemputan, hingga kiat berlibur nyaman di Jawa Timur.
            </p>
          </div>
        </section>

        {/* Content list */}
        <section className="py-16 bg-forest-950">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-4">
              {fags.map((item, idx) => (
                <div key={idx} className="border border-gold-400/15 bg-forest-900 rounded-2xl overflow-hidden shadow-lg">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-5 text-left font-sans text-sm sm:text-base font-semibold text-gold-200 hover:text-gold-300 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-gold-400" />
                      {item.question}
                    </span>
                    <span className="text-xl">{activeFaq === idx ? '−' : '+'}</span>
                  </button>

                  {activeFaq === idx && (
                    <div className="p-5 border-t border-gold-400/10 text-xs sm:text-sm text-gray-400 leading-relaxed font-light bg-forest-950/20">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Direct call banner */}
            <div className="mt-12 bg-forest-900 border border-gold-400/10 p-6 rounded-2xl text-center">
              <h4 className="font-serif font-bold text-gold-100 text-lg">Ada Pertanyaan Tambahan?</h4>
              <p className="text-xs text-gray-400 mt-2 font-light">Hubungi WhatsApp Chat admin 24 jam kami untuk respon langsung yang ramah.</p>
              <a
                href="https://wa.me/6285211639430?text=Halo%20Bromo%20Panca%2C%20saya%20punya%20pertanyaan%20mengenai%20paket%20wisatanya."
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2 px-5 rounded-full"
              >
                Chat Hub fast response
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (viewType === 'contact') {
    return (
      <div id="contact-page-container" className="animate-fade-in text-gray-200">
        <SEOHead
          title="Kontak Resmi &amp; Lokasi Kantor Bromo Panca Travel"
          description="Hubungi layanan pelanggan Bromo Panca Travel Agency. Alamat kantor pusat di Pasuruan Jawa Timur, nomor telepon WhatsApp, dan email resmi."
          canonicalUrl="https://bromopanca.com/kontak.html"
        />

        {/* Hero */}
        <section className="bg-forest-900 border-b border-gold-400/10 pt-32 pb-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
              GET IN TOUCH
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-5xl text-gold-100 uppercase">
              Hubungi Hub Bromo Panca
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto font-light">
              Konsultasikan rencana liburan, request custom itinerary, sampaikan saran, atau reservasi jeep Land Cruiser Anda dangan mudah.
            </p>
          </div>
        </section>

        {/* Split Page details */}
        <section className="py-16 bg-forest-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column coordinates */}
              <div className="space-y-8">
                <div className="bg-forest-900 border border-gold-400/10 rounded-2xl p-6 sm:p-8">
                  <h3 className="font-serif font-bold text-gold-150 text-xl border-b border-gold-400/10 pb-3 mb-6">
                    Informasi &amp; Kontak Resmi
                  </h3>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="bg-gold-400/10 p-3 rounded-xl inline-block text-gold-300 flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-200 uppercase font-mono">Alamat Kantor Pusat</h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 font-light">
                          Jl. Ahmad Yani 111 Malang, Jawa Timur 65157
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="bg-gold-400/10 p-3 rounded-xl inline-block text-gold-300 flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-200 uppercase font-mono">WhatsApp Hotline Call</h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 font-light">
                          +62 812-3456-7890 (Online 24 Jam)
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="bg-gold-400/10 p-3 rounded-xl inline-block text-gold-300 flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-200 uppercase font-mono">Email Reservasi</h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 font-light">
                          booking@bromopanca.com
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Simulated Elegant map */}
                <div className="bg-forest-900 border border-gold-400/10 p-4 rounded-2xl shadow-xl overflow-hidden h-80">
<div className="bg-forest-900 border border-gold-400/10 p-4 rounded-2xl shadow-xl overflow-hidden h-80">
  <iframe
    src="https://maps.app.goo.gl/vp9GFmrhaNQV3Guv7"
    className="w-full h-full rounded-xl border-0"
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer"
  ></iframe>
</div>
              </div>

              {/* Right Column Reservation Form */}
              <div>
                <InquiryForm />
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }

  // default to About Us view
  return (
    <div id="about-page-container" className="animate-fade-in text-gray-200">
      <SEOHead
        title="Tentang Kami - Agen Wisata Resmi Bromo Panca"
        description="Pelajari visi besar Bromo Panca Travel Agency dalam menyuguhkan akomodasi luxury, keberlanjutan wisata lokal Suku Tengger, dan jaminan standard pelayanan."
        canonicalUrl="https://bromopanca.com/tentang-kami.html"
      />

      {/* Hero */}
      <section className="bg-forest-900 border-b border-gold-400/10 pt-32 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
            OUR BRAND STORY
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-gold-100 uppercase">
            Tentang Kami (Bromo Panca)
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto font-light">
            Mendedikasikan diri menghadirkan pariwisata petualangan alam East Java yang profesional, aman, beretika sosial, dan bercita rasa luxury.
          </p>
        </div>
      </section>

      {/* History details */}
      <section className="py-16 bg-forest-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">ESTABLISHED SINCE 2018</span>
              <h2 className="font-serif font-bold text-2xl text-gold-150 uppercase">Asal Mula Berdirinya Bromo Panca</h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed font-light">
                Bromo Panca didirikan di lereng Wonokitri oleh sekelompok pemuda lokal suku Tengger bersama praktisi pariwisata lulusan pariwisata Universitas Brawijaya. Dimulai dari satu unit jip 4x4 Land Cruiser klasik, saat ini kami mengelola armada yang luas, menjalin kolaborasi erat dangan homestay, porter Ijen, serta ranger lokal Tumpak Sewu.
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed font-light">
                Kami percaya, kenyamanan perjalanan berkualitas tinggi didapat dari standard ketat pemeliharaan kendaraan, akurasi asuransi, kebersihan akomodasi kuliner pariwisata harian, dan ketulusan senyum pelayanan lokal.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gold-400/15">
              <img
                src="/bromo-sunrise-viewpoint.jpeg"
                alt="Tentang kami bromo jeep"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Philosophy Grid values */}
          <div className="border-t border-gold-400/10 pt-16">
            <h3 className="font-serif font-bold text-center text-gold-100 text-xl mb-12 uppercase tracking-wide">
              Fokus Utama Filosofi Kami
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-forest-900 border border-gold-400/10 p-6 rounded-2xl">
                <Landmark className="w-10 h-10 text-gold-400 mb-4" />
                <h4 className="font-serif font-bold text-gold-200 text-base">Ethical Social</h4>
                <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                  Sebagian keuntungan disalurkan kembali dalam bentuk edukasi bahasa Inggris bagi anak-anak porter Ijen dan pemeliharaan jalur ekologi TNBTS.
                </p>
              </div>

              <div className="bg-forest-900 border border-gold-400/10 p-6 rounded-2xl">
                <ShieldCheck className="w-10 h-10 text-gold-400 mb-4" />
                <h4 className="font-serif font-bold text-gold-200 text-base">Professional Service</h4>
                <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                  Dari penjemputan bandara on-time dangan wewangian aromaterapi di mobil, kargo ransel tertata bersih di jeep, hingga sarapan higienis bergizi tinggi.
                </p>
              </div>

              <div className="bg-forest-900 border border-gold-400/10 p-6 rounded-2xl">
                <HeartHandshake className="w-10 h-10 text-gold-400 mb-4" />
                <h4 className="font-serif font-bold text-gold-200 text-base">Pure Guest Satisfaction</h4>
                <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                  Mendengarkan masukan tamu secara personal, sedia melayani penyesuaian hotel s.d H-3, &amp; sigap memberikan tips baju hangat bebas repot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
