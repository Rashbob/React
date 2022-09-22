import React from 'react';
import './ChannelTable.scss';
import {BsFillPlusCircleFill} from 'react-icons/bs';

export default class ChannelTable {
// The TableHTML is just the template of the table, the entryHTML function adds the new row when the button is clicked.
    static TableHTML() {
        return (`
            <table className="Table">
                <tbody className="entries">
                </tbody>
                <tbody>
                <tr>
                    <td>
                        <button type="button" className="AddEntry"><BsFillPlusCircleFill className="CircleBtn"/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        `);
    }

    static entryHTML() {
        return (`
                <tr>
                    <td>
                        <input className="id" type="number"/>
                    </td>
                    <td>
                        <input className="input input-startTime" type="number"/>
                    </td>
                    <td>
                        <input className="input input-endTime" type="number"/>
                    </td>
                    <td>
                        <input className="input input-minStart" type="number"/>%
                    </td>
                    <td>
                        <input className="input input-minEnd" type="number"/>%
                    </td>
                    <td>
                        <button type="button" className="delete-entry">&#10005;</button>
                    </td>
                </tr>
       `);
    }

    // constructor(querySelectorString) {
    //    this.root = document.querySelector(querySelectorString);
    //    console.log(document.getElementById(querySelectorString));
    //    // this. = ChannelTable.TableHTML();
    //
    //     this.root.querySelector(".AddEntry").addEventListener("click", () => {
    //         this.onClickNewEntryBtn();
    //     })
    //
    // }

    AddEntry(entry = {}) {
        this.root.querySelector(".entries").insertAdjacentHTML("beforeend", ChannelTable.entryHTML());
        onclick(console.log("The Button works"));

        const row = this.root.querySelector(".entries tr:last-of-type");

        row.querySelector(".id").value = entry.id;
        row.querySelector(".input-startTime").value = entry.startTime || "0";
        row.querySelector(".input-endTime").value = entry.endTime || "0";
        row.querySelector(".input-minStart").value = entry.minStart || "0";
        row.querySelector(".input-minEnd").value = entry.minEnd || "0";

        row.querySelector("delete.entry").addEventListener("click", e => {
            this.onClickDeleteEntryBtn(e);
        });
    }

    onClickNewEntryBtn()
    {
        this.AddEntry();
    }


    onClickDeleteEntryBtn(e) {
        e.target("tr").remove();
    }
}



