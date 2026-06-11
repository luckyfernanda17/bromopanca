/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { TourPackage, BlogArticle } from '../types';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  packageData?: TourPackage;
  articleData?: BlogArticle;
  faqList?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; url: string }[];
}

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  type = 'website',
  image = 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600',
  packageData,
  articleData,
  faqList,
  breadcrumbs
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes('Bromo Panca') ? title : `${title} - Bromo Panca Premium Travel`;
    document.title = formattedTitle;

    // 2. Set Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', description);

    // 3. Set Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Set Open Graph Tags
    const setOgTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    setOgTag('og:title', formattedTitle);
    setOgTag('og:description', description);
    setOgTag('og:url', canonicalUrl);
    setOgTag('og:type', type);
    setOgTag('og:image', image);
    setOgTag('og:site_name', 'Bromo Panca Travel');

    // 5. Set Twitter Tags
    const setTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', formattedTitle);
    setTwitterTag('twitter:description', description);
    setTwitterTag('twitter:image', image);

    // 6. Dynamic JSON-LD Schema Management
    // Remove existing bromo schemas to prevent duplicates
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"].bromo-seo-schema');
    existingSchemas.forEach((el) => el.remove());

    const schemas: object[] = [];

    // A. Organization Schema
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      '@id': 'https://bromopanca.com/#organization',
      'name': 'Bromo Panca',
      'url': 'https://bromopanca.com',
      'logo': 'https://images.unsplash.com/photo-1626260851890-0ff1339ce9b4?auto=format&fit=crop&q=80&w=150',
      'sameAs': [
        'https://www.instagram.com/bromopanca',
        'https://www.facebook.com/bromopanca',
        'https://www.tiktok.com/@bromopanca'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+62-8123-4567-890',
        'contactType': 'customer service',
        'areaServed': 'ID',
        'availableLanguage': ['Indonesian', 'English']
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Jl. Raya Penanjakan No. 45, Wonokitri, Tosari, Pasuruan',
        'addressLocality': 'Pasuruan',
        'addressRegion': 'Jawa Timur',
        'postalCode': '67177',
        'addressCountry': 'ID'
      }
    };
    schemas.push(orgSchema);

    // B. Local Business Schema (Standard)
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Bromo Panca Travel East Java',
      'image': image,
      'telephone': '+62-8123-4567-890',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Jl. Raya Penanjakan No. 45',
        'addressLocality': 'Pasuruan',
        'addressRegion': 'Jawa Timur',
        'postalCode': '67177',
        'addressCountry': 'ID'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': -7.8427,
        'longitude': 112.9238
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '00:00',
        'closes': '23:59'
      }
    };
    schemas.push(localBusinessSchema);

    // C. Breadcrumb List Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbListSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': b.name,
          'item': b.url
        }))
      };
      schemas.push(breadcrumbListSchema);
    }

    // D. Product Schema for Tour Package
    if (packageData) {
      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': packageData.title,
        'image': packageData.heroImage,
        'description': packageData.description,
        'offers': {
          '@type': 'Offer',
          'price': packageData.pricePromo || packageData.priceFrom,
          'priceCurrency': 'IDR',
          'availability': 'https://schema.org/InStock',
          'url': canonicalUrl,
          'seller': {
            '@type': 'TravelAgency',
            'name': 'Bromo Panca'
          }
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': packageData.rating,
          'bestRating': '5',
          'reviewCount': packageData.reviewsCount
        },
        'review': packageData.reviews.map((r) => ({
          '@type': 'Review',
          'author': {
            '@type': 'Person',
            'name': r.author
          },
          'datePublished': r.date,
          'reviewBody': r.comment,
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': r.rating,
            'bestRating': '5'
          }
        }))
      };
      schemas.push(productSchema);
    }

    // E. Article Schema
    if (articleData) {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': articleData.title,
        'image': articleData.featuredImage,
        'datePublished': articleData.date,
        'author': {
          '@type': 'Person',
          'name': articleData.author.name
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Bromo Panca',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://images.unsplash.com/photo-1626260851890-0ff1339ce9b4?auto=format&fit=crop&q=80&w=150'
          }
        },
        'description': articleData.excerpt
      };
      schemas.push(articleSchema);
    }

    // F. FAQPage Schema
    const activeFaqList = faqList || (packageData && packageData.faq) || (articleData && articleData.faqs);
    if (activeFaqList && activeFaqList.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': activeFaqList.map((f) => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.answer
          }
        }))
      };
      schemas.push(faqSchema);
    }

    // Compile and push script tag
    schemas.forEach((schemaData) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'bromo-seo-schema';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup schemas on unmount to prevent state leftovers
      const cleanupSchemas = document.querySelectorAll('script[type="application/ld+json"].bromo-seo-schema');
      cleanupSchemas.forEach((el) => el.remove());
    };
  }, [title, description, canonicalUrl, type, image, packageData, articleData, faqList, breadcrumbs]);

  return null; // Side-effect purely component
}
