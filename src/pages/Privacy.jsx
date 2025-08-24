// PrivacyPolicy.js
import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation Bar */}
      <NavBar/>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FBB041]">Privacy Policy</h1>
          <p className="text-[#FBB041]/80 text-lg">Last Updated: October 28, 2023</p>
        </div>
        
        <div className="space-y-8">
          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to Utaro ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital accounts selling service.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">2. Information We Collect</h2>
            <h3 className="text-lg font-medium mb-2 text-[#FBB041]">Personal Information:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-3 pl-5 space-y-2">
              <li>Full name and contact information</li>
              <li>Email address and phone number</li>
              <li>Payment information (processed securely through our payment partners)</li>
              <li>Account credentials for purchased digital accounts</li>
            </ul>
            
            <h3 className="text-lg font-medium mb-2 text-[#FBB041]">Technical Information:</h3>
            <ul className="list-disc list-inside text-gray-300 pl-5 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our site</li>
            </ul>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-300 pl-5 space-y-2">
              <li>Process transactions and deliver purchased digital accounts</li>
              <li>Provide customer support and service</li>
              <li>Send important updates and notifications</li>
              <li>Improve our services and user experience</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">4. Data Security</h2>
            <p className="text-gray-300">
              We implement industry-standard security measures to protect your personal information. All sensitive data is encrypted using SSL technology, and payment information is handled by secure, PCI-compliant payment processors.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">5. Third-Party Disclosure</h2>
            <p className="text-gray-300">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except for trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300">
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">7. Your Rights</h2>
            <p className="text-gray-300">
              You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time by contacting us at privacy@utaro.com.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">8. Children's Privacy</h2>
            <p className="text-gray-300">
              Our service is not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#FBB041] hover:bg-gray-900/80 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3 text-[#FBB041]">10. Contact Information</h2>
            <p className="text-gray-300">
              For any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;