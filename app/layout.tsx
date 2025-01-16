import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dharmick Mehta - Strategy Analyst",
  description: "Portfolio and professional work of Dharmick Mehta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 ">{children}</main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
