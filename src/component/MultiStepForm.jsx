import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    portfolio: "",
    resume: null,
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (file) => {
    setFormData({ ...formData, resume: file });
  };

  return (
    <div className="sm:max-w-3xl w-full mt-10 mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Progress Tracker */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="relative flex items-center w-full">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
                step >= s ? "bg-blue-500 scale-110" : "bg-gray-300"
              }`}
            >
              {s}
            </div>
            {s !== totalSteps && (
              <div
                className={`flex-1 h-1 transition-all duration-300 ${
                  step > s ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <div className="p-6 rounded-lg shadow-md">
        {step === 1 && <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} />}
        {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
        {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} handleFileUpload={handleFileUpload} formData={formData} />}
        {step === 4 && <StepFour prevStep={prevStep} formData={formData} />}
      </div>

      {/* Navigation Buttons */}
      {/* <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-all"
            onClick={prevStep}
          >
            Back
          </button>
        )}
        {step < totalSteps && (
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all"
            onClick={nextStep}
          >
            Next
          </button>
        )}
      </div> */}
    </div>
  );
};

export default MultiStepForm;
