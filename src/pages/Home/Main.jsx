import styled from "./main.module.css"
function Main(){
    return(
        <div className={styled.wrapper}>
        <div className={styled.main}>
        <img src="./images/Hero Iamge.png" className={styled.mainimg} />
        <div className={styled.mainContent}>
        <p className={styled.heroText}>Quality cleaning at a fair price.</p>
        <h1 className={styled.heroTextHeading}>Specialized, efficient, and thorough cleaning services</h1>
        <p className={styled.heroTextDetail}>We provide Performing cleaning tasks using the least amount<br/> of time, energy, and money.</p>
        </div>
        <div className={styled.btns}>
            <button className={styled.GetStartBtn}>Get  Start Now</button>
            <button className={styled.ViewAllBtns}>View all Services</button>
        </div>
        </div>
        </div>
    )
}
export default Main