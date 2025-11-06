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
    category: 'राजनीति',
    image: '/api/placeholder/800/500'
  };

  const sideArticles = [
    {
      title: 'सृजन में परवल को वनस्पम टैंग लिए नई योजनाओं की व्याणा',
      date: 'April 18, 2024',
      category: 'उत्तराखंड',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'आगामी चुण्णा को लेकर राजनीतिक दल मैथारियों में पूरे',
      date: 'April 18, 2024',
      category: 'राजनीति',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'सीमा पर द्वांडा दलो की तैयारियों का जायचा',
      date: 'April 14, 2024',
      category: 'रक्षा',
      image: '/api/placeholder/400/300'
    }
  ];

  const articles = [
    {
      title: 'उत्तराखंड को विशेष राज्य का दर्जा रेड्डे की नांग पुन सरकार के लगदो उठी',
      date: 'April 23, 2024',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'राज्या से नैनी पझपुण पर रेक ठका कदम की बोपणा',
      date: 'April 18, 2024',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'उत्तराखंड ने नदी प्रदूषण पर रोकथाम के लिए मंडन',
      date: 'April 17, 2024',
      image: '/api/placeholder/300/200'
    }
  ];

  const categories = [
    'उत्तराखंड',
    'राजनीति',
    'पर्यावरण',
    'पर्यटन',
    'बोली',
    'संस्कृति',
    'खेल',
    'स्वास्थ्य'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header - LOGO SIZE FIX */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg text-xl" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Logo and Header - FIXED SIZE */}
            <div className="flex items-center gap-3 flex-1 justify-center md:justify-start">
              <img 
                src="/logo.png" 
                alt="Pahad Dialogue Logo" 
                className="h-12 w-12 object-contain"
                style={{ maxHeight: '48px', maxWidth: '48px' }}
              />
              <img 
                src="/header.jpg" 
                alt="Pahad Dialogue" 
                className="h-12 object-contain"
                style={{ maxHeight: '48px', width: 'auto' }}
              />
            </div>

            {/* Search */}
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full text-lg">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center gap-6 py-3">
            {navigationItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-semibold text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-3 space-y-1">
              {navigationItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-red-600 font-semibold text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Breaking News */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xs uppercase whitespace-nowrap">ब्रेकिंग न्यूज</span>
            <p className="text-sm truncate">चुण्णानी में किया राज्य के दौरा दिवाला सिरोऽजनाओं का किया निरिदान</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Article */}
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <img 
                src={mainArticle.image} 
                alt={mainArticle.title} 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {mainArticle.title}
                </h1>
                <p className="text-xs text-gray-300">{mainArticle.date}</p>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-4">
            {sideArticles.map((article, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-0 p-3 text-white">
                  <h3 className="text-sm font-bold group-hover:text-yellow-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Tabs */}
        <div className="mt-8 border-b-2 border-red-600">
          <div className="flex gap-6">
            <button className="pb-2 font-bold text-red-600 border-b-3 border-red-600">
              उत्तरखंड
            </button>
            <button className="pb-2 font-semibold text-gray-600 hover:text-red-600">
              राजनीति
            </button>
            <button className="pb-2 font-semibold text-gray-600 hover:text-red-600">
              पर्यावरण
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-sm mb-2 hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500">{article.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">श्रेणियाँ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="bg-white border-2 border-gray-300 rounded-lg py-3 px-3 font-semibold text-sm text-gray-700 hover:border-red-600 hover:text-red-600 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-yellow-400">पहाड डायलाग</h3>
              <p className="text-gray-400 text-sm">उत्तराखंड की आवाज़, पहाड़ से पहाड़ी तक</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">लिंक</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-yellow-400">होम</a></li>
                <li><a href="/about" className="hover:text-yellow-400">हमारे बारे में</a></li>
                <li><a href="/contact" className="hover:text-yellow-400">संपर्क</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">संपर्क</h4>
              <p className="text-sm text-gray-400">
                ईमेल: info@pahaddialogue.com<br/>
                फोन: +91 1234567890
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
            <p>© 2024 Pahad-Dialogue. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
      }
