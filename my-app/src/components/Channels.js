import React from 'react';
import './Channels.scss';


function Channels() {
    return (
        <div  className="Channels">
            <div className="p">
             Selected Channels
            </div>
            <div className="ChannelSelect">
                <div className="ChannelBtn">
                <button type="button" className="SpeedBtn">Speed</button>
                <button type="button" className="ChannelBtn1">Channel A</button>
                <button type="button" className="ChannelBtn2">Channel B</button>
                <button type="button" className="ChannelBtn3">Channel C</button>
                <button type="button" className="ChannelBtn4">Channel D</button>
                </div>
                <div>
                <button type="button" onClick={dropDown} className="Dropbtn">+</button>
                    <div id="ChannelChoiceID"className="ChannelChoice">
                    <select >
                        <option>Speed</option>
                        <option>Channel A</option>
                        <option>Channel B</option>
                        <option>Channel C</option>
                        <option>Channel D</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

function disable(){
    let id = document.getElementsByClassName("disable");
    console.log(id);
}

//When the button is clicked it, this should toggle the dropdown
function dropDown(){
    let id = document.getElementsByClassName("ChannelChoice");
    console.log(id);
}

//This is to close the dropdown if the user clicks anywhere on the webpage
window.onclick = function(event) {
    if (!event.target.matches('.Dropbtn')) {
        let dropdowns = document.getElementsByClassName("ChannelChoice");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

export default Channels;