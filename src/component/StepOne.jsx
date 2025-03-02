const StepOne = ({ nextStep, handleChange, formData }) => {
    return (
      <div className="p-6">
        <h2 className="text-lg font-bold">Personal Information</h2>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded mt-2" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded mt-2" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded mt-2" />
        <button onClick={nextStep} className="bg-blue-500 w-full text-white p-2 rounded mt-4">Next</button>
      </div>
    );
  };
  
  export default StepOne;
  