export default function ContactsPage() {
  const contactInfo = [
    
    {
      icon: "📞",
      title: "Телефоны",
      details: ["+7 (700) 123-45-67", "+7 (700) 123-45-68"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@jewelstyle.ru", "sales@jewelstyle.ru"],
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: "🕒",
      title: "Режим работы",
      details: ["Пн-Пт: 10:00 - 20:00", "Сб-Вс: 11:00 - 18:00"],
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-16">
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Контакты
            </h1>
            <p className="text-xl text-pink-100">
              Свяжитесь с нами для покупки или консультации по украшениям
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Cards */}
            <section className="space-y-6 flex flex-col" aria-label="Контактная информация">
              {contactInfo.map((contact, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-3xl flex-shrink-0`} aria-hidden="true">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {contact.title}
                      </h2>
                      {contact.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 dark:text-gray-400 mb-1">
                          {contact.title === "Телефоны" && detail.match(/\+?\d/) ? (
                            <a href={`tel:${detail.replace(/\s/g, '')}`} className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                              {detail}
                            </a>
                          ) : contact.title === "Email" && detail.includes("@") ? (
                            <a href={`mailto:${detail}`} className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {/* Contact Form */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 flex flex-col" aria-labelledby="contact-form-heading">
              <h2 id="contact-form-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Напишите нам
              </h2>
              <form className="space-y-6 flex flex-col flex-1" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Ваше имя <span className="text-red-500" aria-label="обязательное поле">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all min-h-[44px]"
                    placeholder="Мария Иванова"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Телефон <span className="text-red-500" aria-label="обязательное поле">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    aria-required="true"
                    pattern="[+]?[0-9\s\-\(\)]+" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all min-h-[44px]"
                    placeholder="+7 (700) 123-45-67"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email <span className="text-red-500" aria-label="обязательное поле">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all min-h-[44px]"
                    placeholder="example@mail.ru"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Сообщение <span className="text-red-500" aria-label="обязательное поле">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all resize-none"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 min-h-[44px]"
                >
                  Отправить сообщение
                </button>
              </form>
            </section>
          </div>

          {/* Map Section */}
          <section className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700" aria-labelledby="map-heading">
            <h2 id="map-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Как нас найти
            </h2>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-96 flex items-center justify-center" role="img" aria-label="Карта расположения магазина">
              <div className="text-center">
                <div className="text-6xl mb-4" aria-hidden="true">💎</div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Карта будет загружена здесь
                </p>
                <address className="text-gray-500 dark:text-gray-500 text-sm mt-2 not-italic">
                  г. Петропавловск, ул. Ювелирная, д. 10
                </address>
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 shadow-2xl" aria-labelledby="social-heading">
            <h2 id="social-heading" className="text-3xl font-bold text-white mb-6 text-center">
              Мы в социальных сетях
            </h2>
            <nav className="flex justify-center gap-6" aria-label="Социальные сети">
              {[
                { icon: "📘", name: "VKontakte", color: "from-blue-500 to-blue-700", href: "https://vk.com/jewelstyle" },
                { icon: "📷", name: "Instagram", color: "from-pink-500 to-purple-600", href: "https://instagram.com/jewelstyle" },
                { icon: "💬", name: "Telegram", color: "from-cyan-500 to-blue-600", href: "https://t.me/jewelstyle" },
                { icon: "📱", name: "WhatsApp", color: "from-green-500 to-emerald-600", href: "https://wa.me/77001234567" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-4xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 min-h-[44px] min-w-[44px]`}
                  aria-label={`Страница в ${social.name}`}
                >
                  <span aria-hidden="true">{social.icon}</span>
                </a>
              ))}
            </nav>
          </section>
        </div>
      </div>
    </main>
  );
}
