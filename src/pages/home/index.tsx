import React, { useEffect } from "react";
import Container from "../../components/common/Container";
import PartnerSlider from "../../components/common/PartnerSlider/index";
import { Link } from "react-router-dom";



const Home: React.FC = () => {

  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add('home-page');

    // Cleanup class when component unmounts
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <>
      <div className="hero-banner bg-[url('/images/banner-bg.webp')] bg-repeat h-lvh flex items-center">
        <Container>
          <div className="flex">
            <div className="w-1/2">
              <div className="banner-text">
                <h1 className="text-7xl text-white font-frank leading-[90px]">Revolutionize Your 360 Feedback Process with AI</h1>
                <div className="banner-buttons mt-[76px]">
                  <a href="javascript:;" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins">Request a Demo</a>
                  <a href="javascript:;" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins ml-5">Learn More</a>
                </div>
              </div>
            </div>
            <div className="w-1/2 text-right">
              <div className="banner-video">
                <div className="video-outer relative max-w-[640px] ml-auto">
                  <video
                    id="banner-video"
                    className="object-cover"
                    loop
                    muted
                    playsInline
                    controls={false}>
                  <source src="https://loop3d.ai/wp-content/uploads/2024/08/Looped-Homepage-Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Link
                  to="#"
                  className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] cursor-pointer video-control-icon"
                  onClick={(e) => {
                    e.preventDefault();
                    const video = document.getElementById('banner-video');
                    if (video) {
                      if (video.paused) {
                        video.play();
                        video.controls = true; // Show video controls
                        document.querySelector('.video-control-icon').style.display = 'none';
                      } else {
                        video.pause();
                        video.controls = false; // Hide video controls
                        document.querySelector('.video-control-icon').style.display = 'block';
                      }
                    }
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="w-[77px]"
                    fill="#174a6d"
                    opacity="0.8"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

      </div>
    </Container >
      </div >

      <div className="building-peak py-[80px] bg-[#f5f5f5]">
        <Container>

          <div className="building-peak-heading text-center">
            <h2 className="text-[#174a6d] text-[48px] font-frank">Building peak performance cultures at top organizations</h2>
          </div>

          <PartnerSlider />

        </Container>
      </div>

      <div className="feedback-process py-[80px]">
        <Container>
          <div className="feedback-heading text-center">
            <h2 className="text-black text-[48px] font-frank">Steps For Feedback Process with AI</h2>
            <p className="text-base leading-[26px] text-black max-w-[813px] font-poppins m-auto">LOOP3D 360 Feedback was designed by doctoral degrees professionals in Organizational Psychology with extensive experience working with Fortune 100 companies. LOOP3D was developed to enhance performance and people development through simplified, relevant, and smart feedback loops, all powered through artificial intelligence.</p>
          </div>
          <div className="feedback-list mt-12">
            <div className="flex gap-x-7">
              <div className="w-1/3">
                <div className="feedback-box relative rounded-[20px] overflow-hidden">
                  <div className="feedback-img">
                    <img src="/images/Short-Engaging-Surveys.webp" alt="feedback img" />
                  </div>
                  <div className="feedback-content bg-custom-gradient absolute top-0 left-0 w-full h-full px-[37px] py-[110px]">
                    <h3 className="text-[25px] text-white font-frank">Short, Engaging Surveys</h3>
                    <p className="text-base text-white font-poppins mt-4">Encourage regular participation with our concise and effective surveys.</p>
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <div className="feedback-box relative rounded-[20px] overflow-hidden">
                  <div className="feedback-img">
                    <img src="/images/AI-Generated-Questions-1.webp" alt="feedback img" />
                  </div>
                  <div className="feedback-content bg-custom-gradient absolute top-0 left-0 w-full h-full px-[37px] py-[110px]">
                    <h3 className="text-[25px] text-white font-frank">AI-Generated Questions</h3>
                    <p className="text-base text-white font-poppins mt-4">Tailor questions to your organization's unique needs with our AI-driven technology.</p>
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <div className="feedback-box relative rounded-[20px] overflow-hidden">
                  <div className="feedback-img">
                    <img src="/images/Personalized-AI-Reports.webp" alt="feedback img" />
                  </div>
                  <div className="feedback-content bg-custom-gradient absolute top-0 left-0 w-full h-full px-[37px] py-[110px]">
                    <h3 className="text-[25px] text-white font-frank">Personalized AI Reports</h3>
                    <p className="text-base text-white font-poppins mt-4">Receive specific, actionable feedback reports for each employee, generated by AI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <div className="how-works bg-[#f5f5f5] pt-[80px] pb-[280px]">
        <Container>
          <div className="flex">
            <div className="w-1/2 pr-[35px]">
              <h2 className="text-black text-[48px] font-frank">How It Works</h2>
              <p className="text-base leading-[26px] text-black font-poppins">Our process is designed to be flexible and adaptable to your needs, providing personalized feedback and insights to help you achieve your organizational goals.</p>
              <div className="work-img pt-[30px] pl-[50px]">
                <img className="border-solid border-white border-[9px] rounded-[30px] shadow-custom" src="/images/work.webp" alt="work image" />
              </div>
            </div>
            <div className="w-1/2 pl-[30px]">
              <div className="work-listing group flex py-[19px] px-[25px] rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2 mb-[26px]">
                <div className="work-count pr-[35px]">
                  <h3 className="text-[50px] text-[#aabdca] group-hover:text-white font-frank">01</h3>
                </div>
                <div className="work-content">
                  <h4 className="text-[25px] text-custom-color font-frank group-hover:text-white">Customize Your Survey</h4>
                  <p className="text-base text-custom-color font-poppins group-hover:text-white">Use our intuitive platform to create a survey tailored to your organization's needs.</p>
                </div>
              </div>
              <div className="work-listing group flex py-[19px] px-[25px] rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2 mb-[26px]">
                <div className="work-count pr-[35px]">
                  <h3 className="text-[50px] text-[#aabdca] group-hover:text-white font-frank">02</h3>
                </div>
                <div className="work-content">
                  <h4 className="text-[25px] text-custom-color font-frank group-hover:text-white">AI-Generated Questions</h4>
                  <p className="text-base text-custom-color font-poppins group-hover:text-white">Our AI analyzes your inputs and generates relevant, targeted questions.</p>
                </div>
              </div>
              <div className="work-listing group flex py-[19px] px-[25px] rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2 mb-[26px]">
                <div className="work-count pr-[35px]">
                  <h3 className="text-[50px] text-[#aabdca] group-hover:text-white font-frank">03</h3>
                </div>
                <div className="work-content">
                  <h4 className="text-[25px] text-custom-color font-frank group-hover:text-white">Collect Feedback</h4>
                  <p className="text-base text-custom-color font-poppins group-hover:text-white">Distribute the survey to your employees and collect their feedback easily and anonymously.</p>
                </div>
              </div>
              <div className="work-listing group flex py-[19px] px-[25px] rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2 mb-[26px]">
                <div className="work-count pr-[35px]">
                  <h3 className="text-[50px] text-[#aabdca] group-hover:text-white font-frank">04</h3>
                </div>
                <div className="work-content">
                  <h4 className="text-[25px] text-custom-color font-frank group-hover:text-white">AI-Generated Reports</h4>
                  <p className="text-base text-custom-color font-poppins group-hover:text-white">Receive detailed reports with actionable insights tailored to each employee.</p>
                </div>
              </div>
              <div className="work-listing group flex py-[19px] px-[25px] rounded-[15px] bg-white hover:bg-custom-color transition duration-300 ease-in-out shadow-custom2">
                <div className="work-count pr-[35px]">
                  <h3 className="text-[50px] text-[#aabdca] group-hover:text-white font-frank">05</h3>
                </div>
                <div className="work-content">
                  <h4 className="text-[25px] text-custom-color font-frank group-hover:text-white">Continuous Improvement</h4>
                  <p className="text-base text-custom-color font-poppins group-hover:text-white">Use the insights to drive continuous improvement and enhance employee performance.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="banner-buttons mt-[76px] flex justify-center">
            <a href="javascript:;" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins">Request a Demo</a>
            <a href="javascript:;" className="bg-[#7abcdb] hover:bg-[#174a6d] text-white min-w-[250px] min-h-[56px] leading-[56px] inline-block text-center rounded-[50px] font-poppins ml-5">Learn More</a>
          </div>

        </Container>
      </div>

    </>
  );
};

export default Home;
