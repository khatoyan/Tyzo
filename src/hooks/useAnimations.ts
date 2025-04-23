// Common animation variants for motion components

// Fade in from bottom
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Fade in from left
export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

// Fade in from right
export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

// Staggered children animation
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.3 }
}

// Scale on hover
export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 20 }
}

// Rotate on hover
export const rotateOnHover = {
  whileHover: { rotate: 5, scale: 1.1 },
  transition: { type: "spring", stiffness: 300, damping: 20 }
}

// Create custom animation timing
export const createStaggeredAnimation = (index: number, baseDelay = 0.1) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: baseDelay * index, duration: 0.5 }
})

// Create custom fade in animation
export const createFadeIn = (direction: 'up' | 'down' | 'left' | 'right', distance = 50) => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: -distance },
    right: { x: distance }
  }
  
  return {
    initial: { opacity: 0, ...directionMap[direction] },
    animate: { opacity: 1, ...(direction.includes('y') ? { y: 0 } : { x: 0 }) },
    transition: { duration: 0.6 }
  }
} 