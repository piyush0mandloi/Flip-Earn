import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plans = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30 max-md:px-4'>
      <div className="text-center">
        <h2 className='text-gray-700 text-4xl font-semibold'>Choose Your Plan</h2>
        <p>Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
      </div>
      <div>
        <PricingTable></PricingTable>
      </div>
    </div>
  )
}

export default Plans
