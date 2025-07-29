import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('Contact Us - Protthapan');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        const payload = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            message: message,
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
    };

    return (
        <>
            <NavBar />
            {/* Use a very light gray background for the page to make the form stand out */}
            <div className="bg-gray-50 pt-24 pb-12">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 animate-fadeInUp">
                        <h1 className="text-4xl font-extrabold text-gray-900">Get in Touch</h1>
                        <p className="text-lg text-gray-600 mt-2">We'd love to hear from you. Please fill out the form below.</p>
                    </div>

                    {/* Use a pure white background for the form card */}
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <form onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    name="first_name"
                                    className="w-full bg-gray-100 text-gray-800 p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    type="text"
                                    placeholder="First Name*"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    name="last_name"
                                    className="w-full bg-gray-100 text-gray-800 p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    type="text"
                                    placeholder="Last Name*"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <input
                                    name="email"
                                    className="w-full bg-gray-100 text-gray-800 p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    type="email"
                                    placeholder="Email*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    name="phone_number"
                                    className="w-full bg-gray-100 text-gray-800 p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    type="number"
                                    placeholder="Phone*"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-800 p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="px-8 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;