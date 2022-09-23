import React, {Component} from 'react';
import './ChannelGraph.scss';

import GraphChart from "./GraphChart";

class Graphs extends Component{
    graphArray = (total= 200) => {
        let data = []
        for (let el = 0; el < total; el ++) {
            const y = Math.floor(Math.random()*50) + 50;
            const obj = {
                x: el,
                y,
            }
            data.push(obj);
        }
        return data;
    };

    render() {
        return(
            <div className="Graph">
                <h5>Selected Channels on Graph</h5>
                <GraphChart data={this.graphArray()}/>
            </div>
        )
    }

}



export default Graphs;