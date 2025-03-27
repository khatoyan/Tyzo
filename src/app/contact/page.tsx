"use client"
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function Contact() {
  // State for form handling
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Пожалуйста, укажите ваше имя';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Пожалуйста, укажите ваш email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Пожалуйста, укажите корректный email';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Пожалуйста, напишите сообщение';
    }
    
    if (!formData.privacy) {
      errors.privacy = 'Необходимо согласие с политикой конфиденциальности';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Form submission handler
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
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          privacy: false
        });
        
        // Show success message for 3 seconds
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
                    <dd><a href="tel:89232223773" className="hover:text-primary-600">8 923 222-37-73</a></dd>
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
                    <dd><a href="mailto:tyzo.site.company@gmail.com" className="hover:text-primary-600">tyzo.site.company@gmail.com</a></dd>
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
                      <a href="https://t.me/tyzosite" className="text-gray-400 hover:text-primary-600">
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
              {formSubmitted ? (
                <motion.div 
                  className="mx-auto p-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Спасибо за ваше сообщение!</h3>
                  <p className="mt-2 text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={formData.name}
                        onChange={handleInputChange}
                        autoComplete="given-name"
                        className={`block w-full rounded-md border ${formErrors.name ? 'border-red-300' : 'border-gray-300'} px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${formErrors.name ? 'ring-red-300' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                      )}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        autoComplete="email"
                        className={`block w-full rounded-md border ${formErrors.email ? 'border-red-300' : 'border-gray-300'} px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${formErrors.email ? 'ring-red-300' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                      )}
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
                        value={formData.phone}
                        onChange={handleInputChange}
                        autoComplete="tel"
                        className={`block w-full rounded-md border ${formErrors.phone ? 'border-red-300' : 'border-gray-300'} px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${formErrors.phone ? 'ring-red-300' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                      )}
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
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border ${formErrors.service ? 'border-red-300' : 'border-gray-300'} px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${formErrors.service ? 'ring-red-300' : 'ring-gray-300'} focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
                      >
                        <option value="">Выберите услугу</option>
                        <option value="landing">Лендинг</option>
                        <option value="corporate">Корпоративный сайт</option>
                        <option value="ecommerce">Интернет-магазин</option>
                        <option value="support">Техническая поддержка</option>
                        <option value="seo">SEO-оптимизация</option>
                        <option value="other">Другое</option>
                      </select>
                      {formErrors.service && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.service}</p>
                      )}
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
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border ${formErrors.message ? 'border-red-300' : 'border-gray-300'} px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${formErrors.message ? 'ring-red-300' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6`}
                      />
                      {formErrors.message && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                      )}
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
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className={`h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600 ${formErrors.privacy ? 'border-red-300' : ''}`}
                    />
                    <label htmlFor="privacy" className="ml-3 block text-sm leading-6 text-gray-600">
                      Я согласен с <a href="#" className="font-semibold text-primary-600">политикой конфиденциальности</a>
                    </label>
                  </motion.div>
                  {formErrors.privacy && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.privacy}</p>
                  )}
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
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 