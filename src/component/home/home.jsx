import  React,{Component}  from "react";
class Home extends Component{
 constructor(props){
     super(props)
     this.state={
         isToggleOn:false
     }
 }
 menuclick(){
    //  this.setState(state => ({
    //      isToggleOn:!this.state.isToggleOn
    //  }));
     console.log("Menu click"+this.state.isToggleOn);
     console.log("sdfnsdnfns");
     
     
 }


    render(){
        return(
            <>
            <div className="home">
                <div className="title"  >
                    Saptalabz

                </div>
                <div className="menuIcon"  ><MenuIcon 
                style={{
                    alignItems:'center'
                    ,display:"flex"
                }}/></div>
            </div>

            </>
        )
    }
}
export default Home