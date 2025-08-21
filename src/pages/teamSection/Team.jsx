// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styled from "./Team.module.css"
function Team(){
    return(
        <div className={styled.teamSection}>
      
      {/* Top Heading & Description */}
      <div className={styled.teamHeader}>
        <div className={styled.leftHeader}>
          <h1 className={styled.heading}>
            Effective Cleaning Requires <br /> an Expert Cleaning Team
          </h1>
        </div>
        <div className={styled.rightHeader}>
          <h3 className={styled.subHeading}>Expert Team</h3>
          <p className={styled.description}>
            We have professional expert cleaning staff ensuring top-notch cleanliness 
            and hygiene for your space.
          </p>
        </div>
      </div>

      <div className={styled.divider}></div>

      {/* Cards */}
      <div className={styled.teamCards}>
        {[1, 2, 3].map((card, i) => (
          <div key={i} className={styled.card}>
            <img src={`/images/team${i+1}.png`} alt="Team member" className={styled.cardImg} />
            <h3 className={styled.name}>Erick Reynolds</h3>
            
            {/* Stars */}
            <div className={styled.stars}>
              {Array(5).fill(0).map((_, idx) => (
                <span key={idx} className={styled.star}>★</span>
              ))}
            </div>

            <p className={styled.cardText}>
              He is an expert cleaning staff member who provides thorough cleaning with precision.
            </p>

            {/* Social Icons */}
            <div className={styled.socialIcons}>
              <div>
      <a href="#"><FaFacebookF /></a>
      <a href="#"><FaInstagram /></a>
      <a href="#"><FaLinkedinIn /></a>
      <a href="#"><FaTwitter /></a>
    </div>
              {/* <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
              {/* <img src="/images/icon (1).png" alt="" />
              <img src="/images/icon (2).png" alt="" />
              <img src="/images/icon (3).png" alt="" />
              <img src="/images/icon (4).png" alt="" /> */}
            </div>
          </div>
        ))}
      </div>

    </div>
    )
}
export default Team