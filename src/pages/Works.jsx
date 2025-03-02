import React from 'react'

const Works = () => {
  return (
    <div className='bg-white container mt-20 flex flex-col md:flex-row gap-5 p-4'>
      <img 
        src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/66618f9bb01514110c509ace_6626a4c69d476477fd939583_Layer%201%20(2).webp" 
        alt="" 
        className="w-full md:w-[50%] max-w-full object-cover"
      />
      <div className='w-full'>
       <h1 className='md:text-5xl font-bold text-2xl'>Work the way that</h1>
       <h1 className='md:text-5xl font-bold text-2xl'>works for you</h1>
       <div className='w-full md:w-[80%]'>
        <p className='mt-4'>Dealdrive’s Adaptive Hiring approach offers a flexible engagement model that lets you create and manage teams in any configuration.</p>
      </div>
      <div className='flex w-full items-start flex-col'>
       <div className='flex flex-col md:flex-row w-full gap-3'>
       <div className='mt-10 flex items-start md:items-center gap-2'>
            <p className='h-20 md:h-40 bg-slate-500 w-[0.1rem]'></p>
            <div>
                <h1 className='text-slate-500 text-2xl'>Hire Individuals</h1>
                <p className='w-full md:w-[80%]'>Fill a critical gap or place a highly skilled problem solver. Have someone cover maternity leave. Or put a full-time, project-driven technologist in place.</p>
            </div>
        </div>
        <div className='mt-10 flex items-start md:items-center gap-2'>
            <p className='h-20 md:h-40 bg-slate-500 w-[0.1rem]'></p>
            <div>
                <h1 className='text-slate-500 text-2xl'>Create Managed Projects</h1>
                <p className='w-full md:w-[80%]'>We ensure on time, on budget delivery for the most demanding projects, like custom application development and AI rapid prototyping.</p>
            </div>
        </div>
       </div>
        <button className="bg-indigo-500 mt-10 text-xl text-white px-4 py-4 rounded-md hover:bg-indigo-600 w-full md:w-auto">Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Works
