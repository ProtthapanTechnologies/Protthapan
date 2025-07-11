import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Gallery = () => {
    const videos = [
        {
            url: 'https://www.youtube.com/embed/5-2DlOoyJb4?si=mZP82cA-VTb6BTQ1',
            title: 'Protthapan Drone Demo',
        },
        {
            url: 'https://www.youtube.com/embed/IOFIUHVI9jk?si=DDjuM5SkoYzhxZFF',
            title: 'AI-Powered Drone Showcase',
        },
        {
            url: 'https://youtube.com/embed/5VNPt_lgJ3o?feature=share',
            title: 'Surveillance Quadcopter in Action',
        },
    ];

    return (
        <>
            <NavBar />
            <div className="bg-black text-sky-500 py-12 mt-16 min-h-screen font-sans text-[17px] tracking-tight">
                <div className="container mx-auto px-4">
                    <h1 className="text-center text-4xl font-extrabold uppercase mb-12 animate-fadeInUp">
                        Video Gallery
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl shadow-2xl bg-gray-800 hover:scale-105 transition-transform duration-300 animate-scaleIn flex flex-col items-center"
                                style={{ animationDelay: `${0.1 * index}s` }}
                            >
                                <iframe
                                    className="w-full h-64 rounded-t-2xl animate-fadeIn"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4 text-center w-full animate-fadeInUp">
                                    <p className="text-lg font-semibold leading-tight">{video.title}</p>
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