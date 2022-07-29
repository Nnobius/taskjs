import React from 'react';
import {Link} from "react-router-dom";
import PrintPagesList from "./PrintPagesList";
import "./BottomMenu.scss"

const BottomMenu = ({onPrevPage, onNextPage, setSelectPage, pages, selectPage}:
                        {onPrevPage:React.MouseEventHandler, onNextPage:React.MouseEventHandler, setSelectPage:Function, pages:number[], selectPage:number}) => {
    return (
        <div className="dFlex jBetween">
            <Link to={`/${selectPage - 1}`}>
                <div className="btnPageList" onClick={onPrevPage}>Назад</div>
            </Link>

            <div className="pagesList">
                {
                    pages.map(page =>
                        <PrintPagesList key={page} page={page} setSelectPage={setSelectPage} selectPage={selectPage}/>
                    )
                }
            </div>

            <Link to={`/${selectPage + 1}`}>
                <div className="btnPageList" onClick={onNextPage}>Далее</div>
            </Link>
        </div>
    );
};

export default BottomMenu;