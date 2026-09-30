import { useEffect } from 'react';
import { siteConfig } from '../../config/seoConfig';

const updateTag = (selector, createTag, updateAttr, value) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = createTag();
    document.head.appendChild(element);
  }
  element.setAttribute(updateAttr, value);
};

const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  schema = null,
  noindex = false,
}) => {
  const finalTitle = title ? `${title}` : siteConfig.defaultTitle;
  const finalDescription = description || siteConfig.defaultDescription;
  const finalCanonical = canonical || siteConfig.siteUrl;
  const finalImage = ogImage || siteConfig.defaultImage;

  useEffect(() => {
    // 1. Update Title
    document.title = finalTitle;

    // 2. Canonical Tag
    updateTag(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        return link;
      },
      'href',
      finalCanonical
    );

    // 3. Meta Description
    updateTag(
      'meta[name="description"]',
      () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        return meta;
      },
      'content',
      finalDescription
    );

    // 4. Meta Robots
    updateTag(
      'meta[name="robots"]',
      () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'robots');
        return meta;
      },
      'content',
      noindex ? 'noindex, follow' : 'index, follow'
    );

    // 5. Open Graph Meta Tags
    const ogTags = [
      { property: 'og:site_name', content: siteConfig.siteName },
      { property: 'og:title', content: finalTitle },
      { property: 'og:description', content: finalDescription },
      { property: 'og:url', content: finalCanonical },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: finalImage },
      { property: 'og:locale', content: siteConfig.locale },
    ];

    ogTags.forEach(({ property, content }) => {
      updateTag(
        `meta[property="${property}"]`,
        () => {
          const meta = document.createElement('meta');
          meta.setAttribute('property', property);
          return meta;
        },
        'content',
        content
      );
    });

    // 6. Twitter Card Meta Tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: finalTitle },
      { name: 'twitter:description', content: finalDescription },
      { name: 'twitter:image', content: finalImage },
    ];

    twitterTags.forEach(({ name, content }) => {
      updateTag(
        `meta[name="${name}"]`,
        () => {
          const meta = document.createElement('meta');
          meta.setAttribute('name', name);
          return meta;
        },
        'content',
        content
      );
    });

    // 7. Structured Data (JSON-LD)
    const baseSchemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/logo.png`,
        image: finalImage,
        description: siteConfig.defaultDescription,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        areaServed: siteConfig.areasServed.map((area) => ({
          '@type': 'City',
          name: area,
        })),
        sameAs: [
          siteConfig.socialLinks.linkedin,
          siteConfig.socialLinks.github,
        ].filter(Boolean),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
      },
    ];

    const schemasToInject = schema
      ? Array.isArray(schema)
        ? [...baseSchemas, ...schema]
        : [...baseSchemas, schema]
      : baseSchemas;

    let scriptElement = document.querySelector('script#seo-jsonld');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'seo-jsonld';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schemasToInject);
  }, [finalTitle, finalDescription, finalCanonical, finalImage, ogType, schema, noindex]);

  return null;
};

export default SEO;
