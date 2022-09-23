import React, {Component} from 'react';
import './ChannelGraph.scss';

import GraphChart from "./GraphChart";

class Graphs extends Component{
    graphArray = (total= 10) => {
        let data = []
        for (let el = 0; el < total; el ++) {
            const y =  50;
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
                <div>
                    Selected Channels on Graph
                </div>
                <GraphChart data={this.graphArray()}/>
            </div>
        )
    }

}



export default Graphs;