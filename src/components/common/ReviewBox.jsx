import React from 'react'

export default function ({name,stars,Cmt,photo}) {
  return (
   
<div classname="flex flex-col  p-5 rounded-2xl bg-white">
      <div classname="flex">
        <div classname="flex gap-4">
         <img src={photo} alt="" className='w-15'  />

          <div className="flex flex-col gap-1">
            <div className="flex gap-0 items-center -mt-1">
              <p className="font-semibold cursor-pointer">{name}</p>
              
            </div>
          </div>
        </div>
      </div>
      <div classname="mt-4 text-[#005ef6] text-xl tracking-[2px]">
        {stars}
      </div>
      <div classname="italic mt-2 text-[18px] md:w-60 w-41 text-[#4b587c] font-normal">
       {Cmt}
      </div>
     
     </div>
  )
}
