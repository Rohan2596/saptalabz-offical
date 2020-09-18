import  React,{Component}  from "react";
import './navbar.css'
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component{
    render(){
        return(
            <>
            <div className="navbar">
                <div className="title">
                    Saptalabz

                </div>
                <div className="menuIcon"><MenuIcon/></div>
            </div>

            </>
        )
    }
}
 export default Navbar