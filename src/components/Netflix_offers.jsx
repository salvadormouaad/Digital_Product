import React, { useEffect, useState } from 'react'
import ActiveProducts from '../Lists/Products'
import { motion } from 'framer-motion'
import Offers from '../Lists/Offers';
import Confirmation from './Confirmation';
export default function Netflix_offers({product,onBack}) {
    const [clicked , Setcliked] = useState(false)
    const [Sel_offer , SetSel_offer] = useState({
      Name:'',
      price:'',
      Period:'',
      Image:'',
      altImage:'',
    })
    function HandleClick(offer){
      SetSel_offer({name:offer.Name,price : offer.price , Period:offer.Period , Image : offer.image , altImage : offer.altImage})
      Setcliked(true)
  
    }
    if (clicked && Sel_offer) {
      console.log(Sel_offer)
        return <Confirmation offer={Sel_offer} onBack={() => Setcliked(false)} />;
      }

  // }, [Sel_offer]);
    if (!product || !product.name) {
    return (
      <div className="lg:h-auto bg-gray-900 flex items-center justify-center">
        <p className="text-white">Ce Produit n'est pas disponible.</p>
      </div>
    );
  }
    const productOffers = Offers[product.name] || [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="lg:h-auto  from-gray-900  p-8 flex items-center justify-center"
    >
      <div className=" p-5  w-auto   ">
        {/* Zurück */}
        <button
          onClick={onBack}
          className="mb-6 font-bold font-[Montserrat] text-white hover:text-cyan-300 flex  font-medium transition"
        >
          ← Back
        </button>
    
        {/* Angebote */}
        <div className=" flex max-sm:flex-col md:justify-center gap-9 md:flex-wrap  md:gap-5  h-auto">
          {productOffers.length > 0 ? (
            productOffers.map((offer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0D0D0D] h-40 items-center  justify-center rounded-2xl p-5 border border-gray-700  transition-all cursor-pointer "
                onClick={()=>HandleClick(offer)}
              >
                <div className="flex flex-col items-start  h-full w-50 ">
                    <div className='flex  justify-between w-full'>
                    <h3 className="text-xl font-bold font-[Montserrat] text-white">{offer.Period}</h3>
                    <img src={offer.image} alt="" />
                    </div>
                    <div className='flex justify-start w-full items-end h-full '>
                    <p className="text-6xl font-bold font-[Montserrat] font-bold text-white ">
                      {offer.price}
                      <span className='text-2xl '>DH</span>
                    </p>
                    </div>
        
                </div>
                
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No offer for {product.name} .</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )

}

