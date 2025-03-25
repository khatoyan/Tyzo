"use client"
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const pricingPlans = [
  {
    name: 'Лендинг',
    price: '2 490 ₽',
    description: 'Идеально для малых предприятий и стартапов, которым нужен эффективный одностраничный сайт без крупных вложений.',
    duration: '2-3 недели',
    features: [
      'Одностраничный сайт',
      'До 5 секций на выбор',
      'Адаптивный дизайн',
      'Форма обратной связи',
      'Базовая SEO-оптимизация',
      'Интеграция с аналитикой',
      'Хостинг и домен включены',
      'Отмена подписки в любой момент',
      '30 дней бесплатной поддержки',
    ],
    limitations: [
      'Без системы администрирования',
      'Без интеграции CRM',
    ],
    mostPopular: false,
  },
  {
    name: 'Корпоративный сайт',
    price: '4 500 ₽',
    description: 'Комплексное решение для компаний, которым необходим полноценный веб-сайт c дополнительными страницами и функциями. Без забот о технической части.',
    duration: '3-5 недель',
    features: [
      'До 8 страниц на выбор',
      'Адаптивный дизайн',
      'Формы обратной связи',
      'Система администрирования',
      'Интеграция с CRM',
      'Полная SEO-оптимизация',
      'Хостинг и домен включены',
      'Отмена подписки в любой момент',
      '60 дней бесплатной поддержки',
      'Обучение персонала работе с CMS',
    ],
    limitations: [],
    mostPopular: true,
  },
  {
    name: 'Интернет-магазин',
    price: '9 390 ₽',
    description: 'Полнофункциональный интернет-магазин с каталогом товаров, корзиной и системой оплаты. Забудьте о серверах и технических проблемах.',
    duration: '5-8 недель',
    features: [
      'Каталог товаров с фильтрами',
      'Корзина и оформление заказа',
      'Интеграция с платежными системами',
      'Личный кабинет пользователя',
      'Система администрирования',
      'Интеграция с CRM и 1C',
      'Полная SEO-оптимизация',
      'Хостинг и домен включены',
      'Отмена подписки в любой момент',
      '90 дней бесплатной поддержки',
      'Обучение персонала работе с системой',
    ],
    limitations: [],
    mostPopular: false,
  },
]

const faqs = [
  {
    question: 'Что входит в стоимость ежемесячной подписки?',
    answer:
      'В стоимость подписки входит: хостинг сайта, техническая поддержка, обновления безопасности, SSL-сертификат, мониторинг работоспособности, регулярное резервное копирование данных, базовые обновления контента и консультации по возникающим вопросам.',
  },
  {
    question: 'Что произойдет, если я решу отменить подписку?',
    answer:
      'Если вы решите отменить подписку, ваш сайт будет активен до конца оплаченного периода. После этого он будет деактивирован, но все данные сохранятся в течение 30 дней, чтобы вы могли возобновить подписку или экспортировать данные. Никаких штрафов за отмену нет.',
  },
  {
    question: 'Как происходит оплата?',
    answer:
      'Оплата происходит ежемесячно по подписке. Перед началом разработки берется разовый платеж за создание сайта (30% предоплата). После запуска вы платите только ежемесячную подписку за использование и поддержку сайта.',
  },
  {
    question: 'Сколько времени занимает разработка сайта?',
    answer:
      'Сроки разработки зависят от типа сайта и сложности проекта. Лендинги обычно готовы за 2-3 недели, корпоративные сайты - за 3-5 недель, интернет-магазины - от 5 до 8 недель. После запуска вы сразу получаете полностью работающий сайт на нашем хостинге.',
  },
  {
    question: 'Могу ли я перенести сайт на свой хостинг в будущем?',
    answer:
      'Да, вы сохраняете все права на дизайн и контент сайта. Если вы решите отказаться от нашей подписочной модели, мы поможем экспортировать ваш сайт и предоставим всю необходимую документацию для перемещения на ваш собственный хостинг.',
  },
  {
    question: 'Могу ли я изменить свой тариф подписки?',
    answer:
      'Абсолютно! Вы можете в любой момент перейти на более высокий тариф. Переход на более низкий тариф возможен при следующем продлении подписки. Мы стремимся обеспечить максимальную гибкость для вашего бизнеса.',
  },
]

const additionalServices = [
  {
    name: 'Техническая поддержка Premium',
    description: 'Расширенное обслуживание сайта с приоритетным реагированием, ежедневными проверками, срочным устранением неисправностей и персональным менеджером.',
    price: 'от 10 000 ₽/мес',
  },
  {
    name: 'SEO-продвижение',
    description: 'Комплексное продвижение сайта в поисковых системах, увеличение органического трафика и конверсий на основе ежемесячной подписки.',
    price: 'от 15 000 ₽/мес',
  },
  {
    name: 'Контекстная реклама',
    description: 'Настройка и ведение рекламных кампаний в Яндекс.Директ и Google Ads для быстрого привлечения целевой аудитории.',
    price: 'от 12 000 ₽/мес',
  },
  {
    name: 'Управление контентом',
    description: 'Регулярное обновление и наполнение сайта контентом, создание новых страниц, публикация новостей и статей по подписке.',
    price: 'от 8 000 ₽/мес',
  },
]

export default function Prices() {
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
            <h2 className="text-base font-semibold leading-7 text-primary-600">Цены</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Прозрачная подписка с включенным хостингом
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Выберите тариф, соответствующий потребностям вашего бизнеса. Все наши подписки включают хостинг, техническую поддержку и возможность отменить в любой момент без штрафов.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Тарифы</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Выберите оптимальное решение для вашего проекта
            </p>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`flex flex-col rounded-3xl bg-white shadow-xl ring-1 ${
                  plan.mostPopular
                    ? 'ring-primary-600 lg:z-10'
                    : 'ring-gray-200'
                } overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                {plan.mostPopular && (
                  <div className="bg-primary-600 py-2 text-center text-sm font-semibold text-white">
                    Самый популярный
                  </div>
                )}
                <div className={`p-8 ${plan.mostPopular ? 'sm:p-10' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">
                      /мес
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Срок: {plan.duration}
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className={`mt-6 block w-full rounded-md py-3 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      plan.mostPopular
                        ? 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600'
                        : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                    }`}
                  >
                    Заказать проект
                  </motion.a>
                </div>
                <div className="flex flex-1 flex-col p-8 pb-12 sm:p-10">
                  <h4 className="font-medium text-gray-900">Что включено</h4>
                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-x-3 text-gray-700">
                        <CheckIcon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className="mt-8 font-medium text-gray-900">Ограничения</h4>
                      <ul className="mt-4 space-y-3 text-sm">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex gap-x-3 text-gray-700">
                            <span className="h-5 w-5 flex-none text-gray-400">—</span>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Дополнительные услуги</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Расширьте возможности вашего проекта
            </p>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
                <p className="mt-4 text-base font-medium text-primary-600">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Projects Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Индивидуальные проекты</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Нужно что-то особенное?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Мы разрабатываем уникальные веб-проекты любой сложности по подписочной модели. Если вам требуется нестандартное решение,
              которое не вписывается в рамки наших тарифов, свяжитесь с нами для обсуждения индивидуальных условий. Хостинг и техническое обслуживание всегда включены в стоимость.
            </p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="rounded-md bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Получить консультацию
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Часто задаваемые вопросы</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ответы на популярные вопросы
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto mt-16 max-w-3xl divide-y divide-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <dl className="space-y-8 divide-y divide-gray-300">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={faq.question} 
                  className="pt-8 first:pt-0 pb-8 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <dt className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-4 text-base text-gray-600">
                    {faq.answer}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Готовы начать проект без рисков?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Свяжитесь с нами сегодня, чтобы обсудить ваш проект и получить бесплатную консультацию. Наша подписочная модель позволяет запустить сайт без крупных начальных инвестиций, а в будущем вы можете отказаться от услуг в любой момент.
            </p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="rounded-md bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Оставить заявку
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 