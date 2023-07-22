import logo1 from "../../assets/Book-club-graphic-1.webp";
const Footer = () => {
  return (
    <footer className="footer p-32 mt-72 bg-violet-700 text-base-content">
      <div>
        <img className="h-25 w-20 ml-20" src={logo1} alt="" />

        <p className="text-white">
          Copyright © 2023 and all rights reserved by <br />{" "}
          <span className="pl-5">The Book House Club </span> <br></br>{" "}
        </p>
      </div>
      <div>
        <span className="footer-title font-bold text-zinc-950">Services</span>
        <a href="/" className="link link-hover text-white">
          Branding
        </a>
        <a href="/" className="link link-hover text-white">
          Design
        </a>
        <a href="/" className="link link-hover text-white">
          Marketing
        </a>
        <a href="/" className="link link-hover text-white">
          Advertisement
        </a>
      </div>
      <div>
        <span className="footer-title font-bold text-zinc-950">Company</span>
        <a href="/" className="link link-hover text-white">
          About us
        </a>
        <a href="/" className="link link-hover text-white">
          Contact
        </a>
        <a href="/" className="link link-hover text-white">
          Jobs
        </a>
        <a href="/" className="link link-hover text-white">
          Press kit
        </a>
      </div>
      <div>
        <span className="footer-title font-bold text-zinc-950">Legal</span>
        <a href="/" className="link link-hover text-white">
          Terms of use
        </a>
        <a href="/" className="link link-hover text-white">
          Privacy policy
        </a>
        <a href="/" className="link link-hover text-white">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
