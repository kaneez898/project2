
import styled from "./navbar.module.css"
function Navbar(){
    return(
        <>
            <div className={styled.wrapper}>
            <div className={styled.container}>
             
            <div className={styled.navbar}>
                <img src="/images/Logo.png" />
                <ul className={styled.list}>
                    <li>
                        <a className={styled.activeNavbar}>Home   </a>
                    </li>
                    <li>
                        <a >About us</a>
                    </li>
                    <li>
                        <a >Service</a>
                    </li>
                    <li>
                        <a >Blog</a>
                    </li>
                    
                    </ul>
                    <button className={styled.navbut}>Get a quote</button>
       


                </div>
            </div>
        </div>  
        </>
    )
}
export default Navbar