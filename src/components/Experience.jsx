import React from 'react';

function Experience() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mx-3">Full Stack Development Intern</h3>
        <p className='flex justify-between mx-5'>WHY GLOBAL SERVICE ,Chennai<span>  02/2024 - 08/2024</span></p>
        <ul className="list-disc ml-20 mt-2 ">
          <li>Developed a responsive web application, increasing user engagement by 40%.</li>
          <li>Integrated APIs and utilized modern JavaScript frameworks like React.</li>
          <li>Managed version control and continuous integration using Git and Jenkins.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mx-3">Data Annotation Specialist</h3>
        <p className='flex justify-between mx-5'>Object Ways IT Company , Karur<span className='text-center'> 10/2021 - 01/2024</span></p>
        <ul className="list-disc ml-20 mt-2">
          <li>Annotated large datasets for machine learning models with high accuracy.</li>
          <li>Collaborated with data scientists to ensure quality and consistency.</li>
          <li>Implemented quality control, improving annotation accuracy by 20%.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
