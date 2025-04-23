"use client"
import { motion } from 'framer-motion'
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon, LightBulbIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import React, { useState } from 'react'
import Script from 'next/script'

export default function Home() {
  // Состояния для валидации формы
  const [formData, setFormData] = useState<{
    'first-name': string;
    'phone': string;
    'email': string;
    'message': string;
  }>({
    'first-name': '',
    'phone': '',
    'email': '',
    'message': ''
  });
  
  const [formErrors, setFormErrors] = useState<{
    'first-name'?: string;
    'phone'?: string;
    'email'?: string;
    'message'?: string;
  }>({});
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Функция для валидации формы
  const validateForm = () => {
    const errors: {
      'first-name'?: string;
      'phone'?: string;
      'email'?: string;
      'message'?: string;
    } = {};
    
    if (!formData['first-name'].trim()) {
      errors['first-name'] = 'Пожалуйста, введите ваше имя';
    }
    
    if (!formData['phone'].trim()) {
      errors['phone'] = 'Пожалуйста, введите ваш телефон';
    } else if (!/^(\+7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/.test(formData['phone'])) {
      errors['phone'] = 'Введите корректный номер телефона';
    }
    
    if (!formData['email'].trim()) {
      errors['email'] = 'Пожалуйста, введите ваш email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData['email'])) {
      errors['email'] = 'Введите корректный email адрес';
    }
    
    if (!formData['message'].trim()) {
      errors['message'] = 'Пожалуйста, введите сообщение';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Обработчик изменения полей формы
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Удаляем ошибку для этого поля, если она есть
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined
      });
    }
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/myzekkqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          'first-name': '',
          'phone': '',
          'email': '',
          'message': ''
        });
        
        // Показываем успешную отправку на 3 секунды, затем сбрасываем
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      } else {
        alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD structured data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Tyzo - Бесплатное создание сайтов по подписке",
            "url": "https://tyzo.site/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://tyzo.site/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "description": "Бесплатная разработка лендингов, корпоративных сайтов и интернет-магазинов. Оплата только за подписку, включающую хостинг и техническое обслуживание.",
            "keywords": "создать сайт, сайт бесплатно, сайт по подписке, цена сайта, бесплатные сайты, купить сайт, где купить сайт, купить официальный сайт"
          })
        }}
      />
      <Script
        id="organization-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tyzo",
            "url": "https://tyzo.site",
            "logo": "https://tyzo.site/icon.svg",
            "description": "Компания, специализирующаяся на бесплатном создании сайтов с оплатой только за подписку.",
            "offers": {
              "@type": "Offer",
              "description": "Бесплатная разработка сайта с ежемесячной подпиской от 2 900 ₽",
              "price": "2900",
              "priceCurrency": "RUB",
              "availability": "https://schema.org/InStock"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "89954377300",
              "contactType": "customer service",
              "availableLanguage": "Russian"
            },
            "sameAs": [
              "https://t.me/tyzosite"
            ]
          })
        }}
      />
      
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
              Сделаем сайт бесплатно.
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Получите профессиональный сайт без вложений в разработку. Мы создадим ваш сайт бесплатно, а вы платите только за ежемесячную подписку. Хостинг и техническое обслуживание включены. В любой момент можно отказаться от подписки без штрафов.
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80"
                alt="Современные технологии веб-разработки"
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
            <h2 className="text-base font-semibold leading-7 text-primary-600">Выгодное предложение</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Разработка сайта — бесплатно
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Вы не платите за создание сайта — только ежемесячную подписку. Подписка позволяет легко масштабировать функциональность в зависимости от потребностей вашего бизнеса. Никаких скрытых платежей и долгосрочных обязательств.
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
              Бесплатная разработка и прозрачная оплата
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Создание сайта бесплатно для любого тарифа. Выберите подходящий план подписки для вашего бизнеса. Все тарифы включают хостинг и техническую поддержку. Отменить можно в любой момент без штрафов.
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

          {formSubmitted ? (
            <motion.div 
              className="mx-auto mt-16 max-w-xl rounded-lg bg-green-50 p-8 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircleIcon className="h-12 w-12 mx-auto text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Спасибо за ваше сообщение!</h3>
              <p className="mt-2 text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
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
                      value={formData['first-name']}
                      onChange={handleInputChange}
                      autoComplete="given-name"
                      className={`block w-full rounded-md border ${formErrors['first-name'] ? 'border-red-300' : 'border-gray-300'} px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${formErrors['first-name'] ? 'ring-red-300' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
                    />
                    {formErrors['first-name'] && (
                      <p className="mt-1 text-sm text-red-600">{formErrors['first-name']}</p>
                    )}
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
                      value={formData['phone']}
                      onChange={handleInputChange}
                      autoComplete="tel"
                      className={`block w-full rounded-md border ${formErrors['phone'] ? 'border-red-300' : 'border-gray-300'} px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${formErrors['phone'] ? 'ring-red-300' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
                    />
                    {formErrors['phone'] && (
                      <p className="mt-1 text-sm text-red-600">{formErrors['phone']}</p>
                    )}
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
                      value={formData['email']}
                      onChange={handleInputChange}
                      autoComplete="email"
                      className={`block w-full rounded-md border ${formErrors['email'] ? 'border-red-300' : 'border-gray-300'} px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${formErrors['email'] ? 'ring-red-300' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
                    />
                    {formErrors['email'] && (
                      <p className="mt-1 text-sm text-red-600">{formErrors['email']}</p>
                    )}
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
                      value={formData['message']}
                      onChange={handleInputChange}
                      className={`block w-full rounded-md border ${formErrors['message'] ? 'border-red-300' : 'border-gray-300'} px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${formErrors['message'] ? 'ring-red-300' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
                    />
                    {formErrors['message'] && (
                      <p className="mt-1 text-sm text-red-600">{formErrors['message']}</p>
                    )}
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
                  disabled={formSubmitting}
                  className={`block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${formSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {formSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
              </motion.div>
              <p className="mt-4 text-sm text-center text-gray-500">
                Нажимая кнопку «Отправить», вы соглашаетесь с нашей <a href="#" className="font-semibold text-primary-600 hover:text-primary-500">политикой конфиденциальности</a>.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Бесплатное создание сайта',
    description: 'Мы разрабатываем ваш сайт абсолютно бесплатно. Вы платите только за подписку, которая включает хостинг и обслуживание. Никаких стартовых вложений в разработку.',
    icon: SparklesIcon,
  },
  {
    name: 'Прозрачная модель подписки',
    description: 'Никаких скрытых платежей или долгосрочных обязательств. Платите только за то время, когда вам нужен сайт. Отменить подписку можно в любой момент.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Полное техническое обслуживание',
    description: 'Забудьте о технических проблемах. Мы берём на себя все вопросы размещения, безопасности и поддержки вашего сайта. Обновления и улучшения включены в стоимость.',
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
    price: '2 900',
    description: 'Бесплатное создание простого сайта для малого бизнеса и стартапов.',
    features: [
      'Одностраничный лендинг',
      'Адаптивный дизайн',
      'Базовое SEO',
      'Хостинг включен',
      'Ежемесячные обновления',
    ],
  },
  {
    name: 'Стандарт',
    price: '7 900',
    description: 'Бесплатная разработка функционального сайта для растущего бизнеса.',
    features: [
      'Многостраничный сайт',
      'Форма обратной связи',
      'Интеграция с мессенджерами',
      'Расширенное SEO',
      'Еженедельные обновления',
      'Интеграция аналитики',
    ],
    mostPopular: true,
  },
  {
    name: 'Премиум',
    price: '15 900',
    description: 'Бесплатная разработка комплексного решения для активно развивающегося бизнеса.',
    features: [
      'Каталог товаров или услуг',
      'Расширенная фильтрация',
      'Формы заказа и обратной связи',
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
  {
    title: 'DoCake — Онлайн-кондитерская',
    category: 'Интернет-магазин',
    description: 'Современный сайт для кондитерской с онлайн-заказами и конструктором тортов.',
    imageUrl: '/portfolio/do-cake-preview.png',
    url: 'https://do-cake.vercel.app',
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
    question: 'Действительно ли создание сайта бесплатно?',
    answer: 'Да, мы действительно создаем сайт для вас абсолютно бесплатно. Вы оплачиваете только ежемесячную подписку, которая включает хостинг, техническую поддержку и обслуживание сайта. Никаких скрытых платежей за разработку нет.',
  },
  {
    question: 'Что происходит, если я решу отменить подписку?',
    answer: 'Если вы решите отменить подписку, ваш сайт будет активен до конца оплаченного периода. После этого сайт будет деактивирован, но данные сохранятся в течение 30 дней, чтобы вы могли вернуться к использованию услуги или сделать резервную копию. Никаких штрафов за отмену подписки не предусмотрено.',
  },
  {
    question: 'Включен ли хостинг в стоимость подписки?',
    answer: 'Да, хостинг полностью включен в стоимость подписки. Вам не нужно отдельно оплачивать серверы, домены или SSL-сертификаты. Мы берем на себя все технические аспекты размещения вашего сайта, включая регулярное резервное копирование и обновление системы безопасности.',
  },
  {
    question: 'Что входит в базовый тариф?',
    answer: 'В базовый тариф входит бесплатное создание одностраничного лендинга с адаптивным дизайном, базовое SEO, хостинг и ежемесячные обновления. Отличие от более дорогих тарифов заключается в отсутствии формы обратной связи и некоторых других расширенных функций.',
  },
  {
    question: 'Могу ли я переносить свой сайт на другой хостинг?',
    answer: 'Да, вы сохраняете полные права на дизайн и контент вашего сайта. Если вы решите перейти на самостоятельное обслуживание, мы поможем экспортировать ваш сайт и предоставим всю необходимую техническую информацию для миграции на ваш собственный хостинг.',
  },
  {
    question: 'Могу ли я изменить тариф подписки?',
    answer: 'Да, вы можете в любой момент перейти на более высокий тариф, получив доступ к дополнительным функциям и возможностям. Переход на более низкий тариф возможен при следующем продлении подписки. Мы стараемся обеспечить максимальную гибкость для вашего бизнеса.',
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