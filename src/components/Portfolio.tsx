import { motion } from 'framer-motion'

interface PortfolioItem {
  title: string
  category: string
  description: string
  imageUrl: string
  url: string
}

interface PortfolioProps {
  items: PortfolioItem[]
}

export default function Portfolio({ items }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Портфолио</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Наши последние работы
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ознакомьтесь с нашими последними проектами и убедитесь в качестве нашей работы
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <motion.img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium">{item.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
                <motion.a
                  href={item.url}
                  className="mt-4 inline-flex items-center text-sm font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Подробнее <span aria-hidden="true">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 