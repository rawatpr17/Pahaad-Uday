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
      `}</style>

      <div style={{ minHeight: '100vh', background: '#f9fafb', maxWidth: '100vw', overflowX: 'hidden' }}>
        {/* Mobile Header */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ padding: '12px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ 
                  fontSize: '24px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  color: '#374151'
                }}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>

              {/* Logo & Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'center' }}>
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  style={{ 
                    height: '32px',
                    width: '32px',
                    objectFit: 'contain'
                  }}
                  onError={(e) => e.target.style.display = 'none'}
                />
                <img 
                  src="/header.jpg" 
                  alt="Pahad Dialogue" 
                  style={{ 
                    height: '32px',
                    width: 'auto',
                    objectFit: 'contain',
                    maxWidth: '200px'
                  }}
                  onError={(e) => e.target.outerHTML = '<span style="color:#dc2626;font-weight:bold;font-size:16px">पहाड़ डायलॉग</span>'}
                />
              </div>

              {/* Search */}
              <button style={{ 
                fontSize: '20px', 
                border: 'none', 
                background: 'none', 
                cursor: 'pointer',
                padding: '4px'
              }}>
                🔍
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #e5e7eb' }}>
                {navigationItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    style={{ 
                      display: 'block',
                      color: '#374151',
                      fontWeight: 600,
                      fontSize: '15px',
                      textDecoration: 'none',
                      padding: '10px 0',
                      borderBottom: idx < navigationItems.length - 1 ? '1px solid #f3f4f6' : 'none'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Breaking News */}
        <div style={{ background: '#dc2626', color: 'white' }}>
          <div style={{ padding: '10px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '10px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                ब्रेकिंग
              </span>
              <p className="animate-pulse" style={{ fontSize: '12px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                चुण्णानी में किया राज्य के दौरा दिवाला सिरोऽजनाओं का किया निरिदान
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ padding: '16px' }}>
          {/* Main Article */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <img 
                src={mainArticle.image} 
                alt="" 
                style={{ width: '100%', height: '240px', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', color: 'white' }}>
                <h1 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '6px', lineHeight: '1.3' }}>
                  {mainArticle.title}
                </h1>
                <p style={{ fontSize: '11px', color: '#d1d5db' }}>{mainArticle.date}</p>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            {sideArticles.map((article, idx) => (
              <div key={idx} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <img 
                  src={article.image} 
                  alt="" 
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)' }}></div>
                <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  <span style={{ background: '#eab308', color: 'black', fontSize: '10px', fontWeight: 'bold', padding: '3px 8px', borderRadius: '4px' }}>
                    {article.category}
                  </span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px', color: 'white' }}>
                  <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '3px', lineHeight: '1.3' }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: '10px', color: '#d1d5db' }}>{article.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section Tabs */}
          <div style={{ marginBottom: '16px', borderBottom: '2px solid #dc2626', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ display: 'flex', gap: '20px', minWidth: 'max-content' }}>
              <button style={{ 
                paddingBottom: '8px', 
                fontWeight: 'bold', 
                color: '#dc2626', 
                borderBottom: '3px solid #dc2626', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                whiteSpace: 'nowrap',
                fontSize: '14px'
              }}>
                उत्तरखंड
              </button>
              <button style={{ 
                paddingBottom: '8px', 
                fontWeight: 600, 
                color: '#6b7280', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                whiteSpace: 'nowrap',
                fontSize: '14px'
              }}>
                राजनीति
              </button>
              <button style={{ 
                paddingBottom: '8px', 
                fontWeight: 600, 
                color: '#6b7280', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                whiteSpace: 'nowrap',
                fontSize: '14px'
              }}>
                पर्यावरण
              </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            {articles.map((article, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
                <img 
                  src={article.image} 
                  alt="" 
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }} 
                />
                <div style={{ padding: '12px' }}>
                  <h3 className="line-clamp-3" style={{ 
                    fontWeight: 'bold', 
                    color: '#1f2937', 
                    marginBottom: '6px', 
                    fontSize: '13px', 
                    lineHeight: '1.4' 
                  }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: '11px', color: '#6b7280' }}>{article.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
              श्रेणियाँ
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  style={{ 
                    background: 'white',
                    border: '2px solid #d1d5db',
                    borderRadius: '6px',
                    padding: '12px 8px',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: '#374151',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ background: '#111827', color: 'white', padding: '24px 16px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', color: '#fbbf24' }}>
              पहाड डायलाॅग
            </h3>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '16px' }}>
              उत्तराखंड की आवाज़, पहाड़ से पहाड़ी तक
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14px' }}>लिंक</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                <a href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '12px' }}>होम</a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="/about" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '12px' }}>हमारे बारे में</a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <a href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '12px' }}>संपर्क</a>
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14px' }}>संपर्क</h4>
            <p style={{ fontSize: '12px', color: '#9ca3af' }}>
              ईमेल: info@pahaddialogue.com<br/>
              फोन: +91 1234567890
            </p>
          </div>

          <div style={{ borderTop: '1px solid #374151', paddingTop: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: '#9ca3af' }}>
              © 2024 Pahad-Dialogue. All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
      }
