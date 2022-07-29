import React from 'react';
import PrintRow from "./PrintRow";
import {Irow} from "../../../models";

const BodyTable = ({rows}:{rows:Irow[]}) => {
    return (
        <tbody>
        {rows.map(row => <PrintRow key={row.id} row={row}/>)}
        </tbody>
    );
};

export default BodyTable;