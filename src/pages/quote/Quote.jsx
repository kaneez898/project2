import styled from "./quote.module.css"
function Quote(){
    return(
        
        <div className={styled.quote}>
          {/* Left Side */}
          <div className={styled.leftQuote}>
            <p className={styled.subTitle}>Affordable cleaning solutions</p>
            <h1 className={styled.quoteHeading}>
              High-Quality and Friendly <br /> Services at Fair Prices
            </h1>
            <p className={styled.quoteText}>
              We provide comprehensive cleaning services tailored to your needs.
              From residential cleaning services to commercial spaces, we make sure every corner sparkles.
            </p>
            <button className={styled.quoteBtn}>Get a quote</button>
          </div>
        
          {/* Right Side Images */}
          <div className={styled.rightQuote}>
            <div className={styled.imageWrapper}>
              <img src="/images/Image (4).png" className={styled.bottomimg} alt="Cleaning service" />
              <img src="/images/Image (5).png" className={styled.topimg} alt="Cleaning service" />
            </div>
          </div>
        </div>
    )

    
}
export default Quote