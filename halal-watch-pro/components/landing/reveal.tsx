'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol'
}

export function Stagger({ children, className, as = 'div' }: StaggerProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {children}
    </Component>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const Component = motion[as]
  return (
    <Component className={cn(className)} variants={fadeUp}>
      {children}
    </Component>
  )
}
