/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDesc: string;
  keyword: string;
  tagline: string;
  duration: string;
  rating: number;
  reviewsCount: number;
  priceFrom: number;
  pricePromo?: number;
  heroImage: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryItem[];
  reviews: ReviewItem[];
  faq: FAQItem[];
  gallery: string[];
}

export interface ItineraryItem {
  time: string;
  activity: string;
  details?: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDesc: string;
  excerpt: string;
  contentMarkdown?: string;
  contentSections: ArticleSection[];
  category: 'bromo' | 'tumpak-sewu' | 'kawah-ijen' | 'travel-tips';
  date: string;
  readTime: string;
  author: Author;
  keywords: string[];
  faqs?: FAQItem[];
  featuredImage: string;
  targetPackageSlug: string; // Links back to a TourPackage for the silo linkage!
}

export interface ArticleSection {
  heading: string;
  body: string;
  listItems?: string[];
  subHeadingCallout?: string;
  imageAlt?: string;
}

export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio: string;
}

export interface Inquiry {
  id: string;
  packageName: string;
  clientName: string;
  clientPhone: string;
  travelDate: string;
  participants: number;
  specialRequests?: string;
  status: 'pending' | 'contacted' | 'booked';
  createdAt: string;
}
