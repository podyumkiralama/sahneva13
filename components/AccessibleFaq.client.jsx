"use client";

import { useState } from "react";

export default function AccessibleFaq({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className="space-y-4" aria-label="Sık sorulan sorular listesi">
      {items.map((faq, index) => {
        const isOpen = index === openIndex;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <li key={faq.q} className="list-none">
            <div
              className={`rounded-3xl border-2 transition-all duration-300 ${
                isOpen
                  ? "border-blue-100 bg-gray-100"
                  : "border-transparent bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <h3 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 rounded-3xl px-8 py-6 text-left text-xl font-bold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span className="flex-1 pr-4">{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className={`ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-8 pb-6"
              >
                <p className="border-l-4 border-blue-500 pl-4 text-lg leading-relaxed text-gray-700">
                  {faq.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
