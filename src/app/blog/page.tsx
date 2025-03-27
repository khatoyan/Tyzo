"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Как создать сайт, который привлекает клиентов',
    category: 'web-design',
    excerpt: 'Узнайте о ключевых элементах дизайна и контента, которые помогут вашему сайту привлечь и удержать потенциальных клиентов.',
    imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '12 мая 2025',
    readTime: '6 мин',
    author: 'Алексей Иванов',
    slug: 'how-to-attract-clients-with-website',
  },
  {
    id: 2,
    title: '5 трендов веб-дизайна, которые будут популярны в 2025 году',
    category: 'trends',
    excerpt: 'Обзор самых актуальных и инновационных тенденций в веб-дизайне, которые будут определять облик интернета в ближайшем будущем.',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '3 марта 2025',
    readTime: '4 мин',
    author: 'Мария Петрова',
    slug: 'web-design-trends-2025',
  },
  {
    id: 3,
    title: 'Почему важно оптимизировать скорость загрузки сайта',
    category: 'optimization',
    excerpt: 'Скорость загрузки сайта напрямую влияет на конверсию, SEO-рейтинг и удержание пользователей. Рассказываем, как её улучшить.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '17 апреля 2025',
    readTime: '7 мин',
    author: 'Дмитрий Сидоров',
    slug: 'website-speed-optimization',
  },
  {
    id: 4,
    title: 'Основы SEO для начинающих предпринимателей',
    category: 'seo',
    excerpt: 'Простое руководство по SEO-оптимизации для тех, кто только начинает свой бизнес и хочет привлечь органический трафик на свой сайт.',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '29 января 2025',
    readTime: '9 мин',
    author: 'Анна Смирнова',
    slug: 'seo-basics-for-entrepreneurs',
  },
  {
    id: 5,
    title: 'Как выбрать правильный хостинг для вашего сайта',
    category: 'hosting',
    excerpt: 'Обзор различных типов хостинга, их преимуществ и недостатков, чтобы помочь вам сделать осознанный выбор для вашего проекта.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '8 февраля 2025',
    readTime: '5 мин',
    author: 'Игорь Николаев',
    slug: 'choosing-right-hosting',
  },
  {
    id: 6,
    title: 'Мобильная версия сайта: почему это необходимо в 2025',
    category: 'mobile',
    excerpt: 'С ростом мобильного трафика адаптивный дизайн стал не просто опцией, а необходимостью. Разбираемся, почему это важно.',
    imageUrl: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: '21 июня 2025',
    readTime: '6 мин',
    author: 'Елена Васильева',
    slug: 'mobile-website-importance',
  },
]

const categories = [
  { id: 'all', name: 'Все категории' },
  { id: 'ux-design', name: 'UX-дизайн' },
  { id: 'web-design', name: 'Веб-дизайн' },
  { id: 'performance', name: 'Производительность' },
  { id: 'business', name: 'Бизнес' },
  { id: 'seo', name: 'SEO' },
]

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = activeCategory === 'all' || 
                        post.category.toLowerCase().replace(/\s+/g, '-') === activeCategory.toLowerCase()
    
    return matchesSearch && matchesCategory
  })

  // Validate email function
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle email submit
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setEmailError('Пожалуйста, введите ваш email');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Пожалуйста, введите корректный email');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/myzekkqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, formType: 'blog-subscription' }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        alert('Произошла ошибка при подписке. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      alert('Произошла ошибка при подписке. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
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
            <h2 className="text-base font-semibold leading-7 text-primary-600">Блог</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Полезные статьи о веб-разработке и дизайне
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Делимся опытом, рассказываем о трендах и лучших практиках в мире веб-разработки, UX/UI дизайна и цифрового маркетинга.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
            
            <motion.div 
              className="relative mt-4 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Поиск статей"
                className="w-full md:w-64 rounded-full border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="flex flex-col overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block bg-primary-600 rounded-full px-3 py-1 text-xs font-semibold text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex-grow">
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} чтения</span>
                    </div>
                    <div className="mt-4">
                      <Link href={`/blog/${post.slug}`} className="text-primary-600 font-medium flex items-center hover:text-primary-500">
                        Читать <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-600">Статьи по вашему запросу не найдены. Попробуйте изменить параметры поиска.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Подпишитесь на нашу рассылку
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Получайте лучшие материалы, советы и новости веб-разработки прямо на вашу почту.
            </p>
          </motion.div>
          
          <motion.div
            className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Подпишитесь на наши новости</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Будьте в курсе последних тенденций веб-разработки, советов по маркетингу и историй успеха наших клиентов.
              </p>
              
              {isSubmitted ? (
                <motion.div 
                  className="mt-6 p-4 bg-green-50 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="h-10 w-10 mx-auto text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-900">Спасибо за подписку!</h4>
                  <p className="text-gray-600">Вы будете получать все наши обновления.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-6 sm:flex gap-2">
                  <div className="w-full">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      autoComplete="email"
                      required
                      className={`w-full rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ${emailError ? 'ring-red-300' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm`}
                      placeholder="Ваш email"
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-600">{emailError}</p>
                    )}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex w-full items-center justify-center rounded-md bg-primary-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Подписка...' : 'Подписаться'}
                    </button>
                  </motion.div>
                </form>
              )}
              <p className="mt-3 text-center text-sm text-gray-500">
                Мы ценим вашу конфиденциальность. Отписаться можно в любой момент.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 