"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ConsultationFormProps {
  layout?: "row" | "card";
}

export function ConsultationForm({ layout = "row" }: ConsultationFormProps) {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert("Vui lòng nhập số điện thoại!");
      return;
    }
    alert(`Cảm ơn bạn! Chúng tôi đã nhận được số điện thoại: ${phoneNumber}. Sẽ có nhân viên liên hệ tư vấn ngay.`);
    setPhoneNumber("");
  };

  if (layout === "card") {
    return (
      <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 shadow-xs">
        <h4 className="text-headline-md font-bold text-deep-navy mb-2 font-sans">
          Yêu cầu tư vấn
        </h4>
        <p className="text-body-md text-on-surface-variant mb-4">
          Bạn muốn chúng tôi chủ động liên hệ. Hãy để lại số điện thoại, chúng
          tôi sẽ chủ động gọi cho bạn !
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-surface py-2 px-4"
            placeholder="Số điện thoại"
            type="tel"
          />
          <Button
            type="submit"
            className="w-full py-2 font-bold hover:shadow-lg transition-all"
          >
            GỬI NGAY
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-primary/5 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-primary/10">
      <div className="max-w-2xl text-left">
        <h2 className="text-3xl md:text-headline-lg font-bold text-deep-navy mb-4 font-sans leading-tight">
          Yêu cầu tư vấn
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          Bạn muốn chúng tôi chủ động liên hệ. Hãy để lại số điện thoại,
          chúng tôi sẽ chủ động gọi cho bạn !
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-auto flex flex-col md:flex-row gap-4 shrink-0"
      >
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full md:w-64"
          placeholder="Số điện thoại"
          type="tel"
        />
        <Button
          type="submit"
          className="px-10 py-4 font-bold hover:shadow-lg transition-all whitespace-nowrap"
        >
          GỬI NGAY
        </Button>
      </form>
    </div>
  );
}
