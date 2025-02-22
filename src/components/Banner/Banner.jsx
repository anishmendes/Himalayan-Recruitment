import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Stats = ({ title, subtitle, delay, percent }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={delay} className="flex flex-col px-4 py-8 text-center">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }} delayedCall>
                {({ isVisible }) => (
                    <h5 className="text-5xl font-extrabold text-blue-600">
                        {isVisible ? (
                            <>
                                <CountUp end={title} duration={5} />
                                {percent ? '%' : '+'}
                            </>
                        ) : (
                            '...'
                        )}
                    </h5>
                )}
            </VisibilitySensor>
            <p className="text-lg font-semibold text-gray-700 mt-2">{subtitle}</p>
        </div>
    );
};

const AboutStats = () => {
    return (
        <div className="flex flex-col w-full px-[5%] justify-center py-24 gap-12">
            <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" className='text-5xl font-extrabold leading-tight text-center md:text-left'>
                A Legacy of <span className="text-blue-500">Empowerment</span> and <span className="text-blue-500">Opportunities</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center">
                <div className="grid items-center grid-cols-2 md:w-1/2 gap-y-12 gap-x-16">
                    <Stats delay={150} title={200} percent={false} subtitle="Active Job Listings" />
                    <Stats delay={200} title={90} percent={true} subtitle="Candidate Success Rate" />
                    <Stats delay={250} title={5} percent={false} subtitle="Years of Recruitment Excellence" />
                    <Stats delay={300} title={150} percent={false} subtitle="Successful Career Placements" />
                </div>
                <p
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                    className="flex flex-col gap-6 pt-4 text-lg md:w-1/2 font-manrope text-gray-800 leading-relaxed"
                >
                    <div>
                        At <strong>Himalayan Recruitment</strong>, we take pride in connecting top talent with leading employers, fostering long-term success.
                    </div>
                    <div>
                        Our expert-driven approach ensures businesses find the perfect candidates while job seekers land rewarding careers tailored to their skills and ambitions.
                    </div>
                </p>
            </div>
        </div>
    );
};

export default AboutStats;
