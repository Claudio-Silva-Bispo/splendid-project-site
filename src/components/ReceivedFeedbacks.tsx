import React, { useState, useEffect } from 'react';

const feedbacks = [
    "The service was excellent! I needed a locksmith in an emergency and was quickly assisted. Additionally, the team also recharged the battery, which was very efficient and helped me get back on the road in no time. Highly recommend to everyone!",
    "The quality of service is unmatched. Always fast, efficient, and with fair prices. I wouldn't choose another company!",
    "Impressed with the speed and quality of the service. Very satisfied and will definitely use it again!",
    "Excellent work! The team was friendly, efficient, and left everything spotless. Highly recommend their services."
];

export default function ReceivedFeedbacks() {
    const [activeFeedback, setActiveFeedback] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveFeedback((currentFeedback) => (currentFeedback + 1) % feedbacks.length);
        }, 10000); // Changes feedback every 10 seconds

        return () => clearInterval(intervalId); // Clears the interval when the component is unmounted
    }, []);

    return (
        <section>

            <div className="flex flex-col justify-center items-center p-4 space-y-6 md:p-8 min-h-[90vh] bg-segunda w-full mx-auto">

                <div className="md:text-center sm:text-left md:mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primeira mt-20 md:mt-0">
                    <h3 className="text-3xl font-semibold text-primeira">Come and Learn More</h3>
                    
                    <span className="text-sm font-bold tracking-wider uppercase text-white">
                    What people are saying about us on social media and in reviews
                    </span>
                </div>
            
                
                <p className="px-6 py-2 text-2xl md:text-5xl font-semibold text-center sm:font-bold sm:text-3xl lg:max-w-2xl xl:max-w-4xl text-white">
                    "{feedbacks[activeFeedback]}"
                </p>

                <div className="flex justify-center space-x-3">
                
                    <div>
            
                        <a className="flex items-center py-2 space-x-1 text-sm text-[#FF7F2C] text-center" href="/PageReceivedFeedbacks">
                            <span>Curious? Learn more by clicking here!</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                              
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
