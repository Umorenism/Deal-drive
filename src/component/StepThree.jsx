import { useDropzone } from "react-dropzone";

const StepThree = ({ nextStep, prevStep, handleFileUpload, formData }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf,.doc,.docx",
    onDrop: (acceptedFiles) => handleFileUpload(acceptedFiles[0]),
  });

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">Upload Resume</h2>
      <div {...getRootProps()} className="border-dashed border-2 p-10 text-center cursor-pointer mt-4">
        <input {...getInputProps()} />
        <p>Drag & drop your resume here, or click to select</p>
      </div>
      {formData.resume && <p className="mt-2 text-green-600">{formData.resume.name}</p>}
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-400 text-white p-2 rounded w-1/2">Back</button>
        <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded w-1/2">Next</button>
      </div>
    </div>
  );
};

export default StepThree;
