import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="p-4 h-screen max-h-screen">
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </div>
  );
}
