"use client";

import * as React from "react";
import { ScrollReveal } from "./scroll-reveal";

interface ProcessStep {
  number: number;
  text: string;
}

const steps: ProcessStep[] = [
  { number: 1, text: "Bước 1: Tiếp nhận khách hàng tư vấn chọn gói web thích hợp." },
  { number: 2, text: "Bước 2: Lấy thông tin khách hàng, trao đổi ý tưởng trang web." },
  { number: 3, text: "Bước 3: Thống nhất chi phí tiến hành ký hợp đồng (cọc 80%)" },
  { number: 4, text: "Bước 4: Bàn giao kỹ thuật, triển khai thực hiện 20 ngày." },
  { number: 5, text: "Bước 5: Gởi demo cho khách hàng, tiến hành chỉnh sửa." },
  { number: 6, text: "Bước 6: Bàn giao thanh lý, chăm sóc hỗ trợ, bảo hành." },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-section-padding-desktop px-gutter bg-surface-container-low relative overflow-hidden scroll-mt-20"
    >
      {/* Background decorative image */}
      <img
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-1/3 opacity-[0.05] animate-pulse-slow pointer-events-none"
        src="https://lh3.googleusercontent.com/aida/AP1WRLvoMYRYxast-pVtZzZFED-C5Iz-WuQ6EkmKfZSKggl1wgbLk9dSAuXXLQGwN0tMJI7TETo7fUJmekiweVTt4D5mPg1PfoaShy0SbUS78fiRYWWi32WKPeBSJew3UwV6sZFmVCwWDUtB1OUgQEZ6aT5QgtE2dO1vYMgYqxNaeO29HrX4J1kIvb6BsGM4DzuN0238QqBJJBM4GyWikFhgV7d6jdk2Wpr7-dFacoWpU-bBfTbX3-xLqTjD-sc"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column (Text & Steps) */}
          <ScrollReveal direction="left" className="space-y-8">
            <div>
              <p className="text-label-md text-primary tracking-widest uppercase mb-2">
                WEBNHATRANG.COM
              </p>
              <h2 className="text-3xl md:text-headline-lg font-bold text-deep-navy mb-4 font-sans leading-tight">
                Quy trình Thiết Kế Web Nha Trang !
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Luôn hướng đến khách hàng &amp; đối tác thiết kế một trang web
                mang lại hiệu quả cao trong quá trình kinh doanh. Thiết kế web
                đẹp - chuyên nghiệp - hiện đại - nhanh chóng - phí hợp lý.
              </p>
            </div>
            
            {/* Steps List */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary text-sm font-bold">
                      check
                    </span>
                  </div>
                  <p className="text-body-md text-on-surface-variant leading-relaxed pt-1">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column (Image) */}
          <ScrollReveal direction="right" className="relative">
            <img
              alt="Business professional presenting data"
              className="w-full relative z-10 max-w-lg mx-auto"
              src="https://lh3.googleusercontent.com/aida/AP1WRLukfcccqy17UD7scYlW8DJBwkE0RjtzW7QtpkM7cYFIYlkQq7dEdTh2Ya47q9gdMN6sy60Kues-3lmAks24GEFUy_QkVS18ggXOLv-_qr5gYcnT2iYgi6RuNqgP7yAUfYyLncgCu8uJ2wBGEkSpLH9MAUjQbUQSt_lYBgjJgrc1NYLZf6_1eaWEsM-1bJwG4NUkwzZ2Wr1EJXBvY88617FjsCDWgnGHd7PV5oIBdISwhXYOHiXu6VAArck"
            />
            {/* Background glowing circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-gradient-to-tr from-primary-container/20 to-vibrant-blue/20 rounded-full blur-3xl -z-10"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
