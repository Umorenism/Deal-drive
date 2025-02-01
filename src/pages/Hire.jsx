

const contentData = [
  {
    title: "Hire anywhere. Deliver everywhere.",
    description1:
      "Find the right talent and increase productivity when you prioritize skill and experience over location.",
    description2:
      "Andela talent is rigorously qualified and certified, assessed by fully transparent code tests, and identified by our proprietary AI-powered Talent Decision Engine™.",
  },
  {
    title: "Global Reach, Local Expertise.",
    description1:
      "With Andela, you can access world-class talent across multiple time zones, ensuring seamless collaboration.",
    description2:
      "Our developers, designers, and product managers bring diverse perspectives to build innovative solutions.",
  },
  {
    title: "Scale Your Team with Confidence.",
    description1:
      "Hire top engineers vetted through rigorous assessments and code challenges.",
    description2:
      "Our AI-powered Talent Decision Engine™ helps match you with the right fit for your project needs.",
  },
  {
    title: "Trusted by Top Companies.",
    description1:
      "Leading tech companies trust Andela to help them build scalable, high-performing teams.",
    description2:
      "Join thousands of businesses worldwide leveraging our network of skilled professionals.",
  },
];

const Hire = () => {


  return (
    <div className="flex flex-col w-full items-center p-5 justify-center bg-white">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-start mt-5 gap-8">
        
        {/* Left Content - Scrollable only when window scroll <= 50px */}
        <div
          className="p-4 transition-all duration-300" 
            
        >
          {contentData.map((item, index) => (
            <div key={index} className="p-4 md:mb-24 mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{item.title}</h1>
              <p className="text-gray-600 mb-3 text-sm">{item.description1}</p>
              <p className="text-gray-600 text-sm">{item.description2}</p>
            </div>
          ))}
        </div>

        {/* Video - Fixed */}
        <div className="md:sticky md:top-5 w-full ">
  <video
    src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5%2F665edff40f309fb8d43e90d2_Work_the_way_that_works_for_you-transcode.mp4"
    className="w-full bg-transparent"
    autoPlay
    muted
    loop
  ></video>
</div>
      </div>
      <button className="bg-indigo-500 mt-10 text-xl text-white px-4 py-4 rounded-md hover:bg-indigo-600">Learn more about adaptive Hiring</button>
      <p className="mt-10 text-xl md:text-5xl font-bold">Get all of your initiatives back on the table</p>
    </div>
  );
};

export default Hire;
