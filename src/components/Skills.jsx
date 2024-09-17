import React from 'react';

function Skills() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 gap-4 ms-5">
        <div className='flex gap-3'>
          <h3 className="font-semibold">Programming Languages -</h3>
          <p>JavaScript, HTML, CSS</p>
        </div>
        <div className='flex gap-[120px] md:gap-8'>
          <h3 className="font-semibold">Frameworks & Libraries</h3>
          <p>Flutter, React.js, Express.js, Node.js, Bootstrap, Tailwind CSS</p>
        </div>
        <div className='flex gap-[130px]'>
          <h3 className="font-semibold">Databases</h3>
          <p>MongoDB, SQL</p>
        </div>
        <div className='flex gap-[110px]'>
          <h3 className="font-semibold">IDEs & Tools</h3>
          <p>Visual Studio Code, Postman</p>
        </div>
        <div className='flex gap-[110px]'>
          <h3 className="font-semibold">Design Tools</h3>
          <p>Canva, Figma</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
