import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "NextJs Streaming",
  description: "NextJs Streaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-black text-white  p-5">
            <div className="flex flex-row">
              <h1 className=" pr-4 text-white-100">NextJs Streaming</h1>
              <Link href="/" title="Home" className="text-white-100 pr-3">
                Home
              </Link>
              <Link href="/repos" title="Home" className="text-white-100 pr-3">
                Repos
              </Link>
            </div>
          </header>
          <div className="flex justify-center">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
