export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Каталог украшений",
      description: "Эксклюзивные кольца, серьги, браслеты и подвески из золота, серебра и драгоценных камней",
      icon: "💎",
      features: ["Золото 585/750", "Серебро 925", "Бриллианты", "Авторский дизайн"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Индивидуальный дизайн",
      description: "Создание украшений по вашим эскизам с уникальными вставками",
      icon: "✨",
      features: ["3D-моделирование", "Гравировка", "Уникальные камни", "Подарочная упаковка"],
      gradient: "from-purple-500 to-fuchsia-500"
    },
    {
      id: 3,
      title: "Ремонт и реставрация",
      description: "Восстановление украшений любой сложности опытными мастерами-ювелирами",
      icon: "🛠️",
      features: ["Чистка", "Полировка", "Замена камней", "Укрепление креплений"],
      gradient: "from-amber-500 to-red-400"
    },
    {
      id: 4,
      title: "Ювелирная экспертиза",
      description: "Профессиональная оценка стоимости и подтверждение подлинности изделий",
      icon: "📜",
      features: ["Оценка камней", "Проверка металла", "Документация", "Сертификация"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 5,
      title: "Гравировка",
      description: "Персонализация украшений надписью или символом, который важен именно вам",
      icon: "🖋️",
      features: ["Лазерная гравировка", "Ручная гравировка", "Логотипы", "Дата или инициалы"],
      gradient: "from-rose-500 to-pink-500"
    },
    {
      id: 6,
      title: "Подарочные сертификаты",
      description: "Идеальный подарок для любого повода — выбор за получателем",
      icon: "🎁",
      features: ["Разные номиналы", "Красивая упаковка", "Персональная открытка", "Доступно онлайн"],
      gradient: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 py-16">
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Наши услуги
            </h1>
            <p className="text-xl text-pink-100">
              Элегантные украшения и премиальный сервис для каждого клиента
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16" aria-label="Наши услуги">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {services.map((service) => (
              <article
                key={service.id}
                role="listitem"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group focus-within:ring-2 focus-within:ring-pink-500 focus-within:outline-none"
                tabIndex={0}
              >
                {/* Service Header */}
                <div className={`h-32 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`} aria-hidden="true">
                  <div className="text-6xl opacity-90 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Включает:
                    </h3>
                    <ul className="space-y-2" role="list">
                      {service.features.map((feature, index) => (
                        <li key={index} role="listitem" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex-shrink-0" aria-hidden="true"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className="w-full px-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 min-h-[44px]"
                    aria-label={`Узнать больше об услуге: ${service.title}`}
                  >
                    Узнать больше
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-4 pb-16" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 id="why-us-heading" className="text-3xl font-bold text-white mb-4">
                Почему выбирают нас?
              </h2>
              <p className="text-pink-100 text-lg max-w-2xl mx-auto">
                Роскошь, которая подчеркнёт вашу индивидуальность
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8" role="list">
              <div className="text-center" role="listitem">
                <div className="text-4xl mb-3" aria-hidden="true">💍</div>
                <h3 className="text-xl font-bold text-white mb-2">Уникальный стиль</h3>
                <p className="text-pink-100">Авторский дизайн и редкие коллекции</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="text-4xl mb-3" aria-hidden="true">🪪</div>
                <h3 className="text-xl font-bold text-white mb-2">Подлинность</h3>
                <p className="text-pink-100">Сертификаты на все драгоценные камни</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="text-4xl mb-3" aria-hidden="true">🤝</div>
                <h3 className="text-xl font-bold text-white mb-2">Персональный подход</h3>
                <p className="text-pink-100">Мы создаём украшения с душой</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
