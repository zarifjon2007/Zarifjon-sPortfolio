import React from 'react'

const Card = () => {
  return (
    <div class="relative group w-100 h-65  overflow-hidden rounded-xl border border-gray-300  cursor-pointer bg-gray-700 border-none">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>
                <div class="relative z-10 p-4 text-white">
                    <h2 class="text-xl font-bold">/</h2>
                    <p class="text-sm">Project</p>
                </div>
        </div>
  )
}

export default Card