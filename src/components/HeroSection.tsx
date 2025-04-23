import { motion } from 'framer-motion'

interface HeroSectionProps {
  subtitle: string
  title: string
  description: string
}

export default function HeroSection({ subtitle, title, description }: HeroSectionProps) {
  return (
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
          <h2 className="text-base font-semibold leading-7 text-primary-600">{subtitle}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
} 