import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
              rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>

        <link rel="icon" type="image/svg+xml" href={'/favicon.svg'}/>
        <link rel="icon" type="image/png" href={'/favicon.svg'}/>
        <title>{'Wealth Mirror'}</title>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
