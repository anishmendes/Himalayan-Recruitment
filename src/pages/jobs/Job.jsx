import React from 'react';
import job from "../../assets/Dedicated.png"
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const Job = () => {
  return (
  <>
  
     <Navbar/>
    <div className="bg-slate-100 mx-auto p-6 ">
      <div className="text-center text-2xl capitalize py-6 font-medium tracking-wider dark:text-primary">
        <h2>Explore New Job Opportunities</h2>
      </div>
      <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {/* card item */}
        <div className="w-64 shadow-md dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl">
          <div className="p-4">
            <img className="rounded-lg h-32 w-full" src={job} />
          </div>
          <div className="p-4 capitalize text-2xl font-semibold dark:text-white">
            <h2>Software Engineer</h2>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Company</h3>
            </div>
            <div>
              <h3>XYZ Corp</h3>
            </div>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Location</h3>
            </div>
            <div>
              <h3>New York</h3>
            </div>
          </div>
          <div className="p-2">
            <button className="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">Apply Now</button>
          </div>
        </div>
        {/* card item */}

        {/* card item */}
        <div className="w-64 shadow-md dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl">
          <div className="p-4">
            <img className="rounded-lg h-32 w-full" src={job}/>
          </div>
          <div className="p-4 capitalize text-2xl font-semibold dark:text-white">
            <h2>Marketing Manager</h2>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Company</h3>
            </div>
            <div>
              <h3>ABC Ltd</h3>
            </div>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Location</h3>
            </div>
            <div>
              <h3>London</h3>
            </div>
          </div>
          <div className="p-2">
            <button className="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">Apply Now</button>
          </div>
        </div>
        {/* card item */}

        {/* card item */}
        <div className="w-64 shadow-md dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl">
          <div className="p-4">
            <img className="rounded-lg h-32 w-full" src={job} />
          </div>
          <div className="p-4 capitalize text-2xl font-semibold dark:text-white">
            <h2>UI/UX Designer</h2>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Company</h3>
            </div>
            <div>
              <h3>Tech Solutions</h3>
            </div>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Location</h3>
            </div>
            <div>
              <h3>San Francisco</h3>
            </div>
          </div>
          <div className="p-2">
            <button className="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">Apply Now</button>
          </div>
        </div>
        {/* card item */}

        {/* card item */}
        <div className="w-64 shadow-md dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl">
          <div className="p-4">
            <img className="rounded-lg h-32 w-full" src={job} />
          </div>
          <div className="p-4 capitalize text-2xl font-semibold dark:text-white">
            <h2>Data Scientist</h2>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Company</h3>
            </div>
            <div>
              <h3>Data Labs</h3>
            </div>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Location</h3>
            </div>
            <div>
              <h3>Berlin</h3>
            </div>
          </div>
          <div className="p-2">
            <button className="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">Apply Now</button>
          </div>
        </div>
        {/* card item */}

        {/* Add 5 more job cards */}
        <div className="w-64 shadow-md dark:bg-gray-700 hover:scale-105 duration-300 hover:shadow-xl">
          <div className="p-4">
            <img className="rounded-lg h-32 w-full" src={job} />
          </div>
          <div className="p-4 capitalize text-2xl font-semibold dark:text-white">
            <h2>Front-End Developer</h2>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Company</h3>
            </div>
            <div>
              <h3> Innovations</h3>
            </div>
          </div>
          <div className="flex justify-between dark:text-white p-4 capitalize text-xl font-medium">
            <div>
              <h3>Location</h3>
            </div>
            <div>
              <h3>Toronto</h3>
            </div>
          </div>
          <div className="p-2">
            <button className="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">Apply Now</button>
          </div>
        </div>

        {/* Repeat this block for the next job cards */}
        {/* Add remaining job cards similarly */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Job;
