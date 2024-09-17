import React from 'react';

function Projects() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold flex justify-between mx-5">Scalable User Authentication System <span className='text-[15px] font-normal'>06/2024 - 07/2024</span></h3>
        <ul className="list-disc ml-5 mt-2 ms-20">
          <li>Implemented a secure user authentication system using Node.js and MongoDB.</li>
          <li>Features: User Registration, JWT Authentication, Password Reset, Security.</li>
          <li>Used Mocha, Chai for unit and integration tests, created a comprehensive README.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold flex justify-between mx-5">Clone of KFC Website  <span className='text-[15px] font-normal'>07/2024 - 08/2024</span></h3>
        <ul className="list-disc ml-5 mt-2 ms-20">
          <li>Developed a responsive user interface with React and Express.js backend.</li>
          <li>Designed and managed MongoDB database schema for performance optimization.</li>
          <li>Integrated third-party APIs for payment and social media login functionalities.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
