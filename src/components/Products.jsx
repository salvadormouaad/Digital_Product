import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ActiveProducts from '../Lists/Products'
import Netflix_offers from './Netflix_offers'

export default function Products() {
  const [Product, setProduct] = useState()
  const [Clicked, setClicked] = useState(false)

  useEffect(() => {
    if (Product) {
      console.log('Product selected:', Product)
      console.log(Clicked)
    }
  }, [Product])

  const handleProductClick = (product) => {
    // Only allow click if product is NOT "Soon"
    if (product.Soon) return

    setProduct({
      ...product,
      clickId: Date.now()
    })
    setClicked(true)
  }

  // Go back handler
  const handleBack = () => {
    setClicked(false)
    setProduct(null)
  }

  if (Clicked && Product) {
    return <Netflix_offers product={Product} onBack={handleBack} />
  }

  return (
    <motion.div
      className={`flex justify-center items-center flex-wrap lg:pb-27 lg:mx-70 md:pb-5 max-sm:pb-5 lg:w-auto max-sm:mt-5 md:mt-5 lg:mt-5`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {ActiveProducts.map((product, index) => {
        const isSoon = product.Soon

        return (
          <motion.div
            // Only attach onClick if it's NOT Soon
            onClick={() => !isSoon && handleProductClick(product)}
            key={product.name}
            className={`
              relative flex flex-col items-center bg-[#0D0D0D] m-1.5 
              max-sm:h-40 max-sm:w-40 p-5 rounded-2xl 
              lg:h-40 lg:w-42 border border-gray-800 mb-2  
              transition-all duration-300
              ${isSoon 
                ? 'opacity-60 cursor-not-allowed' 
                : 'cursor-pointer hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]'
              }
            `}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
            whileHover={
              isSoon
                ? {} // no hover effect
                : { boxShadow: '0 0 15px rgba(255, 160, 7, 0.96)' }
            }
          >
            {/* Badges */}
            <div>
              {product.TopSales && (
                <p className="absolute top-3 left-3 text-white text-xs bg-red-800 px-2 py-1 rounded-md z-10">
                  Top Sales
                </p>
              )}
              {product.New && (
                <p className="absolute top-3 left-3 text-white text-xs bg-cyan-600 px-2 py-1 rounded-md z-10">
                  New
                </p>
              )}
              {product.Soon && (
                <p className="absolute top-3 left-3 text-black text-xs bg-[#FBB041] px-2 py-1 rounded-md z-10">
                  Soon
                </p>
              )}
            </div>

            {/* Product Image */}
            <div className="flex items-center h-36">
              <motion.img
                src={product.image}
                alt={product.name}
                className="object-contain w-32 h-32 transition-transform duration-300"
                whileHover={!isSoon ? { scale: 1.1 } : {}}
              />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}