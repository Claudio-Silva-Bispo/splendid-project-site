import { useState } from "react";

export default function FormFeedback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        rating: 0,
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Submitting form:', formData);

        try {
            const response = await fetch('https://splendid-project-site.vercel.app/api/criarFeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully');
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    rating: 0,
                    message: "",
                });
            } else {
                alert('Error sending message.' + console.log(formData));
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleStarClick = (rating: number) => {
        setFormData({ ...formData, rating });
    };

    return (
        <section className="bg-white pt-20">
            
            <div className="container flex flex-col-reverse lg:flex-row">
                <div className="flex flex-col p-20 space-y-6 rounded-sm lg:w-1/2 xl:w-3/5 text-black">
                    <h1 className="font-bold text-2xl uppercase text-primeira">About our services, how was your experience?</h1>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-segunda">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug text-primeira">Residential Service</p>
                            <p className="leading-snug">Quick and efficient service for your home.</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-segunda">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug text-primeira">Commercial Service</p>
                            <p className="leading-snug">Keep your business spotless.</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-segunda">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>

                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug text-primeira">Daily, Weekly, Monthly, Customized</p>
                            <p className="leading-snug">Customize the service to your liking and according to your schedule.</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-segunda">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug text-primeira">Contact</p>
                            <p className="leading-snug">Choose the best contact method for you: Phone, SMS, WhatsApp, Email?</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 xl:w-3/5 bg-white">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <div className="flex flex-col max-w-xl p-6 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                            
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col items-center w-full">
                                    <h2 className="text-3xl font-semibold text-center">Your feedback matters to us</h2>
                                    <div className="flex flex-col items-center py-6 space-y-3">
                                        <span className="text-center">How was your experience?</span>
                                        <div className="flex space-x-3">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => handleStarClick(star)}
                                                    title={`Rate ${star} stars`}
                                                    aria-label={`Rate ${star} stars`}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className={`w-10 h-10 ${formData.rating >= star ? 'text-yellow-300' : 'text-gray-400'}`}
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <textarea
                                            rows={3}
                                            placeholder="Message..."
                                            className="p-4 rounded-md resize-none dark:text-gray-800"
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>

                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="p-4 rounded-md resize-none dark:text-gray-800 mt-3"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />

                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="p-4 rounded-md resize-none dark:text-gray-800 mt-3"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        
                                        <button type="submit" className="py-4 my-4 font-semibold rounded-md dark:text-gray-50" style={{ backgroundColor: '#1C6F42' }}>
                                            Leave your message
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center justify-center">
                                <a rel="noopener noreferrer" href="/" className="text-sm dark:text-gray-600">Return to Menu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
