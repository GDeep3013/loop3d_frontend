import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const Contact: React.FC = () => {

    return (
        <>
            <div className="about-banner relative bg-[url('/images/contact-us-banner.webp')] bg-repeat bg-center h-[450px] flex items-center">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <Container>
                    <div className="about-text text-center relative z-[1]">
                        <h1 className="text-[48px] text-white font-frank">Contact Us</h1>
                        <div className="flex justify-center gap-3">
                            <Link to="/home" className="text-base text-white font-poppins">Home</Link>
                            <span className="text-base text-white font-poppins"> {'>'} </span>
                            <span className="text-base text-white font-poppins">Contact Us</span>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="we-always py-[80px]">
                <Container>
                    <div className="text-center">
                        <h2 className="text-black text-[48px] font-frank">We’re always eager to hear from you!</h2>
                        <p className="text-base leading-[26px] text-black font-poppins max-w-[836px] m-auto">Our customer service team is always available to answer your queries or to receive your feedback. Fillup the given the given form to get in touch with us and we’ll get back to you within 24 working hours!</p>
                    </div>

                    <div className="contact-form flex max-w-[1070px] m-auto mt-[67px]">
                        <div className="w-1/2 pr-24">
                            <h2 className="text-black text-[35px] font-frank">Contact Information</h2>
                            <p className="text-base leading-[26px] text-black font-poppins max-w-[836px] m-auto">We’d love to hear from you. Just give us a call or fill out the form here and let’s chat!</p>

                            <Link to="tel:747-200-7091" className="w-full text-xl font-poppins flex mt-[60px]">
                                <img src="/images/call.svg" alt="Call icon" className="mr-[20px]" /> (747) 200-7091
                            </Link>
                            <Link to="https://maps.app.goo.gl/jQK5Za39k5DuLiAV8" target="_blank" className="w-full text-xl font-poppins flex mt-[39px]">
                                <img src="/images/location.svg" alt="Location icon" className="mr-[20px]" /> 1500 Rosecrans Ave<br /> Suite 500<br /> Manhattan Beach, CA 90266
                            </Link>

                        </div>
                        <div className="w-1/2">
                            <div className="form-box py-[40px] px-[30px] shadow-custom3 rounded-3xl">
                                <form action="post">
                                    <div className="form-group">
                                        <input placeholder="First Name" type="text" className="w-full border border-custom-color2 leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins" />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Last Name" type="text" className="w-full border border-custom-color2 leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins mt-5" />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Last Name" type="email" className="w-full border border-custom-color2 leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins mt-5" />
                                    </div>
                                    <div className="form-group">
                                        <select className="bg-[url('/images/down.svg')] bg-no-repeat bg-[length:20px_20px] bg-[position:calc(100%-14px)_center] appearance-none w-full border border-custom-color2 leading-[56px] min-h-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins mt-5">
                                            <option value="Sales Inquiry">Sales Inquiry</option>
                                            <option value="Support Inquiry">Support Inquiry</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Message" rows={3} className="w-full border border-custom-color2 leading-[56px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins mt-5" />
                                    </div>
                                    <div className="form-group">
                                      <button type="submit" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[200px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins mt-5">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>

            <div className="pb-[77px]">
                <Container>
            <iframe className="w-full h-[500px] rounded-[20px]" loading="lazy" src="https://maps.google.com/maps?q=1500%20Rosecrans%20Ave%20Suite%20500%20Manhattan%20Beach%2C%20CA%2090266&amp;t=m&amp;z=18&amp;output=embed&amp;iwloc=near" title="1500 Rosecrans Ave Suite 500 Manhattan Beach, CA 90266" aria-label="1500 Rosecrans Ave Suite 500 Manhattan Beach, CA 90266"></iframe>
            </Container>
            </div>

        </>
    );
};

export default Contact;
