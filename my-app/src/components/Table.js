import Reach, {useState} from "react";
import {nanoid} from "nanoid";
import './ChannelTable.scss';
import data from "./mock-table-data.json"
import {BsFillPlusCircleFill} from 'react-icons/bs';

const Table = () =>{
    //Takes the data from the mock-table-data.json and sets the data into the table
    const [timeData, setTime] = useState(data);
    //This retrieves the new time data to be put into the rows
    const [addTimeData, setAddTimeData] = useState({
        timeStart:'',
        timeEnd:'',
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
            id:nanoid(),
            timeStart: addTimeData.timeStart,
            timeEnd: addTimeData.timeEnd,
            minStart: addTimeData.minStart,
            minEnd: addTimeData.minEnd,
        };

        const newTime = [...timeData, newSetTime ]
        setTime(newTime);
    };

    return(
            <div>
                <table>
                    <tbody>
                    {timedata.map((time)=> (
                        <tr>
                        <td>ID:         {time.id}</td>
                        <td>START:      {time.startTime}</td>
                        <td>END:        {time.endTime}</td>
                        <td>MIN START:  {time.minStart}</td>
                        <td>MIN END:    {time.minEnd}</td>
                     </tr>
                    ))}
                    </tbody>
                </table>
                    {/*onChange property helps React pass the event call for us */}
                    <form onSubmit={handleAddTimeDataSubmit}>
                        <input
                            type="number"
                            name="time.startTime"
                            required="required"
                            onChange={handleAddTimeData}
                            />
                        <input
                            type="number"
                            name="time.endTime"
                            required="required"
                            onChange={handleAddTimeData}
                            />
                        <input
                            type="number"
                            name="time.minStart"
                            required="required"
                            onChange={handleAddTimeData}
                            />
                        <input
                            type="number"
                            name="time.minEnd"
                            required="required"
                            onChange={handleAddTimeData}
                            />
                    </form>
                <button type="submit"><BsFillPlusCircleFill/> </button>
        </div>
    );
}

export default Table;