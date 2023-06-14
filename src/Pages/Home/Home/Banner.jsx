import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from '../../../assets/banner/banner.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner4 from '../../../assets/banner/banner4.jpg'
import banner5 from '../../../assets/banner/banner5.jpg'
import banner6 from '../../../assets/banner/banner6.jpg'
const Banner = () => {
    return (
        <div>
              <Carousel>
                <div>
                    <img src={banner1} />
                    <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Musical Education</h2>
                            <p>Join our music school & give your child the gift of learning, confidence, and creativity. Discover benefits of music lessons for kids & how it boosts their cognitive development. </p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner2} />
                    <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'> Rise your Voice</h2>
                            <p>Join our music school & give your child the gift of learning, confidence, and creativity. Discover benefits of music lessons for kids & how it boosts their cognitive development. </p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={banner4} />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'> Piano Master</h2>
                            <p>Join our music school & give your child the gift of learning, confidence, and creativity. Discover benefits of music lessons for kids & how it boosts their cognitive development. </p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner5} />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'> Fun Beat Music</h2>
                            <p>Join our music school & give your child the gift of learning, confidence, and creativity. Discover benefits of music lessons for kids & how it boosts their cognitive development. </p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner6} />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>MusicSoul and MUsicFairy</h2>
                            <p>Given a toy car to play with, he turned it upside down and spun its wheels. One of them tries to feed me a toy car.</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;