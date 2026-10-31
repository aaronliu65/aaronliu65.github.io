import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aaron Liu — Front-end Developer | Vue.js & Nuxt.js',
  description: 'Aaron Liu is a UK-based front-end developer with 7+ years of commercial experience, specialising in Vue.js, Nuxt.js and responsive website development.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[80px] motion-reduce:scroll-auto">
      <body className="m-0 bg-night font-sans text-[15px] leading-[normal] text-white selection:bg-lime selection:text-night [&_a]:[-webkit-tap-highlight-color:transparent] [&_button]:cursor-pointer [&_button]:[-webkit-tap-highlight-color:transparent] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-lime [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-lime motion-reduce:[&_*]:animate-none motion-reduce:[&_*]:transition-none">
        {children}

        <Script async src={`https://www.googletagmanager.com/gtm.js?id=GTM-${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
            `}
        </Script>
      </body>
    </html>
  );
}
