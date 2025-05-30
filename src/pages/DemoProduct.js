import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const DemoProduct = (props) => {
    useDocTitle('Protthapan');

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
        errors.products = [];
        if (checked) {
            setDemoProducts([...demoProducts, value]);
        } else {
            setDemoProducts(demoProducts.filter((e) => e !== value));
        }
    };

    const clearErrors = () => {
        setErrors([]);
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
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
            message: [message, demoProducts],
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
            <div>
                <NavBar />
            </div>
            <div id="demo" className="flex justify-center items-center mt-8 w-full bg-black py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail} id="demoProductForm">
                        <div className="w-full bg-gray-800 text-sky-500 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-sky-500 uppercase text-4xl">Our products</h1>
                            </div>
                            <div className="flex items-center my-4">
                                <input
                                    id="checkbox-1"
                                    aria-describedby="checkbox-1"
                                    type="checkbox"
                                    className="bg-gray-700 border-gray-500 focus:ring-3 focus:ring-sky-500 h-4 w-4 rounded"
                                    value="SurveilRover 4X"
                                    onChange={handleChange}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-sky-500">
                                    SurveilRover 4X
                                </label>
                            </div>
                            <div className="flex items-center my-4">
                                <input
                                    id="checkbox-2"
                                    aria-describedby="checkbox-2"
                                    type="checkbox"
                                    className="bg-gray-700 border-gray-500 focus:ring-3 focus:ring-sky-500 h-4 w-4 rounded"
                                    value="HexaCopter"
                                    onChange={handleChange}
                                />
                                <label htmlFor="checkbox-2" className="ml-3 text-lg font-medium text-sky-500">
                                    HexaCopter
                                </label>
                            </div>
                            <div className="flex items-center my-4">
                                <input
                                    id="checkbox-3"
                                    aria-describedby="checkbox-3"
                                    type="checkbox"
                                    className="bg-gray-700 border-gray-500 focus:ring-3 focus:ring-sky-500 h-4 w-4 rounded"
                                    value="Quadcopter"
                                    onChange={handleChange}
                                />
                                <label htmlFor="checkbox-3" className="ml-3 text-lg font-medium text-sky-500">
                                    Quadcopter
                                </label>
                            </div>
                            <div className="flex items-center my-4">
                                <input
                                    id="checkbox-4"
                                    aria-describedby="checkbox-4"
                                    type="checkbox"
                                    className="bg-gray-700 border-gray-500 focus:ring-3 focus:ring-sky-500 h-4 w-4 rounded"
                                    value="Training and Certification"
                                    onChange={handleChange}
                                />
                                <label htmlFor="checkbox-4" className="ml-3 text-lg font-medium text-sky-500">
                                    Training and Certification
                                </label>
                            </div>
                            {errors && <p className="text-red-500 text-sm">{errors.products}</p>}

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-700 text-sky-500 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                                </div>

                                <div>
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-700 text-sky-500 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-700 text-sky-500 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-700 text-sky-500 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-700 text-sky-500 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="uppercase text-sm font-bold tracking-wide bg-sky-500 hover:bg-sky-400 text-black p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-gray-800 rounded-2xl">
                        <div className="flex flex-col text-sky-500">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-gray-400">Ahmedabad, India</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">Tel: 9725661257</p>

                                    <div className="mt-5">
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-gray-400">info@protthapan.in</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a
                                    href="https://www.linkedin.com/in/protthapan-6202042bb/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full flex justify-center bg-gray-700 h-8 text-sky-500 w-8 mx-1 text-center pt-1 hover:bg-sky-500 hover:text-black transition duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current font-black hover:animate-pulse"
                                    >
                                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
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