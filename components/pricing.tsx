"use client";

import * as React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ScrollReveal } from "./scroll-reveal";

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  delay: number;
}

const plans: PricingPlan[] = [
  {
    name: "Cá nhân",
    price: "2.000.000",
    features: [
      "Tặng tên miền .COM",
      "Máy chủ không giới hạn",
      "Email tên miền 1 cái",
      "Cập nhật nội dung 2 bài",
    ],
    delay: 0,
  },
  {
    name: "Khởi nghiệp",
    price: "4.000.000",
    features: [
      "Tặng tên miền .COM",
      "Máy chủ không giới hạn",
      "Email tên miền 2 cái",
      "Cập nhật nội dung 3 bài",
    ],
    delay: 0.15,
  },
  {
    name: "Chuyên nghiệp",
    price: "6.000.000",
    features: [
      "Tặng tên miền .COM",
      "Máy chủ không giới hạn",
      "Email tên miền 3 cái",
      "Cập nhật nội dung 4 bài",
    ],
    delay: 0.3,
  },
  {
    name: "Doanh nghiệp",
    price: "8.000.000",
    features: [
      "Tặng tên miền .COM",
      "Máy chủ không giới hạn",
      "Email tên miền 4 cái",
      "Cập nhật nội dung 5 bài",
    ],
    delay: 0.45,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-section-padding-desktop px-gutter relative bg-surface-container-low overflow-hidden scroll-mt-20"
    >
      {/* Background radial glow & pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container via-surface-container-low to-surface-container-low"></div>
      <img
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
        src="https://lh3.googleusercontent.com/aida/AP1WRLu3VHPIk3L9vMflVRBUk4s_xXbCiZ0kg59c-Ib6phmlF49hXYTQC9tcf6rFFQtZJznv6o19vfh6KEanW51QnbFWbSJGEoK-QZa14dc696G5Ci9t0E7CyUuhkwTtADhVXRhIQ0pW9LIvhNGk_hzn5QWp3vHQRXoOU63bJssPUTex8l6tzUzVt6thDhLtO-AlrplsdZ-fPu8NAMekBwVHS_ByxqVsGZkCyyLvG6fv4MjDbyqPbnVtzF2a-g"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-headline-lg font-bold text-deep-navy font-sans">
            Bảng giá
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Hơn 10 năm hoạt động về dịch vụ Thiết kế Web Nha Trang, chúng tôi tự
            tin giúp quý khách sở hữu website chuyên nghiệp để quảng bá thương
            hiệu
          </p>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {plans.map((plan, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={plan.delay}
              className="h-full"
            >
              <Card className="h-full bg-white border border-outline-variant/30 relative flex flex-col justify-between p-4 md:p-8 hover:-translate-y-2 transition-transform duration-300">
                <div>
                  {/* Badge */}
                  <div className="absolute top-0 right-0 bg-action-orange text-white text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-bl-lg rounded-tr-2xl transform translate-x-[1px] -translate-y-[1px] z-10">
                    Save 23%
                  </div>

                  <h3 className="text-base md:text-headline-md font-bold text-deep-navy mb-1 md:mb-2 font-sans">
                    {plan.name}
                  </h3>

                  <div className="text-lg md:text-headline-lg font-bold text-primary mb-4 md:mb-6 font-sans">
                    {plan.price}
                    <span className="text-xs md:text-sm font-normal text-on-surface-variant ml-1">
                      /vnđ
                    </span>
                  </div>

                  <ul className="space-y-2 md:space-y-4 mb-4 md:mb-8 text-on-surface-variant text-xs md:text-body-md">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-1 md:gap-2"
                      >
                        <span className="text-primary select-none">➤</span>{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://zalo.me/0933663112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full py-2 md:py-3 h-auto justify-center font-bold text-xs md:text-body-md transition-colors"
                    >
                      ĐĂNG KÝ NGAY
                    </Button>
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
