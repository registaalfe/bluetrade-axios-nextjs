import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <>
      <Html lang="en" suppressHydrationWarning>
        <Head>
          <meta name="description" content="Crypto Tracker" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body className="antialiased max-md:grid max-md:grid-cols-1">
          <Main className="max-md:pt-8 max-md:pr-4 max-md:pb-[60px] max-md:pl-4" /> {/* This renders the page content */}
          <NextScript /> {/* This injects the Next.js scripts needed for hydration and client-side behavior */}
        </body>
      </Html>
    </>
  );
}
