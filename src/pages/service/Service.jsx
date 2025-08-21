
// import styled from "./service.module.css"
// function Service() {
//   return (
//     <div>
// <div className={styled.serviceHead}>
//   <div className={styled.leftServiceSec}>
//     <h1 className={styled.serviceHeading}>We Always Provide The Best Service</h1>
//   </div>
//   <div className={styled.rightServiceSec}>
//     <h3 className={styled.rightServiceHeading}>Services</h3>
//     <p className={styled.rightServiceText}>
//       While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:
//     </p>
//   </div>
// </div>

// <hr className={styled.hline} />

// <div className={styled.services}>
//   <div className={styled.serviceCard}>
//     <img src="/images/Image.png" alt="Office Cleaning" />
//     <h3>Office Cleaning</h3>
//     <p>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:</p>
//     <button className={styled.bookBtn}>Book Now ↗</button>
//   </div>

//   <div className={styled.serviceCard}>
//     <img src="/images/Image (1).png" alt="Spring Cleaning" />
//     <h3>Spring Cleaning</h3>
//     <p>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:</p>
//     <button className={`${styled.bookBtn} ${styled.greenBtn}`}>Book Now ↗</button>
//   </div>

//   <div className={styled.serviceCard}>
//     <img src="/images/Image (2).png" alt="House Cleaning" />
//     <h3>House Cleaning</h3>
//     <p>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:</p>
//     <button className={styled.bookBtn}>Book Now ↗</button>
//   </div>
// </div>
// </div>
//   );
// }

// export default Service;





import styled from "./service.module.css" 

function Service() {
  return (
    <div>
      <div className={styled.serviceHead}>
        <div className={styled.leftServiceSec}>
          <h1 className={styled.serviceHeading}>We Always Provide The Best Service</h1>
        </div>
        <div className={styled.rightServiceSec}>
          <h3 className={styled.rightServiceHeading}>Services</h3>
          <p className={styled.rightServiceText}>
            While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:
          </p>
        </div>
      </div>

      <hr className={styled.hline} />

      <div className={styled.services}>
        {/* Card 1 */}
        <div className={styled.serviceCard}>
          <img src="/images/Image.png" alt="Office Cleaning" />
          <h3>Office Cleaning</h3>
          <p>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:</p>
          <button className={styled.bookBtn}>Book Now ↗</button>
        </div>

        {/* Card 2 (ACTIVE by default) */}
        <div className={styled.serviceCard}>
          <img src="/images/Image (1).png" alt="Spring Cleaning" />
          <h3>Spring Cleaning</h3>
          <p>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:</p>
          <button className={`${styled.bookBtn} ${styled.activeBtn}`}>Book Now ↗</button>
        </div>

        {/* Card 3 */}
        <div className={styled.serviceCard}>
          <img src="/images/Image (2).png" alt="House Cleaning" />
          <h3>House Cleaning</h3>
          <p>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:</p>
          <button className={styled.bookBtn}>Book Now ↗</button>
        </div>
      </div>
    </div>
  );
}

export default Service;
