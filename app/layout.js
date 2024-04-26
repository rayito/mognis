import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Casamiento",
  description: "Invitación a la celebración del casamiento de Ana y Edén.",
  metadataBase: new URL('https://migranbodavegana.org'),
  openGraph: {
    images: './images/opengraph-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
