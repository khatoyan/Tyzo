"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = [
  { id: 'all', name: 'Все работы' },
  { id: 'landing', name: 'Лендинги' },
  { id: 'corporate', name: 'Корпоративные сайты' },
  { id: 'shop', name: 'Интернет-магазины' },
]

const projects = [
  {
    id: 1,
    title: 'Эко Стиль — Мебель из натуральных материалов',
    category: 'landing',
    description: 'Современный лендинг для компании, занимающейся экологичной мебелью. Дизайн выполнен в светлых тонах с акцентом на натуральность и экологичность продукции.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    results: 'Увеличение конверсии в заявки на 24% по сравнению с предыдущим сайтом. Рост времени, проведенного на сайте, на 40%.',
    technologies: ['React', 'NextJS', 'Tailwind CSS', 'Framer Motion'],
    url: '#',
  },
  {
    id: 2,
    title: 'ФрешФуд — Доставка органических продуктов',
    category: 'shop',
    description: 'Полнофункциональный интернет-магазин с каталогом продуктов, системой заказа и личным кабинетом пользователя для службы доставки органических продуктов.',
    imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    results: 'Более 1000 заказов в первый месяц после запуска. Рост среднего чека на 15% благодаря рекомендательной системе.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    url: '#',
  },
  {
    id: 3,
    title: 'Правовед — Юридическая компания',
    category: 'corporate',
    description: 'Многостраничный сайт для юридической компании с информацией об услугах, командой юристов и системой записи на консультацию.',
    imageUrl: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    results: 'Увеличение органического трафика на 35% за 2 месяца после запуска. Рост заявок на консультации на 42%.',
    technologies: ['React', 'NextJS', 'Sanity CMS', 'Tailwind CSS'],
    url: '#',
  },
  {
    id: 4,
    title: 'АвтоПрофи — Автосервис',
    category: 'landing',
    description: 'Лендинг для сети автосервисов с интерактивной формой записи на техническое обслуживание и ремонт автомобиля.',
    imageUrl: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    results: 'Рост числа заявок на 53% по сравнению с предыдущим сайтом. Сокращение времени обработки заявок на 60%.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    url: '#',
  },
  {
    id: 5,
    title: 'BooksOnline — Книжный интернет-магазин',
    category: 'shop',
    description: 'Интернет-магазин книг с расширенной системой фильтрации, рекомендациями и интеграцией с платежными системами.',
    imageUrl: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    results: 'Увеличение конверсии в покупку на 28%. Рост среднего чека на 22% благодаря рекомендательной системе.',
    technologies: ['React', 'Redux', 'Node.js', 'MySQL', 'Stripe API'],
    url: '#',
  },
  {
    id: 6,
    title: 'ИнвестГрупп — Инвестиционная компания',
    category: 'corporate',
    description: 'Корпоративный сайт для инвестиционной компании с личным кабинетом инвестора и интерактивными графиками инвестиционных портфелей.',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    results: 'Привлечение новых инвесторов на 31% больше, чем планировалось. Увеличение времени, проведенного на сайте, на 45%.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Chart.js', 'MongoDB'],
    url: '#',
  },
  {
    id: 7,
    title: 'DoCake — Онлайн-кондитерская',
    category: 'shop',
    description: 'Интернет-магазин тортов с возможностью заказа и доставки. Современный дизайн с каталогом продукции и онлайн-конструктором тортов.',
    imageUrl: '/portfolio/do-cake-preview.png',
    results: 'Рост продаж на 35% после запуска онлайн-заказов. Улучшение пользовательского опыта благодаря интуитивному интерфейсу.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    url: 'https://do-cake.vercel.app',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<null | any>(null)

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const openProjectDetails = (project: any) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

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
            <h2 className="text-base font-semibold leading-7 text-primary-600">Портфолио</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Наши проекты
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Изучите примеры наших работ, демонстрирующие наш опыт и творческий подход к созданию эффективных веб-сайтов для различных отраслей.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => handleCategoryClick(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer"
                onClick={() => openProjectDetails(project)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80" />
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="inline-block bg-primary-600 rounded-full px-3 py-1 text-xs font-semibold">
                      {categories.find(c => c.id === project.category)?.name || project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-200 line-clamp-2">{project.description}</p>
                  <p className="mt-3 text-sm font-semibold flex items-center">
                    Подробнее <span className="ml-1">→</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-600">Проекты не найдены. Попробуйте выбрать другую категорию.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4" onClick={closeProjectDetails}>
          <motion.div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="relative">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-primary-600"
                onClick={closeProjectDetails}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block bg-primary-600 text-white rounded-full px-3 py-1 text-xs font-semibold mr-2">
                  {categories.find(c => c.id === selectedProject.category)?.name || selectedProject.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">О проекте</h3>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Результаты</h3>
                <p className="text-gray-600">{selectedProject.results}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Технологии</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span key={tech} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <a 
                  href={selectedProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Посетить сайт
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
              Готовы создать свой проект?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Позвольте нам помочь вам воплотить ваши идеи в жизнь. Свяжитесь с нами сегодня.
            </p>
            <motion.div 
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Связаться с нами
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 