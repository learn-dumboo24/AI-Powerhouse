import React,{useState} from "react";
function Navbar(){
    function Reload(){
        return(window.location.reload());
    }
    function Waves(){
        return (b+a);
    }
    return(
        <>
        <div className="navbar">
            <div className ="navbar-container">
                <button onClick ={Reload}>Home</button>
                <button>Get Started</button>
            </div>
        </div>
        </>
    );
};

export default Navbar;
