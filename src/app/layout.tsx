import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./_feature/components/Header";

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
          <main className="max-w-2xl p-4 mx-auto">{children}</main>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
