import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Stats = ({ title, subtitle, delay, percent }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={delay} className="flex flex-col px-4 py-8">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }} delayedCall>
                {({ isVisible }) => (
                    <h5 className="font-normal">
                        {isVisible ? (
                            <>
                                <CountUp end={title} duration={5} />
                                {percent ? '%' : '+'}
                            </>
                        ) : (
                            '.'
                        )}
                    </h5>
                )}
            </VisibilitySensor>
            <p className="text-lg font-manrope">{subtitle}</p>
        </div>
    );
};

const AboutStats = () => {
    return (
        <div className="flex flex-col w-full px-[5%] justify-center py-24 gap-12">
            <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" className='text-4xl font-bold !leading-snug'>
                Our legacy of <span className="text-blue-400">empowerment</span> and <span className="text-blue-400">opportunity</span>
            </h1>
            <div className="flex flex-col md:flex-row">
                <div className="grid items-center grid-cols-2 md:w-1/2 gap-y-0 md:gap-y-12 gap-x-12">
                    <Stats delay={150} title={200} percent={false} subtitle="Jobs Available" />
                    <Stats delay={200} title={90} percent={true} subtitle="Candidate Satisfaction Rate" />
                    <Stats delay={250} title={5} percent={false} subtitle="Years in Recruitment" />
                    <Stats delay={300} title={150} percent={false} subtitle="Successful Hires" />
                </div>
                <p
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                    className="flex flex-col gap-4 pt-4 text-lg md:w-1/2 font-manrope"
                >
                    <div>
                        Himalayan Recruitment is your trusted partner for finding top talent and the best job opportunities across
                        industries in the Himalayan region.
                    </div>
                    <div>
                        We specialize in connecting businesses with qualified candidates and ensuring a seamless hiring experience
                        with our personalized recruitment solutions.
                    </div>
                </p>
            </div>
        </div>
    );
};

export default AboutStats;
