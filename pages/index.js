// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>पहाड़ उदय — Rudraprayag News</title>
        <meta name="description" content="Rudraprayag, Uttarakhand की ताज़ा खबरें — Local, Sports, Weather, Politics" />
      </Head>

      <div style={{ fontFamily: 'system-ui', padding: '20px' }}>
        <h1>पहाड़ उदय</h1>
        <p>Rudraprayag, Uttarakhand की ताज़ा खबरें:</p>

        <ul>
          <li>लोकल न्यूज़</li>
          <li>स्पोर्ट्स अपडेट</li>
          <li>मौसम रिपोर्ट</li>
          <li>राजनीति और प्रशासनिक खबरें</li>
        </ul>

        <p>© {new Date().getFullYear()} पहाड़ उदय — Local Uttarakhand News</p>
      </div>
    </>
  )
}