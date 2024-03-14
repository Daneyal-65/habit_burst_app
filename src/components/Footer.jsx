// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
        <p className="text-sm mt-2">
          Made with ❤️ by <a href="https://www.example.com">Daneyal Ahmad </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
