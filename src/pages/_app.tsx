import { useEffect } from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let screenLock: any;
      document.addEventListener("visibilitychange", async () => {
        if (screenLock !== null && document.visibilityState === "visible") {
          screenLock = await window.navigator.wakeLock.request("screen");
        }
      });

      return () => {
        if (typeof screenLock !== "undefined" && screenLock != null) {
          screenLock.release().then(() => {
            screenLock = null;
          });
        }
      };
    }
  }, []);
  return (
    <div className="p-4 h-screen max-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
