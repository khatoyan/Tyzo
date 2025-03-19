"use client"
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Лендинги',
    description: 'Одностраничные сайты, идеальные для презентации конкретного продукта или услуги.',
    features: [
      'Современный адаптивный дизайн',
      'Оптимизация скорости загрузки',
      'Формы обратной связи',
      'SEO-оптимизация',
      'Интеграция с аналитикой',
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Корпоративные сайты',
    description: 'Многостраничные сайты для представления вашей компании и услуг в интернете.',
    features: [
      'Уникальный дизайн в соответствии с брендингом',
      'Блог и новостной раздел',
      'Каталог услуг/продуктов',
      'Интеграция с CRM системами',
      'Мультиязычность',
    ],
    image: 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Интернет-магазины',
    description: 'Полнофункциональные онлайн-магазины с каталогом товаров и корзиной.',
    features: [
      'Каталог товаров с фильтрацией',
      'Корзина и оформление заказа',
      'Интеграция с платежными системами',
      'Личный кабинет пользователя',
      'Отслеживание заказов',
    ],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
]

const additionalServices = [
  {
    name: 'Техническая поддержка',
    description: 'Непрерывная поддержка вашего сайта, включая обновления, резервное копирование и мониторинг безопасности.',
  },
  {
    name: 'Контент-менеджмент',
    description: 'Регулярное обновление контента на вашем сайте, включая новости, блог и каталог товаров.',
  },
  {
    name: 'SEO-оптимизация',
    description: 'Комплексная оптимизация сайта для поисковых систем, повышение видимости и привлечение целевого трафика.',
  },
  {
    name: 'Маркетинговая поддержка',
    description: 'Разработка и реализация маркетинговых кампаний для продвижения вашего сайта и привлечения клиентов.',
  },
]

export default function Services() {
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
            <h2 className="text-base font-semibold leading-7 text-primary-600">Услуги</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Полный спектр услуг веб-разработки
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Мы предлагаем комплексные решения для создания и поддержки онлайн-присутствия вашего бизнеса. От простых лендингов до сложных интернет-магазинов — мы делаем все.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Наши ключевые услуги</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Выберите идеальное решение для вашего бизнеса
            </p>
          </motion.div>

          <div className="mx-auto mt-16 space-y-20">
            {services.map((service, index) => (
              <motion.div 
                key={service.name}
                className="lg:flex lg:items-center lg:gap-x-12 lg:mx-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
              >
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div 
                    className="aspect-[3/2] overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover shadow-lg"
                    />
                  </motion.div>
                </div>
                <div className={`mt-8 lg:mt-0 lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{service.name}</h3>
                  <p className="mt-3 text-lg text-gray-600">{service.description}</p>
                  <ul role="list" className="mt-6 space-y-4">
                    {service.features.map((feature) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                      >
                        <CheckCircleIcon className="h-6 w-6 flex-none text-primary-600" aria-hidden="true" />
                        <span className="ml-3 text-base text-gray-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div 
                    className="mt-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="/contact"
                      className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                      Узнать больше
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Дополнительные услуги</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Больше, чем просто создание сайта
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Мы предлагаем комплексные услуги, которые помогут вашему бизнесу развиваться в цифровом пространстве.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {additionalServices.map((service, index) => (
                <motion.div 
                  key={service.name} 
                  className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/50 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <motion.p 
                      className="mt-6 flex text-primary-600 font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      <a href="/contact">Заказать услугу</a> <span aria-hidden="true">→</span>
                    </motion.p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Наш процесс</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Как мы работаем
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Наш четко определенный процесс работы обеспечивает прозрачность и эффективность на всех этапах проекта.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {['Анализ', 'Проектирование', 'Разработка', 'Запуск и поддержка'].map((step, index) => (
                <motion.div 
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <motion.div 
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-600 text-white text-3xl font-bold"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {index + 1}
                  </motion.div>
                  {index < 3 && (
                    <div className="absolute left-10 top-10 hidden lg:block h-0.5 w-[calc(100%-40px)] bg-primary-200"></div>
                  )}
                  <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-gray-900">{step}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {index === 0 && 'Мы глубоко изучаем ваш бизнес, цели и аудиторию, чтобы создать сайт, который даст результаты.'}
                    {index === 1 && 'Разрабатываем дизайн-концепцию, структуру сайта и прототипы страниц для вашего утверждения.'}
                    {index === 2 && 'Превращаем дизайн в полнофункциональный сайт с использованием современных технологий.'}
                    {index === 3 && 'Запускаем сайт и обеспечиваем его бесперебойную работу и регулярные обновления.'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Готовы начать свой проект?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Свяжитесь с нами сегодня, и мы поможем выбрать идеальное решение для вашего бизнеса.
            </p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Заказать консультацию
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center text-sm font-semibold text-white hover:text-primary-50"
              >
                Посмотреть наши работы <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 