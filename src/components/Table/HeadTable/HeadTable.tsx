import React from 'react';
import PrintHead from "./PrintHead";
import {IHead} from "../../../models";

const HeadTable = ({sortData, head, imageSrc}: { sortData: Function, head: IHead[], imageSrc: string }) => {
    return (
        <thead className="tCenter">
        <tr>
            {head.map(item => <PrintHead key={item.id} imageSrc={imageSrc} item={item} sortData={sortData}/>)}
        </tr>
        </thead>
    );
};

export default HeadTable;