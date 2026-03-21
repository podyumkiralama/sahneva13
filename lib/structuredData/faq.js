export function buildFaqSchema(faqDataArray) {
  if (!Array.isArray(faqDataArray) || faqDataArray.length === 0) return null;

  const mainEntity = faqDataArray
    .map((item) => {
      const question = item?.question?.trim();
      const answer = item?.answer?.trim();

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
    mainEntity,
  };
}
