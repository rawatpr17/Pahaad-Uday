// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pahaad Dialogue — Rudraprayag, Uttarakhand</title>
        <meta name="description" content="Pahaad Dialogue — Rudraprayag & Uttarakhand की ताज़ा खबरें" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="app-root">
        <header className="site-header">
          <div className="container">
            <div className="brand">
              <Link href="/"><a className="logo">Pahaad <strong>Dialogue</strong></a></Link>
              <div className="tag">Rudraprayag • Uttarakhand</div>
            </div>

            <nav className="main-nav">
              <Link href="/"><a>Home</a></Link>
              <Link href="/categories/uttarakhand"><a>Uttarakhand</a></Link>
              <Link href="/categories/sports"><a>Sports</a></Link>
              <Link href="/categories/weather"><a>Weather</a></Link>
              <Link href="/categories/local"><a>Local</a></Link>
              <Link href="/categories/politics"><a>Politics</a></Link>
            </nav>
          </div>
        </header>

        <main className="container main-content">
          <Component {...pageProps} />
        </main>

        <footer className="site-footer">
          <div className="container">
            © {new Date().getFullYear()} Pahaad Dialogue — Rudraprayag, Uttarakhand
          </div>
        </footer>
      </div>
    </>
  );
    }
