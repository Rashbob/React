import React, {useState} from "react";
import './ChannelTable.scss';
import data from "./mock-table-data.json"
import {BsFillPlusCircleFill} from 'react-icons/bs';

//x will be the id since mock value starts at 3
let x = 4;


const Table = () =>{
    //Takes the data from the mock-table-data.json and sets the data into the table
    const [timeData, setTime] = useState(data);
    //This retrieves the new time data to be put into the rows
    const [addTimeData, setAddTimeData] = useState({
        startTime:'',
        endTime:'',
        minStart:'',
        minEnd:'',
    })
    //This adds the new time data to a new row
    const handleAddTimeData = (event) => {
        event.preventDefault();
        //Gets the name attribute from the input fields
        const fieldName = event.target.getAttribute('name');
        //Variable to hold the data from input fields
        const fieldValue = event.target.value;
        //Appends the data to the previous form TimeData
        const newTimeData = {...addTimeData};
        //Assigns the respective attributes their values
        newTimeData[fieldName] = fieldValue;
        //This sets the TimeData into the table
        setAddTimeData(newTimeData)
    };

    const handleAddTimeDataSubmit = (event) =>{
        event.preventDefault();

        const newSetTime = {
            id: x,
            startTime: addTimeData.startTime,
            endTime: addTimeData.endTime,
            minStart: addTimeData.minStart,
            minEnd: addTimeData.minEnd,
        };



        const newTime = [...timeData, newSetTime ]
        setTime(newTime);

        //value of x is increased to be an increasing id value
        x++;
    };

    const handleDeleteTime = (onDelete) =>{
        const newTimeData = [...timeData];

        const index = timeData.findIndex((time)=> time.id === onDelete)

        newTimeData.splice(index, 1);

        setTime(newTimeData);
    }

    return(
            <div>
                <table>
                    <tbody>
                    {timeData.map((time)=> (
                        <tr>
                        <td>ID:      <input value={time.id} type="number"/>   </td>
                        <td>START:     <input value={time.startTime} type="number"/> </td>
                        <td>END:       <input value={time.endTime} type="number"/> </td>
                        <td>MIN START: <input value={time.minStart} type="number"/>  %</td>
                        <td>MIN END:   <input value={time.minEnd} type="number"/>  %</td>
                        <td><button type={"button"} onClick={(event)=>handleDeleteTime(time.id)}>X</button></td>
                     </tr>
                    ))}
                    </tbody>
                </table>
                    {/*onChange property helps React pass the event call for us */}
                    <form onSubmit={handleAddTimeDataSubmit}>
                        <input
                            className="tableInputs"
                            type="number"
                            name="startTime"
                            onChange={handleAddTimeData}
                            />
                        <input
                            className="tableInputs"
                            type="number"
                            name="endTime"
                            onChange={handleAddTimeData}
                            />
                        <input
                            className="tableInputs"
                            type="number"
                            name="minStart"
                            onChange={handleAddTimeData}
                            />
                        <input
                            className="tableInputs"
                            type="number"
                            name="minEnd"
                            onChange={handleAddTimeData}
                            />
                        <button type="submit"><BsFillPlusCircleFill/> </button>
                    </form>
        </div>
    );
}

export default Table;