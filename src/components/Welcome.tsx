"use client";
import React from 'react'
import { motion } from 'motion/react'

function Welcome() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <motion.div
      initial = {{
        opacity:0
      }}
      animate = {{
        opacity:1
      }}
      >
      Hello
      </motion.div>
    </div>
  )
}

export default Welcome