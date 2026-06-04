"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { ScrollReveal } from "./scroll-reveal";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-section-padding-desktop px-gutter overflow-hidden bg-gradient-to-br from-surface to-surface-container-low min-h-[90vh] flex items-center scroll-mt-20">
      {/* Decorative patterns and backgrounds */}
      <div className="absolute inset-0 hero-pattern z-0"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary-fixed/20 to-transparent z-0"></div>
      
      {/* Floating background logo */}
      <img
        alt=""
        aria-hidden="true"
        className="absolute top-20 right-10 w-96 opacity-10 animate-float z-0 pointer-events-none"
        src="https://lh3.googleusercontent.com/aida/AP1WRLtbUy0Wd8-7rSQCyX_Jya7k0LX8WZ_El-HUZTbs-D6tDg-Yblz95S1EdT3QUwihL4G4_RLNGm9ouQyZuDQt5mB7ttcQ_slhGKudYv60VhHRwp3nJFOx--BqBVpz59cFZKw-UG9CSMUb8Emn_-peWn6ESF7AXyHMyyyKCw9103NSKQ60J9nMYFFdogJhLvroIqUEQZ_MjeNrP__x_9vrEuFIZ-dkZtdP7gX-SGcf16hIVA4mXClDapvwa04"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <ScrollReveal direction="left" className="space-y-6">
          <p className="text-label-md text-primary tracking-widest uppercase">
            Chào mừng đến với
          </p>
          <h1 className="text-4xl md:text-display-lg text-deep-navy leading-tight font-bold font-sans">
            Thiết kế website<br />
            <span className="text-gradient">Nha Trang</span><br />
            - Chuẩn SEO
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-lg">
            Hơn 10 năm hoạt động về dịch vụ Thiết kế Web Nha Trang, chúng tôi tự
            tin giúp quý khách sở hữu website chuyên nghiệp để quảng bá thương
            hiệu và tiếp cận khách hàng tiềm năng nhanh chóng nhất !
          </p>
          <div className="pt-4">
            <a
              className="inline-flex items-center justify-center bg-gradient-primary text-on-primary px-8 py-4 rounded-full font-label-md shadow-lg shadow-primary-container/30 hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              href="https://zalo.me/0933663112"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative font-bold">ĐĂNG KÝ WEB</span>
              <span className="material-symbols-outlined ml-2 relative">
                arrow_forward
              </span>
            </a>
          </div>
        </ScrollReveal>

        {/* Right Column */}
        <ScrollReveal direction="right" className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-container to-vibrant-blue rounded-[2rem] blur-2xl opacity-20 animate-pulse"></div>
          <div className="glass-panel rounded-[2rem] p-4 relative overflow-hidden shadow-2xl shadow-deep-navy/10 transform hover:-translate-y-2 transition-transform duration-500">
            <img
              alt="Tech office environment with modern setup"
              className="rounded-xl w-full object-cover aspect-4/3"
              src="https://lh3.googleusercontent.com/aida/AP1WRLvTgJQBWzx0rRjh9xy63X5jf42It5sfp_mN1rYRpnddWjpXunof9BUMjLM9W1eeicDcJjw5ZYwmCVzbNiBSxIKgogX0LDwxWVNH8Wuvs3tOs7XRvate5XkyctgqIDQHGdK1LYxsEOlPe6glkphKtla88H2RPsuJlkExFaqnQmJJrdUne-TySkIZu2KsuvS1USiFY1KdoTHMmM8imeb2uu5K-R7R04YIpvr8pJVXLnpWvaZT-W919brjBhs"
            />
            {/* Floating indicator */}
            <div
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xs border border-white/50 rounded-2xl p-4 shadow-xl flex items-center gap-4 animate-bounce z-20"
              style={{ animationDuration: "3s" }}
            >
              <div className="bg-primary-container/20 p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  trending_up
                </span>
              </div>
              <div>
                <p className="font-bold text-deep-navy text-body-md">Tăng trưởng SEO</p>
                <p className="text-sm text-on-surface-variant">+200% traffic</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
