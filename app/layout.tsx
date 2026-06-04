import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thiết kế Website Nha Trang - Chuẩn SEO",
  description: "Dịch vụ thiết kế website chuyên nghiệp, chuẩn SEO hàng đầu tại Nha Trang với hơn 10 năm kinh nghiệm. Cam kết chất lượng, bảo hành trọn đời, giá tốt nhất thị trường.",
  keywords: [
    "thiết kế web nha trang",
    "thiết kế website nha trang",
    "dịch vụ web nha trang",
    "làm web chuẩn seo nha trang",
    "web nha trang chuyên nghiệp",
  ],
  authors: [{ name: "Web Nha Trang Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Import Google Material Symbols CDN */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-background text-on-background relative">
        {children}
      </body>
    </html>
  );
}
