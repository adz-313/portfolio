import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-title">Aditya Sawant</h2>
            <p className="footer-subtitle">Software Engineer</p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/adz-313" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <span className="footer-separator"></span>
            <a href="https://linkedin.com/in/aditya-sawant-2000" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <span className="footer-separator"></span>
            <a href="mailto:sawantaj20@gmail.com" aria-label="Email">
              Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Built with ❤️ by Aditya Sawant.
          </p>
          <a href="#hero" className="btn-back-to-top">
            Back to Top &uarr;
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
