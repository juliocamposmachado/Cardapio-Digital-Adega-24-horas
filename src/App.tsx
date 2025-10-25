import { useState } from 'react';
import { Wine, Droplet, Zap, Droplets, Martini, GlassWater, Beer, Flame, Menu, MapPin, MessageCircle, Clock } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

function App() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const categories: Category[] = [
    {
      title: 'Vinhos',
      icon: <Wine className="w-5 h-5" />,
      items: [
        { name: 'Frisante Italiano Tinto Lambrusco Villa Giada Amabile 750ml', price: 'R$ 80,00' },
        { name: 'Santa Carolina Cabernet Sauvignon Merlot Vinho Tinto Chileno 750ml', price: 'R$ 67,50' },
        { name: 'Vinho Chileno Branco Reservado Chardonnay Santa Carolina 750ml', price: 'R$ 67,50' },
        { name: 'Vinho Chileno Tinto Reservado Malbec Santa Carolina 750ml', price: 'R$ 76,50' },
        { name: 'Vinho Pata Negra Oro Tempranillo 750ml', price: 'R$ 84,90' },
        { name: 'Vinho Reservado Cabernet Sauvignon Santa Carolina 750ml', price: 'R$ 67,50' },
        { name: 'Vinho Reservado Shiraz Santa Carolina 750ml', price: 'R$ 76,50' },
        { name: 'Vinho Sul-Africano Rosé Nederburg 750ml', price: 'R$ 123,50' },
        { name: 'Vinho Tinto Chileno Reservado Merlot Santa Carolina 750ml', price: 'R$ 76,50' },
        { name: 'Vinho Tinto Suave Olaria 750ml', price: 'R$ 74,00' },
        { name: 'Vinho Tinto Suave Reservado Santa Carolina 750ml', price: 'R$ 67,50' },
        { name: 'Vinho Sul-Africano Tinto 1791 Pinotage Nederburg 750ml', price: 'R$ 115,50' },
        { name: 'Vinho Chileno Branco Reservado Sauvignon Blanc Santa Carolina 750ml', price: 'R$ 67,50' },
      ]
    },
    {
      title: 'Refrigerantes',
      icon: <Droplet className="w-5 h-5" />,
      items: [
        { name: 'Coca-Cola Original 200ml', price: 'R$ 6,00' },
        { name: 'Drink Pronto Jack Daniel\'s com Coca-Cola 350ml', price: 'R$ 21,00' },
        { name: 'Fanta Laranja 2L', price: 'R$ 18,50' },
        { name: 'Fanta Uva 2L', price: 'R$ 18,50' },
        { name: 'Coca-Cola PET 2L', price: 'R$ 23,00' },
        { name: 'Guaraná Antarctica 2L', price: 'R$ 18,50' },
      ]
    },
    {
      title: 'Energéticos',
      icon: <Zap className="w-5 h-5" />,
      items: [
        { name: 'Baly 473ml', price: 'R$ 11,00' },
        { name: 'Furioso 250ml', price: 'R$ 4,00' },
        { name: 'Red Bull 250ml', price: 'R$ 17,00' },
        { name: 'Baly Tradicional 2L', price: 'R$ 25,00' },
        { name: 'Baly Melancia 2L', price: 'R$ 21,00' },
        { name: 'Drink Baly Frutas Tropicais', price: 'R$ 10,00' },
        { name: 'Baly 473ml Melancia', price: 'R$ 10,00' },
      ]
    },
    {
      title: 'Águas',
      icon: <Droplets className="w-5 h-5" />,
      items: [
        { name: 'Crystal 500ml com gás', price: 'R$ 5,00' },
        { name: 'São Lourenço 1,26L', price: 'R$ 10,90' },
        { name: 'Voss 375ml', price: 'R$ 48,00' },
        { name: 'Água de Coco Quadrado 200ml', price: 'R$ 5,00' },
        { name: 'Kero Coco 200ml', price: 'R$ 5,00' },
      ]
    },
    {
      title: 'Destilados',
      icon: <Martini className="w-5 h-5" />,
      items: [
        { name: 'Conhaque Dreher 900ml', price: 'R$ 42,50' },
        { name: 'Tequila Tequiloka Silver 1L', price: 'R$ 41,50' },
      ]
    },
    {
      title: 'Sucos',
      icon: <GlassWater className="w-5 h-5" />,
      items: [
        { name: 'Suco de Uva Integral Flora 300ml', price: 'R$ 15,00' },
      ]
    },
    {
      title: 'Cachaça',
      icon: <Flame className="w-5 h-5" />,
      items: [
        { name: 'Velho Barreiro 910ml', price: 'R$ 28,00' },
      ]
    },
    {
      title: 'Gin',
      icon: <Martini className="w-5 h-5" />,
      items: [
        { name: 'Gin Apogee 1L', price: 'R$ 87,50' },
        { name: 'Gin Apogee Negroni 1L', price: 'R$ 87,50' },
        { name: 'Gin Eternity 900ml', price: 'R$ 59,50' },
        { name: 'Gin Rocks 1L', price: 'R$ 100,50' },
        { name: 'Gin Seagers 980ml', price: 'R$ 93,50' },
        { name: 'Combo Gin Eternity', price: 'R$ 72,00' },
        { name: 'Gin Intencion 900ml', price: 'R$ 27,00' },
      ]
    },
    {
      title: 'Cervejas',
      icon: <Beer className="w-5 h-5" />,
      items: [
        { name: 'Becks 350ml', price: 'R$ 13,50' },
        { name: 'Brahma Duplo Malte 269ml', price: 'R$ 5,50' },
        { name: 'Budweiser 269ml', price: 'R$ 8,00' },
        { name: 'Estrella Galicia 269ml', price: 'R$ 6,50' },
        { name: 'Heineken 269ml', price: 'R$ 9,00' },
        { name: 'Império 269ml', price: 'R$ 5,00' },
        { name: 'Red Stripe 330ml', price: 'R$ 14,50' },
        { name: 'Amstel 269ml', price: 'R$ 5,50' },
        { name: 'Becks Long Neck 330ml', price: 'R$ 13,50' },
        { name: 'Skol 269ml', price: 'R$ 5,30' },
        { name: 'Spaten 350ml', price: 'R$ 9,00' },
        { name: 'Kit Paulaner Weissbier e Dunkel 500ml', price: 'R$ 148,50' },
        { name: 'Antarctica 350ml', price: 'R$ 6,50' },
        { name: 'Stella Artois 269ml', price: 'R$ 7,00' },
        { name: 'Spaten 269ml', price: 'R$ 7,50' },
      ]
    },
    {
      title: 'Vodkas',
      icon: <Martini className="w-5 h-5" />,
      items: [
        { name: 'Orloff 1,75L', price: 'R$ 114,00' },
        { name: 'Smirnoff 998ml', price: 'R$ 82,50' },
        { name: 'Askov 900ml', price: 'R$ 24,90' },
        { name: 'Eternity 950ml', price: 'R$ 27,00' },
      ]
    },
    {
      title: 'Whiskies',
      icon: <Martini className="w-5 h-5" />,
      items: [
        { name: 'Passport Honey 670ml', price: 'R$ 127,50' },
        { name: 'Bell\'s 700ml', price: 'R$ 104,00' },
        { name: 'Black & White 700ml', price: 'R$ 137,90' },
        { name: 'Passport Scotch 1L', price: 'R$ 116,50' },
        { name: 'Ballantine\'s Finest 750ml', price: 'R$ 164,50' },
        { name: 'White Horse 1L', price: 'R$ 146,00' },
        { name: 'White Horse 500ml', price: 'R$ 82,50' },
        { name: 'Natu Nobilis 1L', price: 'R$ 127,50' },
        { name: 'Old Eight 900ml', price: 'R$ 58,90' },
      ]
    },
  ];

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-b from-neutral-900 to-black border-b border-amber-500/20 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Menu className="w-8 h-8 text-amber-500" />
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              <span className="text-amber-500">Adega</span> Rádio Tatuapé<br/>
              <span className="text-amber-500">FM Express</span>
            </h1>
          </div>
          <p className="text-center text-neutral-400 text-sm">Cardápio Digital</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 pb-32">
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-950/50 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(index)}
                className="w-full px-4 md:px-6 py-4 flex items-center justify-between bg-gradient-to-r from-neutral-900 to-neutral-950 hover:from-neutral-800 hover:to-neutral-900 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="text-amber-500">{category.icon}</div>
                  <h2 className="text-lg md:text-xl font-semibold text-white">
                    {category.title}
                  </h2>
                  <span className="text-xs text-neutral-500 hidden md:inline">
                    ({category.items.length} {category.items.length === 1 ? 'item' : 'itens'})
                  </span>
                </div>
                <div
                  className={`transform transition-transform duration-300 ${
                    openCategory === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>

              {/* Category Items */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openCategory === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 md:px-6 py-4 space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-start gap-4 py-3 border-b border-neutral-800 last:border-0 hover:bg-neutral-900/30 px-2 rounded transition-colors"
                    >
                      <span className="text-neutral-200 text-sm md:text-base flex-1 leading-relaxed">
                        {item.name}
                      </span>
                      <span className="text-amber-500 font-bold text-base md:text-lg whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-neutral-950 to-transparent border-t border-amber-500/20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-500 text-sm md:text-base font-semibold">
              <MapPin className="w-4 h-4" />
              <span>Entregas 24h – Rádio Tatuapé FM Express</span>
            </div>
            <p className="text-neutral-400 text-xs md:text-sm">
              iFood & 99Food
            </p>
            <div className="flex items-center justify-center gap-2 text-neutral-300 text-xs md:text-sm pt-2">
              <MessageCircle className="w-4 h-4 text-amber-500" />
              <span>Atendimento via WhatsApp para pedidos personalizados</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-neutral-500 text-xs pt-1">
              <Clock className="w-3 h-3" />
              <span>Aberto 24 horas</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
