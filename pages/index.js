// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>पहाड़ उदय — Rudraprayag, Uttarakhand</title>
        <meta name="description" content="Rudraprayag और Uttarakhand की ताज़ा खबरें — Local, Sports, Weather, Politics" />
      </Head>

      <div className="container">
        <header className="site-header">
          <div className="brand">
            <h1>पहाड़ उदय</h1>
            <p className="tag">Rudraprayag • Uttarakhand • Local News</p>
          </div>
        </header>

        <main>
          <h2>ताज़ा खबरें</h2>

          <article className="card">
            <h3><a href="/articles/rudraprayag.md">Rudraprayag: लोकल अपडेट्स</a></h3>
            <p className="meta">Rudraprayag • लोकल न्यूज</p>
            <p>रुद्रप्रयाग से ताज़ा रिपोर्ट — सड़क, बारिश और स्थानीय कार्यक्रम।</p>
          </article>

          <article className="card">
            <h3><a href="/articles/sports-latest.md">Sports: स्थानीय अपडेट</a></h3>
            <p className="meta">Sports • खेल</p>
            <p>स्थानीय टूर्नामेंट और खिलाड़ियों की खबरें।</p>
          </article>

          <article className="card">
            <h3><a href="/articles/weather-alert.md">Weather Alert</a></h3>
            <p className="meta">Weather • मौसम</p>
            <p>मौसम विभाग की ताज़ा चेतावनियाँ — यात्रा से पहले जाँचें।</p>
          </article>

        </main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} पहाड़ उदय — Rudraprayag, Uttarakhand</p>
        </footer>
      </div>
    </>
  )
}