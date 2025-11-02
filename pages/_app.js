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
                <img src="/logo.png" alt="Pahaad Dialogue Logo" width="120" height="120" style={{ borderRadius: 6 }} />
                <div>
                 
                </div>
              </a>
            </Link>
          </div>

          <div className="header-banner">
            <img src="/header.jpg" alt="Pahaad Dialogue Header" style={{ width: "100%", height: "auto", maxWidth: 1300 }} />
          </div>
        </div>
      </header>

      <main className="main-container">
        <Component {...pageProps} />
      </main>
    </>
  );
  }
