import "./globals.css";

export const metadata = {
  title: "Intersmart - AI Development Services & Solutions",
  description: "Leading AI development company offering custom AI solutions, machine learning, and digital transformation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

