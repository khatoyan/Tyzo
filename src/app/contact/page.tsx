"use client"
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white pt-24 pb-16 sm:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.50),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-primary-600/10 ring-1 ring-primary-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Контакты</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Свяжитесь с нами
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Хотите обсудить бесплатное создание сайта для вашего бизнеса? Наши специалисты готовы помочь с выбором оптимального тарифа подписки.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Contact info */}
            <motion.div 
              className="lg:pr-8 lg:pt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600">Наши контакты</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Всегда на связи
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Мы ценим каждого клиента и стремимся обеспечить быструю и качественную коммуникацию. Выберите удобный для вас способ связи.
                </p>
                
                <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
                  <motion.div 
                    className="flex gap-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <dt className="flex-none">
                      <span className="sr-only">Телефон</span>
                      <PhoneIcon className="h-7 w-6 text-primary-600" aria-hidden="true" />
                    </dt>
                    <dd><a href="tel:+71234567890" className="hover:text-primary-600">+7 (123) 456-78-90</a></dd>
                  </motion.div>
                  <motion.div 
                    className="flex gap-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon className="h-7 w-6 text-primary-600" aria-hidden="true" />
                    </dt>
                    <dd><a href="mailto:info@tyzo.ru" className="hover:text-primary-600">info@tyzo.ru</a></dd>
                  </motion.div>
                  <motion.div 
                    className="flex gap-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <dt className="flex-none">
                      <span className="sr-only">Адрес</span>
                      <MapPinIcon className="h-7 w-6 text-primary-600" aria-hidden="true" />
                    </dt>
                    <dd>Москва, ул. Примерная, д. 123<br />Санкт-Петербург, ул. Образцовая, д. 456</dd>
                  </motion.div>
                </dl>

                <motion.div 
                  className="mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">Мы в социальных сетях</h3>
                  <ul role="list" className="mt-4 flex gap-x-6">
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <a href="#" className="text-gray-400 hover:text-primary-600">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <a href="#" className="text-gray-400 hover:text-primary-600">
                        <span className="sr-only">VK</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.615h-1.616c-.607 0-.793-.583-1.879-1.67-1.046-.981-1.479-.854-1.692-.168v1.298c0 .352-.283.539-.755.539h-.729c-1.146 0-2.13-.761-2.914-1.617-1.19-1.309-1.513-2.303-2.254-3.761-.263-.506.105-.756.516-.756h1.007c.406 0 .537.068.696.377.308.63.688 1.536 1.097 1.994.868.997 1.338.654 1.627 0 .296-.677.29-1.063.29-1.364 0-1.213.151-1.72-1.072-1.923-.267-.045.263-.362.725-.523.513-.178 1.244-.199 2.015-.199.58 0 .745.057.958.156.434.201.434.704.434 1.364 0 .352-.058 1.775.4 2.088.459.313.795-.422 1.415-1.616.43-.851.737-1.701.737-1.701.142-.307.308-.565.695-.565h1.006c.593 0 .717.332.593.726-.298 1.055-2.399 4.116-2.399 4.116-.161.307-.226.44 0 .781.16.257.66.781 1.02 1.237.623.784 1.156 1.458 1.282 1.904.15.526-.257.79-.761.79z"/>
                        </svg>
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <a href="#" className="text-gray-400 hover:text-primary-600">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <a href="#" className="text-gray-400 hover:text-primary-600">
                        <span className="sr-only">Telegram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </a>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div 
              className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50 p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form action="#" method="POST" className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Имя
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    Телефон
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900">
                    Интересующая услуга
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="service"
                      id="service"
                      className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="landing">Лендинг</option>
                      <option value="corporate">Корпоративный сайт</option>
                      <option value="ecommerce">Интернет-магазин</option>
                      <option value="support">Техническая поддержка</option>
                      <option value="seo">SEO-оптимизация</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Сообщение
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                  />
                  <label htmlFor="privacy" className="ml-3 block text-sm leading-6 text-gray-600">
                    Я согласен с <a href="#" className="font-semibold text-primary-600">политикой конфиденциальности</a>
                  </label>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Отправить
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Наши офисы</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Приезжайте к нам в гости
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Мы всегда рады встрече с нашими клиентами. Приходите к нам на чашечку кофе, чтобы обсудить ваш проект лично.
            </p>
          </motion.div>

          <motion.div 
            className="mt-10 overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5802612439835!2d37.618671776938136!3d55.75184997288928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1679408416023!5m2!1sru!2sru"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 