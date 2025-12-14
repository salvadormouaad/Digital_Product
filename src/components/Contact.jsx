import React from 'react';
import Bg from "../assets/14827_1.png";

export default function Footer() {
  return (
    <div id='contact'
      className='bg-cover bg-no-repeat bg-center max-md:h-auto min-h-screen flex items-center justify-center  ' 
      style={{ backgroundImage: `url(${Bg})`  }}
    >
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-6xl mx-auto bg-opacity-10  rounded-lg p-8 md:p-12 bg-'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-3xl font-bold text-white mb-4'>We Are Here <span className='text-[#FBB041]'>For You!</span> </h1>
            <p className='text-xl text-gray-300'>Have questions or want to get in touch? Send us a message!</p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div>
              <form className='lg:space-y-2 space-y-6 '>
                <div>
                  <label htmlFor='name' className='block text-white mb-2'>Your Name</label>
                  <input 
                    type='text' 
                    id='name' 
                    className='w-full px-4 py-3 rounded-lg bg-[#242626] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FBB041]'
                    placeholder='Enter your name'
                  />
                </div>
                
                <div>
                  <label htmlFor='email' className='block text-white mb-2'>Email Address</label>
                  <input 
                    type='email' 
                    id='email' 
                    className='w-full px-4 py-3 rounded-lg bg-[#242626] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FBB041]'
                    placeholder='Enter your email'
                  />
                </div>
                
                <div>
                  <label htmlFor='subject' className='block text-white mb-2'>Subject</label>
                  <input 
                    type='text' 
                    id='subject' 
                    className='w-full px-4 py-3 rounded-lg bg-[#242626] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FBB041]'
                    placeholder='What is this about?'
                  />
                </div>
                
                <div>
                  <label htmlFor='message' className='block text-white mb-2'>Your Message</label>
                  <textarea 
                    id='message' 
                    rows='5'
                    className='w-full px-4 py-3 rounded-lg bg-[#242626] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FBB041]'
                    placeholder='Type your message here...'
                  ></textarea>
                </div>
                
                <button 
                  type='submit'
                  className='w-full bg-[#FBB041] hover:bg-[#242626] text-white font-bold py-3 px-4 rounded-lg transition duration-300'
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className='text-white'>
              <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
              
              <div className='space-y-6'>
                <div className='flex items-start'>
                  {/* <div className='bg-blue-600 p-3 rounded-full mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div> */}
                  {/* <div>
                    <h3 className='font-bold text-lg'>Our Address</h3>
                    <p className='text-gray-300'>123 Business Avenue, Suite 456<br />New York, NY 10001</p>
                  </div> */}
                </div>
                
                <div className='flex items-start'>
                  <div className='bg-[#FBB041] p-3 rounded-full mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-lg'>Phone Number</h3>
                    <p className='text-gray-300'>0620394795<br />Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
                
                <div className='flex items-start'>
                  <div className='bg-[#FBB041] p-3 rounded-full mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-lg'>Email Us</h3>
                    <p className='text-gray-300'>utaroshop23@gmail.com </p>
                  </div>
                </div>
              </div>
              
              <div className='mt-8'>
                <h3 className='font-bold text-lg mb-4'>Follow Us</h3>
                <div className='flex space-x-4'>
                  <a href="https://www.facebook.com/profile.php?id=100083882138828" target='blank' className='bg-[#242626] hover:bg-blue-600 p-3 rounded-full transition duration-300'>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://wa.me/212620394795" className='bg-[#242626] hover:bg-green-800 p-3 rounded-full transition duration-300'>
                    <svg className="w-5 h-5" fill="currentColor"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"/><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/utaro_shop/" target='blank' className='bg-[#242626] hover:bg-pink-600 p-3 rounded-full transition duration-300'>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* <a href="#" className='bg-[#242626] hover:bg-red-600 p-3 rounded-full transition duration-300'>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}