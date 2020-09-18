import  React,{Component}  from "react";
import './navbar.css'
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={
            isToggleOn:false
        }
    }
    menuclick(){
        this.setState(state => ({
            isToggleOn:true
        }));
        console.log("Menu click"+this.state.isToggleOn);
        console.log("sdfnsdnfns");
        
        
    }
   
    render(){
        return(
            <>
            <div className="navbar">
                <div className="title">
                    Saptalabz

                </div>
                <div className="menuIcon" ><MenuIcon onClick={() => this.menuclick()}
                style={{
                    alignItems:'center'
                    ,display:"flex"
                }}/></div>

                <div className="menulist">
                    <span className="menuItem">
                        Home
                    </span>
                    <span className="menuItem">
                        About Us
                    </span>
                    <span className="menuItem">
                        Portfolio
                    </span>
                    <span className="menuItem">
                        Contact Us
                    </span>
                </div>
            </div>

            </>
        )
    }
}
 export default Navbar