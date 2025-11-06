import React, { useState } from 'react';

export default function PahadDialogueHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'होम', href: '/' },
    { label: 'देश विदेश', href: '/national-international' },
    { label: 'प्रदेश', href: '/state' },
    { label: 'बड़ी खबर', href: '/breaking-news' },
    { label: 'राजनीति', href: '/politics' },
    { label: 'संस्कृति व पर्यटन', href: '/culture-tourism' },
    { label: 'सम्पर्क खबरें भेजें', href: '/contact' }
  ];

  const mainArticle = {
    title: 'उत्तराखंड को विशेष राज्य का दर्जा देने की मांग पूर्ण सरकार के समय उठी',
    date: 'April 30 2024',
    image: 'https://images.unsplash.com/photo-1586339949216-35c7f0c2db4e?w=800&h=500&fit=crop'
  };

  const sideArticles = [
    {
      title: 'सृजन में परवल को वनस्पम टैंग लिए नई योजनाओं की व्याणा',
      date: 'April 18, 2024',
      category: 'उत्तराखंड',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      title: 'आगामी चुण्णा को लेकर राजनीतिक दल मैथारियों में पूरे',
      date: 'April 18, 2024',
      category: 'राजनीति',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=300&fit=crop'
    },
    {
      title: 'सीमा पर द्वांडा दलो की तैयारियों का जायचा',
      date: 'April 14, 2024',
      category: 'रक्षा',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    }
  ];

  const articles = [
    {
      title: 'उत्तराखंड को विशेष राज्य का दर्जा रेड्डे की नांग पुन सरकार के लगदो उठी',
      date: 'April 23, 2024',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=200&fit=crop'
    },
    {
      title: 'राज्या से नैनी पझपुण पर रेक ठका कदम की बोपणा',
      date: 'April 18, 2024',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
    },
    {
      title: 'उत्तराखंड ने नदी प्रदूषण पर रोकथाम के लिए मंडन',
      date: 'April 17, 2024',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop'
    }
  ];

  const categories = [
    'उत्तराखंड', 'राजनीति', 'पर्यावरण', 'पर्यटन',
    'बोली', 'संस्कृति', 'खेल', 'स्वास्थ्य'
  ];

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background: #f9fafb;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .8; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @media (min-width: 1024px) {
          .main-grid { grid-template-columns: 2fr 1fr !important; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
        {/* Header */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '8px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ 
                  display: 'block',
                  fontSize: '20px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  padding: '6px'
                }}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, justifyContent: 'center' }}>
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  style={{ 
                    height: '36px',
                    width: '36px',
                    objectFit: 'contain',
                    maxHeight: '36px',
                    maxWidth: '36px'
                  }}
                  onError={(e) => e.target.style.display = 'none'}
                />
                <img 
                  src="/header.jpg" 
                  alt="Header" 
                  style={{ 
                    height: '36px',
                    width: 'auto',
                    objectFit: 'contain',
                    maxHeight: '36px',
                    maxWidth: '300px'
                  }}
                  onError={(e) => e.target.outerHTML = '<span style="color:#dc2626;font-weight:bold;font-size:18px">पहाड़ डायलॉग</span>'}
                />
              </div>

              <button style={{ fontSize: '18px', border: 'none', background: 'none', cursor: 'pointer', padding: '6px' }}>
                🔍
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ background: 'white', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 40 }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
            <div style={{ display: mobileMenuOpen ? 'none' : 'flex', gap: '20px', padding: '10px 0', overflowX: 'auto' }}>
              {navigationItems.map((item, idx) => (
                <a key={idx} href={item.href} style={{ color: '#374151', fontWeight: 600, fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  {item.label}
                </a>
              ))}
            </div>
            {mobileMenuOpen && (
              <div style={{ padding: '10px 0' }}>
                {navigationItems.map((item, idx) => (
                  <a key={idx} href={item.href} style={{ display: 'block', color: '#374151', fontWeight: 600, fontSize: '14px', textDecoration: 'none', padding: '6px 0' }} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Breaking News */}
        <div style={{ background: '#dc2626', color: 'white' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '8px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '11px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>BREAKING NEWS</span>
              <p className="animate-pulse" style={{ fontSize: '13px' }}>चुण्णानी में किया राज्य के दौरा दिवाला सिरोऽजनाओं का किया निरिदान</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 16px' }}>
          <div className="main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '40px' }}>
            {/* Main Article */}
            <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <img src={mainArticle.image} alt="" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', color: 'white' }}>
                <h1 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '8px', lineHeight: '1.3' }}>{mainArticle.title}</h1>
                <p style={{ fontSize: '12px', color: '#d1d5db' }}>{mainArticle.date}</p>
              </div>
            </div>

            {/* Side Articles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {sideArticles.map((article, idx) => (
                <div key={idx} style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                  <img src={article.image} alt="" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)' }}></div>
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span style={{ background: '#eab308', color: 'black', fontSize: '11px', fontWeight: 'bold', padding: '3px 10px', borderRadius: '5px' }}>{article.category}</span>
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px', color: 'white' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '3px', lineHeight: '1.3' }}>{article.title}</h3>
                    <p style={{ fontSize: '11px', color: '#d1d5db' }}>{article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Tabs */}
          <div style={{ marginTop: '32px', borderBottom: '2px solid #dc2626' }}>
            <div style={{ display: 'flex', gap: '24px', overflowX: 'auto' }}>
              <button style={{ paddingBottom: '10px', fontWeight: 'bold', color: '#dc2626', borderBottom: '3px solid #dc2626', background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', fontSize: '15px' }}>उत्तरखंड</button>
              <button style={{ paddingBottom: '10px', fontWeight: 600, color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', fontSize: '15px' }}>राजनीति</button>
              <button style={{ paddingBottom: '10px', fontWeight: 600, color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', fontSize: '15px' }}>पर्यावरण</button>
            </div>
          </div>

          {/* Articles Grid */}
          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {articles.map((article, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                <img src={article.image} alt="" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                <div style={{ padding: '16px' }}>
                  <h3 className="line-clamp-3" style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '6px', fontSize: '14px', lineHeight: '1.4' }}>{article.title}</h3>
                  <p style={{ fontSize: '12px', color: '#6b7280' }}>{article.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div style={{ marginTop: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937' }}>श्रेणियाँ</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px' }}>
              {categories.map((cat, idx) => (
                <button key={idx} style={{ background: 'white', border: '2px solid #d1d5db', borderRadius: '8px', padding: '12px', fontWeight: 600, fontSize: '13px', color: '#374151', cursor: 'pointer' }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ background: '#111827', color: 'white', marginTop: '60px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#fbbf24' }}>पहाड डायलाग</h3>
                <p style={{ fontSize: '13px', color: '#9ca3af' }}>उत्तराखंड की आवाज़, पहाड़ से पहाड़ी तक</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '15px' }}>लिंक</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '6px' }}><a href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '13px' }}>होम</a></li>
                  <li style={{ marginBottom: '6px' }}><a href="/about" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '13px' }}>हमारे बारे में</a></li>
                  <li style={{ marginBottom: '6px' }}><a href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '13px' }}>संपर्क</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '15px' }}>संपर्क</h4>
                <p style={{ fontSize: '13px', color: '#9ca3af' }}>ईमेल: info@pahaddialogue.com<br/>फोन: +91 1234567890</p>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #374151', paddingTop: '24px', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: '#9ca3af' }}>© 2024 Pahad-Dialogue. All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
