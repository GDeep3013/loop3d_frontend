import React, { useEffect } from "react";
import Container from "../../components/common/Container";
import PartnerSlider from "../../components/common/PartnerSlider/index";
import ImageSlider from "../../components/common/ImageSlider/index";
import Insights from "../../components/common/Insights/index";

const Services: React.FC = () => {

    return (
        <>
            <div className="about-banner bg-[url('/images/service-banner.webp')] bg-cover bg-repeat h-custom-height flex items-center">
                <Container>
                    <div className="about-text text-left max-w-[720px] ml-[auto]">
                        <h1 className="text-[70px] text-white font-frank">Why LOOP3D?</h1>
                        <ul className="pl-[18px]">
                            <li className="text-base list-disc leading-[26px] text-white font-poppins"> Enhance Employee Performance </li>
                            <li className="text-base list-disc leading-[26px] text-white font-poppins mt-2"> Outshine the Competition </li>
                            <li className="text-base list-disc leading-[26px] text-white font-poppins mt-2"> Build a High Performing Organization </li>
                        </ul>
                        <p className="text-base leading-[26px] text-white font-poppins mt-3">Click on the link below for us to better understand your needs and walk through a demo of the Looped 360 Feedback process.</p>
                        <a href="javascript:;" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins mt-[38px]">Request a Demo</a>
                    </div>

                </Container>
            </div>

            <div className="building-peak py-[80px]">
                <Container>
                    <div className="building-peak-heading text-center">
                        <h2 className="text-[#174a6d] text-[48px] font-frank">Building peak performance cultures at top organizations</h2>
                    </div>
                    <PartnerSlider />
                </Container>
            </div>

            <div className="built-science pb-[80px]">
                <div className="flex items-center">
                    <div className="w-1/2">
                     <ImageSlider />
                    </div>
                    <div className="w-1/2 bg-custom-bg py-[80px] px-[50px]">
                       <div className="max-w-[671px]">
                          <h2 className="text-black text-[48px] font-frank">Built with Science</h2>
                          <p className="text-base leading-[26px] text-black font-poppins">Our competencies and survey items are research-based, which are designed to reflect the critical skills and behaviors of future leaders. They enable leaders to navigate challenges, capitalize on opportunities, and sustain long-term success in a competitive and rapidly evolving business landscape. We offer distinct competencies for both individual contributors and people managers.</p>
                          <div className="flex mt-[47px]">
                            <div className="">
                                <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">1</h3>
                            </div>
                            <div className="pl-[12px]">
                                <h4 className="text-black text-[25px] font-frank">Individual Contributors</h4>
                                <p className="text-base leading-[26px] text-black font-poppins">Includes competencies essential for individuals who are not in a formal people managerial role, yet play a critical role in completing crucial tasks, projects, or organizational goals.</p>
                            </div>
                          </div>
                          <div className="flex mt-[25px]">
                            <div className="">
                                <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">2</h3>
                            </div>
                            <div className="pl-[12px]">
                                <h4 className="text-black text-[25px] font-frank">People Managers</h4>
                                <p className="text-base leading-[26px] text-black font-poppins">Includes competencies essential for people managers and entails critical leadership skills to drive high-performing teams and strategic initiatives</p>
                            </div>
                          </div>
                       </div>
                    </div>
                </div>
            </div>

            <div className="py-[159px] bg-[url('/images/Real-Insights-Banner.webp')] bg-cover bg-repeat text-center">
               <Container>
                  <Insights />
               </Container>
            </div>

            <div className="built-science">
                <div className="flex">
                    <div className="w-1/2">
                      <img src="/images/service-1.webp" />
                    </div>
                    <div className="w-1/2 bg-custom-color py-[80px] px-[50px] flex items-center">
                       <div className="max-w-[671px]">
                          <h2 className="text-white text-[48px] font-frank">Our Services</h2>
                          <p className="text-base leading-[26px] text-white font-poppins">We offer a range of services to help businesses enhance their employee feedback process using AI technology.</p>
                          <div className="flex mt-[47px]">
                            <div className="">
                                <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">1</h3>
                            </div>
                            <div className="pl-[12px]">
                                <h4 className="text-white text-[25px] font-frank">Customized Surveys</h4>
                                <p className="text-base leading-[26px] text-white font-poppins">Tailor your surveys to fit the specific needs of your organization.</p>
                            </div>
                          </div>
                          <div className="flex mt-[25px]">
                            <div className="">
                                <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">2</h3>
                            </div>
                            <div className="pl-[12px]">
                                <h4 className="text-white text-[25px] font-frank">AI-Generated Reports</h4>
                                <p className="text-base leading-[26px] text-white font-poppins">Receive detailed and actionable feedback reports generated by our AI technology.</p>
                            </div>
                          </div>
                          <div className="flex mt-[25px]">
                            <div className="">
                                <h3 className="bg-custom-color2 text-[25px] w-[40px] h-[40px] leading-[40px] text-white rounded-full text-center font-frank">3</h3>
                            </div>
                            <div className="pl-[12px]">
                                <h4 className="text-white text-[25px] font-frank">Ongoing Support</h4>
                                <p className="text-base leading-[26px] text-white font-poppins">Get continuous support to help you maximize the benefits of our feedback tools.</p>
                            </div>
                          </div>
                       </div>
                    </div>
                </div>
            </div>

            <div className="ready-learn py-[80px] bg-[url('/images/Ready-to-learn-banner.webp')] bg-cover bg-repeat text-center">
              <Container>
                <div className="">
                    <h2 className="text-white text-[48px] font-frank">Ready to learn more?</h2>
                    <p className="text-base leading-[26px] mt-[3] text-white font-poppins">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href="javascript:;" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins mt-[38px]">Request a Demo</a>
                </div>
              </Container>
            </div>

        </>
    );
};

export default Services;
