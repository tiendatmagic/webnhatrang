"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { ScrollReveal } from "./scroll-reveal";

export function Experience() {
  return (
    <section className="py-section-padding-desktop px-gutter bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column (Images) */}
          <ScrollReveal direction="left" className="relative grid grid-cols-2 gap-4">
            <img
              alt="Professional web design team working"
              className="rounded-2xl shadow-lg object-cover w-full h-full transform translate-y-8"
              src="https://lh3.googleusercontent.com/aida/AP1WRLuoGLMOnCVHlZVmkE2ZrC3kGsekqsRY0mZXUBsHlILXdR9MnZfl-RwKNPaZHjYwqi7jXSiP44cAjBm-zb6ePoXv9UUZRid1kT-4M1gRe1rflWrtQ3A-KnsflgjkzN7DS-NEDW71CW_La-uqYhqCkESlvumRJizUjbVW0EVk6Jer5wOwC4J1gTNsNlWBK9mfX-hXLcJ8jhDRt9ZhkWh-Wnxbka1SPBvgYlszJnb5CEX7F33X_oOa-w1TaSg"
            />
            <img
              alt="Modern workspace setup"
              className="rounded-2xl shadow-lg object-cover w-full h-full transform -translate-y-4"
              src="https://lh3.googleusercontent.com/aida/AP1WRLuBJtz5bjCMzFpf92R71M0qCGmr1xkDjuBcSSBGr6DwR3bVOVyMqU4ym8aAKG0stdt3P_iT6NrNMIuUZ8woOCKAFDalvhds6KkrAc82j7bsqnelYZ1loMxpZONGuWmtQZ86yQkI02jNk7uhzX5e-p-4hBO0onsJNhA0HmcAjVIWKNgta0_Ek6-4KhHDNOdT8gJjzkuSHL5mPOEsdpVp17UtCQ4tFMxeAQvVZvOjsUhOphcHs697YBN2Fw"
            />
            {/* Decorative shape */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
          </ScrollReveal>

          {/* Right Column (Text) */}
          <ScrollReveal direction="right" className="space-y-6">
            <p className="text-label-md text-primary tracking-widest uppercase">
              KINH NGHIỆM
            </p>
            <h2 className="text-3xl md:text-headline-lg font-bold text-deep-navy font-sans leading-tight">
              Hơn 10 năm cung cấp dịch vụ thiết kế web tại Nha Trang
            </h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Tự hào là đơn vị dẫn đầu công nghệ website tại Nha Trang, chúng
              tôi cam kết với khách hàng những sản phẩm thực hiện đều hoàn hảo,
              giá cạnh tranh với thị trường hiện nay. Rất sẵn sàng khi tư vấn hỗ
              trợ quý khách hàng trong hôm nay !
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://zalo.me/0933663112" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2 py-3 px-6 h-auto">
                  <span className="material-symbols-outlined text-lg">call</span>
                  Liên hệ ngay
                </Button>
              </a>
              <a href="https://www.kieugiamedia.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outlineVariant" className="flex items-center gap-2 py-3 px-6 h-auto">
                  <span className="material-symbols-outlined text-lg">info</span>
                  Tìm hiểu thêm
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
