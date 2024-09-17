import React from 'react';
import MyImage from '../assets/myimage.jpg'

function Header() {
  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold">Rajesh KN</h1>
      <a href='mailto:rajeshknagulsamy@gmail.com'>rajeshknagulsamy@gmail.com | +91 6383502850</a>
      <p>
        <a href="https://www.linkedin.com/in/rajesh-kn-38a81926a/" target="_blank" className="text-blue-500">LinkedIn</a> | 
        <a href="https://github.com/Rajeshknulsamy" target="_blank" className="text-blue-500"> GitHub</a>
      </p>
      <img src={MyImage} alt="My Image" className='w-[80px] h-[100px] absolute hidden md:block right-[0px] md:right-[200px] md:top-[110px] '/>

    </header>
  );
}

export default Header;
