import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Mynavbar from "../components/navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Mynavbar />
      <Component {...pageProps} />
    </>
  );
}
