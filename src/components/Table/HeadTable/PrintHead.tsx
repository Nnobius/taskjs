import React from 'react';
import {IHead} from "../../../models";

const PrintHead = ({sortData, item, imageSrc}:{sortData:Function, item:IHead, imageSrc:string}) => {
    return (
        <td width={`${item.width}`} height="54" onClick={() => sortData(`${item.link}`)}>
            <div className="headText dFlex itemsCenter">
                <span>{item.title}</span>
                <img src={imageSrc} alt="sort"/>
            </div>
        </td>
    );
};

export default PrintHead;