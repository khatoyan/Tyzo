import { motion } from 'framer-motion'

interface SectionHeaderProps {
  subtitle: string
  title: string
  description?: string
  centered?: boolean
  maxWidth?: string
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  maxWidth = 'max-w-2xl'
}: SectionHeaderProps) {
  return (
    <motion.div 
      className={`mx-auto ${maxWidth} ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-base font-semibold leading-7 text-primary-600">{subtitle}</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </p>
      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </motion.div>
  )
} 