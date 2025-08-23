import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I purchase a subscription?",
      answer: "Click the 'Order Now' button on your preferred plan, and we will put you in Contact with one of our agents ."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Par Bank Cih / Tijari / chaabi / Wafacash."
    },
    {
      question: "Can I share my account with family?",
      answer: "Our Premium plans allow simultaneous streaming on up to 4 devices."
    },
    {
      question: "Are Those Subscriptions Legal?",
      answer: "Yeah our store offers legal accounts and guaranted for all the period"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 lg:mt-30 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold  text-center text-Black mb-10">
        Frequently Asked <span className="text-yellow-500">Questions</span>
      </h2>
      
      <div className="space-y-4 lg:mt-20">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-red-600 pb-4 transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <span className={`text-lg font-medium ${activeIndex === index ? 'text-orange-400' : 'text-black'}`}>
                {faq.question}
              </span>
              <span className="text-red-500 text-2xl">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'}`}
            >
              <p className="text-black pl-2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FAQ;