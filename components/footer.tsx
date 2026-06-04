"use client";

import * as React from "react";
import { ConsultationForm } from "./consultation-form";
import { ScrollReveal } from "./scroll-reveal";

export function Footer() {
  return (
    <footer id="contact" className="w-full scroll-mt-20">
      {/* Top Banner (Consultation Form row) */}
      <section className="py-8 px-gutter bg-white border-t border-outline-variant/20 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <ConsultationForm layout="row" />
          </ScrollReveal>
        </div>
      </section>

      {/* Main Footer Links */}
      <div className="bg-surface border-t border-outline-variant/30 text-on-surface w-full py-16 px-8 relative overflow-hidden">
        <ScrollReveal
          direction="up"
          className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
        >
          {/* Column 1: Logo Website */}
          <div className="flex flex-col items-start justify-start">
            <a href="#home" className="inline-block">
              <img
                src="/logowebsite.png"
                alt="Logo Web Nha Trang"
                className="w-full h-full object-contain"
              />
            </a>
          </div>

          {/* Column 2: Company Info */}
          <div className="space-y-4 text-left">
            <h3 className="text-headline-md font-bold text-primary mb-4 font-sans">
              CÔNG TY TNHH WEB NHA TRANG
            </h3>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1 select-none">
                location_on
              </span>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Số 88 Tô Hiến Thành, Tân Lập,
                <br />
                TP Nha Trang, Tỉnh Khánh Hòa
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary select-none">
                call
              </span>
              <p className="text-body-md text-on-surface-variant">
                093.366.3112 - 093.366.3112
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary select-none">
                mail
              </span>
              <p className="text-body-md text-on-surface-variant">
                info@webnhatrang.com
              </p>
            </div>
          </div>

          {/* Column 2: Information Links */}
          <div className="text-left">
            <h4 className="text-headline-md font-bold text-deep-navy mb-6 font-sans">
              Thông tin
            </h4>
            <ul className="space-y-3">
              {[
                "Giới thiệu công ty",
                "Thông tin đào tạo",
                "Thông tin chính sách",
                "Thông tin thanh toán",
                "Thông tin tuyển dụng",
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    className="text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="text-left">
            <h4 className="text-headline-md font-bold text-deep-navy mb-6 font-sans">
              Dịch vụ
            </h4>
            <ul className="space-y-3">
              {[
                {
                  label: "Thiết kế Website Đà Lạt",
                  url: "https://webdalat.pys.vn/",
                },
                {
                  label: "Thiết kế Website Tuy Hòa",
                  url: "https://www.webtuyhoa.com",
                },
                {
                  label: "Thiết kế Website Phú Yên",
                  url: "https://www.webphuyen.com",
                },
                {
                  label: "Thiết kế Website Nha Trang",
                  url: "https://www.webnhatrang.vn/",
                },
                {
                  label: "Thiết kế Website Cam Ranh",
                  url: "https://webcamranh.pys.vn/",
                },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    className="text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Bottom copyright banner */}
        <div className="w-full border-t border-outline-variant/30 pt-8 mt-8 text-center relative z-10">
          <p className="text-body-md text-on-surface-variant">
            © 2026 WEB NHA TRANG. Made with ❤️ in Nha Trang.
          </p>
        </div>
      </div>
    </footer>
  );
}
