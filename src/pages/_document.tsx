import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener("visibilitychange", function(){
              window.localStorage.setItem(document.visibilityState, Date.now().toString());
            });`,
          }}
        />
      </body>
    </Html>
  );
}
