import React,{useState} from "react";
function Navbar(){
    function Reload(){
        return(window.location.reload());
    }
    
    return(
        <>
        <div className="navbar">
            <div className ="navbar-container">
                <button onClick ={Reload} className="text-white text-3xl">Home</button>
                <div className="flex w-[140px] h-[45px] bg-gradient-to-r from-purple-700 via-violet-950 to-purple-900 rounded-lg text-gray-300 text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 justify-center">
                    <button className="text-2xl">Get Started</button>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default Navbar;
