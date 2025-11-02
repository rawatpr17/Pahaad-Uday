// pages/_app.js
import "../styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-wrap">
            {/* Use plain <img> so Next build never fails due to Image optimisation */}
            <Link href="/">
              <a style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img src="/logo.png" alt="Pahaad Dialogue Logo" width="70" height="70" style={{ borderRadius: 6 }} />
                <div>
                  <div className="brand-title">पहाड़ डायलॉग</div>
                  <div className="brand-sub">Pahaad Dialogue</div>
                </div>
              </a>
            </Link>
          </div>

          <div className="header-banner">
            <img src="/header.jpg" alt="Pahaad Dialogue Header" style={{ width: "100%", height: "auto", maxWidth: 700 }} />
          </div>
        </div>
      </header>

      <main className="main-container">
        <Component {...pageProps} />
      </main>
    </>
  );
  }
