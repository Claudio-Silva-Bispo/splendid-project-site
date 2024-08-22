import Image from "next/image";
import { useState } from "react";

import imagem from "../../public/assets/iPhone 15 Mockup, Perspective.png"

export default function FormContact(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        location: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://splendid-project-site.vercel.app/api/criarContato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok){
                alert('Message sent successfully');
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    location: "",
                    message: "",
                });
            } else {
                alert('Error sending message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return(
        <div className="m-4 md:m-8 md:p-10" id="contact">
            
            <div className="container mx-auto p-4 my-6 space-y-2 text-center bg-segunda text-white pt-20 pb-20 md:pt-10 md:pb-10">
                
                <h2 className="text-3xl font-bold text-start md:text-center leading-relaxed uppercase">Differentiated Contact Form, Designed <br /> <span className="uppercase text-white">for You and Your Business</span></h2>
                
                <p className="text-start md:text-center">Quick and efficient service for you, your family, business, and friends</p>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 border rounded-md ">
                <div className="mockup-phone border-primary w-full p-5" style={{ borderColor: '#E5332F' }}>
                    <div className="camera"></div>
                    
                    <div className="display border rounded-md">
                        <div className="artboard artboard-demo phone-1">
                            <form onSubmit={handleSubmit} className="space-y-4 p-4" name="contact-form-oficina">
                                
                                <h3 className="text-xl font-semibold uppercase text-center">Contact Form</h3>
                                
                                <div className="grid md:grid-cols-2 gap-5 w-full">
                                    
                                    <div className="min-w-full">
                                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                        <input type="text" id="name" className="min-w-full p-2 border border-gray-300 rounded" onChange={handleChange} value={formData.name} />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                                        <input type="number" id="phone" className="min-w-full p-2 border border-gray-300 rounded" placeholder="(xx) xxxxx-xxxx" onChange={handleChange} value={formData.phone} />
                                    </div>

                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                    <input type="mail" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="youremail@domain.com" onChange={handleChange} value={formData.email} />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium">Type of Service</label>
                                    
                                    <select id="service" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange} value={formData.service}>
                                        <option>Select an option</option>
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Biweekly</option>
                                        <option>Monthly</option>
                                        <option>One-time</option>
                                        <option>Customized</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium">Address</label>
                                    <input type="text" id="location" className="w-full p-2 border border-gray-300 rounded text-sm" placeholder="Enter the street, number, and ZIP code" onChange={handleChange} value={formData.location} />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium">Additional Details</label>
                                    <textarea id="message" className="w-full p-2 border border-gray-300 rounded text-sm" placeholder="Provide more details about your address and your request" onChange={handleChange} value={formData.message}></textarea>
                                </div>

                                <button type="submit" className="w-full py-2 px-4 font-semibold text-white rounded" style={{ backgroundColor: '#FF7F2C' }}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-4 text-center lg:text-left ">
                    <Image src={imagem.src} width={800} height={800} alt="Image of two phones with our services displayed"></Image>
                </div>
            </div>
        </div>
    );
}
