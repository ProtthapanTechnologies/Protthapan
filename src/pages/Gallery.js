import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Gallery = () => {
    const videos = [
        'https://www.youtube.com/embed/5-2DlOoyJb4?si=mZP82cA-VTb6BTQ1', // Replace with your video URLs
        'https://www.youtube.com/embed/IOFIUHVI9jk?si=DDjuM5SkoYzhxZFF',
        'https://youtube.com/embed/5VNPt_lgJ3o?feature=share',
    ];

    return (
        <>
            <NavBar />
            <div className="bg-black text-sky-500 py-12 mt-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-center text-4xl font-bold uppercase mb-12">
                        Video Gallery
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:scale-105 transition-transform duration-300"
                            >
                                <iframe
                                    className="w-full h-64 rounded-t-lg"
                                    src={video}
                                    title={`YouTube video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
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