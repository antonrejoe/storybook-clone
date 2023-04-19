import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function App({ Component, pageProps }: AppProps) {
  const [SSR, setSSR] = useState(true);
  useEffect(() => {
    setSSR(false);
  }, []);

  if (SSR) {
    return null;
  }
  return (
    <div>
      <Navbar />
      <div className="flex shadow-md">
        <div className="block bg-orange-400">
          <Sidebar />
        </div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
