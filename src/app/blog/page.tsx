"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Как увеличить конверсию вашего сайта на 30% с помощью UX-дизайна',
    category: 'UX-дизайн',
    excerpt: 'Узнайте, как простые изменения в пользовательском опыте могут значительно увеличить конверсию на вашем сайте.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '12 мая 2023',
    readTime: '6 мин',
    slug: 'increase-conversion-with-ux-design',
  },
  {
    id: 2,
    title: '5 трендов веб-дизайна, которые будут популярны в 2023 году',
    category: 'Веб-дизайн',
    excerpt: 'Рассмотрим пять основных тенденций в веб-дизайне, которые будут актуальны в этом году, и как их можно применить на практике.',
    imageUrl: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '3 марта 2023',
    readTime: '8 мин',
    slug: 'web-design-trends-2023',
  },
  {
    id: 3,
    title: 'Оптимизация скорости загрузки: почему это важно и как это сделать',
    category: 'Производительность',
    excerpt: 'Медленно загружающийся сайт может стоить вам клиентов. Узнайте, как оптимизировать скорость загрузки вашего сайта.',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '17 апреля 2023',
    readTime: '10 мин',
    slug: 'page-speed-optimization',
  },
  {
    id: 4,
    title: 'Корпоративный сайт или лендинг: что выбрать для вашего бизнеса',
    category: 'Бизнес',
    excerpt: 'Разбираемся в различиях между корпоративным сайтом и лендингом, и как выбрать оптимальное решение для вашего бизнеса.',
    imageUrl: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '29 января 2023',
    readTime: '7 мин',
    slug: 'corporate-site-vs-landing-page',
  },
  {
    id: 5,
    title: 'Как правильно планировать редизайн сайта: пошаговое руководство',
    category: 'Веб-дизайн',
    excerpt: 'Планирование редизайна сайта может быть сложной задачей. Наше пошаговое руководство поможет вам избежать распространенных ошибок.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '8 февраля 2023',
    readTime: '12 мин',
    slug: 'website-redesign-guide',
  },
  {
    id: 6,
    title: 'SEO для начинающих: основные принципы и практики',
    category: 'SEO',
    excerpt: 'Освойте основы поисковой оптимизации для повышения видимости вашего сайта в результатах поиска.',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: '21 июня 2023',
    readTime: '9 мин',
    slug: 'seo-for-beginners',
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

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = activeCategory === 'all' || 
                        post.category.toLowerCase().replace(/\s+/g, '-') === activeCategory.toLowerCase()
    
    return matchesSearch && matchesCategory
  })

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
            className="mx-auto mt-10 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="sm:flex gap-2">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                placeholder="Ваш email"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-primary-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Подписаться
                </button>
              </motion.div>
            </form>
            <p className="mt-3 text-center text-sm text-gray-500">
              Мы ценим вашу конфиденциальность. Отписаться можно в любой момент.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 