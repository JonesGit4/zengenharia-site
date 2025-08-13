import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ConfettiEffect from "@/components/confetti-effect";
import WhatsAppFloat from "@/components/whatsapp-float-standalone";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Z Engenharia",
  description: "Site oficial da Z Engenharia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConfettiEffect />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat
            phoneNumber="5511999999999"
            message="Olá! Gostaria de solicitar um orçamento para os serviços da Z Engenharia."
            position="right"
            companyName="Z Engenharia"
            tooltipMessage="Precisa de ajuda? Fale conosco no WhatsApp!"
            theme="auto"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
