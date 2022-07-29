import React from 'react';
import {Irow} from "../../../models";

const PrintRow = ({row}:{row:Irow}) => {
    return (
        <tr key={row.id}>
            <td className="tCenter">{row.id}</td>
            <td>{row.title}</td>
            <td>{row.body.replace(/\n/g, '\\n')}</td>
        </tr>
    );
};

export default PrintRow;