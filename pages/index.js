// pages/index.js
import Link from "next/link";

const ARTICLES = [
  {
    id: "rudraprayag-local-updates",
    title: "रुद्रप्रयाग में सड़क मरम्मत का नया चरण शुरू",
    category: "Local",
    date: "2025-10-30",
    excerpt: "स्थानीय प्रशासन ने रुद्रप्रयाग के प्रभावित हिस्सों में तात्कालिक मरम्मत कार्य शुरू किए हैं।",
    image: "/assets/rudraprayag.jpg"
  },
  {
    id: "local-news",
    title: "गाँव और शहर की खबरें",
    category: "Local",
    date: "2025-10-19",
    excerpt: "गांवों में शुरू हुए विकास कार्य और सामुदायिक पहल।",
    image: "/assets/local.jpg"
  },
  {
    id: "weather-alert",
    title: "मौसम अलर्ट: अगले 48 घंटे में भारी बारिश",
    category: "Weather",
    date: "2025-10-28",
    excerpt: "मौसम विभाग ने पहाड़ों में भारी बारिश की चेतावनी जारी की है।",
    image: "/assets/weather.jpg"
  }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Pahaad Dialogue</h1>
            <p className="lead">Rudraprayag और Uttarakhand की सबसे ताज़ा, भरोसेमंद खबरें</p>
          </div>
          <div className="hero-image">
            <img src="/assets/hero.jpg" alt="Pahaad Dialogue" />
          </div>
        </div>
      </section>

      <section className="container layout-grid">
        <div className="main-col">
          <h2>Featured</h2>

          <div className="featured">
            <article className="card large">
              <img src={ARTICLES[0].image} alt={ARTICLES[0].title} />
              <div className="card-body">
                <span className="cat">{ARTICLES[0].category}</span>
                <h3>{ARTICLES[0].title}</h3>
                <p className="meta">{ARTICLES[0].date}</p>
                <p>{ARTICLES[0].excerpt}</p>
                <Link href={`/articles/${ARTICLES[0].id}`} className="read">Read more</Link>
              </div>
            </article>
          </div>

          <h3 className="mt">Latest News</h3>
          <div className="grid">
            {ARTICLES.slice(1).map(a => (
              <article key={a.id} className="card">
                <img src={a.image} alt={a.title} />
                <div className="card-body">
                  <span className="cat">{a.category}</span>
                  <h4>{a.title}</h4>
                  <p className="meta">{a.date}</p>
                  <p className="excerpt">{a.excerpt}</p>
                  <Link href={`/articles/${a.id}`} className="read">Read more</Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="side-col">
          <div className="widget">
            <h4>Trending</h4>
            <ul>
              <li><Link href="/articles/rudraprayag-local-updates">रुद्रप्रयाग: सड़क मरम्मत</Link></li>
              <li><Link href="/articles/local-news">गाँव और शहर: स्थानीय खबरें</Link></li>
            </ul>
          </div>

          <div className="widget">
            <h4>Newsletter</h4>
            <p>Mobile पर updates पाने के लिए ईमेल दो।</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed (demo)");
              }}
            >
              <input type="email" placeholder="Email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </aside>
      </section>
    </>
  );
}
