export default function JewelryPage() {
  const products = [
    {
      id: 1,
      brand: "Swarovski",
      model: "Кольцо Brilliant",
      price: "24 500 ₽",
      year: 2024,
      mileage: "Серебро 925",
      engine: "Фианиты",
      transmission: "Размеры: 15–19",
      image: "💍",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      brand: "Pandora",
      model: "Браслет Moments",
      price: "18 900 ₽",
      year: 2023,
      mileage: "Серебро 925",
      engine: "Стекло мурано",
      transmission: "Длина 16–21 см",
      image: "🪬",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 3,
      brand: "Sunlight",
      model: "Серьги Shine",
      price: "12 300 ₽",
      year: 2024,
      mileage: "Серебро 925",
      engine: "Фианиты",
      transmission: "Застёжка: английская",
      image: "✨",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      brand: "Tiffany & Co.",
      model: "Подвеска Heart",
      price: "65 000 ₽",
      year: 2023,
      mileage: "Серебро",
      engine: "Топаз",
      transmission: "Цепочка 45 см",
      image: "💙",
      color: "from-teal-400 to-blue-600"
    },
    {
      id: 5,
      brand: "Sokolov",
      model: "Колье Pearl",
      price: "35 600 ₽",
      year: 2024,
      mileage: "Серебро",
      engine: "Жемчуг",
      transmission: "Длина 42 см",
      image: "🥰",
      color: "from-amber-300 to-yellow-500"
    },
    {
      id: 6,
      brand: "Chanel",
      model: "Брошь Camelia",
      price: "78 000 ₽",
      year: 2023,
      mileage: "Ювелирный сплав",
      engine: "Эмаль, кристаллы",
      transmission: "Эксклюзивная серия",
      image: "🌺",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-red-400 to-purple-600 py-16">
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Каталог украшений
            </h1>
            <p className="text-xl text-pink-100">
              Найдите идеальное украшение для себя или близких ✨
            </p>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8" aria-label="Фильтры поиска">
        <div className="max-w-7xl mx-auto">
          <form className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <label htmlFor="brand-filter" className="sr-only">Бренд</label>
              <select id="brand-filter" className="px-4 py-3 rounded-lg border">
                <option value="">Все бренды</option>
                <option value="tiffany">Tiffany & Co.</option>
                <option value="swarovski">Swarovski</option>
                <option value="chanel">Chanel</option>
                <option value="pandora">Pandora</option>
                <option value="sokolov">Sokolov</option>
              </select>

              <label htmlFor="type-filter" className="sr-only">Тип</label>
              <select id="type-filter" className="px-4 py-3 rounded-lg border">
                <option value="">Все категории</option>
                <option value="ring">Кольца</option>
                <option value="earrings">Серьги</option>
                <option value="bracelet">Браслеты</option>
                <option value="necklace">Колье</option>
                <option value="pendant">Подвески</option>
              </select>

              <label htmlFor="price-filter" className="sr-only">Цена</label>
              <select id="price-filter" className="px-4 py-3 rounded-lg border">
                <option value="">Цена</option>
                <option value="0-20000">До 20 тыс</option>
                <option value="20000-50000">20–50 тыс</option>
                <option value="50000-100000">50–100 тыс</option>
                <option value="100000">От 100 тыс</option>
              </select>

              <button type="submit" className="px-6 py-3 bg-pink-600 text-white rounded-lg">
                Найти
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Cards grid */}
      <section className="container mx-auto px-4 pb-16" aria-label="Каталог украшений">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(item => (
              <article key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center text-8xl`}>
                  {item.image}
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{item.brand} {item.model}</h2>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                    {item.price}
                  </div>

                  <dl className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-400 mt-4 mb-6">
                    <span>Материал: {item.mileage}</span>
                    <span>Детали: {item.engine}</span>
                    <span>{item.transmission}</span>
                    <span>В наличии</span>
                  </dl>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-3 bg-pink-600 text-white rounded-lg">
                      Подробнее
                    </button>
                    <button className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-lg">
                      💬
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
