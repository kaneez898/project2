
import styled from "./navbar.module.css"
function Navbar(){
    return(
        <>
            <div className={styled.wrapper}>
            <div className={styled.container}>
             
            <div className={styled.navbar}>
                <img src="/images/Logo.png" />
            {/* <h2 className={styled.logo}></h2> */}
                <ul className={styled.list}>
                    <li>
                        <a >Home</a>
                    </li>
                    <li>
                        <a >About us</a>
                    </li><li>
                        <a >Service</a>
                    </li>
                    <li>
                        <a >Blog</a>
                    </li>
                    
                    </ul>
                    <button className={styled.navbut}>REQUEST A PROPOSAL</button>
       


                </div>
            </div>
        </div>  
        </>
    )
}
export default Navbar