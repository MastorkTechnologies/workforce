import  { useState } from 'react';
import logo from "/images/hero/logo.svg";
import close from "/images/hero/close.svg";
import menu from "/images/hero/menu.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between pr-0 md:pr-12 lg:pr-12  xl:pr-12 2xl:pr-12 items-center">
      <div className='flex  justify-center items-center'><img className="w-16 h-20" src={logo} alt="" /> <span className='text-[1rem] font-bold'>Mastork</span></div>

      {/* Desktop navigation */}
      <nav className="xl:flex md:flex 2xl:flex hidden gap-8">
        <a href="/" className="text-[1rem] font-medium text-[#737373]">Home</a>
        <a href="#feature" className="text-[1rem] font-medium text-[#737373]">How it helps</a>
       
        <a href="#faq" className="text-[1rem] font-medium text-[#737373]">FAQ</a>
      </nav>

      {/* Mobile menu bar */}
      <div className="xl:hidden md:hidden 2xl:hidden">
        <button
          className="text-white  "
          onClick={toggleMobileMenu}
        >
          <img src={menu} className='w-16 h-[2rem]' alt="" />
        </button>
      </div>

      {/* Mobile sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-opacity-80 backdrop-blur-md backdrop-filter bg-gray-800 flex flex-col pt-5  pl-8">
          <button
            className="absolute top-8 right-2   "
            onClick={toggleMobileMenu}
          >
            <img src={close} className='w-16 h-[2rem]' alt="" />
          </button>
          <a href="/" className="block my-4 text-white text-[1rem] font-medium">Home</a>
          <a href="#feature" className="block my-4 text-white text-[1rem] font-medium">How it helps</a>
         
          <a href="#faq" className="block my-4 text-white text-[1rem] font-medium">FAQ</a>
        </div>
      )}
      
      {/* Sign-in button for larger screens */}
      <a href='https://calendly.com/dhruv-aii/15min?month=2024-02' target='_black' rel="noreferrer" 
        className="text-white hidden md:flex lg:flex xl:flex px-5 py-2 rounded-full bg-[#31A0FE]"
      >
        Contact Us
      </a>
    </div>
  );
};

export default Navbar;
