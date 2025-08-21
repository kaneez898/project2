import styled from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styled.footer}>
      <div className={styled.footerContainer}>
        
        {/* Logo & About */}
        <div className={styled.footerSection}>
          <img src="/images/Logo2.png" alt="ProCleaning Logo" className={styled.logo} />
          <p>
            Stay updated with our latest cleaning tips, service updates, 
            and helpful articles on maintaining a spotless home.
          </p>
        </div>

        {/* Company Links */}
        <div className={styled.footerSection}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Team</a></li>
          </ul>
        </div>

        {/* Know More */}
        <div className={styled.footerSection}>
          <h4>Know More</h4>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styled.footerSection}>
          <h4>Newsletter</h4>
          <div className={styled.newsletterBox}>
            <input type="email" placeholder="Email Goes here" />
            <button>Send</button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className={styled.footerBottom}>
        <p>2024 "ProCleaning" All Rights Received</p>
      </div>
    </footer>
  );
}

export default Footer;
