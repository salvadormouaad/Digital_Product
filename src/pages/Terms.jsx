// TermsOfService.js
import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation Bar */}
      <NavBar/>

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FBB041]">Terms of Service</h1>
          <p className="text-[#FBB041]/80 text-lg">Last Updated: October 28, 2023</p>
        </div>
        
        <div className="space-y-8">
          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">1. Agreement to Terms</h2>
            <p className="text-gray-300">
              By accessing or using Utaro's digital accounts selling service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">2. Service Description</h2>
            <p className="text-gray-300">
              Utaro provides a platform for purchasing digital accounts for various online services. We act as an intermediary between buyers and sellers of digital accounts.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">3. Account Registration</h2>
            <p className="text-gray-300">
              To purchase digital accounts, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">4. Purchases and Payments</h2>
            <ul className="list-disc list-inside text-gray-300 pl-5 space-y-2">
              <li>All prices are listed in USD</li>
              <li>Payments are processed through secure third-party payment processors</li>
              <li>All sales are final unless otherwise specified</li>
              <li>Digital accounts are delivered immediately upon successful payment</li>
            </ul>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">5. Refund Policy</h2>
            <p className="text-gray-300">
              Due to the digital nature of our products, all sales are final. Refunds may be considered only in cases where the purchased account is non-functional or not as described. Refund requests must be submitted within 24 hours of purchase.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">6. Prohibited Activities</h2>
            <p className="text-gray-300 mb-2">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-300 pl-5 space-y-2">
              <li>Use purchased accounts for illegal activities</li>
              <li>Resell accounts without authorization</li>
              <li>Attempt to circumvent our security measures</li>
              <li>Use automated systems to access our service</li>
              <li>Engage in fraudulent activities</li>
            </ul>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">7. Intellectual Property</h2>
            <p className="text-gray-300">
              All content on the Utaro platform, including logos, text, and software, is the property of Utaro and is protected by intellectual property laws. Purchased digital accounts are licensed for personal use only.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">8. Limitation of Liability</h2>
            <p className="text-gray-300">
              Utaro shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our service, including but not limited to damages for lost profits.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">9. Termination</h2>
            <p className="text-gray-300">
              We reserve the right to terminate or suspend your account and access to our service at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">10. Governing Law</h2>
            <p className="text-gray-300">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">11. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of the service constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">12. Contact Information</h2>
            <p className="text-gray-300">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: <span className="text-[#FBB041] font-medium">utaroshop32@gmail.com</span>
              <br />
            
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default TermsOfService;