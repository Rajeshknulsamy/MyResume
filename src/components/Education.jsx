import React from 'react';

function Education() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold flex justify-between mx-5">PG in Full Stack Development - MERN STACK <span className='font-normal text-[15px]'>02/2024 - 08/2024</span></h3>
        
        <p className='mx-5'>KSR College of Institute, Thiruchengode</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold flex justify-between mx-5">BSc Computer Science <span className='font-normal text-[15px]'>06/2017 - 04/2020</span></h3>
            <p className='mx-5'>CGPA: 7.8/10</p>
      </div>
    </section>
  );
}

export default Education;
