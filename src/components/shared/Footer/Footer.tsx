import React from 'react';
import logo from "../../assets/6842436.jpg";
const Footer = () => {
    return (
        <footer className="footer p-32 mt-72 bg-gradient-to-r from-white to-blue-500 text-base-content">
        <div>
        <img className='h-20 w-20 ml-20' src={logo} alt=""  />
         
         
          <p>Copyright © 2023 and all rights reserved by <br></br> </p>
        </div> 
        <div>
          <span className="footer-title font-bold text-zinc-950">Services</span> 
          <a href="/" className="link link-hover text-white">Branding</a> 
          <a href="/" className="link link-hover text-white">Design</a> 
          <a href="/" className="link link-hover text-white">Marketing</a> 
          <a href="/" className="link link-hover text-white">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title font-bold text-zinc-950">Company</span> 
          <a href="/" className="link link-hover text-white">About us</a> 
          <a href="/" className="link link-hover text-white">Contact</a> 
          <a href="/" className="link link-hover text-white">Jobs</a> 
          <a href="/" className="link link-hover text-white">Press kit</a>
        </div> 
        <div>
          <span className="footer-title font-bold text-zinc-950">Legal</span> 
          <a href="/" className="link link-hover text-white">Terms of use</a> 
          <a href="/" className="link link-hover text-white">Privacy policy</a> 
          <a href="/" className="link link-hover text-white">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;