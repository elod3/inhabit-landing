# Date găsite în text

Extrase automat cu regex: verifică fiecare valoare pe pagina sursă înainte s-o folosești.

## Emailuri (linkuri mailto:)

- office@inhabitstudio.ro — /, /2023/12/21/hello-world/, /author/administrator/ +36

## Emailuri

- contact@inhabitstudio.ro — /politica-de-confidentialitate/
- office@inhabitstudio.ro — /, /2023/12/21/hello-world/, /author/administrator/ +36

## Rețele sociale / whatsapp

- https://www.facebook.com/studio.inhabit — /, /2023/12/21/hello-world/, /author/administrator/ +36
- https://www.instagram.com/inhabit.thestudio/ — /, /2023/12/21/hello-world/, /author/administrator/ +36
- https://www.tiktok.com/@arh.alin.ionescu — /, /2023/12/21/hello-world/, /author/administrator/ +36

## Linii cu prețuri

- 250,00 lei — /product-category/uncategorized/, /product/planifcatorul-casei-tale/, /shop/

## JSON-LD (date structurate existente)

Doar blocurile care aduc un @type nou față de paginile de dinainte.

Pe https://inhabitstudio.ro/ — tipuri: BreadcrumbList, EntryPoint, ImageObject, ListItem, Organization, PropertyValueSpecification, ReadAction, SearchAction, WebPage, WebSite
```json
{
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "WebPage",
   "@id": "https://inhabitstudio.ro/",
   "url": "https://inhabitstudio.ro/",
   "name": "Home - Inhabit Studio",
   "isPartOf": {
    "@id": "https://inhabitstudio.ro/#website"
   },
   "about": {
    "@id": "https://inhabitstudio.ro/#organization"
   },
   "primaryImageOfPage": {
    "@id": "https://inhabitstudio.ro/#primaryimage"
   },
   "image": {
    "@id": "https://inhabitstudio.ro/#primaryimage"
   },
   "thumbnailUrl": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-1.png",
   "datePublished": "2023-12-27T16:15:12+00:00",
   "dateModified": "2025-12-09T15:57:26+00:00",
   "breadcrumb": {
    "@id": "https://inhabitstudio.ro/#breadcrumb"
   },
   "inLanguage": "ro-RO",
   "potentialAction": [
    {
     "@type": "ReadAction",
     "target": [
      "https://inhabitstudio.ro/"
     ]
    }
   ]
  },
  {
   "@type": "ImageObject",
   "inLanguage": "ro-RO",
   "@id": "https://inhabitstudio.ro/#primaryimage",
   "url": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-1.png",
   "contentUrl": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-1.png",
   "width": 1920,
   "height": 1080
  },
  {
   "@type": "BreadcrumbList",
   "@id": "https://inhabitstudio.ro/#breadcrumb",
   "itemListElement": [
    {
     "@type": "ListItem",
     "position": 1,
     "name": "Home"
    }
   ]
  },
  {
   "@type": "WebSite",
   "@id": "https://inhabitstudio.ro/#website",
   "url": "https://inhabitstudio.ro/",
   "name": "INHABITSTUDIO",
   "description": "Birou Creativ de Arhitectura, Design de Interior &amp; Proiectare Clădiri Pasive",
   "publisher": {
    "@id": "https://inhabitstudio.ro/#organization"
   },
   "potentialAction": [
    {
     "@type": "SearchAction",
     "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://inhabitstudio.ro/?s={search_term_string}"
     },
     "query-input": {
      "@type": "PropertyValueSpecification",
      "valueRequired": true,
      "valueName": "search_term_string"
     }
    }
   ],
   "inLanguage": "ro-RO"
  },
  {
   "@type": "Organization",
   "@id": "https://inhabitstudio.ro/#organization",
   "name": "INHABITSTUDIO",
   "url": "https://inhabitstudio.ro/",
   "logo": {
    "@type": "ImageObject",
    "inLanguage": "ro-RO",
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/",
    "url": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "contentUrl": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "width": 285,
    "height": 285,
    "caption": "INHABITSTUDIO"
   },
   "image": {
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/"
   }
  }
 ]
}
```

Pe https://inhabitstudio.ro/2023/12/21/hello-world/ — tipuri: Article, BreadcrumbList, CommentAction, EntryPoint, ImageObject, ListItem, Organization, Person, PropertyValueSpecification, ReadAction, SearchAction, WebPage, WebSite
```json
{
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "Article",
   "@id": "https://inhabitstudio.ro/2023/12/21/hello-world/#article",
   "isPartOf": {
    "@id": "https://inhabitstudio.ro/2023/12/21/hello-world/"
   },
   "author": {
    "name": "Inhabit Studio",
    "@id": "https://inhabitstudio.ro/#/schema/person/b708a28084024c16d6b86e99ae2d2473"
   },
   "headline": "Hello world!",
   "datePublished": "2023-12-21T09:04:28+00:00",
   "mainEntityOfPage": {
    "@id": "https://inhabitstudio.ro/2023/12/21/hello-world/"
   },
   "wordCount": 17,
   "commentCount": 1,
   "publisher": {
    "@id": "https://inhabitstudio.ro/#organization"
   },
   "articleSection": [
    "Uncategorized"
   ],
   "inLanguage": "ro-RO",
   "potentialAction": [
    {
     "@type": "CommentAction",
     "name": "Comment",
     "target": [
      "https://inhabitstudio.ro/2023/12/21/hello-world/#respond"
     ]
    }
   ]
  },
  {
   "@type": "WebPage",
   "@id": "https://inhabitstudio.ro/2023/12/21/hello-world/",
   "url": "https://inhabitstudio.ro/2023/12/21/hello-world/",
   "name": "Hello world! - Inhabit Studio",
   "isPartOf": {
    "@id": "https://inhabitstudio.ro/#website"
   },
   "datePublished": "2023-12-21T09:04:28+00:00",
   "breadcrumb": {
    "@id": "https://inhabitstudio.ro/2023/12/21/hello-world/#breadcrumb"
   },
   "inLanguage": "ro-RO",
   "potentialAction": [
    {
     "@type": "ReadAction",
     "target": [
      "https://inhabitstudio.ro/2023/12/21/hello-world/"
     ]
    }
   ]
  },
  {
   "@type": "BreadcrumbList",
   "@id": "https://inhabitstudio.ro/2023/12/21/hello-world/#breadcrumb",
   "itemListElement": [
    {
     "@type": "ListItem",
     "position": 1,
     "name": "Home",
     "item": "https://inhabitstudio.ro/"
    },
    {
     "@type": "ListItem",
     "position": 2,
     "name": "Hello world!"
    }
   ]
  },
  {
   "@type": "WebSite",
   "@id": "https://inhabitstudio.ro/#website",
   "url": "https://inhabitstudio.ro/",
   "name": "INHABITSTUDIO",
   "description": "Birou Creativ de Arhitectura, Design de Interior &amp; Proiectare Clădiri Pasive",
   "publisher": {
    "@id": "https://inhabitstudio.ro/#organization"
   },
   "potentialAction": [
    {
     "@type": "SearchAction",
     "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://inhabitstudio.ro/?s={search_term_string}"
     },
     "query-input": {
      "@type": "PropertyValueSpecification",
      "valueRequired": true,
      "valueName": "search_term_string"
     }
    }
   ],
   "inLanguage": "ro-RO"
  },
  {
   "@type": "Organization",
   "@id": "https://inhabitstudio.ro/#organization",
   "name": "INHABITSTUDIO",
   "url": "https://inhabitstudio.ro/",
   "logo": {
    "@type": "ImageObject",
    "inLanguage": "ro-RO",
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/",
    "url": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "contentUrl": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "width": 285,
    "height": 285,
    "caption": "INHABITSTUDIO"
   },
   "image": {
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/"
   }
  },
  {
   "@type": "Person",
   "@id": "https://inhabitstudio.ro/#/schema/person/b708a28084024c16d6b86e99ae2d2473",
   "name": "Inhabit Studio",
   "image": {
    "@type": "ImageObject",
    "inLanguage": "ro-RO",
    "@id": "https://inhabitstudio.ro/#/schema/person/image/",
    "url": "https://secure.gravatar.com/avatar/75c6f3ae98e71a8db12cc044db6f69077c86f873f66dba4db136a14c4f16c880?s=96&d=mm&r=g",
    "contentUrl": "https://secure.gravatar.com/avatar/75c6f3ae98e71a8db12cc044db6f69077c86f873f66dba4db136a14c4f16c880?s=96&d=mm&r=g",
    "caption": "Inhabit Studio"
   },
   "sameAs": [
    "https://inhabitstudio.ro"
   ],
   "url": "https://inhabitstudio.ro/author/administrator/"
  }
 ]
}
```

Pe https://inhabitstudio.ro/minicurs/ — tipuri: BreadcrumbList, EntryPoint, ImageObject, ItemPage, ListItem, Organization, PropertyValueSpecification, ReadAction, SearchAction, WebPage, WebSite
```json
{
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": [
    "WebPage",
    "ItemPage"
   ],
   "@id": "https://inhabitstudio.ro/minicurs/",
   "url": "https://inhabitstudio.ro/minicurs/",
   "name": "Minicurs gratuit: construiește-ți casa fără să depășești bugetul | Inhabit Studio",
   "isPartOf": {
    "@id": "https://inhabitstudio.ro/#website"
   },
   "primaryImageOfPage": {
    "@id": "https://inhabitstudio.ro/minicurs/#primaryimage"
   },
   "image": {
    "@id": "https://inhabitstudio.ro/minicurs/#primaryimage"
   },
   "thumbnailUrl": "https://inhabitstudio.ro/wp-content/uploads/2024/02/mockup-masterclass.png",
   "datePublished": "2024-10-13T21:18:58+00:00",
   "dateModified": "2026-08-19T18:21:31+00:00",
   "description": "Curs gratuit prin email: 22 lecții de la doi arhitecți despre teren, buget, proiect, constructor și eficiență energetică. O lecție pe zi, 5 minute, pași concreți.",
   "breadcrumb": {
    "@id": "https://inhabitstudio.ro/minicurs/#breadcrumb"
   },
   "inLanguage": "ro-RO",
   "potentialAction": [
    {
     "@type": "ReadAction",
     "target": [
      "https://inhabitstudio.ro/minicurs/"
     ]
    }
   ]
  },
  {
   "@type": "ImageObject",
   "inLanguage": "ro-RO",
   "@id": "https://inhabitstudio.ro/minicurs/#primaryimage",
   "url": "https://inhabitstudio.ro/wp-content/uploads/2024/02/mockup-masterclass.png",
   "contentUrl": "https://inhabitstudio.ro/wp-content/uploads/2024/02/mockup-masterclass.png",
   "width": 1000,
   "height": 642
  },
  {
   "@type": "BreadcrumbList",
   "@id": "https://inhabitstudio.ro/minicurs/#breadcrumb",
   "itemListElement": [
    {
     "@type": "ListItem",
     "position": 1,
     "name": "Home",
     "item": "https://inhabitstudio.ro/"
    },
    {
     "@type": "ListItem",
     "position": 2,
     "name": "Minicurs &#8211; Construiește-ți casa de vis cu 30% mai ieftin, eficientă energetic, economisind în fiecare etapă"
    }
   ]
  },
  {
   "@type": "WebSite",
   "@id": "https://inhabitstudio.ro/#website",
   "url": "https://inhabitstudio.ro/",
   "name": "INHABITSTUDIO",
   "description": "Birou Creativ de Arhitectura, Design de Interior &amp; Proiectare Clădiri Pasive",
   "publisher": {
    "@id": "https://inhabitstudio.ro/#organization"
   },
   "potentialAction": [
    {
     "@type": "SearchAction",
     "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://inhabitstudio.ro/?s={search_term_string}"
     },
     "query-input": {
      "@type": "PropertyValueSpecification",
      "valueRequired": true,
      "valueName": "search_term_string"
     }
    }
   ],
   "inLanguage": "ro-RO"
  },
  {
   "@type": "Organization",
   "@id": "https://inhabitstudio.ro/#organization",
   "name": "INHABITSTUDIO",
   "url": "https://inhabitstudio.ro/",
   "logo": {
    "@type": "ImageObject",
    "inLanguage": "ro-RO",
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/",
    "url": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "contentUrl": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "width": 285,
    "height": 285,
    "caption": "INHABITSTUDIO"
   },
   "image": {
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/"
   }
  }
 ]
}
```

Pe https://inhabitstudio.ro/shop/ — tipuri: BreadcrumbList, CollectionPage, EntryPoint, ImageObject, ListItem, Organization, PropertyValueSpecification, SearchAction, WebSite
```json
{
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "CollectionPage",
   "@id": "https://inhabitstudio.ro/shop/",
   "url": "https://inhabitstudio.ro/shop/",
   "name": "Produse Archive - Inhabit Studio",
   "isPartOf": {
    "@id": "https://inhabitstudio.ro/#website"
   },
   "breadcrumb": {
    "@id": "https://inhabitstudio.ro/shop/#breadcrumb"
   },
   "inLanguage": "ro-RO"
  },
  {
   "@type": "BreadcrumbList",
   "@id": "https://inhabitstudio.ro/shop/#breadcrumb",
   "itemListElement": [
    {
     "@type": "ListItem",
     "position": 1,
     "name": "Home",
     "item": "https://inhabitstudio.ro/"
    },
    {
     "@type": "ListItem",
     "position": 2,
     "name": "Products"
    }
   ]
  },
  {
   "@type": "WebSite",
   "@id": "https://inhabitstudio.ro/#website",
   "url": "https://inhabitstudio.ro/",
   "name": "INHABITSTUDIO",
   "description": "Birou Creativ de Arhitectura, Design de Interior &amp; Proiectare Clădiri Pasive",
   "publisher": {
    "@id": "https://inhabitstudio.ro/#organization"
   },
   "potentialAction": [
    {
     "@type": "SearchAction",
     "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://inhabitstudio.ro/?s={search_term_string}"
     },
     "query-input": {
      "@type": "PropertyValueSpecification",
      "valueRequired": true,
      "valueName": "search_term_string"
     }
    }
   ],
   "inLanguage": "ro-RO"
  },
  {
   "@type": "Organization",
   "@id": "https://inhabitstudio.ro/#organization",
   "name": "INHABITSTUDIO",
   "url": "https://inhabitstudio.ro/",
   "logo": {
    "@type": "ImageObject",
    "inLanguage": "ro-RO",
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/",
    "url": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "contentUrl": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "width": 285,
    "height": 285,
    "caption": "INHABITSTUDIO"
   },
   "image": {
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/"
   }
  }
 ]
}
```

Pe https://inhabitstudio.ro/product/program-de-asistenta-in-constructii-4rate/ — tipuri: BreadcrumbList, ListItem, Offer, Organization, Product, UnitPriceSpecification
```json
{
 "@context": "https://schema.org/",
 "@graph": [
  {
   "@context": "https://schema.org/",
   "@type": "BreadcrumbList",
   "itemListElement": [
    {
     "@type": "ListItem",
     "position": 1,
     "item": {
      "name": "Prima pagină",
      "@id": "https://inhabitstudio.ro"
     }
    },
    {
     "@type": "ListItem",
     "position": 2,
     "item": {
      "name": "Uncategorized",
      "@id": "https://inhabitstudio.ro/product-category/uncategorized/"
     }
    },
    {
     "@type": "ListItem",
     "position": 3,
     "item": {
      "name": "Program de asistenta in constructii",
      "@id": "https://inhabitstudio.ro/product/program-de-asistenta-in-constructii-4rate/"
     }
    }
   ]
  },
  {
   "@context": "https://schema.org/",
   "@type": "Product",
   "@id": "https://inhabitstudio.ro/product/program-de-asistenta-in-constructii-4rate/#product",
   "name": "Program de asistenta in constructii",
   "url": "https://inhabitstudio.ro/product/program-de-asistenta-in-constructii-4rate/",
   "description": "",
   "image": "https://inhabitstudio.ro/wp-content/uploads/2025/02/PROGRAM-DE-MENTORAT.png",
   "sku": 2629,
   "offers": [
    {
     "@type": "Offer",
     "priceSpecification": [
      {
       "@type": "UnitPriceSpecification",
       "price": "10000.00",
       "priceCurrency": "EUR",
       "valueAddedTaxIncluded": false,
       "validThrough": "2027-12-31"
      }
     ],
     "priceValidUntil": "2027-12-31",
     "availability": "http://schema.org/InStock",
     "url": "https://inhabitstudio.ro/product/program-de-asistenta-in-constructii-4rate/",
     "seller": {
      "@type": "Organization",
      "name": "Inhabit Studio",
      "url": "https://inhabitstudio.ro"
     }
    }
   ]
  }
 ]
}
```

Pe https://inhabitstudio.ro/author/administrator/ — tipuri: BreadcrumbList, EntryPoint, ImageObject, ListItem, Organization, Person, ProfilePage, PropertyValueSpecification, ReadAction, SearchAction, WebSite
```json
{
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "ProfilePage",
   "@id": "https://inhabitstudio.ro/author/administrator/",
   "url": "https://inhabitstudio.ro/author/administrator/",
   "name": "Inhabit Studio, Author at Inhabit Studio",
   "isPartOf": {
    "@id": "https://inhabitstudio.ro/#website"
   },
   "breadcrumb": {
    "@id": "https://inhabitstudio.ro/author/administrator/#breadcrumb"
   },
   "inLanguage": "ro-RO",
   "potentialAction": [
    {
     "@type": "ReadAction",
     "target": [
      "https://inhabitstudio.ro/author/administrator/"
     ]
    }
   ]
  },
  {
   "@type": "BreadcrumbList",
   "@id": "https://inhabitstudio.ro/author/administrator/#breadcrumb",
   "itemListElement": [
    {
     "@type": "ListItem",
     "position": 1,
     "name": "Home",
     "item": "https://inhabitstudio.ro/"
    },
    {
     "@type": "ListItem",
     "position": 2,
     "name": "Archives for Inhabit Studio"
    }
   ]
  },
  {
   "@type": "WebSite",
   "@id": "https://inhabitstudio.ro/#website",
   "url": "https://inhabitstudio.ro/",
   "name": "INHABITSTUDIO",
   "description": "Birou Creativ de Arhitectura, Design de Interior &amp; Proiectare Clădiri Pasive",
   "publisher": {
    "@id": "https://inhabitstudio.ro/#organization"
   },
   "potentialAction": [
    {
     "@type": "SearchAction",
     "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://inhabitstudio.ro/?s={search_term_string}"
     },
     "query-input": {
      "@type": "PropertyValueSpecification",
      "valueRequired": true,
      "valueName": "search_term_string"
     }
    }
   ],
   "inLanguage": "ro-RO"
  },
  {
   "@type": "Organization",
   "@id": "https://inhabitstudio.ro/#organization",
   "name": "INHABITSTUDIO",
   "url": "https://inhabitstudio.ro/",
   "logo": {
    "@type": "ImageObject",
    "inLanguage": "ro-RO",
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/",
    "url": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "contentUrl": "https://inhabitstudio.ro/wp-content/uploads/2024/01/INHABIT-edited.png",
    "width": 285,
    "height": 285,
    "caption": "INHABITSTUDIO"
   },
   "image": {
    "@id": "https://inhabitstudio.ro/#/schema/logo/image/"
   }
  },
  {
   "@type": "Person",
   "@id": "https://inhabitstudio.ro/#/schema/person/b708a28084024c16d6b86e99ae2d2473",
   "name": "Inhabit Studio",
   "image": {
    "@type": "ImageObject",
    "inLanguage": "ro-RO",
    "@id": "https://inhabitstudio.ro/#/schema/person/image/",
    "url": "https://secure.gravatar.com/avatar/75c6f3ae98e71a8db12cc044db6f69077c86f873f66dba4db136a14c4f16c880?s=96&d=mm&r=g",
    "contentUrl": "https://secure.gravatar.com/avatar/75c6f3ae98e71a8db12cc044db6f69077c86f873f66dba4db136a14c4f16c880?s=96&d=mm&r=g",
    "caption": "Inhabit Studio"
   },
   "sameAs": [
    "https://inhabitstudio.ro"
   ],
   "mainEntityOfPage": {
    "@id": "https://inhabitstudio.ro/author/administrator/"
   }
  }
 ]
}
```

