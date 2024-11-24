import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Crie seu site || Marketing Digital",
  description: "Meu site, minha identidade visual online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
