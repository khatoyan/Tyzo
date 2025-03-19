"use client"
import { motion } from 'framer-motion'
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon, LightBulbIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div 
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <motion.a 
                href="#" 
                className="inline-flex space-x-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-500/20">
                  Что нового
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>Версия 1.0 уже доступна</span>
                  <ArrowRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </motion.a>
            </div>
            <motion.h1 
              className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Сайт по подписке. Выгода без рисков.
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Получите профессиональный сайт без вложений в инфраструктуру. Платите только за то, что используете. Весь хостинг и техническое обслуживание мы берём на себя. В любой момент можно отказаться от подписки без штрафов.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a
                href="#pricing"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Начать сейчас
              </motion.a>
              <motion.a 
                href="#features" 
                className="text-sm font-semibold leading-6 text-gray-900"
                whileHover={{ x: 5 }}
              >
                Узнать больше <span aria-hidden="true">→</span>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="max-w-2xl flex-none sm:max-w-3xl lg:max-w-none">
              <motion.img
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Современный веб-дизайн"
                width={1216}
                height={721}
                className="w-[56rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Максимальная гибкость</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Сайт, который растёт вместе с вашим бизнесом
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Подписочная модель позволяет легко масштабировать или сокращать услуги в зависимости от потребностей вашего бизнеса. Не нужно тратиться на инфраструктуру.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.name} 
                  className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/50 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <motion.div
                      className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {React.createElement(feature.icon, {
                        className: "h-6 w-6 text-white",
                        "aria-hidden": true,
                      })}
                    </motion.div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio items={portfolio} />

      {/* Testimonials Section */}
      <Testimonials items={testimonials} />

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Тарифы</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Прозрачная система оплаты
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Выберите план подписки, который подходит вашему бизнесу. Все тарифы включают хостинг и техническую поддержку. Отменить можно в любой момент без штрафов.
            </p>
          </motion.div>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {pricing.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ${
                  tier.mostPopular
                    ? 'ring-2 ring-primary-600 scale-105 shadow-xl'
                    : 'ring-gray-200'
                } xl:p-10`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: tier.mostPopular ? 1.08 : 1.05 }}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                    {tier.mostPopular ? (
                      <motion.span 
                        className="rounded-full bg-primary-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-600"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        Популярный
                      </motion.span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">₽/мес</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex gap-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      >
                        <CheckCircleIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.a
                  href="#contact"
                  className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600'
                      : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Начать сейчас
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Часто задаваемые вопросы
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ответы на самые популярные вопросы о наших услугах
            </p>
          </motion.div>

          <motion.dl 
            className="mx-auto mt-16 max-w-2xl space-y-8 divide-y divide-gray-900/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {faqs.map((faq, index) => (
              <FaqItem key={faq.question} faq={faq} index={index} />
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative isolate bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Контакты</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Свяжитесь с нами
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </motion.div>

          <motion.form 
            action="https://formspree.io/f/myzekkqz" 
            method="POST" 
            className="mx-auto mt-16 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Имя
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                  Телефон
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Сообщение
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <motion.div 
              className="mt-10"
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
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Tyzo</h2>
            <p className="mt-2 text-base text-gray-400">
              Tyzo - современная веб-студия, которая создает красивые и функциональные сайты для вашего бизнеса.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white text-center md:text-left">Навигация</h3>
              <ul className="space-y-2">
                {['Главная', 'Возможности', 'Тарифы', 'Работы', 'Отзывы', 'Вопросы', 'Контакты'].map((item) => (
                  <li key={item} className="text-center md:text-left">
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white text-center md:text-left">Контакты</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-center md:justify-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+7 (123) 456-78-90</span>
                </li>
                <li className="flex justify-center md:justify-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@tyzo.ru</span>
                </li>
                <li className="flex justify-center md:justify-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Москва, ул. Примерная, д. 123</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm text-center">
            <p>© 2023 Tyzo. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    name: 'Прозрачная модель подписки',
    description: 'Никаких скрытых платежей или долгосрочных обязательств. Платите только за то время, когда вам нужен сайт. Отменить подписку можно в любой момент.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Хостинг включён в стоимость',
    description: 'Забудьте о дополнительных расходах на сервера и техническое обслуживание. Мы полностью берём на себя вопросы размещения и поддержки вашего сайта.',
    icon: SparklesIcon,
  },
  {
    name: 'Современный дизайн',
    description: 'Эффектные и удобные сайты с адаптивным дизайном, оптимизированные для мобильных устройств и высокой скорости загрузки.',
    icon: LightBulbIcon,
  },
]

const steps = [
  {
    name: 'Консультация',
    description: 'Мы обсудим ваши потребности и определим, какой тип сайта вам подходит.',
  },
  {
    name: 'Дизайн',
    description: 'Мы создадим дизайн, соответствующий вашему бренду и целям.',
  },
  {
    name: 'Разработка',
    description: 'Мы создадим сайт с использованием лучших практик и современных технологий.',
  },
  {
    name: 'Запуск',
    description: 'После вашего одобрения мы запустим сайт и будем обеспечивать его работу.',
  },
]

const pricing = [
  {
    name: 'Базовый',
    price: '4 900',
    description: 'Идеально для малого бизнеса и стартапов.',
    features: [
      'Одностраничный лендинг',
      'Форма обратной связи',
      'Адаптивный дизайн',
      'Базовое SEO',
      'Ежемесячные обновления',
    ],
  },
  {
    name: 'Стандарт',
    price: '9 900',
    description: 'Идеально для растущего бизнеса.',
    features: [
      'Многостраничный сайт',
      'Формы обратной связи',
      'Интеграция с мессенджерами',
      'Расширенное SEO',
      'Еженедельные обновления',
      'Интеграция аналитики',
    ],
    mostPopular: true,
  },
  {
    name: 'Премиум',
    price: '19 900',
    description: 'Для бизнеса, которому нужен полный каталог продуктов.',
    features: [
      'Каталог товаров',
      'Расширенная фильтрация',
      'Формы заказа',
      'Приоритетная поддержка',
      'Ежедневные обновления',
      'Пользовательские интеграции',
    ],
  },
]

const portfolio = [
  {
    title: 'Сайт для компании "Эко Стиль"',
    category: 'Лендинг',
    description: 'Современный лендинг для компании, занимающейся экологичной мебелью.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    url: '#',
  },
  {
    title: 'Интернет-магазин "ФрешФуд"',
    category: 'Каталог',
    description: 'Каталог продуктов с возможностью заказа для службы доставки еды.',
    imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    url: '#',
  },
  {
    title: 'Сайт юридической компании "Правовед"',
    category: 'Бизнес-сайт',
    description: 'Многостраничный сайт для юридической компании с информацией об услугах.',
    imageUrl: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    url: '#',
  },
]

const testimonials = [
  {
    content: 'Tyzo помогли нам запустить новый сайт в кратчайшие сроки. Результат превзошел все наши ожидания. Спасибо за профессионализм!',
    author: {
      name: 'Анна Смирнова',
      role: 'CEO, ЭкоСтиль',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    rating: 5,
  },
  {
    content: 'Мы оценили прозрачную модель ценообразования и качество обслуживания. Наш каталог товаров теперь работает безупречно.',
    author: {
      name: 'Дмитрий Петров',
      role: 'Директор, ФрешФуд',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    rating: 4,
  },
  {
    content: 'Прекрасная компания с отличным подходом к клиентам. Решили все наши проблемы с сайтом и помогли увеличить конверсию.',
    author: {
      name: 'Елена Иванова',
      role: 'Маркетолог, Правовед',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    rating: 5,
  },
]

const faqs = [
  {
    question: 'Что происходит, если я решу отменить подписку?',
    answer: 'Если вы решите отменить подписку, ваш сайт будет активен до конца оплаченного периода. После этого сайт будет деактивирован, но данные сохранятся в течение 30 дней, чтобы вы могли вернуться к использованию услуги или сделать резервную копию. Никаких штрафов за отмену подписки не предусмотрено.',
  },
  {
    question: 'Включен ли хостинг в стоимость подписки?',
    answer: 'Да, хостинг полностью включен в стоимость подписки. Вам не нужно отдельно оплачивать серверы, домены или SSL-сертификаты. Мы берем на себя все технические аспекты размещения вашего сайта, включая регулярное резервное копирование и обновление системы безопасности.',
  },
  {
    question: 'Могу ли я переносить свой сайт на другой хостинг?',
    answer: 'Да, вы сохраняете полные права на дизайн и контент вашего сайта. Если вы решите перейти на самостоятельное обслуживание, мы поможем экспортировать ваш сайт и предоставим всю необходимую техническую информацию для миграции на ваш собственный хостинг.',
  },
  {
    question: 'Как рассчитывается стоимость подписки?',
    answer: 'Стоимость подписки зависит от выбранного тарифа и рассчитывается на ежемесячной основе. Никаких скрытых платежей нет. В стоимость включены: хостинг, техническая поддержка, обновления безопасности и базовые изменения контента. За дополнительные услуги и существенные изменения может взиматься отдельная плата.',
  },
  {
    question: 'Могу ли я изменить тариф подписки?',
    answer: 'Да, вы можете в любой момент перейти на более высокий тариф, получив доступ к дополнительным функциям и возможностям. Переход на более низкий тариф возможен при следующем продлении подписки. Мы стараемся обеспечить максимальную гибкость для вашего бизнеса.',
  },
  {
    question: 'Что произойдет, если мне понадобятся дополнительные функции, не включенные в мой тариф?',
    answer: 'Мы предлагаем гибкий подход. Вы можете либо перейти на более высокий тариф, либо заказать разработку дополнительных функций как отдельную услугу. Наша команда всегда готова обсудить ваши потребности и предложить наиболее оптимальное решение.',
  },
]

interface FaqItemProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

const FaqItem = ({ faq, index }: FaqItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <motion.div
      key={faq.question}
      className="pt-8 first:pt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <dt 
        className="flex justify-between text-lg font-semibold leading-7 text-gray-900 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-2 flex-none"
        >
          <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </dt>
      <motion.dd 
        className="mt-4 text-base leading-7 text-gray-600 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {faq.answer}
      </motion.dd>
    </motion.div>
  );
}; 