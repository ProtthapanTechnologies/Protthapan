import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const DemoProduct = (props) => {
    useDocTitle('Protthapan - Schedule a Demo');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [demoProducts, setDemoProducts] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setDemoProducts([...demoProducts, value]);
        } else {
            setDemoProducts(demoProducts.filter((e) => e !== value));
        }
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        // Also reset checkboxes if needed by clearing the form
        document.getElementById('demoProductForm').reset();
        setDemoProducts([]);
    };

    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        const payload = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            message: message,
            products: demoProducts.join(', '),
        };

        axios
            .post(process.env.REACT_APP_CONTACT_API, payload)
            .then((response) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                clearInput();
                Notiflix.Report.success('Success', response.data.message, 'Okay');
            })
            .catch((error) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                if (error.response) {
                    Notiflix.Report.failure('Error', error.response.data.message, 'Okay');
                } else {
                    Notiflix.Report.failure('Error', 'Something went wrong. Try again.', 'Okay');
                }
            });
    }

    return (
        <>
            <NavBar />
            <div id="demo" className="flex justify-center items-center w-full bg-gray-50 py-12 lg:py-24 pt-28">
                <div className="container mx-auto my-8 px-4 lg:px-20 animate-fadeInUp">
                    <form onSubmit={sendEmail} id="demoProductForm">
                        <div className="w-full bg-white text-gray-800 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-gray-900 uppercase text-4xl">Request a Demo</h1>
                            </div>
                            <p className="text-gray-600 my-4">Select the products you are interested in:</p>
                            
                            {/* Checkboxes */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center">
                                    <input id="checkbox-1" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" value="SurveilRover 4X" onChange={handleChange} />
                                    <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-700">SurveilRover 4X</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="checkbox-2" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" value="HexaCopter" onChange={handleChange} />
                                    <label htmlFor="checkbox-2" className="ml-3 text-lg font-medium text-gray-700">HexaCopter</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="checkbox-3" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" value="Quadcopter" onChange={handleChange} />
                                    <label htmlFor="checkbox-3" className="ml-3 text-lg font-medium text-gray-700">Quadcopter</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="checkbox-4" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" value="Training and Certification" onChange={handleChange} />
                                    <label htmlFor="checkbox-4" className="ml-3 text-lg font-medium text-gray-700">Training and Certification</label>
                                </div>
                            </div>

                            {/* Input Fields */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input name="first_name" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="First Name*" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <input name="last_name" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Last Name*" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                <input name="email" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input name="phone_number" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="my-4">
                                <textarea name="message" placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full w-full focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-600 text-white rounded-2xl shadow-xl">
                        <div className="flex flex-col">
                            <div className="flex my-4 w-full">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-blue-100">Ahmedabad, India</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-full">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-blue-100">Tel: 9725661257</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-full">
                                <div className="flex flex-col">
                                    <i className="fas fa-envelope pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Send an E-mail</h2>
                                    <p className="text-blue-100">info@protthapan.in</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.linkedin.com/in/protthapan-6202042bb/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-blue-500 h-8 text-white w-8 mx-1 text-center pt-1 hover:bg-white hover:text-blue-600 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black">
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.97v16h4.97v-7.934c0-2.022 1.184-3.111 2.664-3.111 1.476 0 2.444 1.086 2.444 3.111v7.934h4.97v-8.355c0-4.198-2.225-6.145-5.248-6.145-2.522 0-4.198 1.447-4.854 2.866l-.022-.019v-2.36h-4.97v16h4.97v-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DemoProduct;