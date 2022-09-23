import React, {Component, useState} from "react";
import sliceData from "./mock-graph-data.json"
import "./GraphChart.scss";


const timeStamps = ["10:00","10:05","10:10","10:15","10:20","10:25","10:30","10:35","10:40","10:45","10:50","10:55","11:00"];
class GraphChart extends Component {

    getMinOfX() {
        const { data } = this.props;
        const only_x = data.map(obj => obj.x);
        const min_x = Math.min.apply(null, only_x);
        return min_x;
    };
    getMinOfY() {
        const { data } = this.props;
        const only_y = data.map(obj => obj.y);
        const min_y = Math.min.apply(null,only_y);
        return min_y;
    };
    getMaxOfX() {
        const { data } = this.props;
        const only_x = data.map(obj => obj.x);
        const max_x = Math.max.apply(null,only_x);
        return max_x;
    };
    getMaxOfY() {
        const { data } = this.props;
        const only_y = data.map(obj => obj.y);
        const max_y = Math.max.apply(null,only_y);
        return max_y;
    };

    getSvgOfX(x){
        const { widthOfSVG } = this.props;
        return((x / this.getMaxOfX()) * widthOfSVG);
    };
    getSvgOfY(y){
        const { heightOfSVG } = this.props;
        return((y / this.getMaxOfY()) * heightOfSVG);
    };

    makePath() {
        const {data, color} = this.props;
        let pathData = `M ${this.getSvgOfX(data[0].x)} ${this.getSvgOfY(data[0].y)} `

        pathData += data.map((point, i) => {
            return `L ${this.getSvgOfX(point.x)} ${this.getSvgOfY(point.y)-25}`
        })

        return (
            <path className="GraphChart_path" d={pathData} style={{stroke:color}}/>
        )
    };

    makeAxis(){
        const minOfX = this.getMinOfX();
        const maxOfX = this.getMaxOfX();
        const minOfY = this.getMinOfY();
        const maxOfY = this.getMaxOfY();

        return(
            <g className="GraphChart_axis">
            <line
                x1={this.getSvgOfX(minOfX)+20}
                y1={this.getSvgOfY(maxOfY)-20}
                x2={this.getSvgOfX(maxOfX)}
                y2={this.getSvgOfY(maxOfY)-20}
            />
                {timeStamps.map((timeIndex, index) => {
                    const lengthSvg = this.getSvgOfX(maxOfX)-this.getSvgOfX(minOfX);
                    const stepSize = (lengthSvg-10)/timeStamps.length;
                    const x = stepSize*index+20;
                    return(
                        <text x={x} y={this.getSvgOfY(maxOfY)-5}>{timeIndex}</text>
                    )
                })}
            <line
                x1={this.getSvgOfX(minOfX)+20}
                y1={this.getSvgOfY(minOfY)-20}
                x2={this.getSvgOfX(minOfX)+20}
                y2={this.getSvgOfY(maxOfY)-20}
            />

                <text x={this.getSvgOfX(minOfX)} y={this.getSvgOfY(maxOfY)-20}>{0}</text>
                <text x={this.getSvgOfX(minOfX)} y={this.getSvgOfY(minOfY)}>{1}</text>
            </g>
        )
    };

    makeSlices(){
        const minOfX = this.getMinOfX();
        const maxOfX = this.getMaxOfX();
        const minOfY = this.getMinOfY();
        const maxOfY = this.getMaxOfY();
        return(

            sliceData.map((data)=>{
                console.log(data);
                return(<rect x={this.getSvgOfX(minOfX)} y={this.getSvgOfY(minOfY)-20} height={83+'%'} width={20} stroke="grey"  fill-opacity="50%"></rect>)
            })
        )
    };


    render(){
        const {heightOfSVG , widthOfSVG} = this.props;

        return(
            <div>
            <svg viewBox={`0 0 ${widthOfSVG} ${heightOfSVG}`}>
                {this.makePath()}
                {this.makeAxis()}
            </svg>
            </div>
        )
    };
}

// Data is an empty array that will take the passed data later on
GraphChart.defaultProps = {
    data :[],
    color: '#ff4500',
    heightOfSVG: 200,
    widthOfSVG: 1000,
};


export default GraphChart;