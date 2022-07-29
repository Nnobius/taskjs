import React from 'react';
import HeadTable from "./HeadTable/HeadTable";
import BodyTable from "./BodyTable/BodyTable";
import {Irow, IHead} from "../../models";
import "./Table.scss"

const Table = ({rows, sortData, head, imageSrc}:{rows:Irow[], sortData:Function, head:IHead[], imageSrc:string}) => {
    return (
        <table>
            <HeadTable imageSrc={imageSrc} head={head} sortData={sortData}/>
            <BodyTable rows={rows}/>
        </table>
    );
};

export default Table;