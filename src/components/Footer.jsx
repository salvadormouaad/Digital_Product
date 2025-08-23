import logo from '../assets/Utaro No Bg.png'
export default function Footer() {
  return (
    <footer className="bg-[#1a1c1e] text-gray-300 pt-10 pb-8 px-4 max-md:text-center">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:ml-30 md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-[#FBB041]">Utaro</span>_Shop
                {/* <img src={{ logo }} alt="" /> */}
            </h3>
            <p className="text-gray-400">
              Creating meaningful connections through innovative solutions and exceptional service.
            </p>
           
          </div>

          {/* Quick Links */}
          <div className='max-md:text-center'>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 max-md:text-center">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-[#FBB041] transition duration-300 flex items-center max-md:justify-center"
                  >
                    <span className="w-2 h-2 bg-[#FBB041] rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {['Web Design', 'App Development', 'Digital Marketing', 'SEO', 'Consulting'].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="hover:text-[#FBB041] transition duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#FBB041] rounded-full mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-[#242626] text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#FBB041] w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-[#FBB041] hover:bg-[#e09e3a] text-white px-4 py-2 rounded-r-lg transition duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2d2f30] my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Utaro. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#FBB041] text-sm transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#FBB041] text-sm transition duration-300">
              Terms of Service
            </a>
            
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#FBB041] hover:bg-[#e09e3a] text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

// // Usage in your component:
// export default function ContactPage() {
//   return (
//     <>
//       <div 
//         className='bg-cover bg-center max-md:h-auto min-h-screen flex items-center justify-center' 
//         style={{ backgroundImage: `url(${Bg})` }}
//       >
//         {/* Your existing contact component */}
//       </div>
//       <CreativeFooter />
//     </>
//   );
// }