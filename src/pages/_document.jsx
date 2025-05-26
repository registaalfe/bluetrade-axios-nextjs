import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head /> {/* Add custom meta tags, link tags, fonts, etc. */}
      <body className="antialiased">
        <Main /> {/* This renders the page content */}
        <NextScript /> {/* This injects the Next.js scripts needed for hydration and client-side behavior */}
      </body>
    </Html>
  );
}
