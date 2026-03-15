import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/ultils/theme_provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School Management",
  description: "Quản lý trường học (School Management) là quá trình tổ chức, điều hành và giám sát các hoạt động trong trường học nhằm đảm bảo môi trường giáo dục hiệu quả và phát triển bền vững. Điều này bao gồm quản lý hành chính, tài chính, nhân sự, cơ sở vật chất, và quan hệ với phụ huynh cũng như cộng đồng. Mục tiêu của quản lý trường học là nâng cao chất lượng giảng dạy, học tập và phát triển toàn diện cho học sinh. Với sự hỗ trợ của công nghệ hiện đại, các hệ thống quản lý trường học ngày càng tối ưu hóa quy trình, giúp nhà trường hoạt động minh bạch, chuyên nghiệp và đáp ứng tốt hơn nhu cầu giáo dục ngày nay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
