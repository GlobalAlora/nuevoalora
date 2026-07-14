export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Builds a schema.org BreadcrumbList JSON-LD object from an ordered trail of crumbs. */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
