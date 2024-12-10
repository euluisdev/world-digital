import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";


export const metadata = {
  title: "Crie seu site | World Digital | Estratégia Marketing Digital",
  description: "Meu Site é minha marca online para o Mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        {/* Meta padrão */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, orientation=portrait"
        />

        {/* SEO Metadata */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="World Digital Tec" />
        <meta name="keywords" content="marketing digital, agência de marketing, identidade visual, estratégias digitais, presença online" />
        <link rel="canonical" href="https://worlddigitaltec.firebaseapp.com/" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://worlddigitaltec.firebaseapp.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://worlddigitaltec.firebaseapp.com/imagem-agencia.jpg" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://worlddigitaltec.firebaseapp.com/imagem-agencia.jpg" />

        {/* Estrutura de dados JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "World Digital Tec",
            description: metadata.description,
            url: "https://worlddigitaltec.firebaseapp.com/",
            image: "https://worlddigitaltec.firebaseapp.com/imagem-agencia.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Igarassu | Olinda",
              addressRegion: "Pernambuco",
              postalCode: "53610-050",
              addressCountry: "Brasil",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+55 81 99813-6237",
              contactType: "Atendimento ao cliente",
            },
          })}
        </script>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
