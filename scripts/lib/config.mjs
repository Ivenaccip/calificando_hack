// Umbrales y constantes de la auditoría. Ajústalos aquí si cambia la rúbrica.

export const UA = 'Mozilla/5.0 (compatible; CalificadorSEO-AEO/1.0; +hackathon)';

export const UMBRALES = {
  titulo: { min: 45, max: 65 }, // rúbrica: 50–60 caracteres aprox.
  metaDescription: { min: 130, max: 165 }, // rúbrica: 140–160 caracteres
  palabrasContenido: 300, // rúbrica SEO 4: ~300 palabras útiles
  respuestaDirecta: { min: 25, max: 80 }, // rúbrica AEO 1: 40–60 palabras aprox. (rango tolerante)
  imagenPesadaKB: 300, // una imagen por encima de esto "pesa de más"
  imagenesConAltMin: 0.9, // 90% de las imágenes con contenido deben tener alt
  velocidad: { rendimiento: 80, lcpMs: 2500, cls: 0.1 }, // rúbrica SEO 8
  sinJsRatio: { bien: 0.8, medio: 0.4 }, // texto crudo / texto renderizado
  enlacesMaxRevisar: 40, // cuántos enlaces internos se prueban buscando 404
  tapTargetMinPx: 24, // WCAG 2.2: objetivo táctil mínimo
  tapTargetMaxProporcionPequena: 0.15,
  textoLegibleMinPx: 12,
};

// Bots que la rúbrica AEO 6 exige no bloquear.
export const BOTS_IA = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];
// Bots extra que se reportan solo como información.
export const BOTS_IA_EXTRA = ['OAI-SearchBot', 'ChatGPT-User', 'anthropic-ai', 'Claude-Web', 'CCBot', 'Applebot-Extended', 'Bytespider'];

export const VIEWPORT_MOVIL = { width: 390, height: 844 };

// Tipos de schema.org que NO describen por sí solos de qué trata el sitio (son estructura o piezas sueltas).
// Cualquier otro tipo (LocalBusiness y sus subtipos como MedicalClinic o InsuranceAgency, Product, Event, Article…) cuenta como relevante.
export const TIPOS_SCHEMA_AUXILIARES = [
  'WebSite', 'WebPage', 'BreadcrumbList', 'ListItem', 'ItemList', 'ImageObject', 'SearchAction', 'ReadAction', 'EntryPoint',
  'SiteNavigationElement', 'WPHeader', 'WPFooter', 'WPSideBar', 'CollectionPage', 'Thing', 'PostalAddress', 'ContactPoint',
  'GeoCoordinates', 'OpeningHoursSpecification', 'Rating', 'AggregateRating', 'Review', 'Question', 'Answer',
];
