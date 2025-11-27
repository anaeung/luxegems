export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-500 to-amber-400 py-20">
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              О бренде CrystalLux
            </h1>
            <p className="text-xl text-rose-100 leading-relaxed">
              Создаём украшения, которые подчеркивают уникальность каждого
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
        {/* История компании */}
        <section className="mb-16" aria-labelledby="history-heading">
          <div>
            <h2 id="history-heading" className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full" aria-hidden="true"></span>
              Наша история
            </h2>
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                CrystalLux появилась в 2010 году как мастерская уникальных ювелирных украшений,
                вдохновлённых красотой природы и современной эстетикой.
                С первых дней мы стремились создавать изделия, которые становятся символами важных моментов.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Сегодня наш ассортимент включает кольца, серьги, браслеты и подвески,
                выполненные вручную из драгоценных металлов и натуральных камней —
                чтобы каждая девушка могла сиять по-особенному ✨
              </p>
            </article>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="mb-16" aria-labelledby="values-heading">
          <div>
            <h2 id="values-heading" className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Наши ценности
            </h2>
            <div className="grid md:grid-cols-3 gap-8" role="list">
              {[
                {
                  title: "Искусство",
                  description: "Каждое украшение — авторская работа наших мастеров",
                  icon: "💎",
                  gradient: "from-rose-500 to-pink-600"
                },
                {
                  title: "Честность",
                  description: "Только сертифицированные металлы и камни",
                  icon: "🪙",
                  gradient: "from-amber-400 to-orange-500"
                },
                {
                  title: "Уникальность",
                  description: "Украшения создаются специально для вас",
                  icon: "✨",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((value, index) => (
                <article
                  key={index}
                  role="listitem"
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-pink-500 focus-within:outline-none"
                  tabIndex={0}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center text-3xl mb-4`} aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Статистика */}
        <section className="mb-16" aria-labelledby="stats-heading">
          <div>
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-12 shadow-2xl">
              <h2 id="stats-heading" className="text-3xl font-bold mb-12 text-center text-white">
                CrystalLux в цифрах
              </h2>
              <div className="grid md:grid-cols-4 gap-8" role="list">
                {[
                  { number: "14+", label: "Лет создаём украшения" },
                  { number: "10 000+", label: "Счастливых клиентов" },
                  { number: "5000+", label: "Эксклюзивных изделий" },
                  { number: "100%", label: "Ручная работа" }
                ].map((stat, index) => (
                  <div key={index} role="listitem" className="text-center">
                    <div className="text-5xl font-bold text-white mb-2" aria-label={stat.number}>
                      {stat.number}
                    </div>
                    <div className="text-rose-100 text-lg">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section aria-labelledby="team-heading">
          <div>
            <h2 id="team-heading" className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Наша команда
            </h2>
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                В CrystalLux работают мастера-ювелиры и дизайнеры,
                которые вкладывают душу в каждое изделие 💍  
                Мы создаём украшения, которые становятся семейными реликвиями.
              </p>
            </article>
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}
