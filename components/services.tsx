"use client";

import * as React from "react";
import { ScrollReveal } from "./scroll-reveal";

interface ServiceItem {
  title: string;
  price: string;
  icon: string;
  delay: number;
}

const services: ServiceItem[] = [
  {
    title: "Quản trị Website",
    price: "1.500.000 vnđ",
    icon: "settings",
    delay: 0,
  },
  {
    title: "Quảng cáo Website",
    price: "1.500.000 vnđ",
    icon: "campaign",
    delay: 0.15,
  },
  {
    title: "Gia hạn Website",
    price: "1.500.000 vnđ",
    icon: "update",
    delay: 0.3,
  },
  {
    title: "Nâng cấp Website",
    price: "1.500.000 vnđ",
    icon: "upgrade",
    delay: 0.45,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-section-padding-desktop px-gutter bg-surface relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-headline-lg font-bold text-deep-navy font-sans">
            Dịch Vụ Chính
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Hơn 10 năm hoạt động về dịch vụ Thiết kế Web Nha Trang, chúng tôi tự
            tin giúp quý khách sở hữu website chuyên nghiệp để quảng bá thương
            hiệu
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={service.delay}
              className="h-full"
            >
              <div className="h-full bg-white border border-outline-variant/20 shadow-xs p-4 md:p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:shadow-primary-container/10 transition-shadow duration-300 group">
                {/* Icon wrapper */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">
                    {service.icon}
                  </span>
                </div>
                
                <h3 className="text-base md:text-headline-md font-bold text-deep-navy mb-1 md:mb-2 font-sans">
                  {service.title}
                </h3>
                
                <p className="text-primary font-bold text-xs md:text-body-md mt-auto">
                  Chỉ với: {service.price}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
