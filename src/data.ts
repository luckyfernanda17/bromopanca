/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TourPackage, BlogArticle, FAQItem } from './types';

// Real local coordinates & realistic prices for Bromo Tourism (Indonesian Rupiah / IDR)
export const tourPackages: TourPackage[] = [
  {
    id: 'pkg-wisata-bromo',
    slug: 'paket-wisata-bromo',
    title: 'Paket Wisata Bromo Premium Private Tour',
    seoTitle: 'Paket Wisata Bromo Murah & Premium 2026 | Bromo Panca Travel',
    metaDesc: 'Dapatkan Paket Wisata Bromo Private Tour premium terbaik dari Bromo Panca. Fasilitas Jeep Luxury, Driver Handal, & itinerary fleksibel. Booking via WhatsApp sekarang!',
    keyword: 'paket wisata bromo',
    tagline: 'Petualangan Magis Menembus Kabut Bromo secara Privat & Eksklusif',
    duration: '2 Hari 1 Malam (2D1N)',
    rating: 4.9,
    reviewsCount: 348,
    priceFrom: 1250000,
    pricePromo: 990000,
    heroImage: '/sunrise-gunung-bromo.png',
    description: 'Rasakan keindahan magis matahari terbit Gunung Bromo bersama layanan private tour terbaik dari Bromo Panca. Didesain khusus bagi Anda yang menginginkan kenyamanan maksimal tanpa harus berbagi ruang dengan rombongan lain. Menggunakan armada Jeep Toyota Land Cruiser 4x4 premium dan menginap di hotel bintang terbaik di kawasan Bromo.',
    highlights: [
      'Golden Sunrise Terbaik di Penanjakan 1 / Bukit Kingkong',
      'Mendaki Tangga Kawah Bromo yang Eksotis',
      'Menjelajahi Padang Savana & Bukit Teletubbies',
      'Fotografi Premium di Lautan Pasir Berbisik',
      'Pura Luhur Poten di kaki Gunung Batok'
    ],
    inclusions: [
      'Jeep 4x4 Private (Bahan Bakar & Driver)',
      'Transportasi Jemput & Antar AC (Surabaya/Malang)',
      'Akomodasi Hotel Bintang 3/4 di Bromo (Termasuk Sarapan)',
      'Tiket Masuk Taman Nasional Bromo Tengger Semeru (TNBTS)',
      'Air Mineral Premium Selama Trip',
      'Masker & Snack Box Eksklusif Bromo Panca',
      'Dokumentasi Driver Professional'
    ],
    exclusions: [
      'Pengeluaran Pribadi (Belanja, Tip Driver)',
      'Sewa Kuda di Kawah Bromo (Opsional)',
      'Makan Siang & Makan Malam di Luar Itinerary'
    ],
    itinerary: [
      {
        time: 'Pukul 23:30 (Hari 1)',
        activity: 'Penjemputan di Surabaya / Malang',
        details: 'Driver kami akan menjemput Anda menggunakan mobil AC premium (Innova/Avanza) di Bandara, Stasiun, atau Hotel area Surabaya/Malang.'
      },
      {
        time: 'Pukul 02:00 (Hari 2)',
        activity: 'Tiba di Transit Point & Ganti Jeep 4x4',
        details: 'Tiba di kawasan transit Bromo, beristirahat sejenak untuk briefing, dan berganti ke Jeep Toyota Land Cruiser 4x4 premium kami.'
      },
      {
        time: 'Pukul 03:00 - 06:15',
        activity: 'Perjalanan ke View Point & Menikmati Sunrise',
        details: 'Menembus kabut pagi menuju Penanjakan 1 atau Bukit Kingkong. Menikmati kopi hangat sembari menyaksikan matahari terbit berlatar belakang Gunung Bromo, Batok, dan Semeru yang legendaris.'
      },
      {
        time: 'Pukul 06:30 - 08:30',
        activity: 'Mengeksplorasi Kawah Bromo & Pura Luhur Poten',
        details: 'Melewati Lautan Pasir (Caldera). Anda bisa berjalan kaki atau naik kuda (opsional) menuju tangga Kawah Bromo aktif yang spektakuler.'
      },
      {
        time: 'Pukul 08:45 - 09:30',
        activity: 'Mengunjungi Pasir Berbisik & Savana Teletubbies',
        details: 'Sesi foto ikonik bersama Jeep premium kami di Lautan Pasir Berbisik dan menikmati keindahan padang rumput hijau subur Savana Teletubbies.'
      },
      {
        time: 'Pukul 10:00 - 12:00',
        activity: 'Sarapan di Hotel & Check-out Akomodasi',
        details: 'Kembali ke akomodasi premium untuk sarapan bergizi, mandi, dan bersantai sejenak sebelum bersiap kembali.'
      },
      {
        time: 'Pukul 13:00 - 16:30',
        activity: 'Perjalanan Kembali ke Surabaya / Malang',
        details: 'Kembali diantar dengan aman ke titik penjemputan awal. Trip selesai dengan membawa kenangan tak terlupakan.'
      }
    ],
    reviews: [
      {
        author: 'Aris Wijaya',
        rating: 5,
        date: '08 Mei 2026',
        comment: 'Sangat puas dengan layanan Bromo Panca. Jeepnya bersih banget, driver mas Hanif ramah sekali, membantu carikan spot foto yang sepi dan hasilnya luar biasa. Sangat direkomendasikan untuk private tour keluarga!',
        location: 'Jakarta Barat, Indonesia'
      },
      {
        author: 'Rina Kusuma',
        rating: 5,
        date: '22 April 2026',
        comment: 'Hotel tempat menginap sangat bagus dan dekat dengan sunrise point. Itinerary fleksibel karena private trip, jadi tidak buru-buru. Layanan WhatsApp responsif 24 jam.',
        location: 'Surabaya, Indonesia'
      }
    ],
    faq: [
      {
        question: 'Kapan waktu terbaik untuk mengambil Paket Wisata Bromo?',
        answer: 'Waktu terbaik adalah saat musim kemarau antara bulan Mei hingga Oktober, di mana langit sangat cerah dan peluang melihat matahari terbit sempurna sangat tinggi.'
      },
      {
        question: 'Apakah paket ini ramah anak-anak dan lansia?',
        answer: 'Ya, paket privat kami didesain santai dan fleksibel. Kami menyediakan opsi sewa kuda di pasir berbisik bagi anak-anak atau lansia yang tidak ingin terlalu lelah berjalan kaki menuju tangga kawah.'
      }
    ],
    gallery: [
      '/bromo-sunrise-viewpoint.jpeg',
      '/paket-wisata-bromo.jpeg',
      '/bromo-sea-of-sand.jpeg'
    ]
  },
  {
    id: 'pkg-open-trip-bromo',
    slug: 'open-trip-bromo',
    title: 'Open Trip Bromo Midnight Berkualitas',
    seoTitle: 'Open Trip Bromo Midnight Murah Berangkat Setiap Hari | Bromo Panca',
    metaDesc: 'Ikuti Open Trip Bromo Midnight berangkat setiap hari dari Surabaya atau Malang. Harga terjangkau, fasilitas lengkap, ramah untuk solo traveler. Gabung sekarang!',
    keyword: 'open trip bromo',
    tagline: 'Hemat, Seru, dan Temukan Sahabat Baru di Keindahan Gunung Bromo',
    duration: '1 Hari (Midnight Trip)',
    rating: 4.8,
    reviewsCount: 521,
    priceFrom: 450000,
    pricePromo: 350000,
    heroImage: '/trip-bromo-sunrise.jpeg',
    description: 'Ingin berlibur ke Bromo sendirian atau dalam kelompok kecil tanpa biaya mahal? Open Trip Bromo Midnight adalah solusi terbaik! Berangkat setiap hari tanpa kuota minimum, jaminan pasti berangkat. Menjemput Anda langsung di meeting point strategis Surabaya/Malang, Anda akan digabungkan dengan petualang seru lainnya.',
    highlights: [
      'Menyaksikan Bromo Golden Sunrise legendaris',
      'Mengunjungi Bukit Cinta / Bukit KingKong',
      'Petualangan Jeep 4x4 Berbagi Keseruan',
      'Kawah Gunung Bromo & Pura Luhur Poten',
      'Mengeksplorasi Padang Savana & Pasir Berbisik'
    ],
    inclusions: [
      'Tiket Masuk TNBTS Resmi (Domestik)',
      'Jeep 4x4 Sharing (Maksimal 6 Orang/Jeep)',
      'Transportasi Antar Jemput AC (Surabaya/Malang)',
      'Driver Profesional merangkap Guide Lokal',
      'Bahan Bakar Mobil & Parkir',
      'Air Mineral & Masker'
    ],
    exclusions: [
      'Sewa Kuda di Kawah Bromo',
      'Makan & Minum Pribadi selama trip',
      'Dokumentasi Kamera DSLR profesional (Opsional tambahan)'
    ],
    itinerary: [
      {
        time: 'Pukul 23:00 - 23:45',
        activity: 'Penjemputan di Meeting Point',
        details: 'Proses penjemputan peserta open trip di Malang Kota (stasiun/hotel) atau Surabaya (SPBU alun-alun).'
      },
      {
        time: 'Pukul 00:00 - 02:30',
        activity: 'Perjalanan Menuju Pos Transit Bromo',
        details: 'Perjalanan malam menggunakan mobil shuttle AC standard pariwisata yang nyaman menuju desa Tosari/Tumpang.'
      },
      {
        time: 'Pukul 03:00 - 06:00',
        activity: 'Golden Sunrise Hunting di Penanjakan',
        details: 'Tiba di bukit penanjakan, menikmati minuman hangat opsional di warung lokal, lalu menyaksikan sunrise spektakuler.'
      },
      {
        time: 'Pukul 06:30 - 08:30',
        activity: 'Eksplorasi Kawah Bromo & Pura Poten',
        details: 'Melewati lautan pasir yang luas, mendaki ke bibir kawah aktif dengan berpetualang menapaki 250 anak tangga.'
      },
      {
        time: 'Pukul 08:45 - 10:00',
        activity: 'Padang Savana Teletubbies & Pasir Berbisik',
        details: 'Menikmati hembusan angin pasir yang berbisik merdu dan hamparan hijau subur di Savana Teletubbies.'
      },
      {
        time: 'Pukul 10:30',
        activity: 'Perjalanan Kembali ke Pos Transit',
        details: 'Istirahat dan bersih-bersih badan sejenak di pos transit.'
      },
      {
        time: 'Pukul 11:30 - 14:00',
        activity: 'Perjalanan Kembali & Drop-off Peserta',
        details: 'Diantar kembali ke titik penjemputan semula di Surabaya atau Malang. Trip Bromo selesai!'
      }
    ],
    reviews: [
      {
        author: 'Nabila Syakieb',
        rating: 5,
        date: '15 Mei 2026',
        comment: 'Solo traveling pertama kali ke Bromo pakai open trip ini sangat menyenangkan. Temannya asik, drivernya lucu dan pinter nyari angle foto. Harga murah tapi standar service luar biasa.',
        location: 'Bandung, Indonesia'
      },
      {
        author: 'Dedi Setiadi',
        rating: 4,
        date: '02 Mei 2026',
        comment: 'Pasti berangkat meskipun saya daftar sendirian h-1 malam. Koordinasi penjemputan sangat rapi lewat grup chat WA. Sangat direkomendasikan buat backpaker!',
        location: 'Yogyakarta, Indonesia'
      }
    ],
    faq: [
      {
        question: 'Apakah pasti berangkat meskipun hanya daftar 1 orang?',
        answer: 'Ya, Bromo Panca menjamin keberangkatan setiap hari meskipun Anda hanya mendaftar seorang diri. Kami akan menggabungkan dengan grup lain secara ramah.'
      },
      {
        question: 'Di mana meeting point penjemputannya?',
        answer: 'Meeting point gratis di area Stasiun Kota Malang, Alun-alun Malang, atau Bandara Juanda/Stasiun Gubeng Surabaya dengan tambahan akomodasi minimal.'
      }
    ],
    gallery: [
      '/lautan-pasir-bromo.JPEG',
      '/bromo-sea-of-sand.jpeg',
      '/bromo-sunrise-viewpoint.jpeg'
    ]
  },
  {
    id: 'pkg-bromo-tumpak-sewu',
    slug: 'paket-bromo-tumpak-sewu',
    title: 'Paket Wisata Bromo Tumpak Sewu 3D2N',
    seoTitle: 'Paket Bromo Tumpak Sewu Terpercaya 3 Hari 2 Malam | Bromo Panca',
    metaDesc: 'Eksplorasi kombinasi megah Gunung Bromo dan Air Terjun Tumpak Sewu yang dijuluki Niagara dari Jawa Timur. Paket tour 3D2N private & lengkap. Hubungi us!',
    keyword: 'paket bromo tumpak sewu',
    tagline: 'Kombinasi Megah Gunung Vulkanis dan Air Terjun Seribu Jiwa yang Menakjubkan',
    duration: '3 Hari 2 Malam (3D2N)',
    rating: 4.9,
    reviewsCount: 194,
    priceFrom: 2450000,
    pricePromo: 1990000,
    heroImage: '/paket-bromo-tumpak-sewu.jpeg',
    description: 'Biarkan diri Anda terpesona oleh paket wisata eksotis 3 hari 2 malam yang menggabungkan kemegahan matahari terbit Gunung Bromo dengan keindahan luar biasa Air Terjun Tumpak Sewu. Air terjun melingkar megah seperti tirai hijau raksasa yang terletak di kaki Gunung Semeru. Semua akomodasi mewah, transportasi pribadi, dan local guide profesional telah kami siapkan.',
    highlights: [
      'Keindahan Spektakuler Air Terjun Tumpak Sewu (Panorama Atas)',
      'Jelajah Tebing Bawah & Gua Tetes yang Eksotis',
      'Sunrise Magis Gunung Bromo dari Bukit Cadangan Terbaik',
      'Kawah Bromo Aktif & Savana Pasir Berbisik',
      'Private Service Bebas Stres & Antre'
    ],
    inclusions: [
      'Transportasi AC Private PP (Surabaya/Malang)',
      'Akomodasi Hotel 1 Malam di Bromo & 1 Malam di dekat Tumpak Sewu',
      'Jeep Toyota Land Cruiser 4x4 di Bromo (Privat)',
      'Tiket Masuk Bromo TNBTS & Air Terjun Tumpak Sewu',
      'Lokal Ranger / Guide Spesialis Turun Tebing Tumpak Sewu',
      'Sarapan Pagi di Hotel',
      'Air Mineral & Safety Helmet di Tumpak Sewu'
    ],
    exclusions: [
      'Mogok makan siang / malam di luar program',
      'Sewa kuda di pasir Bromo',
      'Tip Driver & Ranger'
    ],
    itinerary: [
      {
        time: 'Hari 1',
        activity: 'Penjemputan & Perjalanan ke Tumpak Sewu',
        details: 'Penjemputan pagi hari di Surabaya/Malang. Langsung berkendara menuju Kabupaten Lumajang. Check-in di homestay luxury/cottage dekat air terjun. Istirahat untuk energi besok.'
      },
      {
        time: 'Hari 2 - Pukul 07:00 - 11:30',
        activity: 'Soft Trekking Dasar Air Terjun Tumpak Sewu & Gua Tetes',
        details: 'Mulai petualangan turun ke ngarai dasar air terjun didampingi ranger lokal profesional kami. Berfoto dekat canopi air terjun megah, dilanjutkan menyusuri tebing Gua Tetes yang menawan.'
      },
      {
        time: 'Hari 2 - Pukul 12:30 - 16:30',
        activity: 'Perjalanan Menuju Kawasan Gunung Bromo',
        details: 'Check out dari homestay, dilanjutkan makan siang khas pedesaan, lalu melanjutkan perjalanan menuju hotel lereng Gunung Bromo untuk beristirahat.'
      },
      {
        time: 'Hari 3 - Pukul 03:00 - 11:00',
        activity: 'Bromo Midnight Adventure & Transfer Out',
        details: 'Berpetualang ke Sunrise Point menggunakan Jeep 4x4, menjelajahi Kawah Bromo, menikmati sarapan pagi premium, lalu kembali diantar ke stasiun/bandara Malang atau Surabaya.'
      }
    ],
    reviews: [
      {
        author: 'Christine Tan',
        rating: 5,
        date: '10 April 2026',
        comment: 'Trekking ke dasar Tumpak Sewu sangat menantang tapi didampingi ranger dari Bromo Panca yang sangat sabar dan ahli memandu jalan basah. Kombinasi Bromo & Tumpak Sewu benar-benar magis!',
        location: 'Singapore'
      },
      {
        author: 'Bagas Pratama',
        rating: 5,
        date: '28 Maret 2026',
        comment: 'Highly recommended program. Hotelnya bersih, makanannya enak, koordinasi sangat presisi. Cocok sekali untuk refreshing alam murni.',
        location: 'Tangerang, Indonesia'
      }
    ],
    faq: [
      {
        question: 'Apakah jalur turun ke dasar Air Terjun Tumpak Sewu berbahaya?',
        answer: 'Jalurnya cukup curam dan memerlukan kehati-hatian karena basah. Namun setiap tamu kami didampingi ranger lokal eksklusif yang sangat berpengalaman serta dilengkapi helm keselamatan.'
      },
      {
        question: 'Apa saja perlengkapan wajib yang harus dibawa ke Tumpak Sewu?',
        answer: 'Sepatu gunung antiselip atau sandal gunung bertali, pakaian ganti kering, tas kedap air (drybag), dan pelindung air untuk HP karena Anda akan terkena cipratan air terjun yang deras.'
      }
    ],
    gallery: [
      '/tumpak-sewu-waterfall.png',
      '/lautan-pasir-bromo.JPEG',
      '/bromo-sunrise-viewpoint.jpeg'
    ]
  },
  {
    id: 'pkg-bromo-ijen',
    slug: 'paket-bromo-ijen',
    title: 'Paket Wisata Bromo Ijen Blue Fire 3D2N',
    seoTitle: 'Paket Wisata Bromo Ijen Murah 3 Hari 2 Malam | Bromo Panca Travel',
    metaDesc: 'Saksikan keajaiban dunia: Bromo Golden Sunrise & Kawah Ijen Blue Fire (Api Biru) abadi. Paket Wisata Bromo Ijen 3D2N komplit & berkelas. Cek Itinerary di sini!',
    keyword: 'paket bromo ijen',
    tagline: 'Mengejar Dua Keajaiban Jagat Raya: Sunrise Emas Bromo dan Api Biru Kawah Ijen',
    duration: '3 Hari 2 Malam (3D2N)',
    rating: 4.9,
    reviewsCount: 275,
    priceFrom: 2950000,
    pricePromo: 2490000,
    heroImage: '/tour-kawah-ijen.PNG',
    description: 'Paket petualangan alam paling ikonik di Indonesia Timur! Paket Wisata Bromo Ijen 3 hari 2 malam ini membawa Anda melintasi lanskap vulkanik spektakuler. Pertama, saksikan matahari terbit surgawi di Bromo, kemudian taklukkan kawah belerang Kawah Ijen di Banyuwangi untuk melihat fenomena alam langka global: Blue Fire (Api Biru) yang hanya ada dua di seluruh dunia.',
    highlights: [
      'Pesona Bromo Golden Sunrise yang Epik',
      'Trekking Malam Hari Menembus Kawah Ijen Banyuwangi',
      'Menyaksikan Blue Fire (Api Biru) Alami yang Langka',
      'Danau Asam Toska Terbesar di Dunia di Kawah Ijen',
      'Interaksi dengan Penambang Belerang Tradisional yang Kuat'
    ],
    inclusions: [
      'Transportasi AC Private (Surabaya/Malang menuju Bromo, Ijen, & Drop Bali/Surabaya)',
      'Akomodasi Hotel 1 Malam di Bromo & 1 Malam di Ijen (Banyuwangi/Bondowoso)',
      'Jeep Toyota Land Cruiser 4x4 Private di Bromo',
      'Tiket Masuk Resmi Taman Nasional Bromo Tengger & Kawah Ijen',
      'Local Guide Berpengalaman di Kawah Ijen',
      'Sewa Masker Gas Respirator Profesional di Ijen (Sangat Penting)',
      'Sarapan Pagi di Hotel & Air Mineral Selama Perjalanan'
    ],
    exclusions: [
      'Sewa troli naik kawah Ijen (opsional)',
      'Makan siang dan malam personal',
      'Tips Guide / Driver pariwisata'
    ],
    itinerary: [
      {
        time: 'Hari 1',
        activity: 'Penjemputan di Surabaya/Malang & Menuju Bromo',
        details: 'Penjemputan di lokasi yang disepakati, dilanjutkan perjalanan menuju hotel dekat Bromo. Check-in, acara bebas menikmati dinginnya lereng Bromo.'
      },
      {
        time: 'Hari 2 - Pukul 03:00 - 10:00',
        activity: 'Bromo Sunrise & Kawah Adventure',
        details: 'Tur jeep 4x4 mengejar Sunrise emas, kawah aktif, pasir berbisik, lalu sarapan di hotel, check out dan berkendara 5 jam ke arah timur menuju hotel/resort di dekat Banyuwangi (Ijen).'
      },
      {
        time: 'Hari 3 - Pukul 01:00 - 07:30',
        activity: 'Trekking Kawah Ijen & Blue Fire Hunting',
        details: 'Bangun tengah malam menuju Paltuding. Mulai pendakian 3 km ke puncak kawah Ijen bersama guide lokal, kemudian turun ke dasar kawah belerang untuk melihat Blue Fire yang spektakuler sebelum fajar merekah.'
      },
      {
        time: 'Hari 3 - Pukul 08:30 - Finish',
        activity: 'Mudik Akhir / Transfer out Surabaya / Ketapang Bali',
        details: 'Kembali ke pos Paltuding untuk sarapan, lalu diantar kembali menuju Surabaya atau menuju Pelabuhan Ketapang bagi Anda yang ingin melanjutkan liburan ke Pulau Bali. Trip Selesai!'
      }
    ],
    reviews: [
      {
        author: 'Marcus Aurel',
        rating: 5,
        date: '04 Mei 2026',
        comment: 'Blue Fire Ijen was absolutely breathtaking. The tour guide provided by Bromo Panca was extremely helpful, providing professional respirator masks and keeping us safe near the sulfur clouds. Unforgettable trip!',
        location: 'Melbourne, Australia'
      },
      {
        author: 'Dewi Rahmawati',
        rating: 5,
        date: '19 April 2026',
        comment: 'Trip 3 hari yang sangat efisien dan nyaman. Dari Bromo lanjut ke Ijen tanpa rasa lelah berlebih karena mobilnya nyaman dan driver bawa kendaraannya tenang sekali. Layanan sedia setiap saat.',
        location: 'Yogyakarta, Indonesia'
      }
    ],
    faq: [
      {
        question: 'Apakah masker gas disediakan di Kawah Ijen?',
        answer: 'Ya, keselamatan adalah prioritas utama kami. Bromo Panca menyertakan sewa masker gas respirator berstandar militer premium secara gratis di dalam paket untuk menyaring debu belerang.'
      },
      {
        question: 'Berapa jarak pendakian Kawah Ijen?',
        answer: 'Jarak pendakian dari pos Paltuding ke bibir kawah adalah sekitar 3 km dengan tingkat kemiringan sedang hingga cukup curam. Jika Anda lelah, tersedia jasa dorong troli lokal (biaya pribadi).'
      }
    ],
    gallery: [
      '/kawah-ijen-blue-fire.png',
      '/bromo-sunrise-viewpoint.jpeg',
      '/crater-mount-bromo.JPEG'
    ]
  }
];

export const blogArticles: BlogArticle[] = [
  // ---------------- SILO 1: BROMO TOUR PACKAGE ----------------
  {
    id: 'art-entrance-fee',
    slug: 'latest-mount-bromo-entrance-fees',
    title: 'Update Terbaru Harga Tiket Masuk Gunung Bromo 2026',
    seoTitle: 'Tarif Terbaru Tiket Masuk Kawah Gunung Bromo 2026 | Bromo Panca',
    metaDesc: 'Informasi resmi terupdate tarif tiket masuk Gunung Bromo 2026 untuk wisatawan domestik & mancanegara. Jam buka, cara beli tiket online di sini.',
    excerpt: 'Ketahui rincian lengkap harga tiket masuk resmi Taman Nasional Bromo Tengger Semeru (TNBTS) tahun 2026 untuk merencanakan liburan hemat budget Anda.',
    date: '10 Juni 2026',
    readTime: '5 Menit Baca',
    category: 'bromo',
    featuredImage: '/crater-mount-bromo.JPEG',
    targetPackageSlug: 'paket-wisata-bromo',
    author: {
      name: 'Lucky Fernanda',
      avatar: '/sunrise-gunung-bromo.png',
      role: 'Travel Planner Expert',
      bio: 'Konsultan perjalanan berpengalaman 8 tahun menyusun itinerary petualangan Jawa Timur yang efisien dan tak terlupakan.'
    },
    keywords: ['tiket masuk bromo', 'harga tiket bromo', 'wisata bromo tiket'],
    contentSections: [
      {
        heading: 'Pentingnya Mengetahui Tarif Resmi TNBTS Sebelum Berangkat',
        body: 'Gunung Bromo menyuguhkan pesona keindahan kaldera pasir dan matahari terbit yang tiada duanya. Sebagai kawasan Taman Nasional Bromo Tengger Semeru (TNBTS) yang dilindungi oleh pemerintah Indonesia, setiap pengunjung diwajibkan membeli tiket resmi secara online sebelum kunjungan untuk mengontrol kuota harian demi kelestarian alam.',
        subHeadingCallout: 'Kebijakan Booking Online 100% Digital Bromo'
      },
      {
        heading: 'Rincian Tarif Tiket Masuk Bromo Hari Kerja dan Akhir Pekan',
        body: 'Berikut adalah rincian tarif masuk Gunung Bromo resmi per orang terhitung untuk tahun berjalan 2026:',
        listItems: [
          'Wisatawan Domestik (Hari Kerja): Rp 29.000,-',
          'Wisatawan Domestik (Hari Libur/Weekend): Rp 34.000,-',
          'Wisatawan Internasional (Hari Kerja): Rp 220.000,-',
          'Wisatawan Internasional (Hari Libur/Weekend): Rp 320.000,-',
          'Restribusi Kendaraan Jeep 4x4 Resmi: Rp 10.000,- per unit'
        ]
      },
      {
        heading: 'Kebijakan Penggunaan Kendaraan Pribadi di Kaldera Pasir',
        body: 'Harap diingat bahwa kendaraan bermotor roda empat pribadi non-Jeep dilarang keras menuruni kaldera pasir Bromo untuk menjaga keamanan dan kelestarian ekosistem pasir berbisik. Anda wajib menyewa jasa jeep 4x4 lokal berizin resmi dari persatuan paguyuban jip Bromo.'
      }
    ],
    faqs: [
      {
        question: 'Apakah tiket masuk bisa dibeli langsung (On the Spot) di gerbang pintu masuk?',
        answer: 'Tidak, booking tiket masuk Bromo sekarang wajib dibeli 100% online di situs pemesanan resmi TNBTS minimal H-1 sebelum keberangkatan karena pembatasan kuota pengunjung harian.'
      },
      {
        question: 'Jika saya ikut paket tur Bromo Panca, apakah tiket masuk sudah termasuk?',
        answer: 'Ya benar, semua paket wisata Bromo Private maupun Open Trip yang disediakan oleh Bromo Panca sudah mencakup tiket masuk resmi berizin penuh untuk ketenangan perjalanan Anda.'
      }
    ]
  },
  {
    id: 'art-get-surabaya',
    slug: 'how-to-get-to-bromo-from-surabaya',
    title: 'Panduan Lengkap Cara Menuju Gunung Bromo dari Surabaya',
    seoTitle: 'Rute Terbaik dari Surabaya ke Bromo | Kereta, Mobil, & Tour Pilihan',
    metaDesc: 'Mencari cara terbaik dari Surabaya ke Bromo? Berikut adalah rute tercepat lewat jalan tol, transportasi umum, kereta api, hingga layanan private car terpercaya.',
    excerpt: 'Temukan pilihan moda transportasi terbaik dari Surabaya (Bandara Juanda/Stasiun Gubeng) menuju ke Gunung Bromo untuk liburan tanpa hambatan.',
    date: '04 Juni 2026',
    readTime: '6 Menit Baca',
    category: 'bromo',
    featuredImage: '/trip-bromo-sunrise.jpeg',
    targetPackageSlug: 'paket-wisata-bromo',
    author: {
      name: 'Hanif Tengger',
      avatar: 'trip-bromo-sunrise.jpeg',
      role: 'Master Guide Bromo Panca',
      bio: 'Warga asli Tengger yang mendedikasikan hidup memperkenalkan pesona megah kaldera Bromo kepada dunia luar.'
    },
    keywords: ['surabaya ke bromo', 'rute surabaya bromo', 'bandara juanda ke bromo'],
    contentSections: [
      {
        heading: 'Peta Rute Perjalanan dari Surabaya ke Pintu Masuk Bromo',
        body: 'Surabaya merupakan gerbang udara utama termudah bagi Anda yang berasal dari Jakarta, Sumatra, Kalimantan, atau luar negeri. Dari Surabaya, ada 3 pintu masuk utama ke Gunung Bromo yaitu Probolinggo (Cemoro Lawang), Pasuruan (Wonokitri), dan Malang (Tumpang).'
      },
      {
        heading: 'Metode Transportasi dari Surabaya ke Bromo',
        body: 'Anda memiliki beberapa pilihan akomodasi perjalanan bergantung pada kenyamanan & anggaran:',
        listItems: [
          'Pipa Tol Surabaya-Probolinggo: Hanya memakan waktu 2,5 - 3 jam perjalanan menggunakan mobil pribadi / rental car.',
          'Kereta Api Komuter: Naik kereta dari Surabaya Gubeng menuju Stasiun Probolinggo, dilanjutkan dengan angkutan umum Elf lokal.',
          'Layanan Private Tour Bromo Panca: Dijemput langsung di Bandara Juanda dengan armada ber-AC dan sopir pribadi berpengalaman.'
        ]
      }
    ]
  },
  {
    id: 'art-get-malang',
    slug: 'how-to-get-to-bromo-from-malang',
    title: 'Cara ke Gunung Bromo dari Malang Lewat Jalur Tumpang',
    seoTitle: 'Rute Eksotis dan Terdekat ke Bromo dari Malang Kota | Bromo Panca',
    metaDesc: 'Ingin jalan-jalan ke Bromo dari Malang? Temukan panduan rute terdekat lewat Tumpang dengan pemandangan perbukitan asri & jalan menantang.',
    excerpt: 'Rute Malang ke Bromo lewat Tumpang menyuguhkan pemandangan lereng gunung menakjubkan. Pelajari moda transportasinya di sini.',
    date: '28 Mei 2026',
    readTime: '4 Menit Baca',
    category: 'bromo',
    featuredImage: '/bromo-sea-of-sand.jpeg',
    targetPackageSlug: 'paket-wisata-bromo',
    author: {
      name: 'Lucky Fernanda',
      avatar: 'tumpak-sewu-waterfall.png',
      role: 'Travel Planner Expert',
      bio: 'Konsultan perjalanan berpengalaman 8 tahun menyusun itinerary petualangan Jawa Timur.'
    },
    keywords: ['malang ke bromo', 'rute malang bromo', 'bromo lewat tumpang'],
    contentSections: [
      {
        heading: 'Mengapa Memilih Rute Tumpang Malang ke Bromo?',
        body: 'Jalur Tumpang menyajikan pemandangan alam paling fotogenik. Berbeda dengan jalur utara, jalur ini langsung melintasi kawasan hijau subur Jemplang, di mana Anda disajikan gerbang visual padang rumput savana hijau segar yang membentang seolah berada di negeri dongeng.'
      }
    ]
  },
  {
    id: 'art-best-time-bromo',
    slug: 'best-time-to-visit-mount-bromo',
    title: 'Bulan Terbaik Berkunjung ke Gunung Bromo Agar Dapat View Sempurna',
    seoTitle: 'Bulan Terbaik ke Bromo 2026 | Prediksi Cuaca & Event | Bromo Panca',
    metaDesc: 'Prediksi cuaca and bulan terbaik liburan ke Gunung Bromo. Nikmati pemandangan sunrise bersih tanpa kabut tebal & festival budaya Yadnya Kasada.',
    excerpt: 'Agar liburan Anda tidak mengecewakan akibat hujan dan kabut tebal, simak panduan menentukan bulan terbaik berkunjung ke Bromo.',
    date: '20 Mei 2026',
    readTime: '5 Menit Baca',
    category: 'bromo',
    featuredImage: '/bromo-sunrise-viewpoint.jpeg',
    targetPackageSlug: 'paket-wisata-bromo',
    author: {
      name: 'Hanif Tengger',
      avatar: 'tumpak-sewu-waterfall.png',
      role: 'Master Guide Bromo Panca',
      bio: 'Warga asli Tengger yang mendedikasikan hidup memperkenalkan pesona megah kaldera Bromo.'
    },
    keywords: ['waktu terbaik bromo', 'cuaca gunung bromo', 'yadnya kasada bromo'],
    contentSections: [
      {
        heading: 'Siklus Musim Kemarau dan Musim Hujan di Bromo Tengger Semeru',
        body: 'Gunung Bromo paling direkomendasikan dikunjungi pada bulan Juni hingga September. Pada kisaran bulan ini, matahari terbit terlihat bulat sempurna kemerahan karena kelembapan udara minim, dan kabut tipis mengalir mengisi dasar kaldera menyajikan drama lautan awan yang menakjubkan.'
      }
    ]
  },
  {
    id: 'art-photo-spots',
    slug: 'best-photo-spots-in-bromo',
    title: '9 Spot Foto Ikonik dan Instagramable di Gunung Bromo',
    seoTitle: 'Spot Foto Terindah di Gunung Bromo 2026 - Lokasi Rahasia Estetik',
    metaDesc: 'Rekomendasi spot foto terindah di Gunung Bromo untuk feeds Instagram Anda. Lautan Pasir, Bukit Teletubbies, Bukit Kingkong, Pura Poten, & pose Jeep Land Cruiser.',
    excerpt: 'Ingin mendapatkan foto liburan yang estetik dan dramatis? Simak contekan spot foto terbaik wajib kunjung di Bromo berikut.',
    date: '15 Mei 2026',
    readTime: '5 Menit Baca',
    category: 'bromo',
    featuredImage: '/paket-wisata-bromo.jpeg',
    targetPackageSlug: 'paket-wisata-bromo',
    author: {
      name: 'Lucky Fernanda',
      avatar: 'tumpak-sewu-waterfall.png',
      role: 'Travel Planner Expert',
      bio: 'Travel Planner Expert'
    },
    keywords: ['spot foto bromo', 'foto jeep bromo', 'penanjakan bromo foto'],
    contentSections: [
      {
        heading: 'Foto Bersama Jeep Land Cruiser Klasik yang Ikonik',
        body: 'Salah satu pose paling dicari pengunjung adalah berfoto di atas kap mesin jeep 4x4 berlatar pasir berbisik nan gersang. Kami melatih driver kami untuk memarkir jeep pada posisi pencahayaan alami terbaik agar tangkapan kamera Anda maksimal.'
      }
    ]
  },

  // ---------------- SILO 2: OPEN TRIP BROMO ----------------
  {
    id: 'art-affordable-open-trip',
    slug: 'affordable-open-trip-bromo',
    title: 'Cara Hemat Liburan dengan Gabung Open Trip Bromo Midnight',
    seoTitle: 'Open Trip Bromo Murah & Berkualitas 2026 | Bromo Panca',
    metaDesc: 'Hemat budget hingga 70% dengan bergabung ke dalam Open Trip Bromo Midnight. Berangkat setiap hari pasti jalan, tanpa minimal kuota. Cek tip hematnya!',
    excerpt: 'Mencapai Bromo sendirian sering kali memakan biaya besar sewa Jeep. Pelajari kelebihan finansial memesan Open Trip Midnight.',
    date: '18 Mei 2026',
    readTime: '4 Menit Baca',
    category: 'travel-tips',
    featuredImage: '/lautan-pasir-bromo.JPEG',
    targetPackageSlug: 'open-trip-bromo',
    author: {
      name: 'Lucky Fernanda',
      avatar: 'tumpak-sewu-waterfall.png',
      role: 'Travel Planner Expert',
      bio: 'Travel Planner Expert'
    },
    keywords: ['open trip bromo murah', 'midnight trip bromo', 'backpacker bromo'],
    contentSections: [
      {
        heading: 'Kalkulasi Hemat: Private Trip vs Sharing Open Trip Bromo',
        body: 'Sewa Jeep private di Bromo berkisar antara Rp 750.000 hingga Rp 1.200.000 per kendaraan belum termasuk tiket masuk. Jika Anda bepergian seorang diri, bergabung dengan sistem open trip kami yang hanya seharga Rp 350.0000,- per pax sudah menjamin mobil antar jemput, jeep 4x4, asuransi, dan tiket resmi!'
      }
    ]
  },
  {
    id: 'art-benefits-open-trip',
    slug: 'benefits-of-joining-an-open-trip',
    title: '5 Keuntungan Memilih Open Trip Bromo bagi Solo Traveler',
    seoTitle: 'Keuntungan Ikut Open Trip Bromo Solo Travel | Bromo Panca',
    metaDesc: 'Solo traveling ke Bromo? Jangan khawatir kesepian. Ini dia 5 manfaat luar biasa bergabung ke open trip: hemat, teman baru, dan foto dibantu driver!',
    excerpt: 'Menemukan teman baru dalam perjalanan mengeksplorasi sunrise emas Bromo dambaan para backpacker sejati.',
    date: '12 Mei 2026',
    readTime: '4 Menit Baca',
    category: 'travel-tips',
    featuredImage: '/bromo-sea-of-sand.jpeg',
    targetPackageSlug: 'open-trip-bromo',
    author: {
      name: 'Hanif Tengger',
      avatar: 'tumpak-sewu-waterfall.png',
      role: 'Master Guide Bromo Panca',
      bio: 'Warga asli Tengger yang mendedikasikan hidup memperkenalkan pesona megah kaldera Bromo.'
    },
    keywords: ['solo travel bromo', 'opentrip bromo teman baru', 'sewa jeep sharing'],
    contentSections: [
      {
        heading: 'Koneksi Teman Baru Se-Nusantara Selama Diperjalanan',
        body: 'Dalam open trip, Anda membagi ruang di dalam jeep berkapasitas 5-6 orang peserta lain dari bermacam-macam kota di Indonesia maupun luar negeri. Pengalaman magis melihat sunrise menyatukan kebersamaan menjadi obrolan hangat bersahabat.'
      }
    ]
  },

  // ---------------- SILO 3: BROMO TUMPAK SEWU ----------------
  {
    id: 'art-guide-tumpak-sewu',
    slug: 'ultimate-guide-to-tumpak-sewu-waterfall',
    title: 'Panduan Wisata Lengkap ke Air Terjun Tumpak Sewu Lumajang',
    seoTitle: 'Panduan Trekking Air Terjun Tumpak Sewu Terbaru | Bromo Panca',
    metaDesc: 'Panduan lengkap berwisata ke Air Terjun Tumpak Sewu Lumajang. Rute petualangan dasar jurang, tiket masuk, sewa ranger, dan keunikan Gua Tetes.',
    excerpt: 'Dijuluki sebagai Niagara dari Jawa Timur, Tumpak Sewu adalah air terjun setengah lingkaran raksasa yang menantang jiwa petualang Anda.',
    date: '25 Mei 2026',
    readTime: '6 Menit Baca',
    category: 'tumpak-sewu',
    featuredImage: '/tumpak-sewu-waterfall.png',
    targetPackageSlug: 'paket-bromo-tumpak-sewu',
    author: {
      name: 'Lucky Fernanda',
      avatar: 'tumpak-sewu-waterfall.png',
      role: 'Travel Planner Expert',
      bio: 'Travel Planner Expert'
    },
    keywords: ['air terjun tumpak sewu', 'tumpak sewu lumajang', 'trekking tumpak sewu'],
    contentSections: [
      {
        heading: 'Keajaiban Ribuan Aliran Air Setinggi 120 Meter',
        body: 'Tumpak Sewu terletak di perbatasan Kabupaten Lumajang dan Malang. Aliran airnya berasal langsung dari lelehan salju vulkanis Gunung Semeru yang mengalir melewati tebing berbentuk mangkok hijau raksasa sedalam 120 meter.'
      },
      {
        heading: 'Dua Sudut Pandang Menikmati Tumpak Sewu',
        body: 'Anda dapat menikmati air terjun ini dari dua spot utama:',
        listItems: [
          'Panorama Atas (Sangat Mudah): Platform kayu berpagar beton aman hanya berjarak 100 meter dari parkiran utama untuk melihat canopi air terjun jatuh merata.',
          'Ngarai Dasar Tebing (Sangat Menantang): Berjalan turun menyusuri tangga bambu basah dialiri mata air tebing selama 45 menit untuk berdiri langsung di depan gemuruh raksasa air terjun.'
        ]
      }
    ]
  },
  {
    id: 'art-hiking-sewu',
    slug: 'tumpak-sewu-hiking-guide',
    title: 'Fakta Keselamatan dan Panduan Mendaki Tebing Tumpak Sewu',
    seoTitle: 'Saran Keselamatan Trekking Dasar Jurang Tumpak Sewu | Bromo Panca',
    metaDesc: 'Apakah trekking ke dasar jurang Tumpak Sewu aman? Dapatkan informasi lengkap tentang rute pendakian, syarat fisik, & wajib memakai lokal guide.',
    excerpt: 'Petualangan ekstrem mendaki bebatuan basah Gua Tetes dan dasar Tumpak Sewu membutuhkan kesiapan mental dan ranger pendamping.',
    date: '10 Mei 2026',
    readTime: '5 Menit Baca',
    category: 'tumpak-sewu',
    featuredImage: '/paket-bromo-tumpak-sewu.jpeg',
    targetPackageSlug: 'paket-bromo-tumpak-sewu',
    author: {
      name: 'Hanif Tengger',
      avatar: 'tumpak-sewu-waterfall.png',
      role: 'Master Guide Bromo Panca',
      bio: 'Warga asli Tengger'
    },
    keywords: ['safety trekking sewu', 'ranger tumpak sewu', 'medan tumpak sewu'],
    contentSections: [
      {
        heading: 'Standar Keselamatan Fisik Menuruni Lembah Lembah Semeru',
        body: 'Medan menuruni jurang berupa tangga baja dan pijakan kayu yang dialiri air dingin deras. Sangat direkomendasikan memiliki fisik yang prima, mengenakan sepatu air khusus (water shoes) antilicin, dan dilarang memiliki kondisi jantung kronis / fobia ketinggian ekstrim.'
      }
    ]
  },

  // ---------------- SILO 4: BROMO IJEN ----------------
  {
    id: 'art-blue-fire-guide',
    slug: 'kawah-ijen-blue-fire-guide',
    title: 'Menelusuri Kawah Ijen Blue Fire: Segala Hal yang Perlu Anda Ketahui',
    seoTitle: 'Kawah Ijen Blue Fire Banyuwangi Tour Guide Terbaru 2026',
    metaDesc: 'Panduan lengkap berburu fenomena langka Api Biru (Blue Fire) di kawah belerang aktif Gunung Ijen Banyuwangi. Jam pendakian, sewa masker, & rute.',
    excerpt: 'Saksikan fenomena spektakuler Blue Fire yang hanya ada dua di dunia di dalam kawah belerang asam terluas dunia, Kawah Ijen.',
    date: '05 Juni 2026',
    readTime: '6 Menit Baca',
    category: 'kawah-ijen',
    featuredImage: '/kawah-ijen-blue-fire.png',
    targetPackageSlug: 'paket-bromo-ijen',
    author: {
      name: 'Lucky Fernanda',
      avatar: 'tumpak-sewu-waterfall.png',
      role: 'Travel Planner Expert',
      bio: 'Travel Planner Expert'
    },
    keywords: ['blue fire ijen', 'kawah ijen banyuwangi', 'pendakian paltuding ijen'],
    contentSections: [
      {
        heading: 'Dapur Api Biru Abadi di Dasar Kawah Danau Asam',
        body: 'Blue fire muncul akibat reaksi gas belerang bertekanan tinggi dengan suhu udara panas melebihi 360 derajat celcius, yang menyala biru menyala layaknya kompor gas alami raksasa dalam kegelapan malam sunyi. Fenomena misterius ini hanya bersinar mulai jam 02:00 pagi hingga fajar menyingsing.'
      }
    ]
  },
  {
    id: 'art-hike-ijen-safely',
    slug: 'how-to-hike-kawah-ijen',
    title: 'Panduan Mendaki Kawah Ijen dengan Aman untuk Pemula',
    seoTitle: 'Tips Sukses Naik Kawah Ijen Banyuwangi Bagi Pendaki Pemula',
    metaDesc: 'Menaklukkan jalur pendakian Gunung Ijen 3 km dari Paltuding secara aman. Tips menghadapi gas belerang, pakaian hangat, dan persiapan lari fisik.',
    excerpt: 'Trekking malam sedingin 8 derajat celcius ke puncak Ijen membutuhkan persiapan matang. Baca tips pemula kami.',
    date: '02 Juni 2026',
    readTime: '5 Menit Baca',
    category: 'kawah-ijen',
    featuredImage: '/tour-kawah-ijen.PNG',
    targetPackageSlug: 'paket-bromo-ijen',
    author: {
      name: 'Hanif Tengger',
      avatar: 'tumpak-sewu-waterfall.png',
      role: 'Master Guide Bromo Panca',
      bio: 'Warga asli Tengger'
    },
    keywords: ['pemula kawah ijen', 'suhu kawah ijen', 'paltuding ijen trekking'],
    contentSections: [
      {
        heading: 'Suhu Udara Ekstrem Menjelang Subuh di Paltuding',
        body: 'Suhu di Paltuding kawah Ijen dapat menyentuh 5 hingga 10 derajat Celcius. Trekking sejauh 3 kilometer berupa aspal tanah berpasir kering dengan elevasi berkelok. Anda harus memiliki stamina stabil.'
      }
    ]
  }
];

export const fags: FAQItem[] = [
  {
    question: 'Siapa Bromo Panca Wisata?',
    answer: 'Kami adalah agen perjalanan premium resmi berlisensi yang berbasis di East Java (Surabaya, Malang, Probolinggo). Mengkhususkan diri pada penyediaan tur alam mewah & nyaman menuju Gunung Bromo, Kawah Ijen, dan Tumpak Sewu.'
  },
  {
    question: 'Bagaimana cara pemesanan paket tur di Bromo Panca?',
    answer: 'Sangat mudah! Pilih paket tur favorit Anda pada website ini, tekan tombol "Inquire via WhatsApp". Anda akan langsung terhubung dengan Travel Planner kami via WhatsApp untuk konfirmasi tanggal, jumlah orang, dan penyesuain itinerary tanpa biaya komitmen awal.'
  },
  {
    question: 'Berapa uang muka (DP) minimal untuk booking?',
    answer: 'Untuk menjamin ketersediaan Jeep premium dan reservasi hotel, kami mensyaratkan uang muka (DP) sebesar 30% dari total nilai tur, sementara pelunasannya bisa dilakukan tunai/transfer saat driver menjemput Anda di hari keberangkatan.'
  }
];

export const galleryImages = [
  { url: '/bromo-sunrise-viewpoint.jpeg', caption: 'Pesona Sunrise Berlatar Semeru Mengepul di Puncak Penanjakan Bromo' },
  { url: '/paket-wisata-bromo.jpeg', caption: 'Petualangan Eksklusif Jeep Land Cruiser di Tengah Hamparan Pasir Berbisik' },
  { url: '/tumpak-sewu-waterfall.png', caption: 'Megahnya Tirai Air Terjun Raksasa Tumpak Sewu yang Membelah Hutan Lembah' },
  { url: '/kawah-ijen-blue-fire.png', caption: 'Keajaiban Api Biru (Blue Fire) Solfatara Abadi Menggelegak di Kawah Ijen' },
  { url: '/lautan-pasir-bromo.JPEG', caption: 'Kabut Pagi Syahdu Menyelimuti Kaki Pura Luhur Poten di Pasir Bromo' },
  { url: '/bromo-sea-of-sand.jpeg', caption: 'Padang Rumput Hijau Subur Savana Teletubbies Bromo yang Segar Dipandang' }
];

export const travelStats = [
  { value: '12K+', label: 'Tamu Terlayani Sejak 2018' },
  { value: '99.4%', label: 'Tingkat Kepuasan Bintang 5' },
  { value: '45+', label: 'Armada Jeep 4x4 Premium Berizin' },
  { value: '24/7', label: 'Dukungan Konsultasi WhatsApp' }
];
