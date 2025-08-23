import React from 'react'

export default function ({name,stars,Cmt,photo}) {
  return (
   
<div class="flex flex-col  p-5 rounded-2xl bg-white">
      <div class="flex">
        <div class="flex gap-4">
         <img src={photo} alt="" className='w-15'  />

          <div class="flex flex-col gap-1">
            <div class="flex gap-0 items-center -mt-1">
              <p class="font-semibold cursor-pointer">{name}</p>
              
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 text-[#005ef6] text-xl tracking-[2px]">
        {stars}
      </div>
      <div class="italic mt-2 text-[18px] md:w-60 w-41 text-[#4b587c] font-normal">
       {Cmt}
      </div>
     
     </div>
  )
}
