import { Header } from "./Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RSC-Memo ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-slate-100`}>
        <div className="space-y-6">
          <Header />
          <main className="max-w-2xl mx-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
