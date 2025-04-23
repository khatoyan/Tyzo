import { motion } from 'framer-motion'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  bgColor?: string
  textColor?: string
  buttonBgColor?: string
  buttonTextColor?: string
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  bgColor = 'bg-primary-600',
  textColor = 'text-white',
  buttonBgColor = 'bg-white',
  buttonTextColor = 'text-primary-600'
}: CTASectionProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl font-bold tracking-tight ${textColor} sm:text-4xl`}>
            {title}
          </h2>
          <p className={`mt-6 text-lg leading-8 ${textColor === 'text-white' ? 'text-primary-100' : 'text-gray-600'}`}>
            {description}
          </p>
          <motion.div 
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={buttonLink}
              className={`rounded-md ${buttonBgColor} px-3.5 py-2.5 text-sm font-semibold ${buttonTextColor} shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
            >
              {buttonText}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 