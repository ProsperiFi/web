import t from '@/functions/t';
import { Open_Sans, Nunito, Roboto_Slab } from "next/font/google"
import "./globals.css";

const rSlab = Roboto_Slab({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'], weight: "400" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased`}
      >
        <div className={`p-4 brand ${rSlab.className}`}>{t("app_name")}</div>
        {children}
      </body>
    </html>
  );
}
