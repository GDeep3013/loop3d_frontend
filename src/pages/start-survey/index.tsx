import { useState } from "react";
import Container from "../../components/common/Container";
import InputField from "../../components/common/InputField";

const individualOptions = [
  "Accountability",
  "Builds Relationships",
  "Customer Oriented",
  "Drives Results",
  "Effective Communication",
  "Problem Solving And Decision Making",
  "Strategic Agility",
  "Synergy",
  "Technical & Business Acumen",
];

const managerOptions = [
  "Accountability",
  "Coaches And Develops",
  "Customer Oriented",
  "Drives Results",
  "Effective Communication",
  "Emotional Intelligence",
  "Encourages Innovation",
  "Motivation and Recognition",
  "Prioritizing and Aligning",
  "Problem Solving And Decision Making",
  "Strategic Agility",
  "Synergy",
  "Visionary Thinking",
];

const StartSurvey: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"individual_contributor" | "people_manager">("individual_contributor");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    loop_lead_name: "",
    loop_lead_email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleCheckboxChange = (label: string) => {
    if (selectedCheckboxes.includes(label)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== label));
    } else {
      if (selectedCheckboxes.length < 3) {
        setSelectedCheckboxes([...selectedCheckboxes, label]);
      }
    }
  };

  const handleTabChange = (tab: "individual_contributor" | "people_manager") => {
    setActiveTab(tab);
    setSelectedCheckboxes([]); // Reset checkboxes when switching tabs
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Check if all fields are filled
    if (!formData.loop_lead_name || !formData.loop_lead_email || selectedCheckboxes.length === 0) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    // try {
    //   const response = await startSurvay(payload);
    //   console.log("Form submitted successfully:", response);
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }

    // Prepare the payload
    const payload = {
      ...formData,
      tab: activeTab,
      selectedOptions: selectedCheckboxes,
    };

    // For now, just log the payload and show a success message
    console.log("Form submitted with payload:", payload);
    setIsFormSubmitted(true); // Mark the form as submitted to replace the component
  };

  const options = activeTab === "individual_contributor" ? individualOptions : managerOptions;

  // Render the thank you message if the form is submitted
  if (isFormSubmitted) {
    return (
      <Container className="my-[10rem]">
        <div className="lg:w-[1080px] mx-auto bg-white rounded-[20px] p-[20px] md:p-[40px]" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}>
          <h1 className="text-[38px] md:text-[48px] mb-6 text-center font-frank">Thank You!</h1>
          <p className="text-center text-[16px]">Your registration is successfull.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-[10rem]">
      <div className="lg:w-[1080px] mx-auto bg-white rounded-[20px] p-[20px] md:p-[40px]" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)" }}>
        <h1 className="text-[38px] md:text-[48px] mb-6 text-left font-frank">Start Survey</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="w-[50%]">
              <InputField
                labelClass=""
                className="mt-[5px] placeholder-black"
                label=""
                type="text"
                name="loop_lead_name"
                value={formData.loop_lead_name}
                onChange={handleInputChange}
                placeholder="Looped Lead Name"
              />
            </div>
            <div className="w-[50%]">
              <InputField
                labelClass=""
                className="mt-[5px] placeholder-black"
                label=""
                type="email"
                name="loop_lead_email"
                value={formData.loop_lead_email}
                onChange={handleInputChange}
                placeholder="Looped Lead Email"
              />
            </div>
          </div>

          {/* button tab */}
          <div className="py-5">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                type="button"
                className={`min-w-[218px] px-[20px] py-[15px] rounded-full font-normal ${
                  activeTab === "individual_contributor"
                    ? "bg-[#174A6D] text-white"
                    : "bg-white text-[#174A6D] border border-[#174A6D]"
                }`}
                onClick={() => handleTabChange("individual_contributor")}
              >
                Individual Contributor
              </button>
              <button
                type="button"
                className={`min-w-[218px] px-[20px] py-[15px] rounded-full font-normal ${
                  activeTab === "people_manager"
                    ? "bg-[#174A6D] text-white"
                    : "bg-white text-[#174A6D] border border-[#174A6D]"
                }`}
                onClick={() => handleTabChange("people_manager")}
              >
                People Manager
              </button>
            </div>

            <div>
              <ul>
                {options.map((option) => (
                  <li key={option} className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-black"
                        checked={selectedCheckboxes.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        disabled={
                          !selectedCheckboxes.includes(option) &&
                          selectedCheckboxes.length >= 3
                        }
                      />
                      <span className="ml-3 text-black">{option}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="min-w-[218px] px-[20px] py-[15px] bg-[#7ABCDB] flex justify-center text-[16px] rounded-full text-white"
            >
              Submit
            </button>
          </div>
          {/* Display the error message */}
          {errorMessage && (
            <div className="mt-4 text-red-500">
              {errorMessage}
            </div>
          )}
          {/* button tab end */}
        </form>
      </div>
    </Container>
  );
};

export default StartSurvey;
