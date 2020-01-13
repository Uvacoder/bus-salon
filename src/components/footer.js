import React from 'react';

const Footer = () => {
  return (
    <footer className="p-10 text-white bg-brown">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  );
}
 
export default Footer;