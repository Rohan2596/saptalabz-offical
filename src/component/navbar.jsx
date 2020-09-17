import  React,{Component}  from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars,FaTimes } from "react-icons/fa";

class Navbar extends Component{
    render(){
        return(
            <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <MdFingerprint  className='navbar-icon' />
                        LAVISH
                    </Link>
                </div>
            </div>

            </>
        )
    }
}
 export default Navbar