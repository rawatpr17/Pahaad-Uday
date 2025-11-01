// _app.js
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pahaad Dialogue - Uttarakhand News Portal</title>
        <meta name="description" content="Get latest Uttarakhand news, politics, weather updates and local stories on Pahaad Dialogue." />
        <meta name="keywords" content="Uttarakhand, Pahaad Dialogue, News, Politics, Weather, Rudraprayag, Sports, Local News" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-green-700">Pahaad Dialogue</h1>
            <nav className="space-x-4 text-sm font-medium text-gray-600">
              <a href="#home" className="hover:text-green-700">Home</a>
              <a href="#uttarakhand" className="hover:text-green-700">Uttarakhand</a>
              <a href="#sports" className="hover:text-green-700">Sports</a>
              <a href="#weather" className="hover:text-green-700">Weather</a>
              <a href="#local" className="hover:text-green-700">Local</a>
              <a href="#politics" className="hover:text-green-700">Politics</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto p-4">
          <Component {...pageProps} />
        </main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-8 text-sm">
          © {new Date().getFullYear()} Pahaad Dialogue | Uttarakhand’s Trusted Voice
        </footer>
      </div>
    </>
  );
    }
