// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BottomNav from "@/components/BottomNav";
import AppContextProvider from "@/context/AppContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <div className="">
        <main className="pb-16">
          <Component {...pageProps} />
        </main>
        <BottomNav />
      </div>
    </AppContextProvider>
  );
}
