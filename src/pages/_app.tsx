import { useEffect } from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="p-4 h-screen max-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
