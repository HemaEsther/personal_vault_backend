import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-6 text-center text-sm text-zinc-500 border-t border-zinc-800">
        © {new Date().getFullYear()} Personal Knowledge Vault — All rights
        reserved.
      </footer>
    </>
  );
};

export default Footer;
