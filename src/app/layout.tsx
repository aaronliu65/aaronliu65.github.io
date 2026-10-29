import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aaron Liu — Front-end Developer | Vue.js & Nuxt.js',
  description: 'Aaron Liu, a front-end developer in Harpenden, UK. 7+ years of commercial experience, 30+ websites, specialising in Vue.js, Nuxt.js and responsive UI development.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[95px] motion-reduce:scroll-auto">
      <body className="m-0 bg-paper font-sans text-[15px] leading-[normal] text-ink selection:bg-[#edb4a5] [&_a]:[-webkit-tap-highlight-color:transparent] [&_button]:cursor-pointer [&_button]:[-webkit-tap-highlight-color:transparent] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-6 [&_a:focus-visible]:outline-accent [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-6 [&_button:focus-visible]:outline-accent motion-reduce:[&_*]:animate-none motion-reduce:[&_*]:transition-none">
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
