import React, {useState} from "react";
import './Table.scss';
import data from "./mock-table-data.json"

//x will be the id since mock value starts at 3
let x = 4;


const Table = () =>{
    //Takes the data from the mock-table-data.json and sets the data into the table
    const [timeData, setTime] = useState(data);
    //This retrieves the new time data to be put into the rows
    const [addTimeData, setAddTimeData] = useState({
        startTime:'10:00',
        endTime:'11:00',
        minStart:'10%',
        minEnd:'90%',
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


        //timeData is previous data in the table, and so we append new row with newSetTime
        const newTime = [...timeData, newSetTime ]
        setTime(newTime);

        //value of x is increased to be an increasing id value
        x++;
    };

    const handleTimeChange = (event,id,fieldName) =>{
        event.preventDefault();

        const fieldValue = event.target.value;
        // Clone variable holds the initial data while we edit data
        const clone = [...timeData];
        const index = timeData.findIndex((time) => time.id === id);

        let initial = clone[index];
        // We are editing the initial value here to the new values in the input fields
        initial[fieldName] = fieldValue;
        // Add new data back to the initial data to complete the edit
        clone[index] = initial;
        //Setting it back into the table as the same ID and with changed data
        setTime([...clone]);
    };

    const handleDeleteTime = (onDelete) =>{
        const newTimeData = [...timeData];

        const index = timeData.findIndex((time)=> time.id === onDelete)

        newTimeData.splice(index, 1);

        setTime(newTimeData);
    };

    return(
            <div className="tableStyles">
                <table>
                    {/*onChange property helps React pass the event call for us */}
                    <tbody>
                    {timeData.map((time)=> (
                        <tr>
                        <td>ID:
                            <input value={time.id} type="number" onChange={(event)=>handleTimeChange(event,time.id,"id")} />
                        </td>
                        <td>START:
                            <input value={time.startTime} type="" onChange={(event)=>handleTimeChange(event,time.id,"startTime")}/>
                        </td>
                        <td>END:
                            <input value={time.endTime} type="" onChange={(event)=>handleTimeChange(event,time.id,"endTime")}/>
                        </td>
                        <td>MIN START:
                            <input value={time.minStart} type="" onChange={(event)=>handleTimeChange(event,time.id,"minStart")}/>
                        </td>
                        <td>MIN END:
                            <input value={time.minEnd} type="" onChange={(event)=>handleTimeChange(event,time.id,"minEnd")}/>
                        </td>
                        <td><button className="tableButton" type={"button"} onClick={(event)=>handleDeleteTime(time.id)}>X</button></td>
                     </tr>
                    ))}
                    </tbody>
                </table>
                    <form onSubmit={handleAddTimeDataSubmit}>
                        <input
                            className="tableInputsID"
                            type="time"
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
                        <button className="formButton" type="submit"> + </button>
                    </form>
        </div>
    );
}

export default Table;