// index.js
import Image from "next/image";

const newsData = [
  {
    title: "रुद्रप्रयाग में मौसम ने ली करवट, बर्फबारी से बढ़ी ठंड",
    category: "Weather",
    image: "https://images.unsplash.com/photo-1617196037759-7f5e5b1baf3b?auto=format&fit=crop&w=800&q=60",
    date: "30 Oct 2025",
    desc: "उत्तराखंड के ऊपरी इलाकों में बर्फबारी शुरू, लोगों ने गर्म कपड़े निकाल लिए।",
  },
  {
    title: "देहरादून में खेल महोत्सव का शुभारंभ",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1589487391663-36c6c0f3b27b?auto=format&fit=crop&w=800&q=60",
    date: "29 Oct 2025",
    desc: "राज्य के युवाओं में खेल को बढ़ावा देने के लिए मुख्यमंत्री ने किया उद्घाटन।",
  },
  {
    title: "उत्तराखंड विधानसभा में नए बिल पर चर्चा",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1590608897129-79da98d159e0?auto=format&fit=crop&w=800&q=60",
    date: "28 Oct 2025",
    desc: "सत्र में सरकार ने रोजगार से जुड़ा अहम बिल पेश किया।",
  },
];

export default function Home() {
  return (
    <div id="home" className="space-y-8">
      <section className="text-center">
        <h2 className="text-3xl font-bold text-green-700">उत्तराखंड की ताज़ा खबरें</h2>
        <p className="text-gray-600 mt-2">जानिए पहाड़ की हर छोटी-बड़ी खबर सिर्फ Pahaad Dialogue पर</p>
      </section>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <div key={index} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
            <Image
              src={news.image}
              alt={news.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-xs font-semibold uppercase text-green-600">{news.category}</span>
              <h3 className="text-lg font-bold mt-2">{news.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{news.desc}</p>
              <p className="text-xs text-gray-400 mt-2">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
                      }
