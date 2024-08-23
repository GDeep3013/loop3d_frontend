import React, { useState } from "react";
import Container from "../../components/common/Container";

const LeadDashboard: React.FC = () => {

    const ParticipantForm = () => {
        const [participants, setParticipants] = useState(Array.from({ length: 10 }, (_, i) => i + 1));

        const addParticipant = () => {
            setParticipants([...participants, participants.length + 1]);
        };

        const removeParticipant = (indexToRemove: number) => {
            setParticipants(participants.filter((_, index) => index !== indexToRemove));
        };

        return (
            <>
                <div className="lunchpad pt-[162px] pb-[80px]">
                    <Container>
                        <div className="flex gap-[206px]">
                            <div className="w-1/2">
                                <h2 className="text-black text-[48px] font-frank">Loop3d Launchpad</h2>
                                <p className="text-base leading-[26px] text-black max-w-[813px] font-poppins m-auto">
                                    Welcome! Use this page to enter the email addresses for everyone who you would like to take the survey. Please note that your email and your manager's email are required along with a minimum of 10 other raters.
                                </p>

                                <div className="teammate mt-[42px] bg-[#F2F8FB] py-[20px] px-[18px] rounded-xl">
                                    <p className="text-[#474747] font-poppins leading-[30px] text-base mt-1">
                                        <strong className="text-custom-color bold">Teammate -</strong> People on your team and level who report to the same supervisor.
                                    </p>
                                    <p className="text-[#474747] font-poppins leading-[30px] text-base mt-1">
                                        <strong className="text-custom-color bold">Direct Reports -</strong>  People who report directly into you
                                    </p>
                                    <p className="text-[#474747] font-poppins leading-[30px] text-base mt-1">
                                        <strong className="text-custom-color bold">Other -</strong>  Includes customers, clients, vendors, etc. whom you regularly work with.
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h2 className="text-black text-[25px] font-frank">Step 1:</h2>
                                <p className="text-sm leading-[26px] text-black max-w-[813px] font-poppins m-auto">
                                    Enter your email address and your manager's email address
                                </p>

                                <form method="post">
                                    <div className="form-group mt-[20px]">
                                        <input placeholder="First Name" type="email" name="employee_email" value="demo123@gmail.com" disabled required className="w-full border border-custom-color2 leading-[48px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins bg-[#F2F8FB]" />
                                    </div>
                                    <div className="form-group mt-[20px]">
                                        <input placeholder="First Name" type="email" name="employee_email" value="demo321lab@gmail.com" disabled required className="w-full bg-[#F2F8FB] border border-custom-color2 leading-[48px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins" />
                                    </div>
                                </form>

                                <h2 className="text-black text-[25px] font-frank mt-[28px]">Competencies:</h2>
                                <ul className="pl-[30px]">
                                    <li className="text-base list-disc leading-[29px] text-black font-poppins mt-2">Accountability</li>
                                    <li className="text-base list-disc leading-[29px] text-black font-poppins mt-2">Builds Relationships</li>
                                    <li className="text-base list-disc leading-[29px] text-black font-poppins mt-2">Drives Results</li>
                                </ul>

                            </div>
                        </div>
                    </Container>
                </div>

                <div className="step2 py-[80px] mb-[270px] bg-custom-color2">
                    <Container>
                        <form method="post">
                            <div className="participant bg-custom-color py-[35px] px-[15px] rounded-t-2xl flex">
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[27px] text-white font-frank">Participant :</label>
                                </div>
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[27px] text-white font-frank">First Name</label>
                                </div>
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[27px] text-white font-frank">Last Name</label>
                                </div>
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[27px] text-white font-frank">Email</label>
                                </div>
                                <div className="form-group w-full text-center">
                                    <label className="participant-head text-[27px] text-white font-frank">Relationship:</label>
                                </div>
                            </div>

                            {participants.map((participant, index) => (
                                <div key={index} className="participant bg-[#f2f8fb]">
                                    <div className="inner border-b border-custom-color2 bg-[#F2F8FB] flex items-center">
                                    <div className="form-group w-full text-center py-[20px] px-[16px]">
                                        <label className="participant-head text-[27px] text-black font-frank">
                                            Participant {index + 1}:
                                        </label>
                                    </div>
                                    <div className="form-group w-full bg-white py-[20px] px-[16px]">
                                        <input
                                            placeholder=""
                                            type="text"
                                            className="w-full border border-custom-color2 leading-[62px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                                        />
                                    </div>
                                    <div className="form-group w-full py-[20px] px-[16px]">
                                        <input
                                            placeholder=""
                                            type="text"
                                            className="w-full border border-custom-color2 leading-[62px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                                        />
                                    </div>
                                    <div className="form-group w-full bg-white py-[20px] px-[16px]">
                                        <input
                                            placeholder=""
                                            type="text"
                                            className="w-full border border-custom-color2 leading-[62px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                                        />
                                    </div>
                                    <div className="form-group w-full py-[20px] px-[16px]">
                                        <select
                                            className="bg-[url('/images/down.svg')] bg-no-repeat bg-[length:20px_20px] bg-[position:calc(100%-30px)_center] w-full appearance-none border border-custom-color2 leading-[62px] min-h-[62px] rounded px-[14px] focus:outline-[2px] outline-custom-color2 text-base font-poppins"
                                        >
                                            <option value="">Select Relationship</option>
                                            <option value="Direct Report">Direct Report</option>
                                            <option value="Teammate">Teammate</option>
                                            <option value="Supervisor">Supervisor</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                {index >= 10 && (
                                <div className="form-group border-b border-custom-color2 w-full text-right">

                                            <button
                                                type="button"
                                                onClick={() => removeParticipant(index)}
                                                className="text-red-500 p-[15px]"
                                            >
                                                Remove this Participant
                                            </button>
                                    </div>
                                     )}
                                </div>

                            ))}

                            <div className="form-group mt-4 text-center">
                                <button
                                    type="button"
                                    onClick={addParticipant}
                                    className="bg-custom-color text-white py-2 px-4 rounded"
                                >
                                    Add Another Participant
                                </button>
                            </div>
                        </form>
                    </Container>
                </div>
            </>
        );
    };

    return (
        <div>
            <ParticipantForm />
        </div>
    );
};

export default LeadDashboard;
