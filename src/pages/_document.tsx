import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/favicon/favicon.ico"
        />
      </Head>
      <body className="antialiased text-text bg-background font-poppins ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
