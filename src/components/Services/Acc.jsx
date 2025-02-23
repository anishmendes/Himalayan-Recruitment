import { useState } from "react";
import { FaChevronDown, FaUser, FaCogs, FaPhoneAlt, FaTimesCircle, FaMoneyBillAlt, FaRegQuestionCircle, FaRegCalendarAlt } from "react-icons/fa";

const Acc = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-10 bg-blue-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {/* Question 1 */}
          <div
            className="transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-blue-100"
            onClick={() => toggleAnswer(1)}
          >
            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-3">
                <FaRegQuestionCircle className="text-primary" />
                <span className="text-lg font-semibold text-black">How can I start my recruitment process?</span>
              </div>
              <FaChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-all ${openQuestion === 1 ? "rotate-180" : ""}`}
              />
            </button>
            {openQuestion === 1 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Starting with Himalayan Recruitment is simple. Just sign up, submit your requirements, and we'll match you with the best candidates in your industry. Our team will assist you every step of the way!
                </p>
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div
            className="transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-blue-100"
            onClick={() => toggleAnswer(2)}
          >
            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-3">
                <FaUser className="text-primary" />
                <span className="text-lg font-semibold text-black">What type of candidates can I find?</span>
              </div>
              <FaChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-all ${openQuestion === 2 ? "rotate-180" : ""}`}
              />
            </button>
            {openQuestion === 2 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  We specialize in finding skilled professionals across various sectors. From IT specialists to managerial roles, Himalayan Recruitment can help you find the right talent.
                </p>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div
            className="transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-blue-100"
            onClick={() => toggleAnswer(3)}
          >
            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-3">
                <FaCogs className="text-primary" />
                <span className="text-lg font-semibold text-black">What services do you offer for employers?</span>
              </div>
              <FaChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-all ${openQuestion === 3 ? "rotate-180" : ""}`}
              />
            </button>
            {openQuestion === 3 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Himalayan Recruitment offers full-service recruitment solutions including candidate sourcing, screening, interviews, and placement, ensuring the best match for your company.
                </p>
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div
            className="transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-blue-100"
            onClick={() => toggleAnswer(4)}
          >
            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-primary" />
                <span className="text-lg font-semibold text-black">How can I get in touch with you?</span>
              </div>
              <FaChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-all ${openQuestion === 4 ? "rotate-180" : ""}`}
              />
            </button>
            {openQuestion === 4 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  You can contact us via phone, email, or our contact form on the website. We are available to assist you with any queries you may have regarding recruitment or our services.
                </p>
              </div>
            )}
          </div>

          {/* Question 5 */}
          <div
            className="transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-blue-100"
            onClick={() => toggleAnswer(5)}
          >
            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-3">
                <FaMoneyBillAlt className="text-primary" />
                <span className="text-lg font-semibold text-black">What are your service fees?</span>
              </div>
              <FaChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-all ${openQuestion === 5 ? "rotate-180" : ""}`}
              />
            </button>
            {openQuestion === 5 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Our service fees are competitive and based on the scope of your hiring needs. We provide a detailed pricing breakdown upon request.
                </p>
              </div>
            )}
          </div>

          {/* Question 6 */}
          <div
            className="transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-blue-100"
            onClick={() => toggleAnswer(6)}
          >
            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-3">
                <FaRegCalendarAlt className="text-primary" />
                <span className="text-lg font-semibold text-black">How long does the recruitment process take?</span>
              </div>
              <FaChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-all ${openQuestion === 6 ? "rotate-180" : ""}`}
              />
            </button>
            {openQuestion === 6 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  The recruitment process varies depending on the position and urgency. On average, it takes 2-4 weeks to find the right candidate for your business.
                </p>
              </div>
            )}
          </div>

          {/* Question 7 */}
          <div
            className="transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-blue-100"
            onClick={() => toggleAnswer(7)}
          >
            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-3">
                <FaTimesCircle className="text-primary" />
                <span className="text-lg font-semibold text-black">Can I cancel the recruitment process?</span>
              </div>
              <FaChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-all ${openQuestion === 7 ? "rotate-180" : ""}`}
              />
            </button>
            {openQuestion === 7 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Yes, you can cancel the recruitment process at any time before an offer is made. There are no hidden fees for cancellation.
                </p>
              </div>
            )}
          </div>

          {/* Question 8 */}
          <div
            className="transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-blue-100"
            onClick={() => toggleAnswer(8)}
          >
            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
              <div className="flex items-center space-x-3">
                <FaUser className="text-primary" />
                <span className="text-lg font-semibold text-black">Can I be a recruiter with Himalayan Recruitment?</span>
              </div>
              <FaChevronDown
                className={`w-6 h-6 text-gray-400 transform transition-all ${openQuestion === 8 ? "rotate-180" : ""}`}
              />
            </button>
            {openQuestion === 8 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Yes! If you're interested in joining our team as a recruiter, you can apply through our website, and we’ll review your qualifications and experience.
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{" "}
          <span className="cursor-pointer font-medium text-blue-600 transition-all duration-200 hover:text-blue-800 hover:underline">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
};

export default Acc;
