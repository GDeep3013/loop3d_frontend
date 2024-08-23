import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const FeedbackSurvey: React.FC = () => {
    const email = "{email}";
    const emailAddress = "{email address}";
    const physicalAddress = "{physical address}";

    return (
        <>
            <div className="about-banner relative bg-[url('/images/contact-us-banner.webp')] bg-repeat bg-center h-[400px] flex items-center">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <Container>
                    <div className="about-text text-center relative z-[1] pt-[80px]">
                        <h1 className="text-[48px] text-white font-frank">Refund Policy</h1>
                    </div>
                </Container>
            </div>




        </>
    );
};

export default FeedbackSurvey;
