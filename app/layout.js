import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Bitlinks - Your own URL shortener",
  description: "Now URL shortening is at your fingertips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-purple-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
