"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const values = [
  {
    name: 'Инновации',
    description: 'Мы постоянно исследуем новые технологии и подходы, чтобы предлагать нашим клиентам самые современные решения.',
  },
  {
    name: 'Качество',
    description: 'Мы не идем на компромиссы, когда речь идет о качестве. Каждый проект разрабатывается с вниманием к деталям.',
  },
  {
    name: 'Прозрачность',
    description: 'Мы верим в прозрачные процессы и открытое общение с нашими клиентами на всех этапах сотрудничества.',
  },
  {
    name: 'Результат',
    description: 'Мы ориентированы на достижение конкретных бизнес-целей наших клиентов, а не просто на создание красивых сайтов.',
  },
]

export default function About() {
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
            <h2 className="text-base font-semibold leading-7 text-primary-600">О нас</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Знакомьтесь с Tyzo — вашим партнером в цифровом развитии
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Мы — команда опытных специалистов, объединенных страстью к созданию красивых и эффективных веб-сайтов, которые помогают бизнесу расти.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <motion.div 
              className="lg:pr-8 lg:pt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600">Наша история</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  От стартапа к лидеру рынка
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Tyzo была основана в 2018 году группой единомышленников, которые увидели потребность в упрощении процесса создания и поддержки веб-сайтов для бизнеса.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Начав с небольшой команды из трех человек, мы выросли в полноценную веб-студию с офисами в Москве и Санкт-Петербурге. За пять лет мы успешно реализовали более 200 проектов различной сложности — от простых лендингов до комплексных корпоративных порталов.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Сегодня Tyzo — это синоним качества и инноваций в сфере веб-разработки, а наш подход подписки произвел революцию в том, как компании получают и обслуживают свои веб-сайты.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Команда Tyzo за работой"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Наша миссия и видение</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Мы делаем цифровой мир доступным для всех
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  Миссия
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  <p>
                    Наша миссия — демократизировать веб-разработку, делая профессиональные веб-сайты доступными для бизнеса любого размера. Мы стремимся устранить технические барьеры и позволить нашим клиентам сосредоточиться на развитии своего бизнеса.
                  </p>
                </dd>
              </motion.div>
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  Видение
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  <p>
                    Мы видим будущее, где каждый бизнес имеет красивое и эффективное онлайн-присутствие без необходимости управления сложной инфраструктурой. Наша модель подписки — это первый шаг к этому будущему, где веб-сайты становятся сервисом, а не продуктом.
                  </p>
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Наши ценности</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Принципы, которыми мы руководствуемся
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {values.map((value, index) => (
                <motion.div 
                  key={value.name} 
                  className="relative pl-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.dt 
                    className="text-base font-semibold leading-7 text-gray-900"
                    whileHover={{ color: "#7c3aed" }}
                  >
                    <motion.div 
                      className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <span className="text-lg font-bold text-white">{index + 1}</span>
                    </motion.div>
                    {value.name}
                  </motion.dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">О компании</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Наша команда профессионалов
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Наша команда состоит из опытных специалистов в области веб-разработки, дизайна и маркетинга.
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto mt-16 max-w-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/50">
              <p className="text-lg leading-8 text-gray-600 mb-6">
                С момента основания наша компания выросла в значимого игрока на рынке веб-разработки, специализирующегося на создании высококачественных сайтов по модели подписки.
              </p>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                Наша команда объединяет талантливых разработчиков, креативных дизайнеров, опытных проектных менеджеров и специалистов по цифровому маркетингу. Вместе мы создаем не просто сайты, а эффективные инструменты для развития бизнеса наших клиентов.
              </p>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                Мы гордимся тем, что разрабатываем инновационные веб-решения, которые помогают компаниям разных масштабов успешно конкурировать в цифровом пространстве. Наш подход основан на глубоком понимании потребностей клиентов и современных тенденций веб-разработки.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                За годы работы мы реализовали более 200 проектов в различных отраслях: от малого бизнеса до крупных корпораций. Каждый проект для нас — это возможность создать что-то уникальное и полезное для наших клиентов.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-100">Карьера в Tyzo</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Станьте частью нашей команды
            </p>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Мы всегда ищем талантливых и увлеченных людей, которые хотят расти вместе с нами.
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
                Открытые вакансии
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 