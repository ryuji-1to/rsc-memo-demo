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
      <body className={`${inter.className} p-4 bg-slate-100`}>
        <div className="max-w-lg mx-auto space-y-6">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
