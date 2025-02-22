import React from "react";
import { motion } from "framer-motion";
import industry from "../../assets/industry.png";
import dedicated from "../../assets/Dedicated.png";
import Committed from "../../assets/Committed.png";
import vision from "../../assets/vision.png";

const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const WhyUs = () => {
  return (
    <div className="text-center p-8">
      <motion.h2
        variants={FadeUp(0.3)}
        initial="initial"
        animate="animate"
        className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Why Choose Us?
      </motion.h2>

      <div className="flex flex-wrap items-center mt-20 text-left ">
        <motion.div
          variants={FadeUp(0.4)}
          initial="initial"
          animate="animate"
          className="w-full md:w-3/5 lg:w-1/2 px-4"
        >
          <img
            src={industry}
            alt="Industry Insight"
            className="inline-block rounded shadow-lg border border-merino-400 w-64 h-64 object-cover mx-auto"
          />
        </motion.div>
        <motion.div
          variants={FadeUp(0.5)}
          initial="initial"
          animate="animate"
          className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12"
        >
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Industry Insight & Knowledge
          </h3>
          <p className="sm:text-lg mt-6">
            With years of experience in recruitment, we have gained deep industry insight that allows us to
            understand the specific needs of each sector. This ensures we can find candidates who not only meet the
            job requirements but also contribute to the growth of your business.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center mt-20 text-left ">
        <motion.div
          variants={FadeUp(0.6)}
          initial="initial"
          animate="animate"
          className="w-full md:w-3/5 lg:w-1/2 px-4"
        >
          <img
            src={Committed}
            alt="Committed to Client Success"
            className="inline-block rounded shadow-lg border border-merino-400 w-64 h-64 object-cover mx-auto"
          />
        </motion.div>
        <motion.div
          variants={FadeUp(0.7)}
          initial="initial"
          animate="animate"
          className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12"
        >
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Committed to Client Success
          </h3>
          <p className="sm:text-lg mt-6">
            We prioritize your success and take a consultative approach to recruitment. By building long-term
            relationships with clients, we ensure that we can continuously support your evolving hiring needs and
            deliver tailored solutions.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center mt-20 text-left ">
        <motion.div
          variants={FadeUp(0.8)}
          initial="initial"
          animate="animate"
          className="w-full md:w-3/5 lg:w-1/2 px-4"
        >
          <img
            src={dedicated}
            alt="Dedicated Recruitment Support"
            className="inline-block rounded shadow-lg border border-merino-400 w-64 h-64 object-cover mx-auto"
          />
        </motion.div>
        <motion.div
          variants={FadeUp(0.9)}
          initial="initial"
          animate="animate"
          className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12"
        >
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Dedicated Recruitment Support
          </h3>
          <p className="sm:text-lg mt-6">
            We offer ongoing support to both clients and candidates, ensuring that placements are successful and
            that everyone involved is satisfied with the result. Our team is here to assist with any concerns
            throughout the recruitment journey and beyond.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center mt-20 text-left">
        <motion.div
          variants={FadeUp(1.0)}
          initial="initial"
          animate="animate"
          className="w-full md:w-3/5 lg:w-1/2 px-4"
        >
          <img
            src={vision}
            alt="Vision"
            className="inline-block rounded shadow-lg border border-merino-400 w-64 h-64 object-cover mx-auto"
          />
        </motion.div>
        <motion.div
          variants={FadeUp(1.1)}
          initial="initial"
          animate="animate"
          className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12"
        >
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Vision
          </h3>
          <p className="sm:text-lg mt-6">
            Himalayan Recruitment is dedicated to helping businesses find the right talent through personalized
            and effective recruitment strategies. We focus on understanding your company’s culture and goals to
            deliver candidates who can drive success.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
