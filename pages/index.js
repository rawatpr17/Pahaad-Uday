// हटाओ:
// import { Menu, X, Search } from 'lucide-react';

// लगाओ:
import { MenuIcon as Menu, XIcon as X, SearchIcon as Search } from "../components/Icons";

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
      category: 'UTTARAKHAND',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'आगामी चुण्णा को लेकर राजनीतिक दल मैथारियों में पूरे',
      date: 'April 18, 2024',
      category: 'POLITICS',
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
    'पत्नोति',
    'पर्यावरण',
    'पर्यटन',
    'बोली',
    'संपात',
    'रामनैती',
    'आरोग्य'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header with Logo and Header Image */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button - LEFT side */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-2xl font-bold" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Logo and Header - CENTER */}
            <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
              {/* Logo */}
              <img 
                src="/logo.png" 
                alt="Pahad Dialogue Logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              {/* Header Image - Visible on both mobile and desktop */}
              <div>
                <img 
                  src="/header.jpg" 
                  alt="Pahad Dialogue Header" 
                  className="h-16 md:h-20 object-contain"
                />
              </div>
            </div>

            {/* Search Button - RIGHT side (desktop only) */}
            <div className="hidden md:block">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-xl">
                🔍
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center justify-between py-3">
            <div className="flex gap-6">
              {navigationItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-semibold transition-colors text-base"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigationItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-red-600 font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Breaking News Bar */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <span className="font-bold uppercase whitespace-nowrap text-sm">BREAKING NEWS</span>
            <div className="flex items-center gap-2 overflow-hidden">
              <p className="text-sm animate-pulse">चुण्णानी में किया राज्य के दौरा दिवाला सिरोऽजनाओं का किया निरिदान</p>
              <span className="flex-shrink-0 text-xl">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Article */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={mainArticle.image} 
                alt={mainArticle.title} 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-3 leading-tight group-hover:text-yellow-400 transition-colors">
                  {mainArticle.title}
                </h1>
                <p className="text-sm text-gray-200">{mainArticle.date}</p>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map((article, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-md uppercase">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-base font-bold mb-1 leading-snug group-hover:text-yellow-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-200">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Tabs */}
        <div className="mt-12 border-b-2 border-red-600">
          <div className="flex gap-8 overflow-x-auto">
            <button className="pb-3 font-bold text-red-600 border-b-4 border-red-600 whitespace-nowrap">
              उत्तरखंड
            </button>
            <button className="pb-3 font-semibold text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors">
              खबरएंथनीति
            </button>
            <button className="pb-3 font-semibold text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors">
              परपावरण
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-800 mb-2 hover:text-red-600 transition-colors line-clamp-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            श्रेणियाँ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="bg-white border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold text-gray-700 hover:border-red-600 hover:text-red-600 hover:shadow-lg transition-all duration-300"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">पहाड डायलाग</h3>
              <p className="text-gray-400 text-sm">
                उत्तराखंड की आवाज़, पहाड़ से पहाड़ी तक
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">महत्वपूर्ण लिंक</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-yellow-400 transition-colors">होम</a></li>
                <li><a href="/about" className="hover:text-yellow-400 transition-colors">हमारे बारे में</a></li>
                <li><a href="/contact" className="hover:text-yellow-400 transition-colors">संपर्क करें</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">संपर्क</h4>
              <p className="text-sm text-gray-400">
                ईमेल: info@pahaddialogue.com<br/>
                फोन: +91 1234567890
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2024 Pahad-Dialogue. All rights reserved</p>
            <p className="text-sm mt-2 text-gray-500">📱 Dialogue All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
