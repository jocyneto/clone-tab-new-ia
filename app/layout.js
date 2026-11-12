import "./globals.css";

export const metadata = { title: "Para a Camilinha" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
