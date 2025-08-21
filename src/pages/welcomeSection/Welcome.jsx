import styled from "./welcome.module.css"
function Welcome(){
    return(
        <div className={styled.wrapper}>

      {/* Top Welcome Section */}
      <div className={styled.welcomeSection}>
        
        {/* Left Images */}
        <div className={styled.imageColumn}>
          <img src="/images/welcome1.png" alt="Team" className={styled.mainImg} />
          <img src="/images/welcome2.png" alt="Cleaning" className={styled.overlayImg} />
        </div>

        {/* Right Text */}
        <div className={styled.textColumn}>
          <h1 className={styled.heading}>
            Welcome To Our <br /> Pro-cleaning Company!
          </h1>
          <p className={styled.text}>
            We make your space shine! Professional and reliable cleaning services company
            providing top-notch sanitation for homes and businesses. Satisfaction guaranteed!
          </p>

          <div className={styled.featureList}>
            <span className={styled.feature}><span className={styled.correctIcon}>✔</span> Vetted professionals</span>
            <span className={styled.feature}><span className={styled.correctIcon}>✔</span> Affordable Prices</span>
            <span className={styled.feature}><span className={styled.correctIcon}>✔</span> Next day availability</span>
            <span className={styled.feature}><span className={styled.correctIcon}>✔</span> Best for Quality</span>
            <span className={styled.feature}><span className={styled.correctIcon}>✔</span> Standard cleaning tasks</span>
            <span className={styled.feature}><span className={styled.correctIcon}>✔</span> Affordable Plans</span>
          </div>

          <div className={styled.btnGroup}>
            <button className={styled.primaryBtn}>Book Now</button>
            <button className={styled.secondaryBtn}>Know More</button>
          </div>
        </div>
      </div>
</div>
    )
}
export default Welcome