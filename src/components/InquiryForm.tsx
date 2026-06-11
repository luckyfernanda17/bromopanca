/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { tourPackages } from '../data';

interface InquiryFormProps {
  initialPackageSlug?: string;
}

export default function InquiryForm({ initialPackageSlug = '' }: InquiryFormProps) {
  const selectedPkg = tourPackages.find((pkg) => pkg.slug === initialPackageSlug) || tourPackages[0];
  
  const [selectedSlug, setSelectedSlug] = useState(selectedPkg?.slug || tourPackages[0].slug);
  const [clientName, setClientName] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [participants, setParticipants] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !travelDate) return;

    const currentPkg = tourPackages.find((p) => p.slug === selectedSlug) || tourPackages[0];
    
    // Structure the copy for perfect booking communication
    const message = `Halo Bromo Panca travel, saya *${clientName}* ingin memesan paket perjalanan berikut:\n\n` +
      `📍 *Paket*: ${currentPkg.title}\n` +
      `📅 *Rencana Tanggal*: ${travelDate}\n` +
      `👥 *Jumlah Peserta*: ${participants} Orang\n` +
      (specialRequests ? `📝 *Catatan Khusus*: ${specialRequests}\n` : '') +
      `\nMohon informasi rincian biaya, akomodasi, ketersediaan, serta metode pembayarannya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div id="tour-inquiry-box" className="bg-forest-900 border border-gold-300/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background elegant gradient light */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/5 blur-3xl rounded-full"></div>
      
      <div className="relative z-10">
        <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase block mb-1">
          RESERVASI CEPAT 0% BIAYA KOMITMEN
        </span>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-gold-100 mb-6">
          Formulir Konsultasi &amp; Booking
        </h3>

        {submitted ? (
          <div className="bg-gold-550/10 border border-gold-400/40 p-6 rounded-xl text-center py-12 animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h4 className="font-display font-medium text-lg text-gold-200 mb-2">Mengalihkan ke WhatsApp...</h4>
            <p className="text-sm text-gray-300">
              Menghubungkan Anda langsung dengan Travel Advokat Bromo Panca. Silakan kirim pesan yang tertulis otomatis di chat box Anda.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Package Choice */}
            <div>
              <label htmlFor="inquiry-package" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                Pilih Paket Wisata *
              </label>
              <select
                id="inquiry-package"
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full bg-forest-950 border border-gold-400/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-gold-400 transition-colors"
                required
              >
                {tourPackages.map((pkg) => (
                  <option key={pkg.id} value={pkg.slug}>
                    {pkg.title} ({pkg.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Client Name */}
            <div>
              <label htmlFor="inquiry-name" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                Nama Lengkap Anda *
              </label>
              <input
                id="inquiry-name"
                type="text"
                placeholder="Contoh: Lucky Fernanda"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-forest-950 border border-gold-400/20 rounded-xl p-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                required
              />
            </div>

            {/* Travel Date & Participants Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inquiry-date" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                  Tanggal Rencana Trip *
                </label>
                <input
                  id="inquiry-date"
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-forest-950 border border-gold-400/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-gold-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="inquiry-participants" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                  Jumlah Peserta
                </label>
                <select
                  id="inquiry-participants"
                  value={participants}
                  onChange={(e) => setParticipants(e.target.value)}
                  className="w-full bg-forest-950 border border-gold-400/20 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-gold-400 transition-colors"
                >
                  <option value="1">1 Orang (Solo Traveler)</option>
                  <option value="2">2 Orang</option>
                  <option value="3">3 Orang</option>
                  <option value="4">4 Orang</option>
                  <option value="5">5 Orang</option>
                  <option value="6">6 Orang</option>
                  <option value="7-10">7 s.d 10 Orang</option>
                  <option value="11+">Lebih dari 10 Orang (Group / Gathering)</option>
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label htmlFor="inquiry-notes" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide">
                Catatan khusus / Permintaan Tambahan
              </label>
              <textarea
                id="inquiry-notes"
                rows={3}
                placeholder="Contoh: Jemput di Bandara Juanda jam 10 malam, butuh dokumentasi drone, atau hotel ganti bintang 4."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full bg-forest-950 border border-gold-400/20 rounded-xl p-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              id="confirm-booking-button"
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-sans font-bold text-sm py-3.5 px-6 rounded-xl shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <Send className="w-4 h-4 fill-white" />
              Kirim via WhatsApp (GRATIS)
            </button>

            {/* Emergency urgency text & Trust badges */}
            <p className="text-[10px] text-gray-400 text-center italic">
              ⚡ Sisa 2 Slot Promo Jeep di akhir pekan ini! Reschedule Gratis s.d H-3.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 border-t border-gold-400/10 pt-4 mt-2">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-5 h-5 text-gold-400 mb-1" />
                <span className="text-[9px] font-semibold text-gray-200">100% Aman</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <HeartHandshake className="w-5 h-5 text-gold-400 mb-1" />
                <span className="text-[9px] font-semibold text-gray-200">Garansi Layanan</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="w-5 h-5 text-gold-400 mb-1" />
                <span className="text-[9px] font-semibold text-gray-200">Lokal Berizin</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
