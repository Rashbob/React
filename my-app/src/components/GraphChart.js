import React, {Component} from "react";
import "./GraphChart.scss";

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
            return `L ${this.getSvgOfX(point.x)} ${this.getSvgOfY(point.y)}`
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
                x1={this.getSvgOfX(minOfX)}
                y1={this.getSvgOfY(minOfY)}
                x2={this.getSvgOfX(maxOfX)}
                y2={this.getSvgOfY(maxOfY)}
            />
            <line
                x1={this.getSvgOfX(minOfX)}
                y1={this.getSvgOfY(minOfY)}
                x2={this.getSvgOfX(maxOfX)}
                y2={this.getSvgOfY(maxOfY)}
            />
            </g>
        )
    };

    render(){
        const {heightOfSVG , widthOfSVG} = this.props;

        return(
            <svg viewBox={`0 0 ${widthOfSVG} ${heightOfSVG}`}>
                {this.makePath()}
                {this.makeAxis()}
            </svg>
        )
    };
}

// Data is an empty array that will take the passed data later on
GraphChart.defaultProps = {
    data :[],
    color: '#ff4500',
    svgHeight: 200,
    svgWidth: 600,
};


export default GraphChart;