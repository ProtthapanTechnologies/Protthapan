import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Gallery = () => {
    const videos = [
        { url: 'https://www.youtube.com/embed/5-2DlOoyJb4?si=mZP82cA-VTb6BTQ1', title: 'Protthapan Drone Demo' },
        { url: 'https://www.youtube.com/embed/IOFIUHVI9jk?si=DDjuM5SkoYzhxZFF', title: 'AI-Powered Drone Showcase' },
        { url: 'https://youtube.com/embed/5VNPt_lgJ3o?feature=share', title: 'Surveillance Quadcopter in Action' },
        { url: 'https://youtu.be/TvZlLhhW2ok?feature=shared', title: 'Gati' },

    ];
    

    return (
        <>
            <NavBar />
            <div className="bg-white py-24 lg:py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 animate-fadeInUp">
                        <h2 className="text-4xl font-extrabold text-gray-900">Video Gallery</h2>
                        <p className="text-lg text-gray-600 mt-2">See our technology in action.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                            >
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        className="w-full h-full"
                                        src={video.url}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl text-gray-800">{video.title}</h3>
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

export default Gallery;