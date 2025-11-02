// pages/_app.js
import "@/styles/globals.css";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Logo Section */}
          <div className="logo-wrap">
            <Image
              src="/logo.png"
              alt="Pahaad Dialogue Logo"
              width={70}
              height={70}
              priority
            />
            <div className="brand">
              <h1 className="brand-title">पहाड़ डायलॉग</h1>
              <p className="brand-sub">Pahaad Dialogue</p>
            </div>
          </div>

          {/* Header Banner */}
          <div className="header-banner">
            <Image
              src="/header.jpg"
              alt="Pahaad Dialogue Header"
              width={900}
              height={150}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </header>

      <main className="main-container">
        <Component {...pageProps} />
      </main>
    </>
  );
                }
