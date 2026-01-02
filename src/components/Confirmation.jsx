import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Confirmation({ offer, onBack }) {
  const offersArray = Array.isArray(offer) ? offer : offer ? [offer] : []

  // Deine WhatsApp-Nummer (ändere sie zu deiner echten!)
  const whatsappNumber = "212620394795"  // ← Beispiel: +212 6 00 00 00 00 (ohne + oder Leerzeichen)

  const [paymentMethod, setPaymentMethod] = useState("")

  const handleWhatsAppOrder = (item) => {
    const message = `
🛒 *New Order Confirmation*

📦 Product: ${item.name}
⏱ Duration: ${item.Period || "Unknown"}
💰 Price: ${item.price} DH
💳 Payment Method: ${paymentMethod || "Not selected yet"}

    `.trim()
    console.log(paymentMethod)
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className=" md:h-auto  p-8 flex items-center justify-center"
    >
      <div className="p-5 w-170">
        <button
          onClick={onBack}
          className="mb-6  font-[Montserrat] max-sm:ml-3 text-white flex font-medium transition"
        >
          ← Back
        </button>

        <div className="flex  lg:gap-9 h-auto">
          {offersArray.length > 0 ? (
            offersArray.map((offers, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0D0D0D] h-auto items-center justify-center rounded-2xl lg:p-5 md:p-5 transition-all cursor-pointer"
              >
                <div className="flex flex-col items-start h-full max-sm:w-95 md:w-150  lg:w-150">
                  <div className='flex flex-col justify-between w-full'>
                    <h3 className="flex justify-center w-full md:text-2xl font-bold font-[Montserrat] max-sm:text-2xl max-sm:mt-5 lg:text-4xl text-white">
                      ORDER CONFIRMATION
                    </h3>
                    <div className="w-full flex items-center justify-center mt-5 p-2">
                      <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-[#0b0b0b] flex items-center justify-center">
                        <img
                          src={offers.altImage}
                          alt="Offer"
                          className="w-full h-full object-contain p-8 drop-shadow-2xl animate-pulse"
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex max-sm:pl-10 max-sm:pr-10 lg:pl-15 lg:pr-15 max-sm:justify-between md:justify-between lg:justify-between w-full items-end h-auto text-white text-2xl'>
                    <div><p>Product :</p></div>
                    <div className='font-semibold font-[Montserrat]'>{offers.name}</div>
                  </div>

                  <div className='flex max-sm:pl-10 max-sm:pr-10 pt-5 lg:pl-15 lg:pr-15 justify-between w-full items-end h-auto text-white text-2xl'>
                    <div><p>Duration :</p></div>
                    <div className='font-semibold font-[Montserrat]'>{offers.Period}</div>
                  </div>

                  <div className='flex max-sm:pl-10 max-sm:pr-10 pt-5 lg:pl-15 lg:pr-15 justify-between w-full items-end h-auto text-white text-2xl'>
                    <div><p>Price :</p></div>
                    <div className='font-semibold font-[Montserrat]'>{offers.price} DH</div>
                  </div>

                  <div className='flex  flex-col w-full text-white pt-5 max-sm:pl-10 lg:pl-15 lg:pr-15'>
                    <p className='text-2xl'>Payment method :</p>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className='text-white w-full  md:mt-6  max-sm:w-75  p-4 bg-[#0b0b0b] rounded-lg border border-gray-700 focus:border-cyan-500 outline-none'
                    >
                      <option className='text-xs' value="" disabled>Choose Your Payment Method</option>
                      <option className='text-xs' value="Bank Transfer (CIH , Attijari ... )">Bank Transfer (CIH , Attijari ... )</option>
                      <option className='text-xs' value="Cash Plus">Cash Plus</option>
                      <option className='text-xs' value="Orange Money / Inwi Money">Orange Money / Inwi Money</option>
                    </select>
                  </div>

                  <div className='flex justify-center md:mt-6 w-full max-sm:mt-10 lg:mt-6'>
                    <div className='bg-[#FBB041] p-2 w-65 rounded-lg hover:bg-[#f0a030] transition transform hover:scale-105 cursor-pointer'>
                      <button
                        onClick={() => handleWhatsAppOrder(offers)}
                        className='w-full text-xl font-medium text-black font-[Montserrat]'
                      >
                        CONFIRM ORDER
                      </button>
                    </div>
                  </div>

                  <div className='flex mt-6 max-sm:mb-5 w-full  text-white text-sm'>
                    <p className='w-full text-center'>After confirmation, you will be redirected to WhatsApp to complete your payment.</p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No offer selected.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}