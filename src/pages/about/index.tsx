import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const About: React.FC = () => {

    return (
        <>
            <div className="about-banner relative bg-[url('/images/about-banner.webp')] bg-repeat bg-center h-custom-height flex items-center">
            <div className="absolute inset-0 bg-black opacity-30"></div>
                <Container>
                    <div className="about-text text-center relative z-[1]">
                        <h1 className="text-[70px] text-white font-frank">About Us</h1>
                        <div className="flex justify-center gap-3">
                            <Link to="/home" className="text-base text-white font-poppins">Home</Link>
                            <span className="text-base text-white font-poppins"> {'>'} </span>
                            <span className="text-base text-white font-poppins">About Us</span>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="about-us py-[80px]">
                <Container>
                    <div className="flex items-center">
                        <div className="w-1/2 pr-[85px]">
                          <h2 className="text-black text-[48px] font-frank">About Us</h2>
                          <p className="text-base leading-[26px] text-black font-poppins">We are dedicated to transforming the 360 feedback process using AI-driven technology to provide personalized, actionable insights for businesses of all sizes. Not only does AI help generate personalized reports almost instantaneously, but we also utilize the essence of artificial intelligence to create ongoing feedback loops with the ongoing feedback from each individual survey. That means the our AI will learn more and more about each employee after each iteration, being able to provide better and better customized feedback each time.</p>
                        </div>
                        <div className="w-1/2">
                          <img src="/images/about.webp" alt="about us"/>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="bg-custom-bg pt-[80px] pb-[260px]">
                <Container className="relative">
                <div className="absolute bg-black w-[1px] left-[50%] translate-x-[-50%] h-full"></div>
                <div className="flex relative">
                    <div className="w-full max-w-[620px] relative pt-[22px]">
                       <div className="bg-white py-[95px] px-[70px]">
                        <h2 className="text-black text-[48px] font-frank">Our Mission</h2>
                        <p className="text-base leading-[26px] text-black font-poppins">To revolutionize employee feedback by making it concise, relevant, and impactful.</p>
                       </div>
                       <div className="absolute right-[-18px] top-[50%] translate-y-[-50%] rotate-[45deg] bg-white w-9 h-9"></div>
                    </div>
                    <div className="w-full max-w-[203px] text-center relative">
                       <span className="w-[50px] h-[50px] rounded-full absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] t bg-custom-color"></span>
                    </div>
                    <div className="w-full max-w-[620px]">
                      <img src="/images/mission.webp" alt="Misson image"/>
                    </div>
                </div>
                <div className="flex pt-[97px]">
                <div className="w-full max-w-[620px]">
                      <img src="/images/vision.webp" alt="Misson image"/>
                    </div>

                    <div className="w-full max-w-[203px] text-center relative">
                       <span className="w-[50px] h-[50px] rounded-full absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] t bg-custom-color"></span>
                    </div>

                    <div className="w-full max-w-[620px] relative">
                       <div className="bg-white py-[95px] px-[70px]">
                        <h2 className="text-black text-[48px] font-frank">Our Mission</h2>
                        <p className="text-base leading-[26px] text-black font-poppins">To revolutionize employee feedback by making it concise, relevant, and impactful.</p>
                       </div>
                       <div className="absolute left-[-18px] top-[50%] translate-y-[-50%] rotate-[45deg] bg-white w-9 h-9"></div>
                    </div>

                </div>
                </Container>
            </div>

        </>
    );
};

export default About;
