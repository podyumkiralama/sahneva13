export function buildFaqSchema(faqDataArray, options = {}) {
  if (!Array.isArray(faqDataArray) || faqDataArray.length === 0) return null;

  const { id, pageId, serviceId, inLanguage } = options;

  const mainEntity = faqDataArray
    .map((item) => {
      const question = (item?.question ?? item?.q)?.trim();
      const answer = (item?.answer ?? item?.a)?.trim();

      if (!question || !answer) {
        return null;
      }

      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    })
    .filter(Boolean);

  if (mainEntity.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    ...(pageId ? { isPartOf: { "@id": pageId } } : {}),
    ...(serviceId ? { about: { "@id": serviceId } } : {}),
    ...(pageId ? { mainEntityOfPage: { "@id": pageId } } : {}),
    ...(inLanguage ? { inLanguage } : {}),
    mainEntity,
  };
}
