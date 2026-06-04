import * as React from "react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* Phone button */}
      <a
        className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 hover:scale-110 transition-transform duration-300"
        href="tel:0933663112"
        aria-label="Gọi điện thoại"
      >
        <span className="material-symbols-outlined text-white text-2xl">call</span>
      </a>
      
      {/* Zalo button */}
      <a
        className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-300"
        href="https://zalo.me/0933663112"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ Zalo"
      >
        <span className="text-white font-bold text-xl">Z</span>
      </a>
      
      {/* Messenger button */}
      <a
        className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-300"
        href="https://m.me/webnhatrang2023"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ Messenger"
      >
        <span className="material-symbols-outlined text-white text-2xl">forum</span>
      </a>
    </div>
  );
}
