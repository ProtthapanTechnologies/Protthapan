import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import newsIndiaToday from '../images/news-india-today.png';
import newsTwitter from '../images/news-twitter.png';
import newsJagran from '../images/news-jagran.png';

const News = () => {
    const newsArticles = [
        {
            title: 'Ahmedabad techie builds automated grenade detonation drone, Army orders 20 units',
            source: 'India Today',
            date: 'Jul 25, 2025',
            url: 'https://www.indiatoday.in/india/story/ahmedabad-engineer-builds-grenade-drone-gati-get-army-order-2760933-2025-07-25',
            image: newsIndiaToday,
            excerpt: 'A young engineer from Ahmedabad has developed an automated drone for grenade detonation, attracting an order of 20 units from the Indian Army. The innovation is expected to enhance operational safety and efficiency.',
        },
        {
            title: 'Ahmedabad-based techie Keshavkant Sharma builds automated grenade detonation drone, Army orders 20 units',
            source: 'X (Formerly Twitter)',
            date: 'Jul 20, 2025',
            url: 'https://x.com/IndianTechGuide/status/1949054683483435145',
            image: newsTwitter,
            excerpt: 'The Indian Tech Guide highlights the breakthrough by Keshavkant Sharma, whose drone technology is set to revolutionize defense operations with automation and AI.',
        },
        {
            title: 'Indian Army to Induct AI-Powered \'Gati\' Grenade Dropping Drone',
            source: 'Dainik Jagran',
            date: 'Jul 26, 2025',
            url: 'https://jagran.com/gujarat/ahmedabad-gati-drone-indian-army-to-induct-ai-powered-grenade-dropping-drone-23997177.html',
            image: newsJagran,
            excerpt: 'The Indian Army is preparing to induct the AI-powered "Gati" drone, designed for precision grenade delivery and advanced battlefield support.',
        },
    ];

    return (
        <>
            <NavBar />
            <div className="bg-gray-100 min-h-screen py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">In The News</h1>
                        <div className="flex justify-center mb-4">
                            <div className="w-32 border-b-4 border-blue-600"></div>
                        </div>
                        <p className="text-lg text-gray-600">Discover recent media coverage and press mentions about Protthapan.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {newsArticles.map((article, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                            >
                                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center mb-2">
                                        {/* Source icon or initials */}
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 text-blue-600 font-bold text-lg">
                                            {article.source === 'India Today' && <span>IT</span>}
                                            {article.source === 'X (Formerly Twitter)' && <span>X</span>}
                                            {article.source === 'Dainik Jagran' && <span>DJ</span>}
                                        </div>
                                        <span className="text-sm text-gray-500">{article.source} &bull; {article.date}</span>
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">{article.title}</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-auto bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-700 transition-all duration-300"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default News;