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

    const Disabled = () =>{
        document.getElementById("disableBtn").disabled = true;
    }


    return (
        <div className="Channels">
            <div className="p">
                Selected Channels
            </div>
            <div className="ChannelSelect">
                <div className="ChannelBtn">
                    <button type="button" onClick={Disabled} className="SpeedBtn" id="disableBtn">
                        <span className="Crossbtn">X</span> Speed</button>
                    <button type="button" onClick={Disabled} className="ChannelBtn1" id="disableBtn">
                        <span className="Crossbtn">X</span> Channel A</button>
                    <button type="button" onClick={Disabled} className="ChannelBtn2" id="disableBtn">
                        <span className="Crossbtn">X</span> Channel B</button>
                    <button type="button" onClick={Disabled} className="ChannelBtn3" id="disableBtn">
                        <span className="Crossbtn">X</span> Channel C</button>
                    <button type="button" onClick={Disabled} className="ChannelBtn4" id="disableBtn">
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