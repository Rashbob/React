import * as React from 'react';
import './Channels.scss';
import * as PropTypes from "prop-types";



const Channels = () => {

    const dropDown = ()=> {
        document.getElementById("dropDown").classList.toggle("show");
    }

    window.onclick= function(event){
        if(!event.target.matches('.Dropbtn')){
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for(i = 0; i< dropdowns.length; i++)
            {
                let openDropdown = dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    const Disabled1 = () =>{
        console.log("button is disabled")
        document.getElementById("disableBtn1").disabled = true;
    }
    const Disabled2 = () =>{
        console.log("button is disabled")
        document.getElementById("disableBtn2").disabled = true;
    }
    const Disabled3 = () =>{
        console.log("button is disabled")
        document.getElementById("disableBtn3").disabled = true;
    }
    const Disabled4 = () =>{
        console.log("button is disabled")
        document.getElementById("disableBtn4").disabled = true;
    }
    const Disabled5 = () =>{
        console.log("button is disabled")
        document.getElementById("disableBtn5").disabled = true;
    }


    return (
        <div className="Channels">
            <div className="p">
                Selected Channels
            </div>
            <div className="ChannelSelect">
                <div className="ChannelBtn">
                    <button type="button" className="SpeedBtn" id="disableBtn1" onClick={Disabled1} >
                        <span className="Crossbtn">X</span> Speed</button>
                    <button type="button" className="ChannelBtn1" id="disableBtn2" onClick={Disabled2} >
                        <span className="Crossbtn">X</span> Channel A</button>
                    <button type="button" className="ChannelBtn2" id="disableBtn3" onClick={Disabled3} >
                        <span className="Crossbtn">X</span> Channel B</button>
                    <button type="button" className="ChannelBtn3" id="disableBtn4" onClick={Disabled4} >
                        <span className="Crossbtn">X</span> Channel C </button>
                    <button type="button" className="ChannelBtn4" id="disableBtn5"onClick={Disabled5} >
                        <span className="Crossbtn">X</span> Channel D</button>
                </div>
                <div>
                    <button type="button" onClick={dropDown} className="Dropbtn">+</button>
                    <div id="dropDown" className="DropDownContent">
                        <a href="#">Speed</a>
                        <a href="#">Channel A</a>
                        <a href="#">Channel B</a>
                        <a href="#">Channel C</a>
                        <a href="#">Channel D</a>
                    </div>
                </div>
            </div>
        </div>
    );





}
export default Channels;