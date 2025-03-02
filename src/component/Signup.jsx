import MultiStepForm from "../component/MultiStepForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#02DCC8] via-purple-500 to-indigo-600">
      <div className="max-w-2xl w-full  p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Hiring Talent Signup</h1>
        <MultiStepForm />
      </div>
    </div>
  );
};

export default Signup;
