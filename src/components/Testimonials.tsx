import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

interface Author {
  name: string
  role: string
  imageUrl: string
}

interface Testimonial {
  content: string
  author: Author
  rating: number
}

interface TestimonialsProps {
  items: Testimonial[]
}

export default function Testimonials({ items }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Отзывы</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Что говорят наши клиенты
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Узнайте, почему клиенты выбирают нас для создания своих сайтов
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {items.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              className="relative bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-x-1 text-primary-600">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
                  >
                    <StarIcon 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-primary-600' : 'text-gray-200'}`}
                      aria-hidden="true"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-lg leading-6 text-gray-600">{testimonial.content}</p>
              <div className="mt-6 flex items-center gap-x-4">
                <motion.img
                  className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                  src={testimonial.author.imageUrl}
                  alt={testimonial.author.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                  <div className="text-sm leading-6 text-gray-600">{testimonial.author.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 