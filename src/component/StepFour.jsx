import { useNavigate } from "react-router-dom";

const StepFour = ({ prevStep, formData }) => {
    const navigate = useNavigate()
    const handleSubmit = () => {
      console.log("Form Data Submitted:", formData);
    //   alert("Application Submitted Successfully!");
    navigate("/success")
    };
  
    return (
      <div className="p-6 bg-white max-w-2xl">
        <h2 className="text-lg space-y-2 font-bold">Review & Submit</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Experience:</strong> {formData.experience} years</p>
        <p><strong>Skills:</strong> {formData.skills}</p>
        <p><strong>Portfolio:</strong> {formData.portfolio}</p>
        {formData.resume && <p><strong>Resume:</strong> {formData.resume.name}</p>}
        <div className="flex justify-between mt-4">
          <button onClick={prevStep} className="bg-gray-400 text-white p-2 rounded w-1/2">Back</button>
          <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded w-1/2">Submit</button>
        </div>
      </div>
    );
  };
  
  export default StepFour;
  