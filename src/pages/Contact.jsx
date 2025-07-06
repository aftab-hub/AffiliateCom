import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto mt-10 animate-fadeIn">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

      <div className="text-center space-y-4 text-gray-700 text-lg">

        <p><span className="font-semibold">✉️ Email:</span> aftabaftab1158@example.com</p>
        <p><span className="font-semibold">🕒 Hours:</span> Mon - Fri, 9:00AM - 6:00PM</p>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow us</h3>
        <div className="flex justify-center gap-6 text-4xl text-blue-600">
  
          <a href="https://www.linkedin.com/in/aftab-idrishi-85a396257" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
