"use client";

import { useState } from "react";

export default function EventAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Merhaba 👋 Sahneva Teknik proje danışmanıyım. Etkinliğiniz hangi tür organizasyon?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const updated = [...messages, { role: "user", content: input }];
    setMessages(updated);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updated }),
    });

    const data = await res.json();

    setMessages([...updated, { role: "assistant", content: data.reply }]);
    setLoading(false);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {isOpen ? "Kapat" : "🎯 Etkinliği Planlayalım"}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-3 font-semibold">
            Sahneva Proje Danışmanı
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "assistant"
                    ? "text-blue-600"
                    : "text-gray-800 text-right"
                }
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="text-gray-400 text-sm">
                Yazıyor...
              </div>
            )}
          </div>

          <div className="flex border-t">
            <input
              className="flex-1 px-3 py-2 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Mesaj yaz..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4"
            >
              Gönder
            </button>
          </div>
        </div>
      )}
    </>
  );
}
