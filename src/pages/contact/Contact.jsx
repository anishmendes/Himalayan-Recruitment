import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  return (
      <section className=" " id="contact">
        <Navbar/>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
           
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-primary text-3xl sm:text-5xl">
              Get in Touch with Himalayan Recruitment
            </h2>
            <p className="mx-auto mt-4 font-semibold max-w-3xl text-xl text-gray-600 dark:text-black">
              We help you find the right talent or the right job. Reach out to us today!
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-black">
                Whether you are seeking to hire skilled professionals or looking for a new opportunity, Himalayan
                Recruitment is your trusted partner. We specialize in recruitment solutions that meet your needs.
              </p>
              <ul className="mb-6 md:mb-0">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-primary">Our Office</h3>
                    <p className="text-gray-600 dark:text-primary">1234 Himalaya Road, Kathmandu, Nepal</p>
                    <p className="text-gray-600 dark:text-primary">Office Hours: Mon - Fri: 09:00 AM - 06:00 PM</p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-primary">Contact Us</h3>
                    <p className="text-gray-600 dark:text-primary">Mobile: +977 123 456 789</p>
                    <p className="text-gray-600 dark:text-primary">Email: info@himalayanrecruitment.com</p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-primary">Working Hours</h3>
                    <p className="text-gray-600 dark:text-primary">Monday - Friday: 09:00 AM - 06:00 PM</p>
                    <p className="text-gray-600 dark:text-primary">Saturday: 10:00 AM - 02:00 PM</p>
                  </div>
                </motion.li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-primary">Ready to Start Your Recruitment Journey?</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label  className="pb-1 text-xs uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        id="name"
                       
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-primary sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label  className="pb-1 text-xs uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        id="email"
                       
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-primary sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label  className="pb-1 text-xs uppercase tracking-wider">Message</label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-primary sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0 hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
