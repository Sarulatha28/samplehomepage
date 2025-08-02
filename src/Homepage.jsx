import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">

      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          <div className=" font-jakarta font-bold text-xl leading-[100%] tracking-[0%] 
 font-bold">LOGO</div>
          <nav className="hidden  font-jakarta font-medium text-[14px] leading-[100%] tracking-[0%] md:flex space-x-6">
            <a href="#home" className="hover:text-purple-600">Home</a>
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#pricing" className="hover:text-purple-600">Pricing</a>
            <a href="#contact" className="hover:text-purple-600">Contact Us</a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow px-4 py-4 space-y-2">
            <a href="#home" className="block hover:text-purple-600">Home</a>
            <a href="#about" className="block hover:text-purple-600">About</a>
            <a href="#pricing" className="block hover:text-purple-600">Pricing</a>
            <a href="#contact" className="block hover:text-purple-600">Contact Us</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gray-50 py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-lg font-inter font-normal text-[16px] leading-[100%] tracking-[0%] uppercase  mb-1">Welcome to</h1>
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-[56px] leading-[100%] tracking-[0%] font-semibold mb-4">
              <span className="text-[#7506B1] font-bold">Best Business</span> of the <br /> Garment Arena
            </h2>
            <p className="mb-6">Design Your Style: Unleash Your Creativity on Our Premium Apparel.</p>
            <button className="bg-purple-600 text-white px-5 py-3 rounded hover:bg-purple-700">
              Get Free Consultation
            </button>
          </div>
         <div className="grid grid-cols-2 gap-0">
  <img 
    src={img1} 
    alt="Machine" 
    className="rounded shadow mt-18 w-full ml-6 h-40 md:h-52 object-cover" 
  />
  <img 
    src={img2} 
    alt="Machine" 
    className="rounded shadow w-full h-60  md:h-52 object-cover" 
  />
  <div className="col-span-2">
    <div className="relative">
     {/* <img 

        src={img3} 
        alt="Machine" 
        className="rounded shadow w-full h-40 md:h-52 object-cover" 
      />
       Optional: Plus image overlaid in the center 
      <img 
        src={plusImg} 
        alt="Plus" 
        className="absolute top-1/2 left-1/2 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
      />*/}
    </div>
  </div>
</div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#F1E6F7] py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img src={img4} alt="About" className=" shadow-lg w-3/4 h-50md:w-full mx-auto md:mx-0" />
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white h-8 w-30 text-center rounded-[10px] bg-purple-600">About Us</h3>
            <h2 className="text-2xl md:text-3xl font-inter font-semibold mb-4">Let's Build Something Creative Together</h2>
            <p className="mb-4">KGA specializes in Printed labels, Woven Labels, Barcode Stickers & Heat Transfer Stickers.</p>
            <ul className="space-y-2 text-sm md:text-base">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
  {[
    "Exploring the role of labels in garments",
    "Built-in the business",
    "Sustainable production",
    "Economic & environment friendly"
  ].map((text, idx) => (
    <div 
      key={idx}
      className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex items-start"
    >
      {/* Left emoji */}
      <div className="text-2xl md:text-3xl mr-3">✅</div>
      {/* Right text, starts lower */}
      <p className="text-sm md:text-base mt-1">{text}</p>
    </div>
  ))}
</div>

            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
         <h3 className="bg-purple-600 w-[120px] h-8 rounded-[10px] font-inter font-normal text-[14px] leading-[30px] tracking-[0%] uppercase text-white font-semibold mb-2 mx-auto text-center">
  Our Services
</h3>

          <h2 className="text-2xl md:text-3xl font-bold  font-inter text-center mb-8">Exploring the Role of <br/> <span className="font-inter font-semibold text-[40px] text-[#C08CDB] leading-[100%] tracking-[0%] text-center">Labels & Stickers</span> </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {[
    { title: "Printed Labels", img:"/src/assets/img5.jpg" },
    { title: "Barcode Stickers", img: "/src/assets/img6.jpg" },
    { title: "Heat Transfer Stickers", img: "/src/assets/img7.jpg" },
    { title: "Woven Labels", img: "/src/assets/img8.jpg" }
  ].map((item, idx) => (
   <div key={idx} className="bg-white rounded shadow hover:shadow-lg transition">
  <img src={item.img} alt={item.title} className="rounded-t w-full h-36 object-cover" />
  
  <div className="p-2">
    <div className="mb-2">
      <span className="inline-block mt-2 bg-[#F1E6F7] text-purple-600 text-xs font-medium px-3 py-2 rounded-full">
        Garments
      </span>
    </div>

    <h4 className="font-bold mb-2 text-2xl">{item.title}</h4>

    <div className="text-center">
      <button className="text-purple-600 border-2 border-purple-600 bg-white hover:underline px-6 md:px-20 py-2 rounded">
        Learn Today
      </button>
    </div>
  

</div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#7506B1] text-white rounded-[10px] text-center py-12 ml-20 mr-20 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Provide the highest quality work that<br/> meets your expectation</h2>
        <button className="bg-white text-black  px-6 py-3 rounded font-semibold hover:bg-gray-100">
          Get Free Consultation
        </button>
      </section>

     {/* Testimonials */}
<section className="py-12 md:py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-center ">Testimonials</h2>
     <h3 className="text-sm md:text-lg font-sm text-center mb-8">What Our Customers Are Saying</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {Array(4).fill().map((_, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          {/* Top: stars left, divider, icon+text right */}
          <div className="flex justify-between items-center mb-2">
            {/* Left: stars */}
            <div className="flex space-x-0.5 text-yellow-400 text-base">
              {[...Array(5)].map((_, starIdx) => (
                <span key={starIdx}>★</span>
              ))}
            </div>

            {/* Right: vertical divider + icon + text */}
            <div className="flex items-center space-x-2">
              <div className="h-4 border-l border-gray-300"></div>
              <div className="flex items-center space-x-1">
                <div className="bg-purple-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  👍
                </div>
                <span className="text-xs font-semibold text-gray-700">Testimonial</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <p className="text-lg font-dm font-normal text-[19.2px] leading-[28.8px] tracking-[0%] mb-4">
            I have been using Adidas shoes for over a year and love it. Can't imagine life without it. It’s so easy to use, and customer service is great.
          </p>

          {/* Bottom: user info */}
          <div className="flex bg-[#F3E8EE] items-center">
            <img src={`/images/user${idx+1}.jpg`} alt="User" className="w-10 h-10 rounded-full mr-2" />
            <div>
              <span className="font-manrope font-extrabold text-[14.4px] leading-[100%] tracking-[0%] block">Kristin Watson</span>
              <span className="text-xs font-manrope font-normal text-[9.6px] leading-[100%] tracking-[0%] text-gray-500">Marketing Coordinator</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
    
<footer className="bg-[#31034A] font-roboto text-gray-200 px-4 py-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8">

    {/* Left: Tech World - occupies 50% */}
    <div className="mb-8 md:mb-0">
      <h4 className=" font-roboto font-bold text-[24px] leading-[100%] tracking-[0%]  mb-2">Tech World</h4>
      <p className=" font-jakarta font-normal text-[14px] leading-[24px] tracking-[0%] mb-4"> A team of experienced designers and developers dedicated to creating exceptional websites.Providing custom web solution and Digital Marketing tailored to your specific business goals.</p>
      

      {/* Social Icons */}
      <div className="flex space-x-4 mb-4">
        <a href="#" className="hover:text-white text-xl"><FaFacebookF /></a>
        <a href="#" className="hover:text-white text-xl"><FaTwitter /></a>
        <a href="#" className="hover:text-white text-xl"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-white text-xl"><FaInstagram /></a>
      </div>

      {/* Vertical Divider only for layout clarity on small screens */}
    </div>

    {/* Right: Services, Pages, Contact - equally distributed */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <h4 className="font-bold font-roboto text-[18px] mb-2">Service</h4>
        <ul className="space-y-1 font-roboto font-normal text-[14px]">
          <li>Printed Labels</li>
          <li>Woven label</li>
          <li>Barcode Sticters</li>
          <li>Heat Transfer Stickers</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold font-roboto text-[18px] mb-2">Pages</h4>
        <ul className="space-y-1  font-roboto font-normal text-[14px]">
          <li>Home it work</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
     <div className="space-y-2">
  <h4 className="font-bold font-roboto text-[18px] mb-2">Contact</h4>

  <div className="flex items-center  font-roboto font-normal space-x-2">
    <MdEmail className="text-white w-6 h-6" />
    <p className="text-[14px]">info@example.com</p>
  </div>

  <div className="flex items-center space-x-2">
    <MdPhone className="text-white w-6 h-6" />
    <p className="text-[14px]">+123 456 7890</p>
  </div>

  <div className="flex items-center space-x-2">
    <MdLocationOn className="text-white w-6 h-6" />
    <p className="text-[14px]">123 Street, City, Country</p>
  </div>
</div>

    </div>
  </div>

  {/* Horizontal line across whole footer */}
  <hr className="border-white  my-4 max-w-7xl mx-auto" />

  {/* Privacy & Terms aligned right below horizontal line */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-xs text-white">
    <div className="mb-2 font-normal text-[14px] font-Plus Jakarta Sans md:mb-0">&copy; Copyrights 2023Techmax All rights reserved.</div>
    <div className="flex font-normal text-[14px] font-Plus Jakarta Sans space-x-4">
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Terms & Conditions</a>
    </div>
  </div>
</footer>


    </div>
  );
};

export default HomePage;
