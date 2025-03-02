const StepTwo = ({ nextStep, prevStep, handleChange, formData }) => {
    return (
      <div className="p-6">
        <h2 className="text-lg font-bold">Experience & Skills</h2>
        <input name="experience" value={formData.experience} onChange={handleChange} placeholder="Years of Experience" className="w-full p-2 border rounded mt-2" />
        <input name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="w-full p-2 border rounded mt-2" />
        <input name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="Portfolio Link" className="w-full p-2 border rounded mt-2" />
        <div className="flex justify-between mt-4">
          <button onClick={prevStep} className="bg-gray-400 text-white p-2 rounded w-1/2">Back</button>
          <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded w-1/2">Next</button>
        </div>
      </div>
    );
  };
  
  export default StepTwo;
  