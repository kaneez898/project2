import React from "react";
import styled from "./testimonial.module.css";

function TestimonialSection() {
  return (
    <div className={styled.testimonialSection}>
      {/* Left Content */}
      <div className={styled.leftContent}>
        <h2 className={styled.heading}>
          Feedback About Their <br /> Experience With Us
        </h2>
        <p className={styled.subText}>
          Read testimonials from our satisfied clients. See how <br />our cleaning
          services have made a difference in their <br /> lives and homes
        </p>

        <div className={styled.navBtns}>
          <button className={styled.navBtn}>
            <span>&larr;</span>
          </button>
          <button className={`${styled.navBtn} ${styled.activeBtn}`}>
            <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Right Testimonial Card */}
      <div className={styled.rightcontent}>
      <div className={styled.backgroundcolor}></div>
      <div className={styled.card}>
        
        <div className={styled.imageBox}>
          <img src="/images/testimonial.png" alt="Client" />
        </div>
        <div className={styled.cardContent}>
          <div className={styled.cardHeader}>
            <div>
              <h4 className={styled.clientName}>Robert Fox</h4>
              <p className={styled.clientRole}>Business Man</p>
              <div className={styled.rating}>
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>
            </div>
            <div className={styled.quoteIcon}>❞</div>
          </div>
          <p className={styled.feedback}>
            Excellent service! The team was punctual, thorough, and left my
            home sparkling clean. Highly recommend for anyone needing a reliable
            and detailed cleaning service.
          </p>
        </div>
      </div>
    </div>

  </div>
  );
}

export default TestimonialSection;
