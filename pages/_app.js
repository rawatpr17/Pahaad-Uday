// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { MenuIcon as Menu, XIcon as X, SearchIcon as Search } from "../components/Icons";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pahaad Dialogue — Rudraprayag, Uttarakhand</title>
        <meta name="description" content="Pahaad Dialogue — Rudraprayag & Uttarakhand की ताज़ा खबरें" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="site-header">
        <div className="header-inner container">
          <div className="brand-left" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/">
              <a style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
                <img src="/logo.png" alt="Pahaad Dialogue" style={{ width: 64, height: 64, objectFit: "contain" }} />
                <div>
                  <div style={{ fontWeight: 800, color: "#f6b400" }}>पहाड़ डायलॉग</div>
                  <div style={{ fontSize: 12, color: "#2b6cb0" }}>Pahaad Dialogue</div>
                </div>
              </a>
            </Link>
          </div>

          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
            {/* Mobile menu icon (visual only) */}
            <button aria-label="menu" style={{ background: "transparent", border: "none", padding: 8 }}>
              <Menu />
            </button>

            {/* Search icon */}
            <button aria-label="search" style={{ background: "transparent", border: "none", padding: 8 }}>
              <Search />
            </button>
          </div>
        </div>

        {/* nav - simple fallback if needed */}
        <nav className="main-nav container" style={{ marginTop: 8 }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/"><a className="nav-link">Home</a></Link>
            <Link href="/categories/uttarakhand"><a className="nav-link">Uttarakhand</a></Link>
            <Link href="/categories/sports"><a className="nav-link">Sports</a></Link>
            <Link href="/categories/weather"><a className="nav-link">Weather</a></Link>
            <Link href="/categories/politics"><a className="nav-link">Politics</a></Link>
          </div>
        </nav>
      </header>

      <main className="main-container">
        <Component {...pageProps} />
      </main>

      <footer className="site-footer">
        <div className="container" style={{ padding: "18px 0", textAlign: "center" }}>
          © {new Date().getFullYear()} Pahaad Dialogue — Rudraprayag, Uttarakhand
        </div>
      </footer>
    </>
  );
    }
